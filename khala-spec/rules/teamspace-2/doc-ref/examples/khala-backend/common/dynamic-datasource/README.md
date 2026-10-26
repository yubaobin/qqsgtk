# dynamic-datasource — 动态数据源

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-commons/khala-commons-data/khala-dynamic-datasource-spring-boot-starter/

## 何时参考此示例

- 需要同时访问多个数据库（如主库 + 只读从库）
- 需要在运行时动态切换数据源
- 需要实现读写分离或分库分表

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 数据源切换 | master/datasource-switch.java | @DS 注解切换数据源 |
| 自定义数据源策略 | master/custom-strategy.java | 实现 DynamicDataSourceCustomizer |
| 数据源配置 | master/datasource-config.yml | 多数据源 YAML 配置 |
