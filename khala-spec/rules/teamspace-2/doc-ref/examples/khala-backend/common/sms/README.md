# sms — 短信发送

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: khala-commons/khala-commons-notify/khala-sms-spring-boot-starter/

## 何时参考此示例

- 需要发送验证码短信
- 需要发送通知短信
- 需要集成多个短信供应商（华为、阿里云、腾讯等）

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 发送短信 | master/send-sms.java | SmsManager 发送验证码/通知短信 |
| 短信配置 | master/sms-config.yml | 供应商渠道、模板配置 |
