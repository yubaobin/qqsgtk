# exception — 异常处理

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/exception/

## 何时参考此示例

- 需要统一处理业务异常和系统异常
- 需要定义规范的错误码体系
- 需要统一 API 响应格式
- 需要记录异常日志并告警

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 业务异常定义 | master/business-exception.java | BusinessException 自定义异常 |
| 错误码枚举 | master/error-code.java | 统一错误码定义 |
| 全局异常处理 | master/global-exception.java | @RestControllerAdvice 统一处理 |
| 统一响应封装 | master/result.java | Result<T> 统一响应结构 |
