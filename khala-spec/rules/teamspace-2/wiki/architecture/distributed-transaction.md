# 分布式事务规范

本文档规定 Khala 项目在跨服务、跨数据库场景下保证数据一致性的方案选型与使用规范。

---

## 一、核心原则

> **优先保证最终一致性，仅在必要时追求强一致性。**

分布式事务有性能损耗和复杂度代价，应遵循以下决策顺序：

1. **能否避免分布式事务？** → 通过业务设计规避
2. **能否接受最终一致性？** → 使用异步消息 + 本地事务表 + 补偿机制
3. **是否必须强一致性？** → 使用 Seata AT 模式
4. **是否涉及长流程？** → 使用 Saga 状态机模式

---

## 二、方案选型

| 场景 | 推荐方案 | 一致性 | 性能 | 复杂度 |
|------|----------|--------|------|--------|
| 单服务多数据源 | Seata AT 模式 | 强一致 | 中 | 低 |
| 跨服务短事务（< 3 服务） | Seata AT 模式 | 强一致 | 中 | 中 |
| 跨服务长事务、高并发 | Saga 状态机 + 补偿 | 最终一致 | 高 | 高 |
| 异步通知类（订单→通知） | 本地事务表 + 可靠消息 | 最终一致 | 高 | 低 |
| 资金类、对账敏感 | TCC 模式 | 强一致 | 低 | 高 |

---

## 三、Seata AT 模式

### 3.1 适用条件

- 单服务内操作多个数据源
- 跨服务调用链路短（2~3 个服务）
- 并发量不高（< 500 TPS）
- 业务逻辑简单，回滚无副作用

### 3.2 使用规范

```java
@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskMapper taskMapper;
    @Autowired
    private TaskHistoryMapper historyMapper;

    @GlobalTransactional(name = "create-task", rollbackFor = Exception.class)
    @Override
    public void createTask(TaskCreateDTO dto) {
        // 操作主库
        TaskEntity task = TaskConvert.INSTANCE.toEntity(dto);
        taskMapper.insert(task);

        // 操作历史库（不同数据源）
        TaskHistoryEntity history = new TaskHistoryEntity();
        history.setTaskId(task.getId());
        history.setAction("CREATE");
        historyMapper.insert(history);

        // 若此处抛出异常，Seata 会自动回滚两个数据源
    }
}
```

### 3.3 注意事项

| 注意项 | 说明 |
|--------|------|
| 避免大事务 | `@GlobalTransactional` 包裹范围尽量小 |
| 禁止远程调用阻塞 | 事务内调用外部 HTTP/RPC 应设置超时 |
| 回滚副作用 | 涉及发送短信、推送等操作无法自动回滚，需业务补偿 |
| 全局锁竞争 | 高并发场景下全局行锁可能成为瓶颈 |

---

## 四、本地事务表 + 可靠消息

### 4.1 适用条件

- 跨服务异步场景
- 允许秒级延迟的最终一致性
- 高并发、高吞吐要求

### 4.2 实现模式

参见[消息队列与异步处理](messaging-async.md)中的"本地事务表"方案。

核心流程：

```
业务操作 + 消息记录（同一本地事务）
        ↓
    提交事务
        ↓
    异步扫描发送消息
        ↓
    消费端幂等处理
        ↓
    消费成功后删除/更新消息记录
```

### 4.3 消息表设计

```sql
CREATE TABLE mq_message (
    id BIGINT PRIMARY KEY COMMENT '消息ID，雪花算法',
    topic VARCHAR(64) NOT NULL COMMENT '消息主题',
    tag VARCHAR(64) COMMENT '消息标签',
    body TEXT NOT NULL COMMENT '消息体（JSON）',
    status TINYINT NOT NULL DEFAULT 0 COMMENT '状态：0-待发送 1-已发送 2-发送成功 3-发送失败',
    retry_count INT NOT NULL DEFAULT 0 COMMENT '重试次数',
    max_retry INT NOT NULL DEFAULT 5 COMMENT '最大重试次数',
    next_retry_time DATETIME COMMENT '下次重试时间',
    create_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uk_biz (topic, tag, biz_key) COMMENT '业务唯一键防重',
    KEY idx_status_time (status, next_retry_time)
) COMMENT='可靠消息表';
```

---

## 五、Saga 状态机模式

### 5.1 适用条件

- 长事务业务流程（如审批流）
- 涉及多个服务，部分服务不支持 AT 模式
- 需要可视化编排和人工介入

### 5.2 状态机定义示例

```json
{
  "startState": "CreateTask",
  "states": {
    "CreateTask": {
      "type": "serviceTask",
      "serviceName": "taskServiceImpl",
      "methodName": "create",
      "input": ["$.[request]"],
      "output": "$.[taskId]",
      "next": "CreateApproval"
    },
    "CreateApproval": {
      "type": "serviceTask",
      "serviceName": "approvalServiceImpl",
      "methodName": "create",
      "input": ["$.[taskId]"],
      "next": "SendNotification",
      "catch": [
        {
          "error": "BizException",
          "next": "CompensateCreateTask"
        }
      ]
    },
    "SendNotification": {
      "type": "scriptTask",
      "scriptType": "groovy",
      "script": "notificationService.send($.[taskId])",
      "next": "Succeed"
    },
    "CompensateCreateTask": {
      "type": "serviceTask",
      "serviceName": "taskServiceImpl",
      "methodName": "delete",
      "input": ["$.[taskId]"],
      "next": "Fail"
    },
    "Succeed": { "type": "succeed" },
    "Fail": { "type": "fail" }
  }
}
```

### 5.3 补偿原则

- 补偿操作必须是**幂等**的
- 补偿操作应记录补偿日志，便于审计
- 补偿失败需进入人工处理队列

---

## 六、TCC 模式

### 6.1 适用条件

- 资金操作、库存扣减等对一致性要求极高的场景
- 能接受业务侵入（需实现 Try/Confirm/Cancel 三个方法）

### 6.2 接口定义规范

```java
public interface InventoryTccAction {

    /**
     * 预留库存
     */
    @TwoPhaseBusinessAction(name = "inventoryDeduct", commitMethod = "commit", rollbackMethod = "rollback")
    boolean tryDeduct(@BusinessActionContextParameter(paramName = "skuId") Long skuId,
                      @BusinessActionContextParameter(paramName = "count") Integer count);

    /**
     * 确认扣减
     */
    boolean commit(BusinessActionContext context);

    /**
     * 释放预留
     */
    boolean rollback(BusinessActionContext context);
}
```

### 6.3 状态设计

| 阶段 | 数据状态 | 说明 |
|------|----------|------|
| Try 前 | 可用库存 = 100 | 初始状态 |
| Try 后 | 可用库存 = 90，冻结库存 = 10 | 预留资源 |
| Confirm 后 | 可用库存 = 90，冻结库存 = 0 | 正式扣减 |
| Cancel 后 | 可用库存 = 100，冻结库存 = 0 | 释放预留 |

---

## 七、幂等性保障

所有分布式事务参与方必须实现幂等：

```java
@Service
public class OrderConsumer {

    @Autowired
    private IdempotencyService idempotencyService;

    @KafkaListener(topics = "order_created")
    public void onOrderCreated(OrderEvent event) {
        String key = "order:" + event.getOrderId() + ":" + event.getMsgId();

        if (!idempotencyService.tryLock(key, 24, TimeUnit.HOURS)) {
            log.warn("消息重复消费，已忽略: {}", key);
            return;
        }

        // 执行业务逻辑
        processOrder(event);
    }
}
```

---

## 八、监控与告警

| 监控项 | 阈值 | 级别 |
|--------|------|------|
| 全局事务超时 | > 30s | P1 |
| 事务回滚率 | > 5% | P1 |
| Saga 补偿次数 | > 10/h | P2 |
| 消息表积压 | > 1000 条 | P2 |
| Seata TC 连接数 | > 80% 上限 | P1 |

---

## 九、禁止事项

1. **禁止在 `@GlobalTransactional` 中执行定时任务或异步操作**
2. **禁止在事务内调用不可回滚的外部服务**（如发送短信后无法撤回）
3. **禁止忽略回滚异常**，必须记录回滚失败日志并告警
4. **禁止用分布式事务解决本地事务问题**，优先优化单服务内事务
