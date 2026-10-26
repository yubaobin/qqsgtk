# 分层架构

## 概述

分层架构（Layered Architecture）是一种将系统按职责水平切分的经典架构模式。每一层只与直接相邻的层交互，上层依赖下层，下层不感知上层。

Khala 后端采用四层结构：**Controller -> Service -> Mapper -> Entity**，与《目录结构规范》中的模块组织方式保持一致。

---

## 典型分层

| 层级 | 职责 | 对应包/目录 | 示例类 |
|------|------|------------|--------|
| 表现层（Presentation） | 接收 HTTP 请求、参数校验、返回响应 | `controller/` | `TaskController` |
| 应用层（Application） | 编排用例、事务控制、权限校验 | `service/`、`service/impl/` | `TaskServiceImpl` |
| 数据访问层（Data Access） | 执行 SQL、数据库交互 | `mapper/` | `TaskMapper` |
| 实体层（Entity） | 定义数据库实体与表映射 | `entity/` | `TaskEntity` |

> **说明**：Khala 项目当前以数据驱动为主，业务逻辑主要沉淀在 `Service` 层；若后续引入领域驱动设计（DDD），可将复杂业务下沉到独立的 `domain/` 包。

> 各层职责详解、包结构示例和代码模板详见 [khala-framework-guide.md](../../rules/backend/docs/khala-framework-guide.md)

---

## 依赖原则

- **单向依赖**：上层 -> 下层，禁止反向依赖
- **同层隔离**：`service/` 只暴露接口，实现放在 `service/impl/`
- **禁止跨层调用**：Controller 不应直接调用 Mapper
- **依赖倒置（可选）**：若需解耦，可在 `service/` 定义接口，由 `mapper/` 或外部模块实现

---

## 适用场景

- 业务逻辑以数据操作为主的系统（CRUD 占比高）
- 团队规模较大，需要明确代码边界
- 需要支持多种前端渠道（Web、移动端、OpenAPI）
- 与 Khala 现有目录结构规范兼容，降低认知成本

---

## 注意事项

1. **事务控制在 Service 层**：`@Transactional` 应加在 Service 方法上，禁止在 Controller 或 Mapper 中声明事务
2. **DTO/VO 不穿透到 Mapper**：Service 层负责转换，Mapper 只接收 Entity 或简单参数
3. **Service 层不过度设计**：当前阶段以数据驱动为主，避免过早引入复杂的领域模型；若业务规则极度复杂，再考虑提取 `DomainService`
4. **跨模块调用走 RPC**：禁止直接注入其他模块的 Mapper 或 Service，应通过 `khala-xxx-api` 模块的RPC接口调用
5. **异常统一处理**：Controller 层不捕获异常，由全局异常处理器（`@RestControllerAdvice`）统一处理
