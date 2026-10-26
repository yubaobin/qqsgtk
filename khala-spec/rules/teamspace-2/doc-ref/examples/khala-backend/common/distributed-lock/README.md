# distributed-lock — 分布式锁

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-commons/khala-commons-tool/khala-lock-spring-boot-starter/

## 何时参考此示例

- 需要防止并发操作导致数据不一致
- 需要实现分布式环境下的互斥访问
- 需要对共享资源加锁保护

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| @Lock 注解方式 | master/lock-annotation.java | @Lock 注解声明式加锁 |
| @Klock 注解方式 | master/klock-annotation.java | @Klock 注解（支持自定义业务Key） |
| 编程式加锁 | master/lock-programmatic.java | DistributedLock 接口手动加锁/解锁 |
| 锁配置 | master/lock-config.yml | Redis/Redisson 锁配置 |
