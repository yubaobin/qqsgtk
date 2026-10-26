# captcha — 验证码

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-commons/khala-commons-auth/khala-captcha-spring-boot-starter/

## 何时参考此示例

- 需要生成图形验证码（GIF/PNG）
- 需要生成滑块/旋转/点选验证码
- 需要发送短信/邮箱验证码
- 需要在接口上自动校验验证码

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 图形验证码 | master/graph-captcha.java | IGraphCaptchaService 生成/校验图形验证码 |
| 滑块验证码 | master/slide-captcha.java | ISlideCaptchaService 生成/校验滑块验证码 |
| 短信/邮箱验证码 | master/code-captcha.java | CodeCaptchaManager 发送/校验验证码 |
| @Captcha 注解校验 | master/captcha-annotation.java | @Captcha 注解自动校验、CaptchaServiceFactory 手动校验 |
| 验证码配置 | master/captcha-config.yml | 图形/滑块/短信验证码配置 |
