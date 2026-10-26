<!-- khala-spec:path-scope: user-project -->
# Khala 源码知识库

本目录是基于 Khala 框架源码衍生的知识文章库。源码（`khala-spec/doc-ref/src/`）是 git 同步的"事实"，本目录是人工维护的"知识"。

## 目录结构

```
khala-spec/doc-ref/src-wiki/
├── README.md              ← 本文件
├── khala-backend/         ← 后端源码知识（模块导读、最佳实践、踩坑记录）
│   ├── README.md
│   ├── admin-api/
│   ├── khala-common-core/
│   └── ... (各功能模块子目录)
└── khala-frontend/        ← 前端源码知识
    ├── README.md
    ├── ux-up/
    ├── hooks/
    └── ... (各功能模块子目录)
```

## 内容维护

- **后端 wiki**：基于 `khala-ms-src` 源码总结的模块使用指南
- **前端 wiki**：基于 `khala-frontend` 源码总结的组件使用指南

新增模块 wiki 时，按 `khala-spec` 实际功能模块名创建子目录，每个子目录内放 `README.md`（导读）+ 多个 `*.md`（具体知识文章）。
