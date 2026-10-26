# 监控与可观测性

## 概述

可观测性（Observability）通过指标（Metrics）、日志（Logs）、链路（Traces）三个维度，帮助团队理解系统运行状态、快速定位问题。Khala 项目建立完整的可观测体系，实现"出现问题可感知、定位问题可追溯、解决问题可验证"。

---

## 健康检查

### 存活探针（Liveness）

判断应用是否运行中，失败时 Kubernetes 会重启容器：

```java
@RestController
@RequestMapping("/actuator")
public class HealthController {

    @GetMapping("/health/liveness")
    public ResponseEntity<String> liveness() {
        return ResponseEntity.ok("UP");
    }
}
```

### 就绪探针（Readiness）

判断应用是否准备好接收流量，失败时从负载均衡摘除：

```java
@GetMapping("/health/readiness")
public ResponseEntity<String> readiness() {
    // 检查数据库连接
    if (!dataSourceHealthChecker.check()) {
        return ResponseEntity.status(503).body("DOWN");
    }
    // 检查 Redis 连接
    if (!redisHealthChecker.check()) {
        return ResponseEntity.status(503).body("DOWN");
    }
    return ResponseEntity.ok("UP");
}
```

### 自定义健康指标

```java
@Component
public class DatabaseHealthIndicator implements HealthIndicator {

    @Autowired
    private DataSource dataSource;

    @Override
    public Health health() {
        try (Connection conn = dataSource.getConnection()) {
            if (conn.isValid(3)) {
                return Health.up().withDetail("database", "MySQL").build();
            }
        } catch (SQLException e) {
            return Health.down().withException(e).build();
        }
        return Health.down().build();
    }
}
```

---

## 链路追踪

### Trace 结构

```
Trace（一次请求）
├── Span A（网关接收请求）
│   ├── Span B（Controller 处理）
│   │   ├── Span C（Service 业务逻辑）
│   │   │   ├── Span D（Mapper 查询 DB）
│   │   │   └── Span E（Redis 查询）
│   │   └── Span F（RPC 调用用户服务）
│   └── Span G（返回响应）
```

### SkyWalking 集成

```java
// 方法级追踪（自动）
@Trace
public void complexBusinessLogic() {
    // 业务逻辑自动被追踪
}

// 自定义 Tag
@Tags({@Tag(key = "userId", value = "arg[0]"),
       @Tag(key = "result", value = "returnedObj.status")})
public Order createOrder(Long userId, OrderDTO dto) { ... }
```

### 日志关联 TraceID

```xml
<!-- logback.xml -->
<pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level [%X{traceId}] %logger{36} - %msg%n</pattern>
```

---

## 指标监控

### 核心指标定义

| 指标类型 | 指标名 | 说明 | 标签 |
|----------|--------|------|------|
| 计数器 | http_requests_total | HTTP 请求总数 | method, uri, status |
| 计时器 | http_request_duration_seconds | 请求耗时 | method, uri |
| 计数器 | biz_exceptions_total | 业务异常次数 | error_code |
| 计数器 | db_query_total | 数据库查询次数 | table, operation |
| 计时器 | db_query_duration_seconds | 数据库查询耗时 | table, operation |
| 计数器 | cache_hit_total | 缓存命中次数 | cache_name |
| 计数器 | cache_miss_total | 缓存未命中次数 | cache_name |
| 计数器 | mq_consume_total | 消息消费次数 | topic, status |
| 计时器 | mq_consume_duration_seconds | 消息消费耗时 | topic |

### Micrometer + Prometheus 示例

```java
@Service
public class TaskService {

    private final Counter queryCounter;
    private final Timer queryTimer;

    public TaskService(MeterRegistry registry) {
        this.queryCounter = Counter.builder("db_query_total")
            .tag("table", "task")
            .tag("operation", "select")
            .register(registry);
        this.queryTimer = Timer.builder("db_query_duration_seconds")
            .tag("table", "task")
            .tag("operation", "select")
            .register(registry);
    }

    public TaskVO getById(Long id) {
        queryCounter.increment();
        return queryTimer.recordCallable(() -> {
            return taskMapper.selectById(id);
        });
    }
}
```

### 业务自定义指标

```java
// 订单创建监控
Counter.builder("orders_created_total")
    .tag("tenant_id", String.valueOf(tenantId))
    .tag("source", source)
    .register(registry)
    .increment();

// 支付金额监控（用于业务趋势分析）
DistributionSummary.builder("payment_amount_summary")
    .baseUnit("yuan")
    .register(registry)
    .record(amount);
```

---

## 告警规则

### 告警分级

| 级别 | 触发条件 | 响应时间 | 通知方式 |
|------|----------|----------|----------|
| P0（紧急） | 核心接口不可用、数据库连接池耗尽 | 5 分钟 | 电话 + 短信 + 钉钉 |
| P1（高） | 错误率 > 1%、P99 延迟 > 3s | 15 分钟 | 短信 + 钉钉 |
| P2（中） | 错误率 > 0.1%、QPS 异常波动 | 30 分钟 | 钉钉 |
| P3（低） | 磁盘使用率 > 80%、非核心接口慢 | 1 小时 | 邮件 |

### 核心告警规则示例

```yaml
# Prometheus AlertManager 规则
groups:
  - name: khala-alerts
    rules:
      - alert: HighErrorRate
        expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.01
        for: 2m
        labels:
          severity: P1
        annotations:
          summary: "接口错误率过高"
          description: "{{ $labels.uri }} 错误率超过 1%"

      - alert: HighLatency
        expr: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) > 3
        for: 3m
        labels:
          severity: P1
        annotations:
          summary: "接口 P99 延迟过高"
          description: "{{ $labels.uri }} P99 延迟超过 3 秒"

      - alert: DBConnectionPoolExhausted
        expr: hikaricp_connections_active / hikaricp_connections_max > 0.9
        for: 1m
        labels:
          severity: P0
        annotations:
          summary: "数据库连接池即将耗尽"
```

---

## 日志聚合与分析

### 日志收集架构

```
应用日志 → Filebeat → Kafka → Logstash → Elasticsearch → Kibana
```

### 关键搜索场景

| 场景 | 搜索语句 |
|------|----------|
| 追踪一次请求 | `traceId: "a1b2c3d4"` |
| 查找某用户操作 | `userId: "10001" AND level: "ERROR"` |
| 统计接口错误 | `uri: "/api/v1/tasks" AND status: "500"` |
| 慢查询分析 | `duration:>1000 AND logger: "*Mapper*"` |

---

## 监控大盘

### 核心大盘

| 大盘名称 | 内容 |
|----------|------|
| 系统概览 | QPS、错误率、P99 延迟、JVM 指标 |
| 业务大盘 | 订单量、支付金额、用户活跃数 |
| 数据库监控 | 连接池、慢查询、主从延迟 |
| 缓存监控 | 命中率、内存使用、过期 key 数量 |
| 消息队列 | 堆积量、消费速率、死信数量 |

---

## 注意事项

1. **指标命名规范**：使用小写 + 下划线，以模块名前缀区分，如 `task_query_total`
2. **标签基数控制**：标签值避免高基数（如用户 ID、订单号），否则导致时间序列爆炸
3. **采样率配置**：高并发链路追踪适当降低采样率（如 1%），避免存储压力过大
4. **告警降噪**：同类告警合并，避免告警风暴；修复后自动恢复
5. **监控自身**：监控组件（Prometheus、Grafana）也需要被监控
