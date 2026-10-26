# log-audit — 日志与审计

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-commons/khala-commons-ops/khala-log-spring-boot-starter/

## 何时参考此示例

- 需要记录用户操作日志（增删改操作）
- 需要使用 @BizAuditLog 注解实现审计日志
- 需要实现审计字段自动填充（createBy、updateTime 等）
- 需要集成链路追踪（TraceId）排查问题
- 需要统一日志格式与日志级别管理
- 需要了解审计日志表结构设计

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 操作日志注解 | master/operation-log.java | @BizAuditLog 注解使用、SpEL 表达式、BizAuditLogContext |
| 审计字段自动填充 | master/audit-field.java | @TableField(fill=FieldFill.INSERT)、MetaObjectHandler |
| 链路追踪 TraceId | master/trace-id.java | MDC 传递 TraceId、MdcTraceUtils 使用 |
| 日志配置 | master/log-config.yml | application.yml 审计日志开关、Logback 配置、异步日志 |
| 审计日志实体 | master/audit-entity.java | khala_sys_logger_audit 表结构、BizAuditLogRecord 模型 |
