# file — 文件管理

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/file/

## 何时参考此示例

- 需要实现文件的上传、下载、删除、预览等操作
- 需要对接多种存储适配器（本地、MinIO、阿里云 OSS、华为云 OBS）
- 需要管理文件元数据（文件名、路径、大小、MIME 类型）

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 文件上传 | master/upload.java | 单文件/多文件上传接口 |
| 文件下载 | master/download.java | 文件流下载 |
| 文件删除 | master/delete.java | 根据文件 ID 删除 |
| 存储适配器配置 | master/storage-config.yml | 本地/MinIO/OSS 配置 |
| 文件服务使用 | master/file-service.java | FileService 常用方法 |
