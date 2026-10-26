# API 接口规范

> 本文件定义 RESTful API 设计规范和接口开发要求

---

## 1. RESTful 设计

### 1.1 接口命名

| 操作 | 方法 | 路径 | 说明 |
|------|------|------|------|
| 创建 | POST | `/create` | 创建单个资源 |
| 更新 | POST | `/update` | 更新资源 |
| 删除 | POST | `/delete` | 删除资源（支持批量） |
| 查询单个 | GET | `/get` | 根据 ID 查询 |
| 分页查询 | POST | `/page` | 分页查询 |
| 列表查询 | GET | `/list-all` | 全量列表 |
| 导出 | POST | `/export` | 导出数据 |

**注意：** Khala 约定删除和分页使用 POST 方法（便于传递复杂参数）

### 1.2 URL 命名规范

```
# 正确
/khala-sys-user/create
/khala-sys-user/page
/order-detail/get

# 错误
/KhalaSysUser/create       // 大写
/khala_sys_user/create     // 下划线
/user/get                  // 缺少模块前缀
```

**规范：**
- 全小写
- 多单词用连字符 `-` 连接
- 格式：`{module}-{feature}/{action}`

---

## 2. 统一响应格式

### 2.1 成功响应

```json
{
  "code": 0,
  "message": "success",
  "data": { ... }
}
```

### 2.2 失败响应

```json
{
  "code": 1001,
  "message": "用户名已存在",
  "data": null
}
```

### 2.3 使用方式

```java
// 成功响应（带数据）
return CommonResult.success(data);

// 成功响应（无数据）
return CommonResult.success();

// 失败响应
return CommonResult.error("用户名已存在");

// 失败响应（带错误码）
return CommonResult.error(1001, "用户名已存在");
```

---

## 3. 请求参数规范

### 3.1 创建请求

```java
@Data
public class XxxCreateReq {
    @NotBlank(message = "名称不能为空")
    @Size(min = 2, max = 50, message = "名称长度 2-50 位")
    @Schema(description = "名称")
    private String name;

    @NotNull(message = "类型不能为空")
    @Schema(description = "类型")
    private Integer type;
}
```

### 3.2 更新请求

```java
@Data
public class XxxUpdateReq {
    @NotNull(message = "ID 不能为空")
    @Schema(description = "ID")
    private Long id;

    @Schema(description = "名称")
    private String name;

    @Schema(description = "类型")
    private Integer type;
}
```

### 3.3 分页请求

```java
@Data
public class XxxPageReq extends PageParam {
    @Schema(description = "名称（模糊查询）")
    private String name;

    @Schema(description = "类型")
    private Integer type;

    @Schema(description = "状态")
    private Integer status;
}
```

**说明：** 继承 `PageParam` 自动获得 `page`、`size`、`sorts` 字段。

### 3.4 GET 请求参数

```java
@GetMapping("/get")
@Operation(summary = "查询详情")
public CommonResult<XxxVo> get(
    @RequestParam Long id,
    @RequestParam(required = false) String include) {
    // ...
}
```

---

## 4. Controller 完整示例

```java
import com.eshore.khala.common.model.CommonResult;
@RestController
@RequestMapping("/khala-sys-user")
@Tag(name = "系统用户管理")
public class KhalaSysUserController {

    @Resource
    private IKhalaSysUserService khalaSysUserService;

    @PostMapping("/create")
    @Operation(summary = "创建用户")
    public CommonResult<Long> create(@Valid @RequestBody KhalaSysUserCreateReq req) {
        return CommonResult.success(khalaSysUserService.create(req));
    }

    @PostMapping("/update")
    @Operation(summary = "更新用户")
    public CommonResult<Void> update(@Valid @RequestBody KhalaSysUserUpdateReq req) {
        khalaSysUserService.update(req);
        return CommonResult.success();
    }

    @PostMapping("/delete")
    @Operation(summary = "删除用户")
    public CommonResult<Void> delete(@RequestParam Long id) {
        khalaSysUserService.delete(id);
        return CommonResult.success();
    }

    @GetMapping("/get")
    @Operation(summary = "查询用户")
    public CommonResult<KhalaSysUserVo> get(@RequestParam Long id) {
        return CommonResult.success(khalaSysUserService.get(id));
    }

    @PostMapping("/page")
    @Operation(summary = "分页查询用户")
    public CommonResult<IPage<KhalaSysUserVo>> page(@Valid @RequestBody KhalaSysUserPageReq req) {
        return CommonResult.success(khalaSysUserService.page(req));
    }

    @GetMapping("/list-all")
    @Operation(summary = "查询所有用户")
    public CommonResult<List<KhalaSysUserVo>> listAll() {
        return CommonResult.success(khalaSysUserService.listAll());
    }
}
```

---

## 5. OpenAPI 文档注解

### 5.1 Controller 级别

```java
@RestController
@RequestMapping("/khala-sys-user")
@Tag(name = "系统用户管理", description = "系统用户的增删改查")
public class KhalaSysUserController {
    // ...
}
```

### 5.2 方法级别

```java
@PostMapping("/create")
@Operation(summary = "创建用户", description = "创建新的系统用户")
public CommonResult<Long> create(@Valid @RequestBody KhalaSysUserCreateReq req) {
    // ...
}
```

### 5.3 字段级别

```java
@Data
public class KhalaSysUserCreateReq {
    @Schema(description = "用户名", example = "zhangsan", requiredMode = Schema.RequiredMode.REQUIRED)
    private String username;

    @Schema(description = "邮箱", example = "zhangsan@example.com")
    private String email;
}
```

### 5.4 枚举文档

```java
@Schema(description = "用户状态")
public enum UserStatus {
    @Schema(description = "正常")
    NORMAL(1),

    @Schema(description = "禁用")
    DISABLED(0);

    private final Integer value;
}
```

---

## 6. 错误码规范

### 6.1 错误码格式

```
|  1 位  |     4 位      |
| 模块   |   序号        |

示例：1001 = 1号模块的第001个错误
```

### 6.2 通用错误码

| 错误码 | 说明 |
|--------|------|
| 0 | 成功 |
| 1001 | 参数校验失败 |
| 1002 | 数据不存在 |
| 1003 | 数据已存在 |
| 1004 | 无权限操作 |
| 1005 | 未登录 |
| 9999 | 系统错误 |

### 6.3 业务错误码

| 错误码 | 说明 |
|--------|------|
| 2001 | 用户不存在 |
| 2002 | 用户名已存在 |
| 2003 | 密码错误 |
| 3001 | 订单不存在 |
| 3002 | 订单状态异常 |

---

## 7. 分页规范

### 7.1 分页参数

```java
@Data
public class PageParam {
    @Min(value = 1, message = "页码最小 1")
    @Schema(description = "页码", example = "1")
    private Integer page = 1;

    @Min(value = 1, message = "每页数量最小 1")
    @Max(value = 100, message = "每页数量最大 100")
    @Schema(description = "每页数量", example = "10")
    private Integer size = 10;

    @Schema(description = "排序字段")
    private List<SortingField> sorts;
    
}
```

### 7.2 分页响应

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "records": [...],
    "total": 100,
    "size": 10,
    "current": 1,
    "pages": 10
  }
}
```

---

## 8. 版本管理

### 8.1 URL 版本（推荐）

```
/api/v1/khala-sys-user/create
/api/v2/khala-sys-user/create
```

### 8.2 版本变更原则

- **不兼容变更**：升级主版本（v1 → v2）
- **兼容变更**：保持版本号，添加新接口

---

## 9. 接口安全

### 9.1 敏感接口权限控制

```java
@PreAuthorize("@khala.hasPermission('user:delete')")
@PostMapping("/delete")
public CommonResult<Void> delete(@RequestParam Long id) {
    // ...
}
```

### 9.2 对外接口签名验证

```java
@PostMapping("/api/external/order")
public CommonResult<Long> createOrder(
    @RequestHeader("X-Signature") String signature,
    @RequestBody OrderCreateReq req) {

    if (!KhalaSignatureUtil.verify(req, signature)) {
        return CommonResult.error("签名验证失败");
    }
    // ...
}
```

---

## 10. API 文档生成

### 10.1 访问地址

- Swagger UI: `http://localhost:8080/doc.html`
- OpenAPI JSON: `http://localhost:8080/v3/api-docs`

### 10.2 文档要求

- 所有接口必须添加 `@Operation` 注解
- 所有请求参数必须添加 `@Schema` 注解
- 枚举类型必须添加描述
- 提供 `example` 示例值

---

## 11. 接口开发检查清单

开发完成后确认：

- [ ] 使用 `@Resource` 注入依赖
- [ ] 返回 `CommonResult<T>` 包装
- [ ] 请求参数使用 `@Valid` 验证
- [ ] 添加 `@Tag` 注解（Controller 级别）
- [ ] 添加 `@Operation` 注解（方法级别）
- [ ] 添加 `@Schema` 注解（字段级别）
- [ ] 敏感接口添加权限控制
- [ ] 对外接口添加签名验证

---

## 12. 快速参考

| 需求 | 查看文档 |
|------|---------|
| Controller 完整示例 | 本文 §4 |
| 请求参数完整模板 | 本文 §3 |
| 分页规范 | 本文 §7 |
| 核心规范 | [khala-core.md](./khala-core.md) |
| 安全组件 | [khala-security.md](./khala-security.md) |
