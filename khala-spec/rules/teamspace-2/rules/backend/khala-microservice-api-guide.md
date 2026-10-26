# 微服务 API 组件规范

> 本文件定义微服务架构下每个服务独立 API 组件的设计规范，包括 Feign 接口、常量、枚举、异常及跨服务调用 POJO 的定义要求。

---

## 1. 组件定位

### 1.1 设计原则

每个微服务必须提供一个独立的 `*-api` 组件（Maven 模块），作为服务对外暴露的契约层。该组件仅包含接口定义和数据结构，**不包含任何业务实现**，供其他服务通过依赖方式进行远程调用。

**核心职责：**
- 定义跨服务调用的 Feign 接口
- 定义服务相关的常量、枚举
- 定义服务专属的业务异常
- 定义跨服务调用的请求/响应 POJO

**不包含：**
- Controller 实现
- Service 实现
- Mapper / 数据库操作
- 业务逻辑处理
- 配置类（除非是纯常量配置）

---

## 2. 模块命名与结构

### 2.1 模块命名

```
{service-name}-api
```

**示例：**

| 服务名 | API 组件名 |
|--------|-----------|
| admin | admin-api |
| user | user-api |
| order | order-api |
| payment | payment-api |

### 2.2 目录结构

```
{service}-api/
├── src/main/java/com/eshore/khala/{service}/
│   ├── api/          # Feign 接口定义
│   ├── constant/     # 常量定义
│   ├── enums/        # 枚举定义
│   ├── error/        # 异常定义
│   └── pojo/         # 跨服务调用 POJO
│       ├── req/      # 请求对象
│       └── vo/       # 响应对象
├── src/main/resources/
└── pom.xml
```

**说明：**
- `api/`：Feign 客户端接口，一个业务域对应一个 Feign 接口
- `constant/`：服务相关的常量类，如缓存键、消息队列主题等
- `enums/`：服务相关的枚举类型，如状态枚举、类型枚举等
- `error/`：服务专属的业务异常类和错误码
- `pojo/req/`：跨服务调用的请求参数对象
- `pojo/vo/`：跨服务调用的返回值对象

### 2.3 包命名规范

```
com.eshore.khala.{service}.api        # Feign 接口
com.eshore.khala.{service}.constant   # 常量
com.eshore.khala.{service}.enums      # 枚举
com.eshore.khala.{service}.error      # 异常
com.eshore.khala.{service}.pojo.req   # 请求 POJO
com.eshore.khala.{service}.pojo.vo    # 响应 POJO
```

---

## 3. Feign 接口定义

### 3.1 接口命名

| 规则 | 示例 |
|------|------|
| 以 `I` 开头，以 `Api` 结尾 | `IUserApi`、`IOrderApi` |
| 业务域粒度 | 一个业务实体对应一个 Feign 接口 |

### 3.2 注解要求

```java
@FeignClient(name = "khala-user-service", path = "/inner/user", contextId = "userApi")
public interface IUserApi {
    // ...
}
```

**注解说明：**

| 属性 | 说明 | 示例 |
|------|------|------|
| `name` | 目标服务的 spring.application.name | `khala-user-service` |
| `path` | 接口统一前缀，建议使用 `/inner/` 区分内部调用 | `/inner/user` |
| `contextId` | 当同一服务有多个 Feign Client 时区分 Bean | `userApi` |

### 3.3 完整示例

```java
package com.eshore.khala.user.api;

import com.eshore.khala.common.model.result.CommonResult;
import com.eshore.khala.common.model.result.PageResult;
import com.eshore.khala.user.pojo.req.UserCreateReq;
import com.eshore.khala.user.pojo.req.UserPageReq;
import com.eshore.khala.user.pojo.req.UserUpdateReq;
import com.eshore.khala.user.pojo.vo.UserVO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@Tag(name = "用户服务内部接口")
@FeignClient(name = "khala-user-service", path = "/inner/user", contextId = "userApi")
public interface IUserApi {

    @Operation(summary = "根据ID查询用户")
    @GetMapping("/{id}")
    CommonResult<UserVO> getById(@PathVariable("id") Long id);

    @Operation(summary = "根据ID批量查询用户")
    @GetMapping("/list-by-ids")
    CommonResult<List<UserVO>> listByIds(@RequestParam("ids") List<Long> ids);

    @Operation(summary = "分页查询用户")
    @PostMapping("/page")
    CommonResult<PageResult<UserVO>> page(@RequestBody @Valid UserPageReq req);

    @Operation(summary = "创建用户")
    @PostMapping("/create")
    CommonResult<Long> create(@RequestBody @Valid UserCreateReq req);

    @Operation(summary = "更新用户")
    @PostMapping("/update")
    CommonResult<Void> update(@RequestBody @Valid UserUpdateReq req);

    @Operation(summary = "删除用户")
    @PostMapping("/delete")
    CommonResult<Void> delete(@RequestParam("id") Long id);
}
```

---

## 4. 常量定义

### 4.1 类命名

| 规则 | 示例 |
|------|------|
| 以 `Constant` 结尾 | `UserConstant`、`OrderConstant` |
| 工具类模式 | final class + 私有构造方法 |

### 4.2 定义规范

```java
package com.eshore.khala.user.constant;

/**
 * 用户服务常量
 */
public final class UserConstant {

    private UserConstant() {
        // 工具类禁止实例化
    }

    // ==================== 缓存键 ====================

    /** 用户信息缓存前缀 */
    public static final String CACHE_USER_PREFIX = "user:info:";

    /** 用户角色缓存前缀 */
    public static final String CACHE_USER_ROLE_PREFIX = "user:role:";

    // ==================== 默认值 ====================

    /** 默认头像 */
    public static final String DEFAULT_AVATAR = "https://cdn.example.com/default-avatar.png";

    /** 默认用户状态 */
    public static final Integer DEFAULT_STATUS = 1;

    // ==================== MQ 主题 ====================

    /** 用户注册消息主题 */
    public static final String TOPIC_USER_REGISTER = "USER_REGISTER";

    /** 用户状态变更消息主题 */
    public static final String TOPIC_USER_STATUS_CHANGE = "USER_STATUS_CHANGE";
}
```

**规范要求：**
- 常量类必须是 `final`，且提供私有构造方法
- 常量全部使用大写字母，多单词下划线分隔
- 使用 Javadoc 注释说明常量用途
- 按业务含义分组，组间使用分隔注释区分
- 只定义与本服务相关、其他服务可能用到的常量
- 内部使用的常量不应放在 API 组件中

---

## 5. 枚举定义

### 5.1 类命名

| 规则 | 示例 |
|------|------|
| 以 业务含义 命名，见名知意 | `UserStatusEnum`、`UserTypeEnum` |
| 统一 `Enum` 后缀 | `OrderStatusEnum` |

### 5.2 定义规范

```java
package com.eshore.khala.user.enums;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 用户状态枚举
 */
@Getter
@AllArgsConstructor
@Schema(description = "用户状态")
public enum UserStatusEnum {

    NORMAL(1, "正常"),
    DISABLED(0, "禁用"),
    LOCKED(2, "锁定");

    @Schema(description = "状态码")
    private final Integer code;

    @Schema(description = "状态描述")
    private final String desc;

    /**
     * 根据 code 获取枚举
     */
    public static UserStatusEnum of(Integer code) {
        if (code == null) {
            return null;
        }
        for (UserStatusEnum e : values()) {
            if (e.getCode().equals(code)) {
                return e;
            }
        }
        return null;
    }
}
```

**规范要求：**
- 使用 `@Getter` + `@AllArgsConstructor` 简化代码
- 必须包含 `code` 和 `desc` 两个字段
- 提供静态 `of(code)` 方法用于数值转枚举
- 添加 `@Schema` 注解用于 API 文档生成
- 只定义跨服务共享的枚举，内部枚举不放在 API 组件

---

## 6. 异常定义

### 6.1 异常分类

| 类型 | 命名 | 说明 |
|------|------|------|
| 业务异常基类 | `{Service}BizException` | 服务专属业务异常 |
| 错误码枚举 | `{Service}ErrorCode` | 服务错误码定义 |

### 6.2 错误码定义

```java
package com.eshore.khala.user.error;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 用户服务错误码
 * 服务编码：1001（用户服务）
 * 错误码格式：1001XXXX
 */
@Getter
@AllArgsConstructor
public enum UserErrorCode {

    // 用户相关 100101XX
    USER_NOT_FOUND(10010101, "用户不存在"),
    USER_NAME_EXISTS(10010102, "用户名已存在"),
    USER_EMAIL_EXISTS(10010103, "邮箱已被注册"),
    USER_STATUS_INVALID(10010104, "用户状态无效"),
    USER_PASSWORD_ERROR(10010105, "密码错误"),

    // 角色相关 100102XX
    ROLE_NOT_FOUND(10010201, "角色不存在"),
    ROLE_CODE_EXISTS(10010202, "角色编码已存在");

    private final Integer code;
    private final String message;
}
```

**错误码编码规范：**
- 格式：`{服务编码(4位)}{模块编码(2位)}{序号(2位)}`，共 8 位
- 服务编码由架构组统一分配，避免冲突
- 模块编码各服务内部自行规划
- 示例：`10010101` = 用户服务(1001) + 用户模块(01) + 序号(01)

### 6.3 业务异常类

```java
package com.eshore.khala.user.error;

import com.eshore.khala.common.exception.BizException;
import lombok.Getter;

/**
 * 用户服务业务异常
 */
@Getter
public class UserBizException extends BizException {

    private final UserErrorCode errorCode;

    public UserBizException(UserErrorCode errorCode) {
        super(errorCode.getCode(), errorCode.getMessage());
        this.errorCode = errorCode;
    }

    public UserBizException(UserErrorCode errorCode, String message) {
        super(errorCode.getCode(), message);
        this.errorCode = errorCode;
    }
}
```

**规范要求：**
- 继承框架的 `BizException` 基类
- 提供错误码枚举和自定义消息两种构造方式
- 异常类命名以 `BizException` 结尾
- 只暴露给其他服务可能需要捕获的异常类型

---

## 7. POJO 定义

### 7.1 分类与命名

| 分类 | 包路径 | 命名后缀 | 说明 |
|------|--------|---------|------|
| 请求对象 | `pojo.req` | `Req` | 跨服务调用的入参 |
| 响应对象 | `pojo.vo` | `VO` | 跨服务调用的返回值 |

### 7.2 请求对象（Req）

```java
package com.eshore.khala.user.pojo.req;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

/**
 * 创建用户请求
 */
@Data
@Schema(description = "创建用户请求")
public class UserCreateReq {

    @NotBlank(message = "用户名不能为空")
    @Schema(description = "用户名", example = "zhangsan", requiredMode = Schema.RequiredMode.REQUIRED)
    private String username;

    @NotBlank(message = "密码不能为空")
    @Schema(description = "密码", example = "123456", requiredMode = Schema.RequiredMode.REQUIRED)
    private String password;

    @Email(message = "邮箱格式不正确")
    @Schema(description = "邮箱", example = "zhangsan@example.com")
    private String email;

    @Schema(description = "手机号", example = "13800138000")
    private String phone;
}
```

### 7.3 响应对象（VO）

```java
package com.eshore.khala.user.pojo.vo;

import com.eshore.khala.user.enums.UserStatusEnum;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 用户信息视图对象
 */
@Data
@Schema(description = "用户信息")
public class UserVO {

    @Schema(description = "用户ID", example = "1")
    private Long id;

    @Schema(description = "用户名", example = "zhangsan")
    private String username;

    @Schema(description = "邮箱", example = "zhangsan@example.com")
    private String email;

    @Schema(description = "手机号", example = "13800138000")
    private String phone;

    @Schema(description = "用户状态", implementation = UserStatusEnum.class)
    private Integer status;

    @Schema(description = "创建时间")
    private LocalDateTime createTime;
}
```

### 7.4 分页请求基类使用

```java
package com.eshore.khala.user.pojo.req;

import com.eshore.khala.common.model.req.PageReq;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 用户分页查询请求
 */
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "用户分页查询请求")
public class UserPageReq extends PageReq {

    @Schema(description = "用户名（模糊匹配）", example = "zhang")
    private String username;

    @Schema(description = "用户状态", example = "1")
    private Integer status;
}
```

**POJO 规范要求：**
- 使用 `@Data` 简化 getter/setter
- 所有字段添加 `@Schema` 注解描述含义和示例值
- 请求对象字段按需添加 JSR-380 校验注解（`@NotBlank`、`@NotNull` 等）
- 响应对象不包含敏感信息（如密码、盐值等）
- 分页请求继承 `PageReq` 基类
- 枚举类型字段在 `@Schema` 中通过 `implementation` 关联枚举类
- POJO 必须实现序列化（如继承了基类则默认支持）

---

## 8. Pom.xml 依赖规范

### 8.1 最小依赖

```xml
<dependencies>
    <!-- 公共基础模块（包含 CommonResult、PageReq、BizException 等） -->
    <dependency>
        <groupId>com.eshore.khala</groupId>
        <artifactId>khala-common</artifactId>
    </dependency>

    <!-- OpenFeign -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-openfeign</artifactId>
        <scope>provided</scope>
    </dependency>

    <!-- Swagger 注解 -->
    <dependency>
        <groupId>io.swagger.core.v3</groupId>
        <artifactId>swagger-annotations-jakarta</artifactId>
        <scope>provided</scope>
    </dependency>

    <!-- Validation -->
    <dependency>
        <groupId>jakarta.validation</groupId>
        <artifactId>jakarta.validation-api</artifactId>
        <scope>provided</scope>
    </dependency>

    <!-- Lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

**原则：**
- 运行时依赖尽量精简，仅保留 `khala-common`
- 注解类依赖使用 `provided` 作用域，减少传递依赖
- 严禁引入数据库、缓存、消息队列等运行时依赖

---

## 9. 版本与兼容

### 9.1 版本策略

| 变更类型 | 处理方式 | 示例 |
|---------|---------|------|
| 新增接口方法 | 小版本递增，兼容旧版 | 1.0.0 → 1.1.0 |
| 新增 POJO 字段 | 小版本递增，兼容旧版 | 1.0.0 → 1.1.0 |
| 修改方法签名 | 新增方法，旧方法标记 `@Deprecated` | - |
| 删除字段 / 修改字段类型 | 大版本升级，不兼容 | 1.x → 2.x |

### 9.2 兼容性原则

- **字段新增兼容**：新增字段必须提供默认值或允许为 null
- **枚举新增兼容**：新增枚举值不影响旧版调用方
- **接口新增兼容**：新增 Feign 方法不影响现有调用
- **破坏性变更**：必须升级大版本，并在旧版本中标记 `@Deprecated`

---

## 10. 开发检查清单

创建或修改 `*-api` 组件后，确认以下事项：

- [ ] 模块命名为 `{service}-api` 格式
- [ ] 目录结构包含 `api/`、`constant/`、`enums/`、`error/`、`pojo/req/`、`pojo/vo/`
- [ ] Feign 接口以 `I` 开头、`Api` 结尾，使用 `/inner/` 路径前缀
- [ ] Feign 方法返回值使用 `CommonResult<T>` 包装
- [ ] 所有接口方法添加 `@Operation` 注解
- [ ] 常量类为 final + 私有构造，命名全大写
- [ ] 枚举包含 `code` 和 `desc`，提供 `of()` 方法
- [ ] 错误码 8 位数字，服务编码不冲突
- [ ] 业务异常继承 `BizException`
- [ ] POJO 使用 `@Data`，字段添加 `@Schema` 注解
- [ ] 请求对象按需添加校验注解
- [ ] 响应对象不含敏感字段
- [ ] pom.xml 中运行时依赖仅保留 `khala-common`
- [ ] 注解类依赖 scope 为 `provided`

---

## 11. 快速参考

| 需求 | 查看章节 |
|------|---------|
| 组件结构和目录规范 | 本文 §2 |
| Feign 接口定义 | 本文 §3 |
| 常量定义规范 | 本文 §4 |
| 枚举定义规范 | 本文 §5 |
| 异常和错误码 | 本文 §6 |
| POJO 定义规范 | 本文 §7 |
| RESTful API 规范 | [khala-api-guide.md](./khala-api-guide.md) |
| 框架核心规范 | [khala-core.md](./khala-core.md) |
