# Khala 后端场景通用示例

本目录包含 30 个 Khala 后端开发场景的**跨版本通用代码示例**。各场景独立组织，含场景开发指南（README.md）和示例代码文件。

## 场景清单

| 场景 | 目录 | 说明 |
|------|------|------|
| 标准 CRUD | crud/ | Entity → Mapper → Service → Controller 完整流程 |
| 认证授权 | auth/ | 登录流程、权限校验、获取当前用户、Feign 远程查用户 |
| 安全防护 | security/ | 字段加密、数据脱敏、防重复提交、API 签名、XSS 防护 |
| 多租户 | multi-tenant/ | 租户上下文、租户切换 |
| 文件操作 | file/ | OSS 上传、Excel 导出、文件下载 |
| 查询场景 | query/ | 分页查询、多表关联、动态条件 |
| 事务场景 | transaction/ | 多表事务、分布式事务 |
| 消息队列 | mq/ | Kafka 生产者/消费者、RocketMQ |
| 定时任务 | schedule/ | XXL-Job 定时任务 |
| 国际化 | i18n/ | 国际化消息使用 |
| 工作流 | workflow/ | Warm Flow 审批流 |
| 日期格式处理 | date-format/ | Jackson 日期序列化/反序列化配置 |
| 文件导入/导出 | file-import-export/ | Excel 导入/导出、CSV 处理 |
| 文件上传/附件 | file-upload/ | 单文件/批量上传、OSS 直传 |
| 用户 ID 转用户名 | user-display/ | Feign 批量查用户名 |
| 列表删除按钮 | list-delete/ | 软删除、权限校验、二次确认 |
| 缓存操作 | cache/ | Redis 缓存、@Cacheable、缓存穿透/击穿/雪崩防护 |
| 日志审计 | log-audit/ | 操作日志、审计字段、链路追踪 TraceId |
| 数据校验 | validation/ | Bean Validation、分组校验、自定义校验注解 |
| 异常处理 | exception/ | 全局异常拦截、业务异常、统一错误码 |
| 数据权限 | data-permission/ | 行级数据权限、部门隔离、MyBatis 自动注入 |
| 分布式锁 | distributed-lock/ | @Lock/@Klock 注解、编程式加锁、Redis/Redisson 锁 |
| 幂等性/防重复提交 | idempotent/ | @Idempotent 注解防重复请求 |
| 动态数据源 | dynamic-datasource/ | @DS 注解切换数据源、读写分离、自定义策略 |
| 全文搜索 | elasticsearch/ | ES 文档 CRUD、全文检索、聚合查询、高亮 |
| 短信发送 | sms/ | SmsManager 发送验证码/通知短信、多供应商切换 |
| 邮件发送 | email/ | EmailManager 发送验证码/通知邮件、模板配置 |
| 敏感词检测 | sensitive-word/ | 敏感词检测/过滤/高亮、DFA/Bucket/TTMP 算法 |
| 流量控制 | sentinel/ | Sentinel 限流降级、@SentinelResource 注解、Dashboard 配置 |
| 验证码 | captcha/ | 图形验证码、滑块验证码、短信/邮箱验证码、@Captcha 自动校验 |

## 版本特定示例

通用版本，使用master下的代码示例，对于特定 Khala 版本（如 7.0.1），查看同级的 `{版本号}/` 目录。
