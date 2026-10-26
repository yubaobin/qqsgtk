# 配置管理

## 概述

配置管理保障应用在不同环境（开发、测试、生产）下的行为一致性，同时保护敏感信息不被泄露。Khala 项目采用"配置中心 + 本地配置"的混合模式，实现配置的集中管理与动态更新。

---

## 多环境配置

### 配置文件分层

```
application.yml          # 通用配置（所有环境共享）
application-dev.yml      # 开发环境
application-test.yml     # 测试环境
application-pre.yml      # 预发布环境
application-prod.yml     # 生产环境
```

### 启动指定环境

```bash
java -jar app.jar --spring.profiles.active=prod
```

### 配置优先级（从高到低）

1. 命令行参数：`--server.port=8081`
2. JVM 系统属性：`-Dserver.port=8081`
3. 环境变量：`SERVER_PORT=8081`
4. 配置文件：`application-prod.yml`
5. 默认配置：`application.yml`

### 环境变量映射

Spring Boot 自动将环境变量映射到配置属性：

| 环境变量 | 配置属性 |
|----------|----------|
| `SPRING_DATASOURCE_URL` | `spring.datasource.url` |
| `SPRING_REDIS_HOST` | `spring.redis.host` |
| `SERVER_PORT` | `server.port` |

---

## 敏感配置加密

### Jasypt 加密（推荐）

1. **引入依赖**

```xml
<dependency>
    <groupId>com.github.ulisesbocchio</groupId>
    <artifactId>jasypt-spring-boot-starter</artifactId>
</dependency>
```

2. **生成密文**

```bash
java -cp jasypt.jar org.jasypt.intf.cli.JasyptPBEStringEncryptionCLI \
    input="password" password="secret-key" algorithm="PBEWITHHMACSHA512ANDAES_256"
```

3. **配置文件中使用**

```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/khala
    username: root
    password: ENC(encrypted-password-string)
```

4. **启动时传入密钥**

```bash
java -jar app.jar --jasypt.encryptor.password=secret-key
```

**注意**：生产环境密钥通过环境变量或 K8s Secret 传入，禁止硬编码在代码或配置文件中。

### 配置中心加密（Nacos/Apollo）

配置中心自带加密功能，密文存储在服务端，应用启动时自动解密：

```yaml
# Nacos 加密配置示例
spring:
  cloud:
    nacos:
      config:
        server-addr: nacos.khala.svc:8848
        namespace: prod
        group: DEFAULT_GROUP
        encrypt:
          enabled: true
          key-id: alias/khala-config-key
```

---

## 动态配置

### 使用场景

| 场景 | 说明 |
|------|------|
| 功能开关 | 灰度发布、A/B 测试 |
| 业务参数 | 超时时间、重试次数、阈值 |
| 限流配置 | QPS 限制、黑名单 |
| 通知模板 | 短信/邮件内容模板 |

### Nacos 动态配置示例

```java
@Component
@Data
@NacosConfigurationProperties(dataId = "khala-task", autoRefreshed = true)
public class TaskProperties {

    private int maxRetryTimes = 3;
    private long timeoutMs = 5000;
    private boolean enableAsync = true;
}
```

```java
@Service
public class TaskService {

    @Autowired
    private TaskProperties taskProperties;

    public void processTask() {
        int retry = taskProperties.getMaxRetryTimes();
        // 使用动态配置的值
    }
}
```

### 配置变更监听

```java
@Component
public class ConfigChangeListener {

    @NacosConfigListener(dataId = "khala-task")
    public void onChange(String config) {
        log.info("配置变更: {}", config);
        // 刷新本地缓存、重建连接池等
    }
}
```

---

## 配置规范

### 命名规范

| 类型 | 格式 | 示例 |
|------|------|------|
| 应用配置 | `应用名.模块.属性` | `khala.task.timeout-ms` |
| 功能开关 | `feature.功能名.enabled` | `feature.new-ui.enabled` |
| 业务参数 | `biz.模块.参数` | `biz.order.max-items-per-order` |

### 配置分类

| 分类 | 存储位置 | 是否加密 | 是否动态 |
|------|----------|----------|----------|
| 基础连接 | 配置文件 | 否 | 否 |
| 敏感信息 | 配置中心 / K8s Secret | 是 | 否 |
| 业务参数 | 配置中心 | 否 | 是 |
| 功能开关 | 配置中心 | 否 | 是 |

### 配置审查清单

1. **禁止在代码中硬编码配置值**
2. **生产环境配置必须通过配置中心管理**
3. **敏感配置必须加密存储**
4. **配置变更需记录审计日志**
5. **配置值需有合理的默认值**，避免配置缺失导致启动失败

---

## K8s ConfigMap 与 Secret

### ConfigMap（非敏感配置）

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: khala-task-config
data:
  application.yml: |
    server:
      port: 8080
    spring:
      profiles:
        active: prod
```

### Secret（敏感配置）

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: khala-task-secret
type: Opaque
data:
  # base64 编码后的值
  db-password: cGFzc3dvcmQxMjM=
  jwt-secret: c2VjcmV0LWtleS0xMjM=
```

---

## 注意事项

1. **配置隔离**：不同环境使用不同的命名空间/分组，禁止混用
2. **版本管理**：配置变更纳入版本控制，支持回滚
3. **变更通知**：关键配置变更通知相关开发人员
4. **本地覆盖**：开发环境允许本地 `application-local.yml` 覆盖，但需加入 `.gitignore`
5. **配置校验**：应用启动时校验必要配置是否存在、格式是否正确
