# Khala 知识库 — 方法论与领域知识

> **适用版本**: 全版本通用

---

## 架构模式 (architecture/)

系统级技术决策与宏观架构设计。

- [分层架构](architecture/layered-architecture.md) - Controller / Service / Mapper / Entity 四层结构、依赖原则、适用场景
- [缓存策略](architecture/caching-strategy.md) — 多级缓存架构、缓存模式、一致性策略、Spring Cache 使用规范
- [配置管理](architecture/configuration-management.md) — 多环境配置、敏感配置加密、动态配置、K8s ConfigMap/Secret
- [部署与发布约束](architecture/deployment-constraints.md) — 无状态设计、优雅停机、容器化规范、发布策略
- [异常与日志规范](architecture/exception-logging.md) — 异常分层体系、错误码规范、日志规范、TraceID 全链路传递
- [消息队列与异步处理](architecture/messaging-async.md) — 消息可靠性、延时消息、顺序性、死信队列、多租户上下文传递
- [多租户](architecture/multi-tenant.md) — 隔离方案对比、共享 Schema 实现、租户配置
- [监控与可观测性](architecture/observability.md) — 健康检查、链路追踪、指标监控、告警规则、日志聚合
- [安全架构](architecture/security-architecture.md) - 认证授权、RBAC 权限模型、防注入与攻击、接口安全

---

## 设计方法论 (design/)

编码实现层面的详细设计规范。

- [CRUD 模式](design/crud-pattern.md) - CRUD 操作映射、分层职责、批量操作规范、安全注意
- [数据库设计](design/database-design.md) - 命名规范、字段设计、索引设计、SQL 编写规范、分页优化、锁机制、读写分离、多租户、数据迁移
- [文件上传与对象存储](design/file-upload-oss.md) - 上传流程、安全校验、Bucket 划分、分片上传

---

## 领域知识 (domain/)

核心业务领域的概念模型与业务规则。

- [任务管理](domain/task-management.md) — 任务实体、状态机规则、核心用例、业务规则
- [审批流](domain/approval-flow.md) — 流程定义、节点类型、审批动作、数据模型、与任务管理的关系

---

## 工程规范 (engineering/)

研发流程与代码质量保障规范。

- [代码质量与工程规范](engineering/code-quality.md) - 编码规范、单元测试、静态检查、技术债务管理
- [Git 提交规范](engineering/git-commit.md) — 提交格式、分支管理、合并要求
