<!-- khala-spec:path-scope: user-project -->
# Khala 后端源码知识库

本目录是 Khala 后端框架的源码知识库，按 `khala-ms-src` 仓库的功能模块组织。

## 目录组织

每个子目录对应一个后端功能模块（如 `admin-api/`、`khala-common-core/`），内容包含：
- `README.md`：模块导读（功能、依赖、用法）
- `*.md`：具体知识文章（最佳实践、踩坑记录、源码分析等）

## 已知模块

| 模块 | 路径 | 说明 |
|------|------|------|
| admin-api | admin-api/ | 后台管理 API 模块 |
| admin-biz | admin-biz/ | 后台管理业务模块 |
| khala-common-core | khala-common-core/ | 核心工具类 |
| khala-db-spring-boot-starter | khala-db-spring-boot-starter/ | 数据库 starter |
| khala-actuator-spring-boot-starter | khala-actuator-spring-boot-starter/ | Actuator starter |
| ... | ... | （待补充） |

## 同步机制

`khala-spec rules` 命令会从 KB 仓库的 `khala-spec/doc-ref/src-wiki/khala-backend/` 复制整个目录到用户项目的 `khala-spec/doc-ref/src-wiki/khala-backend/`。
