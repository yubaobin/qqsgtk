<!-- khala-spec:path-scope: user-project -->
# 文件上传规范

## 基本原则

- 使用 `ux-upload` 组件，通过 `http-request` 自定义上传逻辑
- 上传接口统一使用 `file` 模块的 `upload` 方法 (`@/api/modules/file/index.js`)
- 上传文件使用 `FormData` 封装，参数名统一为 `file`
- 上传完成后调用 `clearFiles()` 清理文件列表

## upload 接口返回
| 字段 | 描述 |
| --- | --- |
| name | 文件名字 |
| presignedUrl | 文件路径(可下载) |
| id | 文件id |
| url | 文件路径 (不可下载) |
  

## 普通上传
使用 `file` 模块的 `upload` 方法，上传成功后会返回文件路径，文件路径可用于新增/编辑等功能

## 完整示例代码
- 文件上传：[upload-file.vue](/doc-ref/examples/khala-frontend/upload/upload-file.vue)
- 图片上传：[upload-image.vue](/doc-ref/examples/khala-frontend/upload/upload-image.vue)

## 注意事项

- `ux-upload` 必须设置 `action=""` 并使用 `:http-request` 自定义上传，禁止使用默认 action
- 上传完成后必须调用 `clearFiles()` 清理，否则再次选择同名文件不会触发上传
