<!-- khala-spec:path-scope: user-project -->
# 组件使用规范详情

> 本文件定义 Khala 推荐组件、禁用组件及使用规范，用于指导大模型在生成代码时选择正确的组件。包含组件速查列表与详细用法、Maven 依赖、代码示例。
>
> 跨文件/跨源码引用统一使用 `@<path>` 格式（参照 `.claude/rules/index.md`），AI 工具按 `@` 前缀主动加载目标文件。
>
> `@<path>` 中的相对路径基于本文件位置 `rules/backend/khala-components-detail.md` 解析：跨两层回仓库根再到 `khala-spec/doc-ref/`。

---

## 1. 组件使用原则

> **核心原则**：当 Khala 框架提供了对应组件时，必须优先使用 Khala 组件，而不是重新实现或使用其他库。

### Maven 依赖引入方式

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-{组件名}-spring-boot-starter</artifactId>
</dependency>
```

### 组件速查

| 组件 | 功能 | 详细用法 |
|------|------|---------|
| `khala-gateway` | 网关路由、流量控制 | §2.1 |
| `khala-loadbalancer-spring-boot-starter` | IP 优先路由、版本灰度、负载均衡 | §2.2 |
| `khala-sentinel-spring-boot-starter` | 熔断降级、限流控制 | §2.3 |
| `khala-auth-client-spring-boot-starter` | OAuth2 认证、用户上下文获取 | §3.1 |
| `khala-authorization-server` | 暴力破解防护、登录失败限制 | §3.2 |
| `khala-captcha-spring-boot-starter` | 图形/短信验证码、校验 | §3.3 |
| `khala-authorize-spring-boot-starter` | 角色权限、接口权限、按钮权限 | §4.1 |
| `khala-data-permission-spring-boot-starter` | 行级数据权限控制 | §4.2 |
| `khala-protection-spring-boot-starter` | XSS/SQL 注入防护、API 签名验证、Host/Referer 白名单、CORS、防重放 | §5.1 |
| `khala-sensitive-spring-boot-starter` | 日志/响应字段脱敏 | §5.2 |
| `khala-crypto-spring-boot-starter` | 敏感字段加解密 | §5.3 |
| `khala-file-scan-spring-boot-starter` | 文件类型白名单校验（后缀名/魔数/Content-Type） | §5.4 |
| `jasypt-spring-boot-starter`（第三方） | 配置文件加密、密码加密 | §5.5 |
| `khala-tenant-spring-boot-starter` | 多租户隔离（行级/数据库级） | §6 |
| `khala-openapi-spring-boot-starter` | 生产环境禁用、IP 白名单、访问控制 | §7.1 |
| `khala-web-spring-boot-starter` | HTTP 消息转换器、Jackson 序列化扩展、文件上传配置 | §7.2 |
| `khala-actuator-spring-boot-starter` | 端点禁用、强制认证、仅暴露 health | §7.3 |
| `khala-job-spring-boot-starter` | 分布式定时任务（PowerJob） | §8 |
| `khala-module-warm-flow-biz` | 工作流引擎、流程管理、表单管理 | §9 |
| `khala-db-spring-boot-starter` | MyBatis Plus ORM、分页、公共字段填充、逻辑删除 | §10.1 |
| `khala-dynamic-datasource-spring-boot-starter` | 动态数据源、读写分离 | §10.2 |
| `khala-redis-spring-boot-starter` | Redis 缓存、多级缓存、分布式锁、Session 共享 | §10.3 |
| `khala-elasticsearch-spring-boot-starter` | ES 客户端连接池、HTTP 认证、配置热刷新 | §10.4 |
| `khala-kafka-spring-boot-starter` | Kafka 消息生产与消费 | §10.5 |
| `khala-rocketmq-spring-boot-starter` | RocketMQ 消息收发、顺序/延迟/事务消息 | §10.6 |
| `khala-zookeeper-spring-boot-starter` | Zookeeper 客户端、分布式锁、配置管理 | §10.7 |
| `khala-oss-spring-boot-starter` | 文件上传校验、UUID 文件名、后缀+魔数双重校验、存储桶遍历防护 | §11 |
| `khala-log-spring-boot-starter` | 统一日志、链路追踪、审计日志 | §12.1 |
| `khala-sms-spring-boot-starter` | 短信发送、频率控制、归属权校验 | §14.1 |
| `khala-email-spring-boot-starter` | 邮件发送、模板管理、频率限制 | §14.2 |
| `khala-common-core` | 通用工具类（IP、日期、JSON、签名、ID 生成等） | §18.1 |
| `khala-excel-spring-boot-starter` | Excel 导出/导入 | §18.3 |
| `khala-lock-spring-boot-starter` | 分布式锁（声明式/编程式） | §18.4 |
| `khala-i18n-spring-boot-starter` | 国际化（消息获取、Locale 自动解析） | §18.5 |
| `khala-expression-spring-boot-starter` | SpEL 表达式解析与求值 | §18.6 |
| `khala-idempotent-spring-boot-starter` | 接口幂等性、防重复提交 | §18.7 |
| `khala-trans-spring-boot-starter` | 数据翻译（用户/租户 ID 转名称） | §18.8 |
| `khala-api-spring-boot-starter` | 接口访问控制、API 扫描 | — |
| `khala-log-mask` | 日志脱敏 | — |
| `admin-api` | 后台管理 API 模块 | — |
| `admin-biz` | 后台管理业务模块 | — |
| `file-biz` | 文件管理业务模块 | — |
| `log-biz` | 日志业务模块 | — |
| `search-client` | 搜索客户端模块 | — |
| `search-server` | 搜索服务端模块 | — |

---

## 2. 网关与流量治理

### 2.1 服务网关

**组件：** `khala-gateway`（独立部署模块）

**功能：**
- 动态路由（基于 Nacos）
- 负载均衡
- OAuth2 安全认证与 URL 权限校验
- 敏感词过滤
- 全链路追踪（TraceID/SpanID）
- API 文档聚合（Knife4j/OpenAPI3）
- 网关层限流、熔断（Sentinel）
- 请求参数加解密、签名验证、防重放
- XSS/SQL 注入防护、Referer/Host/CORS 控制

**框架源码：** @../../../doc-ref/src/khala-backend/khala-gateway/src/main/java/

### 2.2 负载均衡

**组件：** `khala-loadbalancer-spring-boot-starter`

**功能：**
- IP 优先路由（同 IP 段优先）
- 版本灰度路由
- Feign 拦截器上下文透传
- RestTemplate 负载均衡配置

### 2.3 熔断限流

**组件：** `khala-sentinel-spring-boot-starter`

**功能：**
- 流量控制（QPS、并发线程数）
- 熔断降级（异常比例、慢调用比例）
- 热点参数限流
- 系统自适应保护（CPU、RT、Load）
- Nacos 动态规则配置
- Servlet / WebFlux 双栈兼容

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-sentinel-spring-boot-starter</artifactId>
</dependency>
```

**示例：** @../../../doc-ref/examples/khala-backend/common/sentinel/master/

---

## 3. 认证授权

### 3.1 认证客户端

**组件：** `khala-auth-client-spring-boot-starter`

**功能：**
- OAuth2 / Spring Security 资源服务器接入（Servlet / Reactive）
- Token 生成、存储（Redis/DB）、自动续签、统一登出、单点登录互踢
- 多级权限管控：匿名访问 → 登录认证 → URL 权限 → 方法级权限
- 分布式用户上下文（跨线程、跨服务 Feign/RPC 透传）
- 支持 CUSTOM（UUID）和 JWT 两种 Token 类型

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-auth-client-spring-boot-starter</artifactId>
</dependency>
```

**示例：** @../../../doc-ref/examples/khala-backend/common/auth/master/current-user.java

### 3.2 认证授权中心

**组件：** `khala-authorization-server`（UAA 服务）

**功能：**
- OAuth2.1 授权服务器（授权码、密码、短信、OpenID、社交登录）
- Token 颁发、内省（Introspection）、撤销（Revocation）
- 多因素认证（MFA）：短信、邮箱
- 社交登录（微信、钉钉、GitHub 等，基于 JustAuth）
- 登录安全策略：密码重试锁定、IP 黑白名单、登录日志审计
- 数据源可插拔（MyBatis / Feign RPC）
- 租户隔离

**框架源码：** @../../../doc-ref/src/khala-backend/khala-authorization-server/src/main/java/

### 3.3 验证码

**组件：** `khala-captcha-spring-boot-starter`

**功能：**
- 图形验证码
- 短信验证码
- 邮箱验证码
- 验证码校验

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-captcha-spring-boot-starter</artifactId>
</dependency>
```

**示例：** @../../../doc-ref/examples/khala-backend/common/captcha/master/graph-captcha.java · @../../../doc-ref/examples/khala-backend/common/captcha/master/slide-captcha.java · @../../../doc-ref/examples/khala-backend/common/captcha/master/code-captcha.java

---

## 4. 权限管理

### 4.1 角色权限 / 接口权限 / 按钮权限

**组件：** `khala-auth-client-spring-boot-starter`

**功能：**
- 基于角色的访问控制（RBAC）
- 接口级别权限校验
- 按钮级别权限控制

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-auth-client-spring-boot-starter</artifactId>
</dependency>
```

**示例：** @../../../doc-ref/examples/khala-backend/common/auth/master/current-user.java

### 4.2 数据权限

**组件：** `khala-data-permission-spring-boot-starter`

**功能：**
- 行级数据权限控制（基于 MyBatis Plus 拦截器自动拼接 SQL 条件）
- 支持部门权限、角色权限、区域权限等多维度
- 注解控制（`@DataPermission`）
- AOP 方法级控制
- Feign 集成获取权限规则

---

## 5. 安全能力

### 5.1 Web 安全防护

**组件：** `khala-protection-spring-boot-starter`

**功能：**
- XSS 过滤（Servlet / Reactive）
- SQL 注入防护
- 请求签名验证（防篡改、防重放）
- 请求加解密（动态密钥）
- Referer 校验
- Host 校验
- CORS 配置
- 敏感词检测
- Token 自动续期

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-protection-spring-boot-starter</artifactId>
</dependency>
```

**框架源码：** @../../../doc-ref/src/khala-backend/khala-protection-spring-boot-starter/src/main/java/com/eshore/khala/protection/

**示例工程：** @../../../doc-ref/examples/khala-backend/common/security/master/

### 5.2 数据脱敏

**组件：** `khala-sensitive-spring-boot-starter`

**功能：**
- 日志脱敏
- 响应字段脱敏（姓名、手机、身份证、邮箱、银行卡）

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-sensitive-spring-boot-starter</artifactId>
</dependency>
```

```java
@SensitiveData(strategy = SensitiveStrategy.PHONE)
private String phone;
```

**示例：** @../../../doc-ref/examples/khala-backend/common/security/master/data-desensitization.java

### 5.3 字段加密

**组件：** `khala-crypto-spring-boot-starter`

**功能：**
- 敏感字段加密/解密
- 对称加密：AES / SM4（国密）
- 非对称加密：RSA / SM2（国密）
- 摘要算法：MD5 / SM3（国密）
- 算法一键切换（`standard` / `sm` / `custom`）

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-crypto-spring-boot-starter</artifactId>
</dependency>
```

```java
// 使用 Khala 加密工具
String encrypted = KhalaCryptoUtil.encrypt(cardNo, CryptoType.AES);
```

### 5.4 文件安全检测

**组件：** `khala-file-scan-spring-boot-starter`

**功能：**
- 文件类型白名单校验（后缀名 / MagicNumber）
- Content-Type 校验

### 5.5 配置文件密码加密

**组件：** `jasypt-spring-boot-starter`（第三方）

**功能：**
- 配置文件敏感属性加密
- 密码加密

---

## 6. 多租户

**组件：** `khala-tenant-spring-boot-starter`

**功能：**
- HTTP 请求级租户解析（Header / 参数）
- 行级租户隔离（MyBatis Plus 自动拼接 `tenant_id`）
- 独立数据库隔离（`private` 模式，动态数据源路由）
- 租户安全校验（防止横向越权）
- 忽略租户机制（URL / 表 / SQL / 注解）
- 主租户特权

**配套组件：** `khala-dynamic-datasource-spring-boot-starter`

---

## 7. Web 通用能力

### 7.1 OpenAPI 文档

**组件：** `khala-openapi-spring-boot-starter`

**功能：**
- OpenAPI 3 / Knife4j 文档生成
- Servlet / WebFlux 双栈兼容
- 文档访问控制
- Spring Cloud Gateway 文档聚合

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-openapi-spring-boot-starter</artifactId>
</dependency>
```

### 7.2 Web 通用组件

**组件：** `khala-web-spring-boot-starter`

**功能：**
- HTTP 消息转换器统一配置
- Jackson 序列化扩展（空值处理、日期格式、Long 转 String）
- 文件上传配置（大小限制、临时目录）
- Servlet / WebFlux 双栈兼容

### 7.3 Actuator 安全

**组件：** `khala-actuator-spring-boot-starter`

**功能：**
- 端点禁用/强制认证
- 仅暴露必要端点（如 health）

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-actuator-spring-boot-starter</artifactId>
</dependency>
```

### 7.4 HTTP 客户端

> Khala 框架未提供统一 HTTP 客户端。可选 `RestTemplate` / `WebClient` / `OkHttp`。

### 7.5 参数验证

JSR303 注解：`@NotBlank` / `@NotNull` / `@Size` / `@Min` / `@Max` / `@Email` / `@Pattern` 等。

---

## 8. 任务调度

**组件：** `khala-job-spring-boot-starter`

**功能：**
- 分布式定时任务（基于 PowerJob）
- Worker 自动注册与连接
- 任务分片、故障转移
- 可视化任务管理

---

## 9. 工作流

**组件：** `khala-module-warm-flow-biz`

**功能：**
- 数据表单管理
- 流程表单管理
- 办事流程管理（多节点编排）
- 任务操作：转办、委派、加签、减签、撤销、终止
- 流程实例管理：启动、待办/已办查询、流程轨迹追踪
- 分组管理

---

## 10. 数据操作

### 10.1 数据库 ORM

**组件：** `khala-db-spring-boot-starter`

**功能：**
- MyBatis Plus 自动配置
- 分页插件（自动识别数据库类型）
- 多数据库适配（MySQL、PostgreSQL、达梦、人大金仓等）
- 公共字段自动填充（createTime、updateTime、createBy、updateBy）
- 自定义雪花 ID 生成器（防时钟回拨）
- 逻辑删除

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-db-spring-boot-starter</artifactId>
</dependency>
```

```java
// Mapper 继承 SuperMapper，自动获得 CRUD 方法
@Mapper
public interface YourMapper extends SuperMapper<YourEntity> {
    // 无需手写基础 SQL
}
```

**示例：** @../../../doc-ref/examples/khala-backend/common/crud/master/

### 10.2 动态数据源

**组件：** `khala-dynamic-datasource-spring-boot-starter`

**功能：**
- YAML 多数据源配置（读写分离）
- 单数据源自动兜底为 master
- 可扩展路由策略（`KhalaDynamicDataSourceStrategy`）
- 与多租户集成实现数据库级隔离
- 兼容 HikariCP、Druid 等连接池

### 10.3 Redis / 缓存

**组件：** `khala-redis-spring-boot-starter`

**功能：**
- 统一 `RedisTemplate`（Jackson 序列化，支持 JDK8 日期时间）
- Spring Cache 集成（`@Cacheable`、`@CachePut`、`@CacheEvict`）
- 多级缓存（L1 Caffeine + L2 Redis）
- 分布式锁（Redisson：可重入、自动续期、阻塞/非阻塞）
- Session 共享

### 10.4 Elasticsearch

**组件：** `khala-elasticsearch-spring-boot-starter`

**功能：**
- ES REST 客户端连接池精细化配置
- HTTP 基础认证自动配置
- 配置热刷新（`@RefreshScope`）
- 兼容 Spring Boot 原生 `spring.elasticsearch.*` 配置

### 10.5 Kafka

**组件：** `khala-kafka-spring-boot-starter`

**功能：**
- Kafka 消息生产与消费
- 同步/异步发送
- 事务消息
- Spring 自动配置集成

### 10.6 RocketMQ

**组件：** `khala-rocketmq-spring-boot-starter`

**功能：**
- 统一消息发送（同步、异步、单向）
- 消息消费（注解驱动）
- 顺序消息（全局/分区）
- 延迟消息
- 事务消息

### 10.7 Zookeeper

**组件：** `khala-zookeeper-spring-boot-starter`

**功能：**
- Zookeeper 客户端自动配置（CuratorFramework）
- 分布式锁（临时顺序节点，支持可重入锁、读写锁）
- 分布式配置管理
- 服务注册发现

### 10.8 对象存储

**组件：** `khala-oss-spring-boot-starter`

**功能：**
- 多协议存储支持：S3（兼容阿里云 OSS、MinIO）、FastDFS、CTDFS
- 统一文件操作接口（上传、下载、删除、预签名访问）
- 文件类型安全校验（集成 `khala-file-scan-spring-boot-starter`）
- 临时访问链接（预签名 URL）

---

## 11. 文件管理

**组件：** `khala-oss-spring-boot-starter` + `khala-file-scan-spring-boot-starter`

**功能：**
- 统一文件存储接口（多协议切换）
- UUID 文件名
- 后缀 + 魔数双重校验
- 存储桶遍历防护
- 文件类型白名单 / Content-Type 校验

---

## 12. 日志审计

### 12.1 日志与链路追踪

**组件：** `khala-log-spring-boot-starter`

**功能：**
- 统一日志格式与输出规范（控制台、文件、数据库）
- 链路追踪（MDC Trace ID，跨线程传递）
- Feign 链路传递
- 审计日志（注解驱动 / 手动记录）
- 登录日志
- 业务审计日志

---

## 13. 系统监控

- 网关层监控集成在 `khala-gateway`
- Sentinel 监控集成在 `khala-sentinel-spring-boot-starter`
- Actuator 安全由 `khala-actuator-spring-boot-starter` 控制

---

## 14. 通知能力

### 14.1 短信

**组件：** `khala-sms-spring-boot-starter`

**功能：**
- 短信发送
- 频率控制（防短信炸弹，基于 Redis）
- 归属权校验

### 14.2 邮件

**组件：** `khala-email-spring-boot-starter`

**功能：**
- 多渠道 SMTP 邮件发送
- 邮件模板管理（配置文件 / 数据库）
- 发送频率限制（基于 Redis）
- 发送记录存储
- 国际化支持

---

## 15. 缓存管理

**组件：** `khala-redis-spring-boot-starter`

**功能：**
- Spring Cache 注解驱动缓存
- Redis 二级缓存
- Caffeine 一级缓存
- 多级缓存管理（`LayeringCacheManager`）
- 按 Cache Name 配置独立过期时间

```xml
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-redis-spring-boot-starter</artifactId>
</dependency>
```

```java
@Resource
private KhalaRedisUtil redisUtil;

// 设置缓存（带过期时间）
redisUtil.set("key", value, 3600);

// 获取缓存
String value = redisUtil.get("key", String.class);

// 删除缓存
redisUtil.delete("key");
```

**示例：** @../../../doc-ref/examples/khala-backend/common/cache/master/redis-template.java

**缓存时长规范**：

| 数据类型 | 缓存时长 | 说明 |
|---------|---------|------|
| 用户信息 | 30 分钟 | 变更后主动清除 |
| 字典数据 | 2 小时 | 变更后主动清除 |
| 配置数据 | 1 小时 | 变更后主动清除 |
| 计数器 | 不设置 | 按需过期 |

---

## 16. 事务管理

Khala 未提供独立事务管理组件，使用 Spring 原生声明式事务（`@Transactional`）。

---

## 17. 消息收发与事件驱动

- **Kafka：** `khala-kafka-spring-boot-starter`
- **RocketMQ：** `khala-rocketmq-spring-boot-starter`
- **Spring 事件：** Spring 原生 `ApplicationEvent`

统一能力：
- 消息发送与消费
- 消息重试与死信队列
- 顺序消息
- 延迟消息
- 事务消息

---

## 18. 公共工具

### 18.1 通用工具类

**组件：** `khala-common-core`

**涵盖能力：**
- `AddrUtils`：客户端/服务端 IP 获取
- `ArrayUtils`：数组合并、转换、安全访问
- `BeanUtils`：对象属性拷贝、分页记录转换
- `CacheUtils`：Guava 异步重载缓存构建
- `CamelUtil`：驼峰/下划线命名转换
- `CollectionUtils`：集合转换、过滤、映射
- `DateUtils`：日期计算、格式化、过期判断
- `FileUtils`：文件类型检测、MultipartFile 转换
- `HttpUtils`：URL 操作、Basic Auth 解析
- `JsonUtil` / `JsonUtils`：JSON 序列化/反序列化
- `JwtUtils`：Bearer Token 格式验证
- `PasswordUtils`：密码强度校验、随机密码生成
- `RandomUtils`：随机数字、字母、UUID 生成
- `ResponseUtil`：HTTP 响应写入
- `ServletUtils`：请求信息获取（UserAgent、IP、Body）
- `SignUtils`：SHA1/MD5 签名生成与验证
- `SpringUtil`：Spring 上下文工具（获取 Bean、Property）
- `StringUtil`：字符串分割、连接、Base64/Hex 转换
- `UrlUtil`：URL 拼接、参数提取
- `ValidatorUtils`：手机号、用户名格式校验
- `IdGenerator`：雪花算法 ID 生成

### 18.2 数据库工具类

**组件：** `khala-db-spring-boot-starter`

**涵盖能力：**
- `PageUtil`：MyBatis Plus 分页构建
- `MyBatisUtils`：MyBatis 拦截器添加、SQL 列构建
- `CriteriaUtil`：JSON/VO 转 QueryWrapper

### 18.3 Excel

**组件：** `khala-excel-spring-boot-starter`

**功能：**
- Excel 导出/导入
- 字典标签/值获取（`DictFrameworkUtils`）

### 18.4 分布式锁

**组件：** `khala-lock-spring-boot-starter`

**功能：**
- 声明式锁（`@Lock`、`@Klock`，支持 SpEL）
- 编程式锁（`DistributedLock` 接口）
- 多实现支持：Redis、Redisson、CTGCache、Zookeeper
- 配置热刷新

### 18.5 国际化

**组件：** `khala-i18n-spring-boot-starter`

**功能：**
- 统一消息获取工具（`MessageSourceUtils`）
- Servlet / WebFlux 双栈兼容
- Locale 自动解析（`Accept-Language`）
- 消息参数填充

### 18.6 表达式

**组件：** `khala-expression-spring-boot-starter`

**功能：**
- SpEL 表达式解析与求值
- 表达式安全校验（防止危险操作）
- 参数名发现器
- Spring 上下文集成

### 18.7 防重复调用（幂等）

**组件：** `khala-idempotent-spring-boot-starter`

**功能：**
- 注解驱动幂等控制（`@Idempotent`）
- Redis 去重存储
- SpEL 动态 Key
- 可配置时间窗口

### 18.8 数据翻译

**组件：** `khala-trans-spring-boot-starter`

**功能：**
- 用户 ID 自动翻译为姓名等字段
- 租户 ID 自动翻译为租户名称
- 双数据源模式：`database`（本地库）/ `rpc`（Feign）
- 注解驱动（`@AutoTrans` / `@Trans`）

### 18.9 认证工具类

**组件：** `khala-auth-client-spring-boot-starter`（2 个工具类）

### 18.10 租户工具类

**组件：** `khala-tenant-spring-boot-starter`（1 个工具类）

### 18.11 日志追踪工具类

**组件：** `khala-log-spring-boot-starter`（1 个工具类）

### 18.12 敏感信息工具类

**组件：** `khala-sensitive-spring-boot-starter`（2 个工具类）

### 18.13 安全校验工具类

**组件：** `khala-protection-spring-boot-starter`（2 个工具类）

### 18.14 数据权限工具类

**组件：** `khala-data-permission-spring-boot-starter`（1 个工具类）

### 18.15 流程工具类

**组件：** `khala-module-warm-flow-biz`（1 个工具类）

---

## 19. 禁用组件汇总

| 组件 | 原因 | 替代方案 |
|------|------|---------|
| `java.util.Date` | 线程不安全 | `LocalDateTime` |
| `SimpleDateFormat` | 线程不安全 | `DateTimeFormatter` |
| `Calendar` | API 糟糕 | `LocalDateTime` |
| Fastjson | 安全漏洞 | Jackson |
| Gson | 性能较差 | Jackson |
| Lombok `@Builder` | 与 SuperEntity 冲突 | 使用 `@Data` |

---

## 20. 功能需求对照表

| 功能需求 | 推荐组件 |
|---------|---------|
| **网关与流量治理** | |
| 服务网关 / 动态路由 | `khala-gateway` |
| 负载均衡（IP 优先 / 灰度） | `khala-loadbalancer-spring-boot-starter` |
| 熔断限流 / Sentinel | `khala-sentinel-spring-boot-starter` |
| **认证授权** | |
| OAuth2 资源服务器 / Token 管理 | `khala-auth-client-spring-boot-starter` |
| OAuth2 授权中心 / 多因素认证 / 社交登录 | `khala-authorization-server` |
| 验证码（图形/短信/邮箱） | `khala-captcha-spring-boot-starter` |
| **权限管理** | |
| 角色权限 / 接口权限 / 按钮权限 | `khala-authorize-spring-boot-starter` |
| 行级数据权限 | `khala-data-permission-spring-boot-starter` |
| **安全能力** | |
| XSS / SQL 注入 / 签名 / 加解密 / Referer / Host / CORS | `khala-protection-spring-boot-starter` |
| 数据脱敏 | `khala-sensitive-spring-boot-starter` |
| 字段级加密（AES/RSA/MD5 / SM2/SM4/SM3） | `khala-crypto-spring-boot-starter` |
| 文件类型安全检测 | `khala-file-scan-spring-boot-starter` |
| 配置文件密码加密 | `jasypt-spring-boot-starter` |
| **多租户** | |
| 多租户（行级 / 数据库级隔离） | `khala-tenant-spring-boot-starter` |
| 动态数据源（读写分离 / 租户隔离） | `khala-dynamic-datasource-spring-boot-starter` |
| **Web 能力** | |
| OpenAPI / Swagger 文档 | `khala-openapi-spring-boot-starter` |
| Web 通用 / Jackson 序列化 | `khala-web-spring-boot-starter` |
| Actuator 安全 | `khala-actuator-spring-boot-starter` |
| **任务调度** | |
| 分布式定时任务 | `khala-job-spring-boot-starter` |
| **工作流** | |
| OA 审批流程 / 表单 / 流程引擎 | `khala-module-warm-flow-biz` |
| **数据操作** | |
| 数据库 ORM / MyBatis Plus | `khala-db-spring-boot-starter` |
| Redis / 多级缓存 / 分布式锁 | `khala-redis-spring-boot-starter` |
| Elasticsearch | `khala-elasticsearch-spring-boot-starter` |
| Kafka | `khala-kafka-spring-boot-starter` |
| RocketMQ | `khala-rocketmq-spring-boot-starter` |
| Zookeeper | `khala-zookeeper-spring-boot-starter` |
| 对象存储（S3/FastDFS/CTDFS） | `khala-oss-spring-boot-starter` |
| **文件管理** | |
| 文件上传 / 存储 / 预签名访问 | `khala-oss-spring-boot-starter` |
| 文件安全检测 | `khala-file-scan-spring-boot-starter` |
| **日志审计** | |
| 统一日志 / 链路追踪 / 审计日志 | `khala-log-spring-boot-starter` |
| **通知能力** | |
| 短信发送 / 频率限制 | `khala-sms-spring-boot-starter` |
| 邮件发送 / 模板 / 频率限制 | `khala-email-spring-boot-starter` |
| **公共工具** | |
| 通用工具类（IP、日期、JSON、签名、ID 生成等） | `khala-common-core` |
| Excel 导出/导入 | `khala-excel-spring-boot-starter` |
| 分布式锁 | `khala-lock-spring-boot-starter` |
| 国际化 | `khala-i18n-spring-boot-starter` |
| 表达式解析 / SpEL | `khala-expression-spring-boot-starter` |
| 防重复调用 / 幂等 | `khala-idempotent-spring-boot-starter` |
| 数据翻译（用户/租户 ID 转名称） | `khala-trans-spring-boot-starter` |

<!-- doc-ref-start -->

---

## 源码引用

| 组件 | doc-ref 路径 |
|------|-------------|
| `admin-api` | `khala-spec/doc-ref/admin-api/` |
| `admin-biz` | `khala-spec/doc-ref/admin-biz/` |
| `file-biz` | `khala-spec/doc-ref/file-biz/` |
| `log-biz` | `khala-spec/doc-ref/log-biz/` |
| `search-client` | `khala-spec/doc-ref/search-client/` |
| `search-server` | `khala-spec/doc-ref/search-server/` |
| `khala-actuator-spring-boot-starter` | `khala-spec/doc-ref/khala-actuator-spring-boot-starter/` |
| `khala-api-spring-boot-starter` | `khala-spec/doc-ref/khala-api-spring-boot-starter/` |
| `khala-auth-client-spring-boot-starter` | `khala-spec/doc-ref/khala-auth-client-spring-boot-starter/` |
| `khala-authorization-server` | `khala-spec/doc-ref/khala-authorization-server/` |
| `khala-authorize-spring-boot-starter` | `khala-spec/doc-ref/khala-authorize-spring-boot-starter/` |
| `khala-captcha-spring-boot-starter` | `khala-spec/doc-ref/khala-captcha-spring-boot-starter/` |
| `khala-common-core` | `khala-spec/doc-ref/khala-common-core/` |
| `khala-crypto-spring-boot-starter` | `khala-spec/doc-ref/khala-crypto-spring-boot-starter/` |
| `khala-data-permission-spring-boot-starter` | `khala-spec/doc-ref/khala-data-permission-spring-boot-starter/` |
| `khala-db-spring-boot-starter` | `khala-spec/doc-ref/khala-db-spring-boot-starter/` |
| `khala-dynamic-datasource-spring-boot-starter` | `khala-spec/doc-ref/khala-dynamic-datasource-spring-boot-starter/` |
| `khala-elasticsearch-spring-boot-starter` | `khala-spec/doc-ref/khala-elasticsearch-spring-boot-starter/` |
| `khala-email-spring-boot-starter` | `khala-spec/doc-ref/khala-email-spring-boot-starter/` |
| `khala-excel-spring-boot-starter` | `khala-spec/doc-ref/khala-excel-spring-boot-starter/` |
| `khala-expression-spring-boot-starter` | `khala-spec/doc-ref/khala-expression-spring-boot-starter/` |
| `khala-file-scan-spring-boot-starter` | `khala-spec/doc-ref/khala-file-scan-spring-boot-starter/` |
| `khala-i18n-spring-boot-starter` | `khala-spec/doc-ref/khala-i18n-spring-boot-starter/` |
| `khala-idempotent-spring-boot-starter` | `khala-spec/doc-ref/khala-idempotent-spring-boot-starter/` |
| `khala-job-spring-boot-starter` | `khala-spec/doc-ref/khala-job-spring-boot-starter/` |
| `khala-kafka-spring-boot-starter` | `khala-spec/doc-ref/khala-kafka-spring-boot-starter/` |
| `khala-loadbalancer-spring-boot-starter` | `khala-spec/doc-ref/khala-loadbalancer-spring-boot-starter/` |
| `khala-lock-spring-boot-starter` | `khala-spec/doc-ref/khala-lock-spring-boot-starter/` |
| `khala-log-mask` | `khala-spec/doc-ref/khala-log-mask/` |
| `khala-log-spring-boot-starter` | `khala-spec/doc-ref/khala-log-spring-boot-starter/` |
| `khala-openapi-spring-boot-starter` | `khala-spec/doc-ref/khala-openapi-spring-boot-starter/` |
| `khala-oss-spring-boot-starter` | `khala-spec/doc-ref/khala-oss-spring-boot-starter/` |
| `khala-protection-spring-boot-starter` | `khala-spec/doc-ref/khala-protection-spring-boot-starter/` |
| `khala-redis-spring-boot-starter` | `khala-spec/doc-ref/khala-redis-spring-boot-starter/` |
| `khala-rocketmq-spring-boot-starter` | `khala-spec/doc-ref/khala-rocketmq-spring-boot-starter/` |
| `khala-sensitive-spring-boot-starter` | `khala-spec/doc-ref/khala-sensitive-spring-boot-starter/` |
| `khala-sentinel-spring-boot-starter` | `khala-spec/doc-ref/khala-sentinel-spring-boot-starter/` |
| `khala-sms-spring-boot-starter` | `khala-spec/doc-ref/khala-sms-spring-boot-starter/` |
| `khala-tenant-spring-boot-starter` | `khala-spec/doc-ref/khala-tenant-spring-boot-starter/` |
| `khala-trans-spring-boot-starter` | `khala-spec/doc-ref/khala-trans-spring-boot-starter/` |
| `khala-web-spring-boot-starter` | `khala-spec/doc-ref/khala-web-spring-boot-starter/` |
| `khala-zookeeper-spring-boot-starter` | `khala-spec/doc-ref/khala-zookeeper-spring-boot-starter/` |
| `khala-module-warm-flow-biz` | `khala-spec/doc-ref/khala-module-warm-flow-biz/` |
