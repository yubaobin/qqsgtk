# 部署与发布约束

## 概述

部署与发布约束保障系统在生产环境中稳定运行，支持快速扩容、平滑升级和故障恢复。Khala 项目基于容器化部署，遵循云原生最佳实践。

---

## 无状态设计

### 核心原则

应用实例必须是无状态的，任何实例都可以被随时创建或销毁而不影响业务。

### 禁止本地状态

| 禁止项 | 说明 | 替代方案 |
|--------|------|----------|
| 本地文件存储 | 上传文件存本地磁盘 | 对象存储（OSS/S3） |
| 本地会话 | Session 存 JVM 内存 | Redis / JWT |
| 本地缓存作为唯一数据源 | 重启后数据丢失 | Redis + 数据库 |
| 本地定时任务调度 | 多实例重复执行 | 分布式调度（XXL-Job/ElasticJob） |

### 会话外置

```yaml
spring:
  session:
    store-type: redis
  redis:
    host: redis.khala.svc
```

---

## 优雅停机

### 关闭流程

```
1. K8s 发送 SIGTERM 信号
2. 应用停止接收新请求（Readiness 返回 DOWN）
3. 等待正在处理的请求完成（grace period）
4. 关闭数据库连接池、线程池
5. 发送 SIGKILL（超时后强制终止）
```

### Spring Boot 优雅停机配置

```yaml
server:
  shutdown: graceful

spring:
  lifecycle:
    timeout-per-shutdown-phase: 30s
```

### 自定义优雅停机逻辑

```java
@Component
public class GracefulShutdownHook implements ApplicationListener<ContextClosedEvent> {

    @Autowired
    private ExecutorService executorService;

    @Override
    public void onApplicationEvent(ContextClosedEvent event) {
        log.info("开始优雅停机...");
        // 关闭线程池，等待任务完成
        executorService.shutdown();
        try {
            if (!executorService.awaitTermination(30, TimeUnit.SECONDS)) {
                executorService.shutdownNow();
            }
        } catch (InterruptedException e) {
            executorService.shutdownNow();
        }
        log.info("优雅停机完成");
    }
}
```

---

## 容器化规范

### Dockerfile 分层构建

```dockerfile
# 第一阶段：构建
FROM maven:3.9-eclipse-temurin-17 AS builder
WORKDIR /build
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

# 第二阶段：运行
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# 创建非 root 用户
RUN addgroup -S khala && adduser -S khala -G khala
USER khala

# 复制构建产物
COPY --from=builder /build/target/*.jar app.jar

# JVM 参数
ENV JAVA_OPTS="-XX:+UseG1GC -XX:MaxRAMPercentage=75.0 -XX:InitialRAMPercentage=50.0"

EXPOSE 8080
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
```

### 分层构建优势

1. **基础镜像缓存**：JDK 层不常变，可复用缓存
2. **依赖缓存**：pom.xml 不变时，依赖层不重新下载
3. **构建产物隔离**：运行环境不包含 Maven、源码

### 资源限制

```yaml
# K8s deployment 资源限制
resources:
  requests:
    memory: "512Mi"
    cpu: "500m"
  limits:
    memory: "2Gi"
    cpu: "2000m"
```

**JVM 内存设置**：

```bash
# 容器感知内存限制
-XX:+UseContainerSupport
-XX:MaxRAMPercentage=75.0
# 避免 OOMKilled，留 25% 给堆外内存和系统
```

---

## 发布策略

### 滚动发布（默认）

```yaml
# K8s RollingUpdate
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 25%        # 最多多出 25% 的 Pod
    maxUnavailable: 0    # 不可用 Pod 数量为 0
```

**特点**：平滑升级，无停机时间，但发布期间新旧版本共存。

### 蓝绿发布

```
当前版本（蓝色）：v1.0.0，100% 流量
新建版本（绿色）：v1.1.0，0% 流量
测试通过后切换流量：v1.1.0 100%，v1.0.0 保留可回滚
```

**适用场景**：需要快速回滚、发布前后对比验证。

### 金丝雀发布

```
阶段 1：v1.1.0 5% 流量，观察指标
阶段 2：v1.1.0 25% 流量，继续观察
阶段 3：v1.1.0 50% 流量
阶段 4：v1.1.0 100% 流量
```

**适用场景**：大规模用户、需要渐进式验证。

### 发布检查清单

1. **数据库变更**：
   - 新增字段必须有默认值
   - 禁止删除正在使用的字段（先废弃，再删除）
   - 大表加索引使用 `pt-online-schema-change`

2. **接口兼容性**：
   - 新增接口不影响旧版本
   - 修改接口需保证向后兼容

3. **配置检查**：
   - 新配置有默认值
   - 敏感配置已加密

4. **监控确认**：
   - 发布期间关注错误率、延迟指标
   - 发布完成后确认业务大盘正常

---

## 定时任务约束

### 分布式调度

多实例部署时，定时任务必须保证只有一个实例执行：

```java
@XxlJob("syncDataJob")
public ReturnT<String> syncDataJob() {
    // XXL-Job 自动分配执行器
    // 只有一个实例会执行
    dataSyncService.sync();
    return ReturnT.SUCCESS;
}
```

### 定时任务幂等

即使调度器保证单实例执行，任务本身仍需幂等：

```java
public void syncData() {
    String lockKey = "job:syncData:" + LocalDate.now();
    Boolean locked = redisTemplate.opsForValue().setIfAbsent(lockKey, "1", Duration.ofDays(1));
    if (!Boolean.TRUE.equals(locked)) {
        log.info("今日数据已同步，跳过");
        return;
    }
    // 执行同步逻辑
}
```

---

## 回滚策略

### 快速回滚

```bash
# K8s 回滚到上一个版本
kubectl rollout undo deployment/khala-task

# 回滚到指定版本
kubectl rollout undo deployment/khala-task --to-revision=3
```

### 数据库回滚

1. **变更脚本可逆**：每个 `up` 脚本对应一个 `down` 脚本
2. **数据备份**：发布前备份关键表
3. **灰度数据隔离**：金丝雀发布时使用独立标识，便于区分和清理

---

## 注意事项

1. **健康检查必须配置**：Liveness 和 Readiness 探针缺一不可
2. **资源请求与限制必须设置**：避免资源争抢导致 OOM
3. **禁止 privileged 容器**：以最小权限运行
4. **镜像安全扫描**：发布前扫描镜像漏洞（Trivy/Clair）
5. **日志输出到 stdout/stderr**：由容器运行时统一收集，禁止写本地文件
