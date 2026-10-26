<!-- khala-spec:path-scope: user-project -->
# Khala 后端框架源码

本目录**默认无文件**。当用户执行 `khala-spec rules` 时，`pullDocRefRepo` 函数会从 `https://code.srdcloud.cn/GG21BACK01/khala-ms-src` 仓库克隆指定 Khala 版本的源码，按 `DOC_REF_MODULES` 映射将 55+ 模块复制到此目录下。

## 模块清单（55+ 个）

按 `khala-ms-src` 仓库实际包含的模块填充，主要分为：

- **khala-business/**：admin-api, admin-biz, file-biz, log-biz, search-center/* 等业务模块
- **khala-commons/**：所有 starter 子模块（khala-actuator, khala-api, khala-auth-client 等 40+ 个）
- **khala-module-ai/**：khala-ai, khala-mcp, khala-module-ai-{api,biz}
- **khala-module-flow/**：warm-flow 相关模块
- **顶层模块**：khala-gateway, khala-uaa, khala-transaction, khala-monitor

## 同步机制

```
$ khala-spec rules
  → 检测项目 pom.xml 的 Khala 版本
  → 克隆 khala-ms-src 仓库的对应 ref
  → 遍历 DOC_REF_MODULES 列表
  → 复制各模块的 src/ 到 khala-spec/doc-ref/src/khala-backend/{module-name}/
```

## 注意事项

- 本目录在 KB 仓库中只保留 README（占位），实际模块内容在用户项目端
- 用户项目的 `khala-spec/doc-ref/src/khala-backend/` 会被 `.gitignore` 排除
