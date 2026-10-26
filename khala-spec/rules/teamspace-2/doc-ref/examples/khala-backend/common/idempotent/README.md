# idempotent — 幂等性/防重复提交

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-commons/khala-commons-tool/khala-idempotent-spring-boot-starter/

## 何时参考此示例

- 需要防止前端重复提交（如双击按钮）
- 需要保证接口的幂等性
- 需要在指定时间内相同参数的请求只执行一次

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 防重复提交注解 | master/idempotent-annotation.java | @Idempotent 注解使用 |
| 幂等配置 | master/idempotent-config.yml | 幂等间隔时间、开关配置 |
