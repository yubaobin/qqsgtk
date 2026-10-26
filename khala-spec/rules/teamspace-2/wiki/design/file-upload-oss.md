# 文件上传与对象存储规范

本文档规定 Khala 项目的文件上传安全策略、对象存储使用规范及前端直传方案。

---

## 一、核心原则

- **禁止本地存储**：所有文件必须上传至对象存储（OSS/S3）
- **最小权限原则**：文件访问 URL 带时效性和签名
- **防篡改校验**：上传前校验文件类型、大小、内容
- **敏感文件隔离**：涉密文件单独存储桶，加强访问控制

---

## 二、上传流程

### 2.1 服务端代理上传（小文件 < 10MB）

```
前端 → 上传文件 → 后端接收 → 校验 → 上传至 OSS → 返回 URL
```

```java
@RestController
@RequestMapping("/api/v1/files")
public class FileController {

    @Autowired
    private OssService ossService;

    @PostMapping("/upload")
    public Result<FileUploadVO> upload(@RequestParam("file") MultipartFile file) {
        // 1. 基础校验
        FileUploadVO vo = ossService.upload(file);
        return Result.ok(vo);
    }
}
```

### 2.2 前端直传（大文件 >= 10MB）

```
前端 → 请求上传凭证 → 后端生成 STS 临时凭证 → 前端直传 OSS → 前端通知后端上传完成
```

```java
@GetMapping("/upload-token")
public Result<UploadTokenVO> getUploadToken(@RequestParam String fileName,
                                            @RequestParam Long fileSize) {
    // 校验文件名和大小
    validateFile(fileName, fileSize);

    // 生成 STS 临时凭证（有效期 15 分钟）
    UploadTokenVO token = ossService.generateStsToken(fileName);
    return Result.ok(token);
}
```

---

## 三、安全校验

### 3.1 文件名安全

```java
public class FileSecurityUtil {

    private static final Pattern SAFE_NAME = Pattern.compile("^[a-zA-Z0-9_\\-\\.]+$");
    private static final String[] DANGEROUS_EXT = {
        "exe", "bat", "sh", "jsp", "php", "asp", "py", "rb", "jar", "war"
    };

    public static String sanitizeFileName(String fileName) {
        if (fileName == null || fileName.isEmpty()) {
            throw new ParamException("文件名不能为空");
        }

        // 去除路径遍历字符
        String clean = fileName.replaceAll("[\\\\/:*?\"<>|]", "_");

        // 获取扩展名
        String ext = getExtension(clean).toLowerCase();

        // 禁止危险扩展名
        if (Arrays.asList(DANGEROUS_EXT).contains(ext)) {
            throw new ParamException("不允许上传该类型文件: " + ext);
        }

        // 生成安全文件名
        String uuid = UUID.randomUUID().toString().replace("-", "");
        return uuid + "." + ext;
    }
}
```

### 3.2 文件内容校验

| 校验项 | 规则 | 说明 |
|--------|------|------|
| **大小限制** | 单文件 <= 100MB | 超过需分片上传 |
| **MIME 类型** | 白名单校验 | 禁止 `application/x-msdownload` 等 |
| **魔数校验** | 读取文件头确认真实类型 | 防止篡改扩展名 |
| **图片校验** | 解析图片尺寸确认合法性 | 防止图片炸弹 |
| **病毒扫描** | 集成 ClamAV / 云扫描 | 敏感场景必须 |

### 3.3 魔数校验示例

```java
public class MagicNumberUtil {

    private static final Map<String, byte[]> MAGIC_NUMBERS = Map.of(
        "jpg", new byte[]{(byte) 0xFF, (byte) 0xD8, (byte) 0xFF},
        "png", new byte[]{(byte) 0x89, 0x50, 0x4E, 0x47},
        "pdf", new byte[]{0x25, 0x50, 0x44, 0x46},
        "xlsx", new byte[]{0x50, 0x4B, 0x03, 0x04}
    );

    public static boolean isValidType(InputStream is, String ext) throws IOException {
        byte[] header = new byte[8];
        is.read(header);
        byte[] magic = MAGIC_NUMBERS.get(ext.toLowerCase());
        if (magic == null) return false;

        for (int i = 0; i < magic.length; i++) {
            if (header[i] != magic[i]) return false;
        }
        return true;
    }
}
```

---

## 四、对象存储规范

### 4.1 Bucket 划分

| Bucket | 用途 | 访问权限 | 生命周期 |
|--------|------|----------|----------|
| `khala-public` | 公开资源（头像、Logo） | 公共读 | 永久 |
| `khala-private` | 私有文件（合同、报表） | 私有 | 30 天转归档 |
| `khala-temp` | 临时文件（导入模板） | 私有 | 7 天自动删除 |
| `khala-backup` | 数据备份 | 私有 | 90 天转冷归档 |

### 4.2 存储路径规范

```
{tenantId}/{bizType}/{date}/{uuid}.{ext}

示例：
100/task/20240115/a1b2c3d4e5f6.jpg
100/contract/20240115/x7y8z9w0.pdf
```

### 4.3 预签名 URL

```java
@Service
public class OssService {

    @Autowired
    private OSS ossClient;

    /**
     * 生成私有文件临时访问链接
     */
    public String generatePresignedUrl(String objectKey, int expireMinutes) {
        Date expiration = new Date(System.currentTimeMillis() + expireMinutes * 60 * 1000);
        URL url = ossClient.generatePresignedUrl("khala-private", objectKey, expiration);
        return url.toString();
    }
}
```

| 场景 | 有效期 |
|------|--------|
| 前端预览 | 5 分钟 |
| 下载链接 | 15 分钟 |
| 第三方回调 | 1 小时 |

---

## 五、分片上传

### 5.1 大文件分片

```java
@Service
public class MultipartUploadService {

    public InitiateMultipartUploadResult initUpload(String fileName, long fileSize) {
        // 校验
        if (fileSize > 5 * 1024 * 1024 * 1024L) {
            throw new BizException("单文件不能超过 5GB");
        }

        String objectKey = buildObjectKey(fileName);
        return ossClient.initiateMultipartUpload(
            new InitiateMultipartUploadRequest("khala-private", objectKey)
        );
    }

    public UploadPartResult uploadPart(String uploadId, String objectKey,
                                       int partNumber, InputStream inputStream, long partSize) {
        UploadPartRequest request = new UploadPartRequest();
        request.setBucketName("khala-private");
        request.setKey(objectKey);
        request.setUploadId(uploadId);
        request.setPartNumber(partNumber);
        request.setInputStream(inputStream);
        request.setPartSize(partSize);
        return ossClient.uploadPart(request);
    }

    public CompleteMultipartUploadResult completeUpload(
            String uploadId, String objectKey, List<PartETag> partETags) {
        CompleteMultipartUploadRequest request = new CompleteMultipartUploadRequest(
            "khala-private", objectKey, uploadId, partETags
        );
        return ossClient.completeMultipartUpload(request);
    }
}
```

### 5.2 分片大小建议

| 文件大小 | 分片大小 | 说明 |
|----------|----------|------|
| 10MB ~ 100MB | 5MB | 单分片上传 |
| 100MB ~ 1GB | 10MB | 并行分片上传 |
| 1GB ~ 5GB | 50MB | 并行分片上传 |

---

## 六、安全加固

### 6.1 Bucket 策略

```json
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Deny",
      "Principal": "*",
      "Action": "oss:*",
      "Resource": [
        "acs:oss:*:*:khala-private",
        "acs:oss:*:*:khala-private/*"
      ],
      "Condition": {
        "Bool": {
          "acs:SecureTransport": "false"
        }
      }
    }
  ]
}
```

### 6.2 防盗链

```
Referer 白名单：*.khala.io
空 Referer：禁止
```

### 6.3 CORS 配置

```xml
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>https://app.khala.io</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedHeader>*</AllowedHeader>
    <MaxAgeSeconds>300</MaxAgeSeconds>
  </CORSRule>
</CORSConfiguration>
```

---

## 七、禁止事项

1. **禁止将用户上传文件保存到服务器本地磁盘**
2. **禁止根据用户提供的文件名直接存储**，必须生成安全文件名
3. **禁止公开 Bucket 存放敏感文件**
4. **禁止生成无过期时间的预签名 URL**
5. **禁止信任前端传递的 MIME 类型**，必须服务端校验
