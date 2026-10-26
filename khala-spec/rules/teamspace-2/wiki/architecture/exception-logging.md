# 异常与日志规范

## 概述

异常处理和日志记录是系统可维护性的关键。统一的异常体系能帮助快速定位问题，规范的日志能为排查提供有效线索。

---

## 异常分层体系

### 异常分类

| 异常类型 | 说明 | HTTP 状态码 | 错误码前缀 |
|----------|------|-------------|------------|
| BizException | 业务异常，用户可理解的错误 | 400 | BIZ |
| ParamException | 参数校验失败 | 400 | PAR |
| AuthException | 认证/授权失败 | 401/403 | AUTH |
| NotFoundException | 资源不存在 | 404 | NF |
| SystemException | 系统内部错误 | 500 | SYS |
| ExternalException | 第三方服务调用失败 | 502/504 | EXT |

### 异常定义示例

```java
public class BizException extends RuntimeException {
    private final String code;

    public BizException(String code, String message) {
        super(message);
        this.code = code;
    }
}
```

### 使用场景

```java
// 业务规则校验
if (task.getStatus() != TaskStatus.DRAFT) {
    throw new BizException("BIZ_001", "只有草稿状态的任务可以编辑");
}

// 资源不存在
TaskEntity entity = taskMapper.selectById(id);
if (entity == null) {
    throw new NotFoundException("NF_001", "任务不存在");
}

// 第三方调用失败
try {
    smsService.send(phone, code);
} catch (Exception e) {
    throw new ExternalException("EXT_001", "短信服务调用失败", e);
}
```

---

## 错误码体系

### 错误码格式

采用 `A-BBBB-CCCC` 分层格式：

```
A      → 错误级别（1=业务，2=系统，3=外部）
BBBB   → 模块编码（TASK=任务，USER=用户，SYS=系统）
CCCC   → 具体错误序号
```

| 错误码 | 含义 |
|--------|------|
| 1-TASK-0001 | 任务状态不允许编辑 |
| 1-USER-0001 | 用户已被禁用 |
| 2-SYS-0001 | 数据库连接超时 |
| 3-SMS-0001 | 短信服务商返回错误 |

### 错误码维护

- 每个模块维护独立的错误码枚举类
- 禁止随意复用错误码，一码一事
- 新增错误码需在文档中登记

```java
public enum TaskErrorCode {
    STATUS_NOT_EDITABLE("1-TASK-0001", "只有草稿状态的任务可以编辑"),
    TASK_NOT_FOUND("1-TASK-0002", "任务不存在");

    private final String code;
    private final String message;
}
```

---

## 全局异常处理

Controller 层禁止捕获异常，统一由 `@RestControllerAdvice` 处理：

```java
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BizException.class)
    public Result<Void> handleBizException(BizException e) {
        log.warn("业务异常: [{}] {}", e.getCode(), e.getMessage());
        return Result.fail(e.getCode(), e.getMessage());
    }

    @ExceptionHandler(SystemException.class)
    public Result<Void> handleSystemException(SystemException e) {
        log.error("系统异常: [{}] {}", e.getCode(), e.getMessage(), e);
        return Result.fail(e.getCode(), "系统繁忙，请稍后再试");
    }

    @ExceptionHandler(Exception.class)
    public Result<Void> handleUnknownException(Exception e) {
        log.error("未知异常", e);
        return Result.fail("2-SYS-9999", "系统繁忙，请稍后再试");
    }
}
```

### 异常响应原则

1. **业务异常**：返回具体错误信息，帮助用户修正
2. **系统异常**：返回模糊提示，详细错误记录到日志，避免暴露内部信息
3. **未知异常**：统一返回"系统繁忙"，必须记录完整堆栈

---

## 日志规范

### 日志级别使用场景

| 级别 | 使用场景 | 示例 |
|------|----------|------|
| ERROR | 系统错误，需要立即处理 | 数据库连接失败、空指针异常 |
| WARN | 业务异常或潜在风险 | 参数非法、资源未找到、重试失败 |
| INFO | 关键业务流程节点 | 用户登录、订单创建、支付完成 |
| DEBUG | 调试信息，开发环境使用 | SQL 语句、参数详情、调用链路 |
| TRACE | 最详细的追踪信息 | 方法入参出参、循环内部状态 |

### 日志内容规范

#### 必须包含的信息

1. **TraceID**：全链路唯一标识，用于串联请求
2. **用户标识**：当前操作用户 ID
3. **租户标识**：当前租户 ID（多租户场景）
4. **操作描述**：做了什么操作
5. **关键参数**：影响业务逻辑的核心参数（需脱敏）

#### 推荐格式

```java
log.info("[TraceID:{}] 用户[{}] 创建任务，标题:{}, 类型:{}",
    MDC.get("traceId"), userId, title, taskType);
```

#### 禁止事项

1. **禁止输出密码、Token、密钥等敏感信息**
2. **禁止在循环中打印 INFO 级别日志**
3. **禁止打印超大对象（如列表超过 100 条）**
4. **禁止捕获异常后仅打印日志不处理**

```java
// 错误：敏感信息泄露
log.info("用户登录，密码: {}", password);

// 错误：循环内打印
for (Task task : taskList) {
    log.info("处理任务: {}", task.getId()); // 如果 list 有 1 万条？
}

// 正确：批量操作只记录摘要
log.info("批量处理任务，数量: {}", taskList.size());
```

---

## TraceID 全链路传递

### 生成与传递

1. **网关/入口层生成 TraceID**，写入 MDC
2. **HTTP 调用**：通过 Header `X-Trace-Id` 传递
3. **RPC 调用**：通过 Attachment/Context 传递
4. **消息队列**：将 TraceID 放入消息属性
5. **异步线程**：使用 `MDC.getCopyOfContextMap()` 复制上下文

### 异步线程示例

```java
Map<String, String> contextMap = MDC.getCopyOfContextMap();
CompletableFuture.runAsync(() -> {
    MDC.setContextMap(contextMap);
    try {
        taskService.process(taskId);
    } finally {
        MDC.clear();
    }
}, executor);
```

---

## 日志配置建议

### 日志文件分割

| 文件 | 内容 | 保留周期 |
|------|------|----------|
| app.log | 应用主日志 | 30 天 |
| error.log | ERROR 级别日志 | 90 天 |
| slow-sql.log | 慢查询日志（>1s） | 15 天 |
| audit.log | 审计日志（登录、权限变更） | 180 天 |

### 日志格式

```
%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level [%X{traceId}] %logger{36} - %msg%n
```

---

## 注意事项

1. **异常不要吞没**：捕获异常后要么处理，要么继续抛出，禁止空 catch 块
2. **异常链保持完整**：包装异常时使用 `new Exception("msg", cause)`，保留原始堆栈
3. **业务异常不复用**：不同业务场景使用不同异常，便于监控和统计
4. **日志异步化**：高并发场景使用异步 Appender，避免日志打印阻塞业务线程
