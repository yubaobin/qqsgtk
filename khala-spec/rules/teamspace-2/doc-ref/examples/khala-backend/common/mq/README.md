# mq — 消息队列

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/mq/

## 何时参考此示例

- 需要实现异步消息发送与消费
- 需要处理延迟消息
- 需要保证分布式事务一致性（事务消息）

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 发送普通消息 | master/send-message.java | RocketMQTemplate 发送消息 |
| 消费消息 | master/consume-message.java | @RocketMQMessageListener 消费 |
| 延迟消息 | master/delay-message.java | 延迟级别发送 |
| 事务消息 | master/transaction-message.java | 分布式事务一致性 |
| 顺序消息 | master/ordered-message.java | 顺序发送与消费 |
