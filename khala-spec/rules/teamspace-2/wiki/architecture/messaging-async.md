# 消息队列与异步处理

## 概述

消息队列是实现系统解耦、异步处理、流量削峰的核心组件。Khala 项目使用消息队列处理非实时性要求高的业务，如通知发送、数据同步、耗时任务等。

---

## 使用场景

| 场景 | 说明 | 示例 |
|------|------|------|
| 异步解耦 | 主流程不依赖结果的操作 | 用户注册后发送欢迎邮件 |
| 流量削峰 | 高并发时缓冲请求 | 秒杀活动订单处理 |
| 延时任务 | 指定时间后执行 | 订单 30 分钟未支付自动关闭 |
| 数据同步 | 跨系统数据一致性 | 订单状态同步到 ERP |
| 广播通知 | 多服务订阅同一事件 | 配置变更通知所有服务 |

---

## 消息可靠性

### 生产端可靠性

#### 1. 本地事务表（推荐）

将消息持久化到业务数据库，与业务数据同一事务提交，再异步发送：

```sql
CREATE TABLE mq_message (
    id BIGINT PRIMARY KEY,
    topic VARCHAR(64) NOT NULL,
    tag VARCHAR(64),
    body TEXT NOT NULL,
    status TINYINT DEFAULT 0, -- 0:待发送 1:已发送 2:发送失败
    retry_count INT DEFAULT 0,
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    KEY idx_status_time (status, create_time)
);
```

```java
@Transactional
public void createOrder(OrderDTO dto) {
    // 1. 保存订单
    orderMapper.insert(dto);
    // 2. 保存消息（同一事务）
    MqMessage message = new MqMessage();
    message.setTopic("ORDER_CREATED");
    message.setBody(JSON.toJSONString(dto));
    mqMessageMapper.insert(message);
}

// 定时任务扫描待发送消息
@Scheduled(fixedRate = 5000)
public void sendPendingMessages() {
    List<MqMessage> list = mqMessageMapper.selectByStatus(0, 100);
    for (MqMessage msg : list) {
        try {
            rocketMQTemplate.asyncSend(msg.getTopic(), msg.getBody());
            mqMessageMapper.updateStatus(msg.getId(), 1);
        } catch (Exception e) {
            mqMessageMapper.increaseRetry(msg.getId());
        }
    }
}
```

#### 2. 事务消息（RocketMQ）

利用 RocketMQ 事务消息机制，两阶段提交保证一致性。

### 消费端可靠性

#### 至少一次消费 + 幂等设计

```java
@Service
@RocketMQMessageListener(topic = "ORDER_CREATED", consumerGroup = "order-consumer")
public class OrderCreatedListener implements RocketMQListener<OrderEvent> {

    @Autowired
    private IdempotencyService idempotencyService;

    @Override
    public void onMessage(OrderEvent event) {
        String idempotencyKey = event.getMsgId();
        if (!idempotencyService.tryLock(idempotencyKey, 24, TimeUnit.HOURS)) {
            log.warn("消息重复消费，msgId: {}", idempotencyKey);
            return;
        }
        // 处理业务
        notificationService.sendOrderNotification(event);
    }
}
```

### 死信队列

消费失败的消息，重试 3 次后进入死信队列，人工介入处理：

```java
@RocketMQMessageListener(
    topic = "%DLQ%order-consumer",
    consumerGroup = "dlq-consumer"
)
public class DLQListener implements RocketMQListener<MessageExt> {
    @Override
    public void onMessage(MessageExt message) {
        log.error("死信消息: {}", message);
        // 发送告警通知运维
        alertService.sendAlert("死信消息", message);
    }
}
```

---

## 多租户上下文传递

消息生产者将 `tenant_id` 放入消息属性，消费者还原上下文：

### 生产者

```java
Message message = MessageBuilder
    .withPayload(event)
 .setHeader("tenantId", TenantContext.getTenantId())
    .build();
rocketMQTemplate.asyncSend("TOPIC", message);
```

### 消费者

```java
@Override
public void onMessage(MessageExt message) {
    Long tenantId = Long.valueOf(message.getUserProperty("tenantId"));
    TenantContext.setTenantId(tenantId);
    try {
        // 处理业务
    } finally {
        TenantContext.clear();
    }
}
```

---

## 延时消息

### 使用场景

| 延时时间 | 场景 |
|----------|------|
| 5 分钟 | 支付超时取消 |
| 30 分钟 | 订单自动确认收货提醒 |
| 24 小时 | 未评价订单自动好评 |
| 7 天 | 试用期到期提醒 |

### RocketMQ 延时级别

```java
// RocketMQ 内置延时级别（1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h）
rocketMQTemplate.syncSendDelayTimeSeconds("TOPIC", message, 300); // 5分钟
```

### 自定义延时队列（精确延时）

使用 Redis ZSet 或 RabbitMQ 死信队列实现任意时间延时：

```java
// Redis ZSet 实现
redisTemplate.opsForZSet().add("delay:order", orderId, System.currentTimeMillis() + 300000);

// 定时扫描
@Scheduled(fixedRate = 1000)
public void processDelayTasks() {
    Set<String> ids = redisTemplate.opsForZSet()
        .rangeByScore("delay:order", 0, System.currentTimeMillis());
    for (String id : ids) {
        redisTemplate.opsForZSet().remove("delay:order", id);
        orderService.cancelOrder(Long.valueOf(id));
    }
}
```

---

## 消息顺序性

### 全局顺序 vs 分区顺序

| 类型 | 说明 | 性能 | 适用场景 |
|------|------|------|----------|
| 全局顺序 | 所有消息严格有序 | 低 | 极少场景 |
| 分区顺序 | 同一 key 的消息有序 | 中 | 订单状态变更 |

### 分区顺序示例

```java
// 生产者：按订单 ID 分区
rocketMQTemplate.syncSendOrderly("ORDER_STATUS", message, String.valueOf(orderId));

// 消费者：单线程消费保证顺序
@RocketMQMessageListener(
    topic = "ORDER_STATUS",
    consumeMode = ConsumeMode.ORDERLY
)
public class OrderStatusListener implements RocketMQListener<OrderStatusEvent> {
    @Override
    public void onMessage(OrderStatusEvent event) {
        // 同一订单 ID 的消息按顺序处理
        orderService.updateStatus(event);
    }
}
```

---

## 注意事项

1. **禁止在消息中传递大对象**：消息体大小不超过 256KB，大数据量传 ID
2. **消息消费必须幂等**：网络重试、 rebalance 都可能导致重复消费
3. **消费异常处理**：业务异常记录日志并告警，系统异常重试，禁止无限重试
4. **消费速率控制**：消费速度跟不上生产速度时，增加消费者实例或限流生产
5. **消息轨迹**：关键业务消息开启轨迹追踪，便于问题排查
