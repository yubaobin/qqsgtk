# elasticsearch — 全文搜索

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-commons/khala-commons-data/khala-elasticsearch-spring-boot-starter/

## 何时参考此示例

- 需要使用 Elasticsearch 实现全文搜索
- 需要对文档进行索引、查询、聚合分析
- 需要 Khala ES 连接池优化配置

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 文档 CRUD 操作 | master/es-crud.java | 索引创建、文档增删改查 |
| 搜索查询 | master/es-search.java | 全文搜索、聚合查询、高亮 |
| ES 配置 | master/es-config.yml | 连接池、认证、Khala 扩展配置 |
