<!-- khala-spec:path-scope: user-project -->
# Khala 前端源码知识库

本目录是 Khala 前端框架（UX-UP）的源码知识库，按功能模块组织。

## 目录组织

每个子目录对应一个前端功能模块（如 `ux-up/`、`hooks/`），内容包含：
- `README.md`：模块导读
- `*.md`：具体知识文章

## 已知模块

| 模块 | 路径 | 说明 |
|------|------|------|
| ux-up | ux-up/ | UX-UP 组件库（待补充） |
| hooks | hooks/ | 通用 Hooks 工具函数（待补充） |
| store | store/ | 状态管理（Pinia）（待补充） |
| styles | styles/ | 全局样式（待补充） |
| utils | utils/ | 工具函数（待补充） |

## 同步机制

`khala-spec rules` 命令会从 KB 仓库的 `khala-spec/doc-ref/src-wiki/khala-frontend/` 复制整个目录到用户项目的 `khala-spec/doc-ref/src-wiki/khala-frontend/`。
