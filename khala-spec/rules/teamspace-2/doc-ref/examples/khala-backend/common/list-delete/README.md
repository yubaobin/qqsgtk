# list-delete — 列表删除

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/list-delete/

## 何时参考此示例

- 需要实现批量删除功能
- 需要物理删除与逻辑删除切换
- 需要删除前数据校验

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 批量删除 | master/batch-delete.java | 根据 ID 列表批量删除 |
| 逻辑删除 | master/logic-delete.java | MyBatis Plus 逻辑删除 |
| 删除校验 | master/delete-validate.java | 删除前关联校验 |
