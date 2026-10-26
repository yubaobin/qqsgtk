# data-permission — 数据权限

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-data-permission-spring-boot-starter
> **相关 Wiki**: [3.3.3 数据权限](file:///d:/workspace/eshore/smartpub/code/khala/refactor-ui/khala-ms-src-7.x/khala-wiki/3开发指南/3.3权限管理/3.3.3数据权限.md)

## 何时参考此示例

- 需要实现行级数据权限控制（不同用户看到不同数据）
- 需要按部门/角色/区域进行数据隔离
- 需要在 MyBatis 查询中自动注入数据权限条件
- 需要临时忽略数据权限（如管理员导出全部数据）

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 数据权限注解 | master/data-scope.java | @DataPermission 注解使用（启用/禁用/指定规则） |
| 数据权限级别 | master/scope-type.java | ALL/CURRENT/CURRENT_AND_CHILDREN/CUSTOM/SELF |
| 权限上下文 | master/permission-context.java | DataPermissionContextHolder / DataPermissionUtils |
| MyBatis 拦截器 | master/mybatis-interceptor.java | KhalaDataPermissionInterceptor 自动配置说明 |
| 使用示例 | master/usage-example.java | Service 层典型用法、自定义规则 |
