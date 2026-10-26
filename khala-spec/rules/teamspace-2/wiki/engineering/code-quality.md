# 代码质量与工程规范

## 概述

代码质量是系统长期可维护的基础。统一的编码规范、严格的代码审查和持续的自动化检查，能有效降低缺陷率、提升团队协作效率。

---

## 编码规范

### 命名规范

| 类型 | 规则 | 示例 |
|------|------|------|
| 类名 | 大驼峰，名词 | `TaskService`、`OrderController` |
| 接口名 | 大驼峰，形容词/名词 | `TaskService`、`Serializable` |
| 方法名 | 小驼峰，动词开头 | `createTask`、`getById` |
| 变量名 | 小驼峰，有意义 | `taskList`、`userId` |
| 常量名 | 全大写，下划线分隔 | `MAX_RETRY_TIMES`、`DEFAULT_PAGE_SIZE` |
| 包名 | 全小写 | `com.eshore.khala.task.service` |
| 数据库表 | 小写，下划线分隔 | `tsk_task`、`sys_user` |

### 代码格式

1. **缩进**：4 个空格，禁止 Tab
2. **行宽**：不超过 120 字符
3. **空行**：方法间、逻辑块间空一行
4. **括号**：`if/for/while` 即使单行也加大括号

```java
// 正确
if (task == null) {
    throw new NotFoundException("任务不存在");
}

// 错误
if (task == null) throw new NotFoundException("任务不存在");
```

### 注释规范

1. **类注释**：说明类的职责
2. **方法注释**：说明方法用途、参数、返回值、异常
3. **复杂逻辑注释**：解释"为什么"而非"做什么"
4. **禁止无意义注释**：如 `i++ // i 自增`

```java
/**
 * 任务服务实现类。
 * 负责任务的创建、查询、更新和状态流转。
 */
@Service
public class TaskServiceImpl implements TaskService {

    /**
     * 根据 ID 查询任务。
     *
     * @param id 任务 ID，不能为 null
     * @return 任务视图对象，未找到时返回 null
     * @throws IllegalArgumentException 当 id 为 null 时
     */
    @Override
    public TaskVO getById(Long id) {
        // ...
    }
}
```

---

## 异常处理规范

### 异常分类

| 类型 | 说明 | 示例 |
|------|------|------|
| 业务异常 | 可预期的业务规则不满足 | `TaskNotFoundException`、`StatusNotAllowedException` |
| 系统异常 | 不可预期的技术故障 | `SQLException`、`NullPointerException` |
| 参数异常 | 请求参数校验失败 | `IllegalArgumentException`、`ConstraintViolationException` |

### 处理原则

1. **自定义异常继承统一基类**：业务异常继承 `BusinessException`，区分业务异常与系统异常
2. **异常粒度**：捕获具体异常而非 `Exception`，避免吞掉异常
3. **异常信息**：包含上下文信息，便于定位问题
4. **禁止空 catch**：至少记录日志或向上抛出
5. **分层处理**：Controller 层统一异常处理（`@RestControllerAdvice`），Service 层抛出业务异常

```java
// 自定义业务异常
public class BusinessException extends RuntimeException {
    private final String code;

    public BusinessException(String code, String message) {
        super(message);
        this.code = code;
    }
}

// 正确：异常携带上下文
throw new BusinessException("TASK_NOT_FOUND", "任务不存在，ID: " + taskId);

// 错误：空 catch 块
try {
    // ...
} catch (Exception e) {
    // 吞掉异常
}

// 错误：捕获过于宽泛，丢失原始异常
catch (Exception e) {
    throw new RuntimeException("操作失败");
}

// 正确：保留异常链
catch (Exception e) {
    throw new BusinessException("TASK_CREATE_FAILED", "任务创建失败", e);
}
```

### 统一异常处理

```java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public Result<Void> handleBusinessException(BusinessException e) {
        log.warn("业务异常：code={}, message={}", e.getCode(), e.getMessage());
        return Result.error(e.getCode(), e.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public Result<Void> handleException(Exception e) {
        log.error("系统异常", e);
        return Result.error("SYSTEM_ERROR", "系统繁忙，请稍后重试");
    }
}
```

---

## 日志规范

### 日志级别

| 级别 | 使用场景 | 示例 |
|------|----------|------|
| ERROR | 系统异常、不可恢复的错误 | 数据库连接失败、外部服务超时 |
| WARN | 业务异常、可恢复的异常 | 参数校验失败、重试操作 |
| INFO | 关键业务流程节点 | 任务创建成功、订单状态变更 |
| DEBUG | 调试信息，生产环境关闭 | 中间计算结果、方法入参出参 |

### 日志要求

1. **使用占位符**：使用 `{}` 占位符，禁止字符串拼接
2. **包含上下文**：记录关键参数、操作结果，便于排查问题
3. **禁止记录敏感信息**：密码、Token、身份证号等
4. **异常日志**：将异常对象作为最后一个参数传入，记录完整堆栈
5. **日志框架**：统一使用 SLF4J + Logback，禁止使用 `System.out.println`

```java
// 正确：使用占位符
log.info("创建任务成功，taskId={}, title={}", task.getId(), task.getTitle());

// 错误：字符串拼接
log.info("创建任务成功，taskId=" + task.getId() + ", title=" + task.getTitle());

// 正确：记录异常堆栈（异常对象作为最后参数）
try {
    taskService.execute(taskId);
} catch (Exception e) {
    log.error("任务执行失败，taskId={}", taskId, e);
    throw e;
}

// 错误：丢失堆栈信息
log.error("任务执行失败：" + e.getMessage());

// 错误：记录敏感信息
log.info("用户登录，password={}", password);
```

---

## API 设计规范

### RESTful 设计

1. **资源命名**：URL 使用名词复数，HTTP 方法表达操作语义
2. **版本管理**：URL 中包含版本号，如 `/api/v1/tasks`
3. **统一响应**：使用统一响应体，包含状态码、消息和数据
4. **参数校验**：使用 `@Valid` + `@Validated` 校验入参
5. **分页规范**：统一分页参数 `page`、`size`，返回总数

### HTTP 方法语义

| 方法 | 语义 | 示例 |
|------|------|------|
| GET | 查询资源 | `GET /api/v1/tasks` |
| POST | 创建资源 | `POST /api/v1/tasks` |
| PUT | 全量更新资源 | `PUT /api/v1/tasks/{id}` |
| PATCH | 部分更新资源 | `PATCH /api/v1/tasks/{id}/status` |
| DELETE | 删除资源 | `DELETE /api/v1/tasks/{id}` |

### 统一响应体

```java
public class Result<T> {
    private int code;
    private String message;
    private T data;

    public static <T> Result<T> success(T data) {
        return new Result<>(200, "success", data);
    }

    public static <T> Result<T> error(String code, String message) {
        return new Result<>(code, message, null);
    }
}
```

### 接口示例

```java
@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    @PostMapping
    public Result<TaskVO> create(@Valid @RequestBody TaskCreateDTO dto) {
        return Result.success(taskService.createTask(dto));
    }

    @GetMapping("/{id}")
    public Result<TaskVO> getById(@PathVariable Long id) {
        return Result.success(taskService.getById(id));
    }

    @GetMapping
    public Result<Page<TaskVO>> page(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(defaultValue = "20") int size) {
        return Result.success(taskService.page(page, size));
    }
}
```

---

## 并发与线程安全

### 基本原则

1. **优先使用线程安全容器**：`ConcurrentHashMap` 代替 `HashMap`，`CopyOnWriteArrayList` 代替 `ArrayList`
2. **减小锁粒度**：只同步必要的临界区，避免锁整个方法
3. **禁止直接 new Thread**：使用线程池管理线程
4. **ThreadLocal 及时清理**：使用后 `remove()`，防止内存泄漏
5. **优先不可变对象**：避免共享可变状态

### 线程池使用

```java
// 正确：使用线程池
private final ExecutorService executor = new ThreadPoolExecutor(
    10, 20, 60L, TimeUnit.SECONDS,
    new LinkedBlockingQueue<>(100),
    new ThreadFactoryBuilder().setNameFormat("task-pool-%d").build(),
    new ThreadPoolExecutor.CallerRunsPolicy()
);

// 错误：直接创建线程
new Thread(() -> { /* ... */ }).start();
```

### 锁与同步

```java
// 正确：减小锁粒度，仅同步临界区
private final Object lock = new Object();

public void updateCounter(String key) {
    synchronized (lock) {
        // 仅同步必要的临界区
    }
}

// 错误：锁粒度过大
public synchronized void updateCounter(String key) {
    // 大量非临界区代码也被锁住
}
```

### ThreadLocal 使用

```java
private static final ThreadLocal<UserContext> CONTEXT = new ThreadLocal<>();

public void handle(Request request) {
    try {
        CONTEXT.set(new UserContext(request.getUserId()));
        // 业务逻辑
    } finally {
        CONTEXT.remove();
    }
}
```

---

> 代码审查规范详见 [code-review.md](./code-review.md)

---

## 静态代码检查

### SonarQube 质量门禁

| 指标 | 阈值 | 说明 |
|------|------|------|
| 阻断问题 | 0 | 必须修复 |
| 严重问题 | 0 | 必须修复 |
| 代码覆盖率 | >= 60% | 整体覆盖率 |
| 重复率 | <= 3% | 代码重复比例 |
| 技术债务 | <= 5 天 | 预估修复时间 |

### Checkstyle 规则

```xml
<module name="Checker">
    <module name="TreeWalker">
        <!-- 禁止导入 * -->
        <module name="AvoidStarImport"/>
        <!-- 禁止魔法数字 -->
        <module name="MagicNumber"/>
        <!-- 方法长度不超过 50 行 -->
        <module name="MethodLength">
            <property name="max" value="50"/>
        </module>
        <!-- 类长度不超过 500 行 -->
        <module name="ClassLength">
            <property name="max" value="500"/>
        </module>
        <!-- 参数数量不超过 5 个 -->
        <module name="ParameterNumber">
            <property name="max" value="5"/>
        </module>
    </module>
</module>
```

---

## 技术债务管理

### TODO 标记规范

```java
// TODO-[日期]-[作者]: [问题描述]，计划修复版本 [版本号]
// TODO-2024-01-15-zhangsan: 当前实现为临时方案，v2.3.0 需改为异步处理
public void temporaryImplementation() { }
```

### 定期重构机制

1. **每迭代预留 10% 时间**用于代码重构
2. **重构前补充测试**：确保重构不破坏现有功能
3. **小步快跑**：每次重构只改一个概念，避免大改
4. **重构触发条件**：
   - 修改一个功能需要改 3 个以上地方
   - 方法超过 50 行或类超过 500 行
   - 重复代码出现 3 次以上
   -  SonarQube 技术债务超过阈值

> 版本管理与提交规范详见 [git-commit.md](./git-commit.md) 和 [version-release.md](./version-release.md)

---

## 注意事项

1. **禁止提交无效代码**：注释掉的代码、调试用的 `System.out.println` 必须清理
2. **禁止提交敏感信息**：密码、密钥、本地路径
3. **及时更新依赖**：关注安全漏洞，定期升级组件版本
4. **保持构建绿色**：提交后 CI 必须通过，禁止提交已知失败的代码
