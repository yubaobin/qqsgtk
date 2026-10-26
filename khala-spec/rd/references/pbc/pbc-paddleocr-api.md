---
id: pbc-paddleocr-api-1.0
name: PaddleOCR 识别服务能力集
type: API
version: 1.0.0
status: active
owner: 待人工确认
tags: [OCR, 文字识别, PaddleOCR, 图像识别, 任务队列]
language: null
endpoint: null
sdk_class: null
sdk_signature: null
sdk_init: null
capabilities: 5
---

# 能力描述
聚合 5 项能力（API 5 / SDK 0）。基于 PaddleOCR（PP-OCRv6 模型）的 HTTP 识别服务，提供异步任务提交/轮询与同步识别两种 OCR 模式，支持图片与 PDF 文件，返回逐行识别文本、置信度与行级坐标框，并生成 OCR 可视化标注图（异步落盘下载、同步 base64 内嵌）。

> **接口实际连接地址（Base URL）**：`http://192.168.81.176:32187`。所有能力接口均通过该地址访问；本文档各能力章节中的接口路径均以此为前缀。

> **推荐优先使用同步模式接口**（`POST /api/v2/ocr`）：单次请求直接返回识别结果，无需任务提交与轮询；仅在文件较大、识别耗时可能超过客户端超时等场景下再使用异步模式。

## 能力索引
| # | 能力名称 | 类型 | 端点 / 签名 | 类别 |
|---|---------|------|------------|------|
| 1 | 提交OCR任务（异步） | API | POST /api/v2/ocr/jobs | 任务提交 |
| 2 | 查询OCR任务状态 | API | GET /api/v2/ocr/jobs/<job_id> | 任务查询 |
| 3 | 同步OCR识别 | API | POST /api/v2/ocr | 识别 |
| 4 | OCR结果文件下载 | API | GET /static/results/<job_id>/<filename> | 文件下载 |
| 5 | 健康检查 | API | GET /health | 运维 |

## 适用场景
- 图片/PDF 文档文字提取，需逐行置信度与坐标用于业务后处理（低置信行转人工复核）
- 大文件或批量场景：异步提交任务后轮询状态，经 URL 下载结果 JSONL 与标注图
- 轻量场景：同步接口单次请求直接获取识别结果（标注图可 base64 内嵌）
- 业务系统集成前的服务存活探测

---

# 1. 提交OCR任务（异步）

# 能力描述
提交一个异步 OCR 任务，支持本地文件上传（multipart）或文件 URL 下载两种输入模式。任务在后台线程执行，客户端通过「查询OCR任务状态」接口轮询进度，识别结果（JSONL 与逐页标注图）落盘后经静态文件服务下载。

> **推荐优先使用同步模式接口**（`POST /api/v2/ocr`），仅在文件较大、识别耗时可能超过客户端超时等场景下使用本异步接口。

## 适用场景
- 大文件 / 多页 PDF 识别，避免客户端长阻塞与请求超时
- 批量文档处理流水线，提交后异步消费结果

## 请求参数

### API 请求体 (JSON)
```json
{
  "fileUrl": "string (optional，与 multipart 字段 file 二选一)"
}
```

> multipart/form-data 模式：字段 `file`（file，必填二选一）为待识别文件，支持 `.jpg` `.jpeg` `.png` `.bmp` `.tiff` `.tif` `.webp` `.pdf`。
> 客户端携带的 `model` / `optionalPayload` 字段会被统一忽略（服务端引擎固定配置，不支持按请求切换模型）。

## 响应参数

### API 响应体 (JSON)
```json
{
  "code": "integer",
  "msg": "string",
  "data": {
    "jobId": "string (32位十六进制任务ID)"
  }
}
```

## 调用示例

### 请求示例
```bash
# 文件上传模式
curl -X POST http://192.168.81.176:32187/api/v2/ocr/jobs \
  -F "file=@/path/to/document.pdf"

# URL 模式
curl -X POST http://192.168.81.176:32187/api/v2/ocr/jobs \
  -H "Content-Type: application/json" \
  -d '{"fileUrl": "http://intranet.example.com/scan.jpg"}'
```

### 响应示例
```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "jobId": "3f2a9c8e7b1d4f60a5c3e8b2d9f17a40"
  }
}
```

## 注意事项
- `file`（multipart）与 `fileUrl`（JSON）必须提供其一，否则返回 400 `"No file or fileUrl provided"`
- URL 模式下载失败返回 400 `"Download file failed: ..."`；URL 无识别后缀时默认保存为 `.jpg`
- 任务状态仅保存在内存中，服务重启后任务不可查询；结果文件默认 3600 秒（环境变量 `JOB_TTL_SECONDS` 可覆盖）后清理
- 内网演示服务：不做鉴权，URL 下载不做 SSRF 校验
- 模型为全局固定配置（PP-OCRv6），请求中的 `model` 字段无效

## 更新记录
| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-09-10 | 初始版本，由 pbc-extractor 自动生成 |

---

# 2. 查询OCR任务状态

# 能力描述
根据任务 ID 查询异步 OCR 任务的当前状态与进度数据。任务经历 `pending` → `running` → `done` / `failed` 状态流转；`done` 后返回结果文件的下载 URL。

## 适用场景
- 异步任务提交后的进度轮询（总页数 / 已识别页数 / 起止时间）
- 识别完成后获取 `jsonUrl` 下载结构化结果

## 请求参数

### API 请求体 (JSON)
```json
{}
```

> 本接口为 GET 请求，参数位于 URL 路径：`job_id`（string，必填，任务ID）。

## 响应参数

### API 响应体 (JSON)
```json
{
  "code": "integer",
  "msg": "string",
  "data": {
    "state": "string (pending | running | done | failed)",
    "updatedAt": "number (Unix 时间戳，秒)",
    "data": {
      "jobId": "string",
      "model": "string (固定 PP-OCRv6)",
      "extractProgress": {
        "totalPages": "integer",
        "extractedPages": "integer",
        "startTime": "integer (毫秒时间戳，进入 running 时写入)",
        "endTime": "integer (毫秒时间戳，完成时写入)"
      },
      "resultUrl": {
        "jsonUrl": "string (完整 URL，仅 done 状态返回)"
      },
      "errorMsg": "string (仅 failed 状态返回)"
    }
  }
}
```

## 调用示例

### 请求示例
```bash
curl http://192.168.81.176:32187/api/v2/ocr/jobs/3f2a9c8e7b1d4f60a5c3e8b2d9f17a40
```

### 响应示例
```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "state": "done",
    "updatedAt": 1757462400.123,
    "data": {
      "jobId": "3f2a9c8e7b1d4f60a5c3e8b2d9f17a40",
      "model": "PP-OCRv6",
      "extractProgress": {
        "totalPages": 3,
        "extractedPages": 3,
        "startTime": 1757462385000,
        "endTime": 1757462400000
      },
      "resultUrl": {
        "jsonUrl": "http://192.168.81.176:32187/static/results/3f2a9c8e7b1d4f60a5c3e8b2d9f17a40/result.jsonl"
      }
    }
  }
}
```

## 注意事项
- 任务不存在（含服务重启后内存丢失）返回 404 `"Job not found"`
- `jsonUrl` 的 host 取自提交请求时的服务地址（`request.host_url`），通过实际连接地址 `http://192.168.81.176:32187` 访问时即返回 `http://192.168.81.176:32187/static/results/...`
- 任务完成后结果文件受 TTL 清理（默认 3600 秒），过期后下载链接失效

## 更新记录
| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-09-10 | 初始版本，由 pbc-extractor 自动生成 |

---

# 3. 同步OCR识别

# 能力描述
同步执行 OCR 识别，请求内直接返回全部识别结果。无任务状态、轮询与结果落盘；逐页标注图可选择以 base64 内嵌返回，行级明细（文本、置信度、坐标框）可选择输出。

## 适用场景
- 单页/小文件识别，需要即时拿到结果
- 需要在响应中直接内嵌标注图预览（`includeImage=true`）
- 业务侧需要行级坐标框做版面定位与低置信行筛选（`includeDetails=true`，默认开启）

## 请求参数

### API 请求体 (JSON)
```json
{
  "fileUrl": "string (optional，与 multipart 字段 file 二选一)",
  "includeImage": "boolean (optional，默认 false，是否在响应中内嵌 base64 标注图)",
  "includeDetails": "boolean (optional，默认 true，是否输出行级明细 lines)"
}
```

> multipart/form-data 模式：字段 `file`（file，必填二选一）为待识别文件，支持 `.jpg` `.jpeg` `.png` `.bmp` `.tiff` `.tif` `.webp` `.pdf`；`includeImage` / `includeDetails` 也可通过 form 字段传递。
> 布尔参数兼容 JSON 布尔与字符串（`"true"` / `"1"` / `"yes"` 判真）。

## 响应参数

### API 响应体 (JSON)
```json
{
  "code": "integer",
  "msg": "string",
  "data": {
    "model": "string (固定 PP-OCRv6)",
    "elapsedMs": "integer (识别耗时，毫秒)",
    "pages": [
      {
        "pageIndex": "integer (页码，从 0 开始)",
        "texts": "array<string> (逐行识别文本)",
        "scores": "array<number> (逐行置信度，0~1)",
        "lines": "array (optional，includeDetails=true 时输出) [{ \"text\": string, \"score\": number, \"box\": [x1, y1, x2, y2] (整数像素坐标) }]",
        "ocrImage": "string (optional，includeImage=true 时输出，data:image/jpeg;base64,...)"
      }
    ]
  }
}
```

## 调用示例

### 请求示例
```bash
# 文件上传模式（含标注图）
curl -X POST http://192.168.81.176:32187/api/v2/ocr \
  -F "file=@/path/to/invoice.jpg" \
  -F "includeImage=true"

# URL 模式（仅文本与行级明细）
curl -X POST http://192.168.81.176:32187/api/v2/ocr \
  -H "Content-Type: application/json" \
  -d '{"fileUrl": "http://intranet.example.com/scan.jpg", "includeDetails": true}'
```

### 响应示例
```json
{
  "code": 200,
  "msg": "success",
  "data": {
    "model": "PP-OCRv6",
    "elapsedMs": 1820,
    "pages": [
      {
        "pageIndex": 0,
        "texts": ["发票代码", "12345678"],
        "scores": [0.9987, 0.9921],
        "lines": [
          { "text": "发票代码", "score": 0.9987, "box": [120, 88, 260, 110] },
          { "text": "12345678", "score": 0.9921, "box": [280, 88, 400, 110] }
        ]
      }
    ]
  }
}
```

## 注意事项
- `file`（multipart）与 `fileUrl` 必须提供其一，否则返回 400 `"No file or fileUrl provided"`；URL 下载失败返回 400
- 识别过程抛出异常返回 500 `"OCR failed: ..."`
- `includeImage=true` 会显著增大响应体积（base64 标注图），默认关闭以省流量
- 标注图渲染失败时自动降级：回退原图，仍失败则跳过该页 `ocrImage` 字段
- 同步接口耗时受文件页数影响，模型已在服务启动时预热
- 内网演示服务：不做鉴权，URL 下载不做 SSRF 校验

## 更新记录
| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-09-10 | 初始版本，由 pbc-extractor 自动生成 |

---

# 4. OCR结果文件下载

# 能力描述
静态文件服务，提供异步任务结果目录（`static/results/<job_id>/`）下的文件下载，包括逐页标注图 `img_output_<pageIndex>.jpg` 与结构化结果 `result.jsonl`。

## 适用场景
- 任务完成后经 `jsonUrl` 下载 OCR 结构化结果（JSONL 格式）
- 下载逐页 OCR 可视化标注图用于人工复核

## 请求参数

### API 请求体 (JSON)
```json
{}
```

> 本接口为 GET 请求，参数位于 URL 路径：
> - `job_id`（string，必填，任务ID）
> - `filename`（string，必填，文件名，如 `result.jsonl`、`img_output_0.jpg`）

## 响应参数

### API 响应体 (JSON)
```
文件二进制流（图片为 image/jpeg，JSONL 为文本），由浏览器/客户端按文件内容处理。
result.jsonl 内容格式（单行 JSON）：
{
  "result": {
    "ocrResults": [
      {
        "ocrImage": "string (标注图相对路径 /static/results/<job_id>/img_output_<pageIndex>.jpg)",
        "texts": "array<string> (逐行识别文本)",
        "scores": "array<number> (逐行置信度)",
        "pageIndex": "integer (页码，从 0 开始)"
      }
    ]
  }
}
```

## 调用示例

### 请求示例
```bash
curl -O http://192.168.81.176:32187/static/results/3f2a9c8e7b1d4f60a5c3e8b2d9f17a40/result.jsonl
curl -O http://192.168.81.176:32187/static/results/3f2a9c8e7b1d4f60a5c3e8b2d9f17a40/img_output_0.jpg
```

### 响应示例
```json
{"result": {"ocrResults": [{"ocrImage": "/static/results/3f2a9c8e7b1d4f60a5c3e8b2d9f17a40/img_output_0.jpg", "texts": ["发票代码", "12345678"], "scores": [0.9987, 0.9921], "pageIndex": 0}]}}
```

## 注意事项
- 文件不存在（任务未完成 / 已被 TTL 清理 / 任务失败被删除）返回 404
- 结果目录由后台线程每日清理一次（`CLEANUP_INTERVAL_SECONDS=86400`），终态任务超过 TTL（默认 3600 秒，环境变量 `JOB_TTL_SECONDS` 可覆盖）即删除
- 失败任务的半成品结果目录会被立即删除
- 内网演示服务：不做鉴权，任何知道任务 ID 的调用方均可下载

## 更新记录
| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-09-10 | 初始版本，由 pbc-extractor 自动生成 |

---

# 5. 健康检查

# 能力描述
服务存活探测接口，返回服务运行状态。

## 适用场景
- 负载均衡 / 容器编排（K8s liveness/readiness）探活
- 业务集成前的连通性验证

## 请求参数

### API 请求体 (JSON)
```json
{}
```

> 本接口为 GET 请求，无参数。

## 响应参数

### API 响应体 (JSON)
```json
{
  "code": "integer",
  "msg": "string"
}
```

## 调用示例

### 请求示例
```bash
curl http://192.168.81.176:32187/health
```

### 响应示例
```json
{
  "code": 200,
  "msg": "PaddleOCR service is running"
}
```

## 注意事项
- 仅探测进程存活，不检查 OCR 引擎可用性（引擎为懒加载，理论上探活通过不代表模型已就绪；当前版本启动时会预热模型）

## 更新记录
| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-09-10 | 初始版本，由 pbc-extractor 自动生成 |

---

# 更新记录
| 版本 | 日期 | 说明 |
|------|------|------|
| 1.0.0 | 2026-09-10 | 初始版本，由 pbc-extractor 自动生成 |
