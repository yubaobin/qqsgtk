<!-- khala-spec:path-scope: user-project -->
# Khala 框架源码

本目录存放 Khala 框架的源代码参考。

## 目录结构

```
khala-spec/doc-ref/src/
├── README.md              ← 本文件
├── khala-backend/         ← 后端 55+ Khala starter 模块源码
│                           (由 khala-spec rules 命令从 khala-ms-src 仓库动态拉取)
└── khala-frontend/        ← 前端 UX-UP 组件参考实现
```

## 拉取机制

- **后端模块**：用户执行 `khala-spec rules` 时，`pullDocRefRepo` 会克隆 `https://code.srdcloud.cn/GG21BACK01/khala-ms-src` 仓库，按 `DOC_REF_MODULES` 映射将 55+ 模块复制到 `khala-spec/doc-ref/src/khala-backend/{module-name}/`。
- **前端参考**：本目录的 `khala-frontend/` 内容由 `khala-spec rules` 从 KB 仓库的 `khala-spec/doc-ref/src/khala-frontend/` 直接复制。

## 版本管理

- 后端模块源码与项目 pom.xml 中的 Khala 版本对齐（通过版本匹配引擎）
- 前端参考实现随 KB 仓库 master 分支更新
