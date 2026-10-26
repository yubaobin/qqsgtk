# auth — 认证授权

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/auth/

## 何时参考此示例

- 微服务应用需要接入 OAuth2 认证体系
- 需要对接口进行匿名/登录/角色/权限多级访问控制
- 需要获取当前登录用户信息或实现自定义鉴权规则
- 需要集成图形/滑块/短信/邮箱验证码

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 获取当前登录用户 | master/current-user.java | 使用 LoginUserUtils / UserContextHolder |
| 方法级权限控制 | master/permission-check.java | @PreAuthorize / @PermitAll |
| 自定义忽略鉴权 | master/custom-ignore-permission.java | 实现 IgnorePermission 接口 |
| Token 配置 | master/token-config.yml | Redis/JWT 存储与续签配置 |
| 验证码使用 | master/captcha-example.java | @Captcha 注解与手动校验 |
| 发送短信/邮箱验证码 | master/send-code-example.java | CodeCaptchaManager 使用 |
