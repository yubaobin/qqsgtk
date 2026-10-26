# 公司研发安全规范

> 本文件定义公司研发安全要求，基于 OWASP Top 10 和行业最佳实践，支持 Khala 安全框架组件

---

## 1. Khala 安全框架组件

> **优先推荐原则**：当检测到安全需求时，优先推荐引入对应的 Khala 组件

### Maven 依赖引入方式

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-{组件名}-spring-boot-starter</artifactId>
</dependency>
```

### 安全需求与组件对照表

| 安全需求 | 推荐组件 |
|---------|---------|
| XSS/SQL 注入防护 | `khala-protection-spring-boot-starter` |
| API 签名验证/加解密 | `khala-protection-spring-boot-starter` |
| 防重放攻击（随机数+时间戳） | `khala-protection-spring-boot-starter` |
| Host/Referer 头白名单 | `khala-protection-spring-boot-starter` |
| CORS 配置 | `khala-protection-spring-boot-starter` |
| 文件上传校验 | `khala-oss-spring-boot-starter` |
| 短信发送/频率限制 | `khala-sms-spring-boot-starter` |
| 图形/短信验证码 | `khala-captcha-spring-boot-starter` |
| 防重复提交 | `khala-idempotent-spring-boot-starter` |
| 数据脱敏 | `khala-sensitive-spring-boot-starter` |
| 字段加密 | `khala-crypto-spring-boot-starter` |
| OAuth2 认证/用户上下文 | `khala-auth-client-spring-boot-starter` |
| 登录安全（暴力破解防护） | `khala-authorization-server` |
| Actuator 安全控制 | `khala-actuator-spring-boot-starter` |
| Swagger/OpenAPI 安全控制 | `khala-openapi-spring-boot-starter` |
| 密码加密配置 | `jasypt-spring-boot-starter`（第三方） |
| 网关流量控制 | `khala-gateway` |
| 熔断限流 | `khala-sentinel-spring-boot-starter` |

> 完整组件列表详见 [khala-components-guide.md](./khala-components-guide.md)（速查）；详细配置见 [khala-components-guide.md](./khala-components-guide.md)（详情）

---

## 2. 认证授权

### 2.1 统一认证

- 使用 Khala 框架的 `KhalaSysUser` 体系
- Token 通过 `KhalaTokenUtil` 管理
- 权限控制使用 `@PreAuthorize` 注解

```java
@PreAuthorize("@pm.hasPermission('user:create')")
public CommonResult<Long> create(@Valid @RequestBody KhalaSysUserCreateReq req) {
    // ...
}
```

### 2.2 数据权限

- 必须启用 `tenant_id` 多租户隔离
- 敏感数据操作需记录审计日志
- 跨租户数据访问必须严格校验

### 2.3 会话管理

- Token 有效期不宜过长（建议 2 小时）
- 支持 Token 刷新机制
- 登出时使 Token 失效

### 2.4 密码安全

```java
// 使用 BCrypt 哈希
String hashed = BCrypt.hashpw(plainPassword, BCrypt.gensalt());

// 验证
boolean matches = BCrypt.checkpw(plainPassword, hashedPassword);
```

**密码策略：**
- 最小长度 8 位
- 必须包含大小写字母、数字
- 建议包含特殊字符
- 禁止常见弱密码
- 使用 BCrypt 哈希，禁止明文存储

---

## 3. OWASP Top 10 防护

| 风险 | 防护要点 |
|------|---------|
| SQL 注入 | 使用参数化查询，禁止字符串拼接 |
| XSS 攻击 | 输出转义，使用 `khala-protection-spring-boot-starter` |
| CSRF 攻击 | 启用 CSRF 保护 |
| 敏感数据暴露 | 敏感字段加密，HTTPS 传输 |
| 认证失效 | 使用 BCrypt 哈希密码，Token 有效期控制 |
| 访问控制失效 | 每个接口检查权限，`@PreAuthorize` |
| 安全配置错误 | 生产禁用 Swagger、Actuator |
| 反序列化漏洞 | 升级依赖，使用 Jackson |
| 使用已知漏洞组件 | 定期扫描依赖漏洞 |
| 日志监控不足 | 关键操作记录审计日志 |

### 3.1 注入攻击（SQL、NoSQL、命令）

**检查项：**
- 查询是否参数化？
- 用户输入是否已清理？
- ORM 是否安全使用？

**正确示例：**
```java
// 正确：使用参数化查询
List<User> users = mapper.selectList(new LambdaQueryWrapper<User>()
    .eq(User::getName, name));

// 错误：字符串拼接 SQL
// List<User> users = mapper.selectList("SELECT * FROM user WHERE name = '" + name + "'");
```

### 3.2 失效的认证

**检查项：**
- 密码是否哈希存储（bcrypt）？
- Bearer Token 是否正确验证？
- 会话是否安全？
- 是否支持多因素认证（MFA）？

### 3.3 敏感数据暴露

**检查项：**
- 是否强制使用 HTTPS？
- 敏感信息是否存储在环境变量中？
- 个人身份信息（PII）是否静态加密？
- 日志是否已清理？

**禁止记录的信息：**
- 密码（明文或加密后）
- Token
- 身份证号
- 银行卡号

### 3.4 XML 外部实体（XXE）

**检查项：**
- XML 解析器是否安全配置？
- 是否禁用外部实体处理？

### 3.5 失效的访问控制

**检查项：**
- 每个路由是否检查授权？
- 对象引用是否间接？
- CORS 是否正确配置？

```java
// 正确：验证用户可访问资源
@GetMapping("/user/{id}")
public CommonResult<UserVo> getUser(@PathVariable Long id, Authentication auth) {
    if (!auth.isAdmin() && !auth.getId().equals(id)) {
        return CommonResult.error(1004, "无权限访问");
    }
    // ...
}
```

### 3.6 安全配置错误

**检查项：**
- 默认凭据是否已更改？
- 错误处理是否安全？
- 是否设置安全标头？
- 生产环境是否禁用调试模式？

### 3.7 跨站脚本攻击（XSS）

**检查项：**
- 输出是否转义/清理？
- 是否设置内容安全策略（CSP）？
- 框架是否默认转义？

### 3.8 不安全的反序列化

**检查项：**
- 用户输入是否安全反序列化？
- 反序列化库是否最新？

### 3.9 使用含有已知漏洞的组件

**检查项：**
- 所有依赖是否最新？
- 依赖漏洞扫描是否通过？
- 是否监控 CVE？

### 3.10 日志记录和监控不足

**检查项：**
- 安全事件是否记录？
- 日志是否被监控？
- 是否配置告警？

---

## 4. 安全案例检查清单

| # | 检查项 | 风险 | 防护要点 | Khala 组件 |
|---|-------|------|---------|-----------|
| 1 | SSRF 请求伪造 | 服务端请求伪造 | 协议白名单、主机白名单、禁止内网 IP | 需手动实现 |
| 2 | 目录遍历 | 路径遍历 | 路径规范化、不可预测 Token、权限校验 | 需手动实现 |
| 3 | 文件上传漏洞 | 文件上传漏洞 | UUID 文件名、后缀+魔数双重校验 | ✓ `khala-oss-spring-boot-starter` |
| 4 | 存储桶遍历 | 数据泄露 | 不可预测路径、禁用目录列表、私有模式 | ✓ `khala-oss-spring-boot-starter` |
| 5 | 未授权访问攻击链 | 未授权访问 | Actuator 关闭、Nacos 开认证、Docker 禁 2375 | 部分（`khala-actuator-spring-boot-starter` 等） |
| 6 | Swagger 文档泄漏 | 信息泄露 | 仅开发环境启用、生产禁用、IP 白名单 | ✓ `khala-openapi-spring-boot-starter` |
| 7 | Actuator 端点暴露 | 未授权访问 | 禁用端点、强制认证、仅暴露 health | ✓ `khala-actuator-spring-boot-starter` |
| 8 | Nacos 认证绕过 | 认证绕过 | 开认证、换 JWT 密钥(≥32字节)、清理默认账户 | 配置问题 |
| 9 | 短信炸弹 | 业务逻辑缺陷 | 频率控制、二次验证(图形验证码) | ✓ `khala-sms-spring-boot-starter` |
| 10 | Fastjson 反序列化 RCE | 反序列化/RCE | 升级至 1.2.83+ 或迁移 fastjson2/Jackson | 依赖升级 |
| 11 | 微信小程序水平越权 | 水平越权 | 后端校验 code/openid、细粒度权限控制 | 业务逻辑 |
| 12 | 任意用户短信验证码获取 | 业务逻辑缺陷 | 限制单手机号、禁止批量、归属权校验 | ✓ `khala-sms-spring-boot-starter` |
| 13 | 弱口令/密码硬编码 | 认证漏洞 | 口令≥8位含3类字符、登录失败限制、密码加密 | 部分（`khala-authorization-server`、`jasypt-spring-boot-starter`） |

---

## 5. 数据安全

### 5.1 敏感字段加密

```java
// 使用 Khala 加密工具
String encrypted = KhalaCryptoUtil.encrypt(cardNo, CryptoType.AES);
```

**必须加密的字段：**
- 身份证号
- 银行卡号
- 手机号（脱敏展示）
- 密码（必须哈希，不可加密）

### 5.2 日志脱敏

```java
@SensitiveData(strategy = SensitiveStrategy.PHONE)
private String phone;
```

### 5.3 数据传输

- 生产环境强制 HTTPS
- 敏感接口必须签名验证
- 时间戳防重放攻击（5 分钟窗口）

---

## 6. 文件上传安全

### 6.1 文件类型校验

- UUID 文件名（随机化）
- 后缀+魔数双重校验
- 禁止上传到 Web 可访问目录

```java
// 校验文件类型（扩展名 + MIME 类型）
if (!KhalaFileUtil.isValidImage(file)) {
    return CommonResult.error("不支持的文件类型");
}
```

### 6.2 文件大小限制

| 文件类型 | 最大大小 |
|---------|---------|
| 图片 | 5MB |
| 文档 | 10MB |
| 视频 | 100MB |

### 6.3 文件存储

- 使用 `KhalaFileStorage` 统一管理
- 禁止上传到 Web 可访问目录
- 文件名随机化（UUID）

---

## 7. API 安全

### 7.1 接口签名

对外接口必须签名验证：

```java
@PostMapping("/api/external/order")
public CommonResult<Long> createOrder(
    @RequestHeader("X-Signature") String signature,
    @RequestBody OrderCreateReq req) {

    // 验证签名
    if (!KhalaSignatureUtil.verify(req, signature)) {
        return CommonResult.error("签名验证失败");
    }
    // ...
}
```

### 7.2 输入验证

```java
@Data
public class UserCreateReq {
    @NotBlank(message = "用户名不能为空")
    @Size(min = 3, max = 20, message = "用户名长度 3-20 位")
    @Pattern(regexp = "^[a-zA-Z0-9_]+$", message = "用户名只能包含字母、数字、下划线")
    private String username;
}
```

### 7.3 速率限制

- 登录接口：每 IP 每分钟 5 次
- 短信接口：每手机号每小时 5 次
- 支付接口：每用户每分钟 10 次

---

## 8. 安全检查清单

提交代码前确认：

- [ ] 无硬编码密钥（API Key、数据库密码）
- [ ] 敏感接口有权限控制（`@PreAuthorize`）
- [ ] 所有输入参数已验证（`@Valid`）
- [ ] SQL 使用参数化查询
- [ ] 日志无敏感信息（密码、Token、身份证）
- [ ] 密码使用 BCrypt 哈希
- [ ] 文件上传有类型和大小限制
- [ ] 对外接口有签名验证
- [ ] 生产环境禁用 Swagger
- [ ] Actuator 端点已禁用或加密
- [ ] 敏感字段已加密或脱敏

### 8.1 禁止事项

| 禁止项 | 风险 |
|--------|------|
| 硬编码密钥 | 密钥泄露 |
| SQL 字符串拼接 | SQL 注入 |
| 直接输出用户输入 | XSS 攻击 |
| 明文存储密码 | 密码泄露 |
| 生产环境启用 Swagger | 信息泄露 |
| 生产环境启用 Actuator | 未授权访问 |
| 日志记录敏感信息 | 数据泄露 |

---

## 9. 安全工具

### 9.1 依赖漏洞扫描

```bash
# OWASP Dependency Check
mvn org.owasp:dependency-check-maven:check

# 检查硬编码密码/密钥
grep -r "password.*=.*['\"].*['\"]" --include="*.java" --include="*.properties" --include="*.yml" .
grep -r "api[_-]?key\|secret\|token" --include="*.java" --include="*.properties" --include="*.yml" .

# 检查 SQL 注入风险模式
grep -r "Statement.*execute\|createQuery.*+" --include="*.java" .
grep -r "\$\{" --include="*.xml" backend/src/main/resources/mapper/
```

### 9.2 静态代码分析

```bash
# SpotBugs - 静态代码分析
mvn spotbugs:check

# FindSecBugs - 安全漏洞检测
mvn com.github.spotbugs:spotbugs-maven-plugin:check
```

---

## 10. 安全事件响应

### 10.1 安全漏洞分类

| 级别 | 响应时间 | 示例 |
|------|---------|------|
| 严重 | 24 小时 | SQL 注入、任意文件上传 |
| 高危 | 3 天 | 未授权访问、敏感信息泄露 |
| 中危 | 1 周 | XSS、CSRF |
| 低危 | 1 月 | 信息泄露、版本信息暴露 |

### 10.2 应急响应流程

1. **记录** - 创建详细报告
2. **通知** - 立即通知项目所有者
3. **建议修复** - 提供安全的代码示例
4. **测试修复** - 验证修复是否有效
5. **验证影响** - 检查漏洞是否已被利用
6. **轮换秘密** - 如果凭据已暴露
7. **更新文档** - 添加到安全知识库

---

## 11. 合规要求

### 11.1 数据保护

- 遵守《个人信息保护法》
- 用户数据需明确授权
- 提供数据删除和导出功能

### 11.2 审计日志

关键操作必须记录：
- 用户登录/登出
- 数据创建/修改/删除
- 权限变更
- 敏感数据访问

---

## 12. Khala Wiki Skill 查询指南

> **何时调用 khala-wiki skill**：在以下情况时，使用 khala-wiki skill 查询详细配置

### 查询场景

- 推荐某个 Khala 组件后，需要提供具体配置示例
- 用户询问某个 Khala 组件的详细使用方法
- 需要验证某个安全配置项的正确性
- 需要了解某个安全案例的防护措施
- 配置文件安全检查（application.yml 安全审查）

### 推荐查询词示例

- "khala-oss-spring-boot-starter 配置"
- "khala 文件上传安全措施"
- "khala XSS SQL注入防护"
- "khala Actuator 安全控制"
- "application.yml 配置安全检查"
