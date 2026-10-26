# cache — 缓存操作

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/cache/

## 何时参考此示例

- 需要集成 Redis 缓存加速数据访问
- 需要使用 Spring Cache 注解简化缓存操作
- 需要防止缓存穿透、缓存击穿、缓存雪崩
- 需要实现分布式缓存一致性

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 缓存注解使用 | master/cache-annotation.java | @Cacheable、@CachePut、@CacheEvict |
| RedisTemplate 操作 | master/redis-template.java | 基础 CRUD、过期时间、批量操作 |
| 缓存穿透防护 | master/cache-penetration.java | 布隆过滤器、空值缓存 |
| 缓存击穿防护 | master/cache-breakdown.java | 互斥锁、逻辑过期 |
| 缓存雪崩防护 | master/cache-avalanche.java | 随机过期时间、多级缓存 |
| 缓存配置 | master/cache-config.yml | Redis 连接池、序列化配置 |
