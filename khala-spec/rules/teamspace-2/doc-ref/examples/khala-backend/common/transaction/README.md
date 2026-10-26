# transaction — 事务管理

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/transaction/

## 何时参考此示例

- 需要声明式本地事务管理
- 需要分布式事务一致性（Seata）
- 需要理解事务传播行为和隔离级别

## 版本示例选择

| 你的 Khala 版本 | 查看目录 | 说明 |
|----------------|---------|------|
| 7.1.0+ | [7.1/](7.1/) | 最新写法 |
| 7.0.0+ | [7.0/](7.0/) | 兼容写法 |

## 快速查找（以 7.1/ 为例）

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 本地事务 | 7.1/local-transaction.java | @Transactional 基本使用 |
| 事务传播 | 7.1/propagation.java | REQUIRED、REQUIRES_NEW 等 |
| 隔离级别 | 7.1/isolation.java | READ_COMMITTED、REPEATABLE_READ |
| 分布式事务 | 7.1/global-transaction.java | @GlobalTransactional + Seata |
| 只读事务 | 7.1/read-only.java | @Transactional(readOnly=true) |

## 版本差异说明

| 版本 | 差异说明 |
|------|---------|
| 7.1.0+ | 增强事务监控指标，优化 Seata 集成 |
| 7.0.0+ | 基础本地事务和分布式事务能力 |

> **注意**: 示例代码待补充，仅保留目录骨架。
