# 安全架构

## 概述

安全是系统架构的基石。Khala 项目从认证、授权、数据保护、接口安全四个维度构建纵深防御体系。

---

## 认证与授权

### 认证方式

| 场景 | 方式 | 说明 |
|------|------|------|
| Web 端 | JWT + Cookie | Access Token 短期有效，Refresh Token 长期存储 |
| 移动端 | JWT + Header | `Authorization: Bearer <token>` |
| 第三方接入 | API Key + Secret | 固定密钥对，配合签名验签 |
| 服务间调用 | mTLS / 内部 Token | 双向 TLS 或内部颁发的服务 Token |

### JWT 规范

```json
{
  "sub": "10001",
  "tenantId": "100",
  "roles": ["ADMIN", "USER"],
  "iat": 1704067200,
  "exp": 1704070800
}
```

- **有效期**：Access Token 15~30 分钟，Refresh Token 7~30 天
- **密钥管理**：签名密钥定期轮换，旧密钥保留一段时间用于验证已签发 Token
- **禁止在 JWT 中存储敏感信息**：Payload 仅包含用户标识、角色、租户等公开声明

### RBAC 权限模型

采用基于角色的访问控制：

```
用户 → 角色 → 权限 → 资源
```

| 层级 | 说明 | 示例 |
|------|------|------|
| 用户 | 系统登录账号 | 张三、李四 |
| 角色 | 职责集合 | 管理员、普通用户、审计员 |
| 权限 | 具体操作 | task:create、task:delete |
| 资源 | 受保护对象 | /api/v1/tasks、/api/v1/users |

### 权限校验位置

1. **网关层**：校验 Token 有效性、基础黑白名单
2. **Controller 层**：`@PreAuthorize("hasRole('ADMIN')")` 或自定义注解
3. **Service 层**：数据范围校验（只能查看本租户/本部门数据）

---

## 防注入与攻击

### SQL 注入防护

1. **必须使用预编译语句**：MyBatis `#{}` 占位符，禁止 `${}` 拼接
2. **禁止动态拼接 ORDER BY 字段**：使用白名单校验排序字段
3. **模糊查询转义**：用户输入的 `%`、`_` 需转义处理

### XSS 防护

1. **输入过滤**：对富文本使用白名单标签过滤（如 jsoup）
2. **输出编码**：前端渲染时自动转义 HTML 特殊字符
3. **CSP 策略**：配置 Content-Security-Policy 响应头

### CSRF 防护

1. **SameSite Cookie**：`Set-Cookie: session=xxx; SameSite=Strict`
2. **CSRF Token**：表单提交时携带一次性 Token
3. **双重 Cookie**：请求头携带 Cookie 中的随机值校验

---

## 接口安全

### 签名验签（第三方接入）

请求参数按 key 排序后拼接，使用 HMAC-SHA256 签名：

```
String sign = HMAC_SHA256(appSecret, method + url + sortedParams + timestamp + nonce);
```

| 参数 | 说明 |
|------|------|
| timestamp | 时间戳，服务端校验与当前时间差不超过 5 分钟 |
| nonce | 随机字符串，服务端缓存去重，防止重放攻击 |
| sign | 签名，放在请求头 `X-Signature` 中 |

### 敏感操作二次确认

以下操作需要额外验证：

1. **修改绑定手机/邮箱**：需短信/邮件验证码
2. **资金相关操作**：需支付密码或短信验证码
3. **删除重要数据**：需确认密码或二次弹窗确认
4. **权限变更**：需当前用户重新登录或管理员审批

---

## 注意事项

1. **最小权限原则**：每个用户、每个服务只授予必要的最小权限
2. **安全头部配置**：
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY`
   - `Strict-Transport-Security: max-age=31536000`
3. **安全审计**：登录、权限变更、敏感操作必须记录审计日志，保留 180 天
4. **漏洞响应**：建立安全漏洞上报渠道，高危漏洞 24 小时内修复

---

> 安全组件使用和安全案例详见[khala-security-guide.md](../../rules/backend/khala-security-guide.md)
