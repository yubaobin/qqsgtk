<!-- khala-spec:path-scope: user-project -->
# Khala 前端场景化示例

本目录包含 6 个 Khala 前端开发场景的代码示例，按 UX-UP 版本号组织。

## 目录结构

```
khala-frontend/
├── README.md            ← 本文件（模块总览索引）
├── common/              ← 6 个场景统一存放
│   ├── README.md        ← 场景开发指南
│   ├── crud-page/       ← 标准 CRUD 页面
│   ├── api/             ← API 接口（已更新的样例）
│   └── ... (6 个)
├── 1.0.0/               ← UX-UP 1.0.0+ 版本特殊示例
└── 1.0.1/               ← UX-UP 1.0.1+ 版本特殊示例
```

## 使用顺序

1. 优先查看 `1.x.x/<scenario>/`（如存在）
2. 回退到 `common/<scenario>/`

## 相关资源

- 规范速查：`khala-spec/.rules/frontend/*.md`
- 详解文档：`khala-spec/.rules/frontend/docs/`
- 前端参考实现：`khala-spec/doc-ref/src/khala-frontend/`
