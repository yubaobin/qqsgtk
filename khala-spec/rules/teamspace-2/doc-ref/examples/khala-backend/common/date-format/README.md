# date-format — 日期格式化

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/date-format/

## 何时参考此示例

- 需要统一前后端日期时间格式交互
- 需要自定义 Jackson 日期序列化/反序列化规则
- 需要处理 LocalDateTime / Date / 时间戳 等多种日期类型

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 全局日期格式配置 | master/global-config.yml | Jackson 日期格式统一配置 |
| 实体字段日期格式化 | master/entity-annotation.java | @JsonFormat 注解使用 |
| 自定义日期转换器 | master/custom-converter.java | Converter 实现日期转换 |
| 日期工具类使用 | master/date-utils.java | DateUtil 常用方法 |
