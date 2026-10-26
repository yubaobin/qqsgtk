# 限流、熔断与降级规范

本文档规定 Khala 项目在高并发、依赖故障等场景下的系统自我保护机制，保障核心链路可用性。

---

## 一、限流（Rate Limiting）

### 1.1 限流策略

| 策略 | 适用场景 | 说明 |
|------|----------|------|
| **QPS 限流** | 接口级保护 | 限制单接口每秒请求数 |
| **线程数限流** | 慢调用保护 | 限制并发线程数，防止线程池耗尽 |
| **热点参数限流** | 特定参数防刷 | 针对高频参数值（如用户ID、IP）单独限流 |
| **系统自适应限流** | 全局保护 | 根据系统负载（CPU、RT）自动调整 |

### 1.2 接入方式（Sentinel）

```java
@RestController
@RequestMapping("/api/v1/tasks")
public class TaskController {

    @GetMapping("/list")
    @SentinelResource(
        value = "taskList",
        blockHandler = "taskListBlockHandler"
    )
    public Result<List<TaskVO>> list(TaskQueryDTO dto) {
        return Result.ok(taskService.list(dto));
    }

    public Result<List<TaskVO>> taskListBlockHandler(TaskQueryDTO dto, BlockException ex) {
        log.warn("任务列表接口触发限流");
        return Result.fail("系统繁忙，请稍后重试");
    }
}
```

### 1.3 规则配置示例

```yaml
spring:
  cloud:
    sentinel:
      datasource:
        flow:
          nacos:
            server-addr: ${nacos.server-addr}
            dataId: ${spring.application.name}-flow-rules
            rule-type: flow
```

### 1.4 限流阈值建议

| 接口类型 | QPS 阈值 | 说明 |
|----------|----------|------|
| 核心查询接口 | 1000~5000 | 根据压测结果调整 |
| 普通查询接口 | 500~1000 | 根据压测结果调整 |
| 写操作接口 | 100~500 | 写操作通常瓶颈在数据库 |
| 登录/验证码 | 10~30 | 防止暴力破解和短信轰炸 |
| 文件上传 | 10~50 | 受带宽和存储限制 |

---

## 二、熔断（Circuit Breaker）

### 2.1 熔断策略

采用 Sentinel 慢调用比例熔断模式：

| 指标 | 阈值 | 说明 |
|------|------|------|
| 慢调用 RT | 500ms | 超过此值计为慢调用 |
| 慢调用比例 | 50% | 慢调用占比超过此比例触发熔断 |
| 熔断时长 | 10s | 熔断后进入探测窗口 |
| 最小请求数 | 10 | 统计周期内至少 10 个请求才计算 |

### 2.2 熔断状态机

```
CLOSED（关闭） → 失败率达到阈值 → OPEN（打开）
    ↑                                    |
    └──── 探测请求成功 ──── HALF_OPEN（半开）
```

### 2.3 服务间调用熔断

```java
@Service
public class ApprovalService {

    @Autowired
    private ApprovalRpcService approvalRpc;

    @SentinelResource(
        value = "approvalCreate",
        fallback = "createFallback"
    )
    public Long createApproval(ApprovalCreateDTO dto) {
        return approvalRpc.create(dto);
    }

    public Long createFallback(ApprovalCreateDTO dto, Throwable ex) {
        log.error("审批服务调用失败，触发降级", ex);
        // 降级：记录本地待同步队列，稍后重试
        pendingSyncService.save(dto);
        throw new ExternalException("EXT_001", "审批服务暂不可用，已记录待处理");
    }
}
```

---

## 三、降级（Degrade）

### 3.1 降级策略

| 策略 | 触发条件 | 行为 |
|------|----------|------|
| **返回默认值** | 查询类接口熔断 | 返回空列表或缓存数据 |
| **简化逻辑** | 复杂查询超时 | 返回基础字段，省略关联数据 |
| **异步补偿** | 写操作依赖故障 | 记录消息队列，异步重试 |
| **功能关闭** | 非核心功能过载 | 关闭推荐、统计等功能 |

### 3.2 降级示例

```java
@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskMapper taskMapper;
    @Autowired
    private UserService userService;
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Override
    public TaskDetailVO getDetail(Long id) {
        TaskEntity task = taskMapper.selectById(id);
        if (task == null) {
            throw new NotFoundException("NF_001", "任务不存在");
        }

        TaskDetailVO vo = TaskConvert.INSTANCE.toDetailVO(task);

        // 查询用户信息（非核心，可降级）
        try {
            UserVO user = userService.getById(task.getAssigneeId());
            vo.setAssigneeName(user.getNickname());
        } catch (Exception e) {
            log.warn("查询用户信息失败，使用默认降级", e);
            vo.setAssigneeName("未知用户");
        }

        return vo;
    }
}
```

---

## 四、隔离策略

### 4.1 线程池隔离

为不同业务分配独立线程池，避免相互影响：

```java
@Configuration
public class ThreadPoolConfig {

    @Bean("taskExecutor")
    public ThreadPoolExecutor taskExecutor() {
        return new ThreadPoolExecutor(
            4, 8, 60, TimeUnit.SECONDS,
            new LinkedBlockingQueue<>(100),
            new ThreadFactoryBuilder().setNameFormat("task-pool-%d").build(),
            new ThreadPoolExecutor.CallerRunsPolicy()
        );
    }

    @Bean("notificationExecutor")
    public ThreadPoolExecutor notificationExecutor() {
        return new ThreadPoolExecutor(
            2, 4, 60, TimeUnit.SECONDS,
            new LinkedBlockingQueue<>(200),
            new ThreadFactoryBuilder().setNameFormat("notify-pool-%d").build(),
            new ThreadPoolExecutor.DiscardPolicy() // 通知可丢弃
        );
    }
}
```

### 4.2 信号量隔离

轻量级隔离，适用于高频短调用：

```java
@SentinelResource(
    value = "quickQuery",
    blockHandler = "quickQueryBlock",
    // 信号量隔离，最大并发数 50
    rule = @SentinelRule(count = 50, grade = RuleConstant.FLOW_GRADE_THREAD)
)
```

---

## 五、规则管理

### 5.1 配置来源优先级

1. **Nacos 动态配置**：生产环境实时调整
2. **本地配置文件**：开发/测试环境兜底
3. **代码注解**：默认值，启动时加载

### 5.2 变更流程

```
发现流量异常 → 查看监控大盘 → 评估调整阈值 → Nacos 修改规则 → 观察效果 → 复盘归档
```

---

## 六、监控与告警

| 告警项 | 阈值 | 级别 |
|--------|------|------|
| 限流触发次数 > 100/min | 持续 3 分钟 | P2 |
| 熔断打开状态持续 | > 5 分钟 | P1 |
| 降级触发频率 | > 50 次/分钟 | P2 |
| 慢调用比例 | > 30% | P2 |

---

## 七、禁止事项

1. **禁止在熔断/降级逻辑中继续调用原依赖**，否则失去保护意义
2. **禁止降级逻辑抛出未处理异常**，应返回友好提示或默认数据
3. **禁止无限重试**，降级后的重试必须有最大次数和退避策略
4. **禁止核心写操作静默降级**，写操作失败应明确报错或进入补偿队列
