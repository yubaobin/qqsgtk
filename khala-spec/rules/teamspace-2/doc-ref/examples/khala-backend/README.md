<!-- khala-spec:path-scope: user-project -->
# Khala 后端场景化示例

本目录包含 28 个 Khala 后端开发场景的代码示例，按 Khala 版本号组织。

## 目录结构

```
khala-backend/
├── README.md            ← 本文件（模块总览索引）
├── common/              ← 28 个场景统一存放
│   ├── README.md        ← 场景开发指南
│   ├── auth/            ← 认证授权
│   ├── cache/           ← 缓存操作
│   ├── captcha/         ← 验证码
│   ├── crud/            ← 标准 CRUD 模块
│   ├── data-permission/ ← 数据权限
│   ├── date-format/     ← 日期格式处理
│   ├── distributed-lock/← 分布式锁
│   ├── dynamic-datasource/ ← 动态数据源
│   ├── elasticsearch/   ← 全文搜索
│   ├── email/           ← 邮件发送
│   ├── exception/       ← 异常处理
│   ├── file/            ← 文件操作
│   ├── file-import-export/ ← 文件导入导出
│   ├── file-upload/     ← 文件上传
│   ├── i18n/            ← 国际化
│   ├── idempotent/      ← 幂等性/防重复提交
│   ├── list-delete/     ← 列表删除按钮
│   ├── log-audit/       ← 日志审计
│   ├── mq/              ← 消息队列
│   ├── multi-tenant/    ← 多租户
│   ├── query/           ← 查询场景
│   ├── schedule/        ← 定时任务
│   ├── security/        ← 安全防护
│   ├── sensitive-word/  ← 敏感词检测
│   ├── sentinel/        ← 流量控制
│   ├── sms/             ← 短信发送
│   ├── transaction/     ← 事务场景
│   └── user-display/    ← 用户 ID 转用户名
├── 7.0.0/               ← Khala 7.0.0+ 版本特殊示例
│   └── crud/            ← 镜像 common/ 结构
└── 7.0.1/               ← Khala 7.0.1+ 版本特殊示例
    └── crud/
```

## 使用顺序

1. 优先查看 `7.x.x/<scenario>/`（如存在）
2. 回退到 `common/<scenario>/`
3. 配合 `khala-spec/.rules/backend/*.md` 阅读场景对应的规范

## 相关资源

- 规范速查：`khala-spec/.rules/backend/*.md`
- 详解文档：`khala-spec/.rules/backend/docs/`
- 框架源码：`khala-spec/doc-ref/src/khala-backend/`
- 源码知识库：`khala-spec/doc-ref/src-wiki/khala-backend/`
