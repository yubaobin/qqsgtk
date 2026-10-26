# validation — 数据校验

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/validation/

## 何时参考此示例

- 需要对请求参数进行合法性校验
- 需要使用分组校验区分新增/更新场景
- 需要自定义校验注解处理特殊业务规则
- 需要统一校验失败返回格式

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 基础校验注解 | master/basic-validation.java | @NotNull、@Size、@Pattern 等 |
| 分组校验 | master/group-validation.java | CreateGroup、UpdateGroup 分组 |
| 自定义校验注解 | master/custom-annotation.java | @Phone、@IdCard 自定义注解 |
| 校验器实现 | master/custom-validator.java | ConstraintValidator 实现 |
| 全局校验异常 | master/validation-exception.java | MethodArgumentNotValidException 处理 |
