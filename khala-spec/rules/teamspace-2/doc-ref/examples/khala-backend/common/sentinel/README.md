# sentinel — 流量控制

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-commons/khala-commons-governance/khala-sentinel-spring-boot-starter/

## 何时参考此示例

- 需要对接口进行限流保护
- 需要实现服务熔断降级
- 需要配置 Sentinel 流控规则

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 限流降级 | master/sentinel-flow.java | @SentinelResource 注解使用 |
| Sentinel 配置 | master/sentinel-config.yml | Dashboard、数据源配置 |
