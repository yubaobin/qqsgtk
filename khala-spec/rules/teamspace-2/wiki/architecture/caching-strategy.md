# 缓存策略

## 概述

缓存是提升系统性能的核心手段。合理的缓存设计能显著降低数据库压力，但不恰当的缓存使用会引入数据不一致、缓存击穿等问题。Khala 项目采用多级缓存架构，根据数据特性选择不同的缓存策略。

---

## 缓存分层

### 本地缓存（Caffeine）

| 特性 | 说明 |
|------|------|
| 存储位置 | JVM 堆内存 |
| 访问速度 | 微秒级 |
| 容量限制 | 受单机内存限制 |
| 数据一致性 | 仅单机有效，多实例间不共享 |
| 适用场景 | 配置数据、字典表、热点数据、读多写少 |

```java
@Configuration
public class CacheConfig {

    @Bean
    public Cache<String, Object> localCache() {
        return Caffeine.newBuilder()
            .maximumSize(1000)
            .expireAfterWrite(Duration.ofMinutes(10))
            .recordStats()
            .build();
    }
}
```

### 分布式缓存（Redis）

| 特性 | 说明 |
|------|------|
| 存储位置 | 独立缓存服务 |
| 访问速度 | 毫秒级（网络开销） |
| 容量限制 | 可横向扩展 |
| 数据一致性 | 多实例共享 |
| 适用场景 | 会话数据、热点数据、分布式锁、计数器 |

```java
@Service
public class TaskService {

    @Autowired
    private StringRedisTemplate redisTemplate;

    public TaskVO getById(Long id) {
        String key = "task:" + id;
        String json = redisTemplate.opsForValue().get(key);
        if (json != null) {
            return JSON.parseObject(json, TaskVO.class);
        }
        TaskVO vo = taskMapper.selectById(id);
        if (vo != null) {
            redisTemplate.opsForValue().set(key, JSON.toJSONString(vo), Duration.ofMinutes(30));
        }
        return vo;
    }
}
```

### 多级缓存组合

```
请求 → 本地缓存(Caffeine) → 命中？返回
            ↓ 未命中
      分布式缓存(Redis) → 命中？写入本地缓存并返回
            ↓ 未命中
      数据库 → 写入 Redis + 本地缓存 → 返回
```

---

## 缓存模式

### Cache-Aside（旁路缓存，推荐）

应用负责维护缓存，读写逻辑如下：

**读操作**：
1. 先读缓存
2. 缓存命中则返回
3. 缓存未命中则读数据库
4. 写入缓存后返回

**写操作**：
1. 先更新数据库
2. 再删除缓存（或更新缓存）

```java
public void updateTask(TaskUpdateDTO dto) {
    // 1. 更新数据库
    taskMapper.updateById(dto);
    // 2. 删除缓存（非更新，避免并发写覆盖）
    redisTemplate.delete("task:" + dto.getId());
}
```

### Read-Through（读穿透）

缓存层自己维护与数据库的交互，应用只与缓存交互。

### Write-Through（写穿透）

写操作同时更新缓存和数据库，保证强一致性，但性能较低。

### Write-Behind（异步写）

先写缓存，异步批量写数据库。性能最高，但可能丢数据，适用于非关键数据。

---

## 缓存一致性

### 更新策略选择

| 策略 | 实现 | 一致性 | 性能 | 适用场景 |
|------|------|--------|------|----------|
| 先删缓存，再更新 DB | 删除 → 更新 | 低 | 高 | 不推荐使用 |
| 先更新 DB，再删缓存 | 更新 → 删除 | 中 | 高 | **推荐** |
| 延迟双删 | 删 → 更新 → 延迟删 | 较高 | 中 | 高并发读 |
| 监听 Binlog | Canal 监听 MySQL | 高 | 中 | 强一致性要求 |

### 延迟双删示例

```java
public void updateTask(TaskUpdateDTO dto) {
    String key = "task:" + dto.getId();
    // 1. 先删缓存
    redisTemplate.delete(key);
    // 2. 更新数据库
    taskMapper.updateById(dto);
    // 3. 延迟再次删除（异步，500ms 后）
    asyncExecutor.schedule(() -> redisTemplate.delete(key), 500, TimeUnit.MILLISECONDS);
}
```

---

## 缓存问题防护

### 缓存穿透

**问题**：查询不存在的数据，每次直达数据库。

**解决**：
1. 布隆过滤器预判
2. 缓存空值（设置较短 TTL，如 5 分钟）

```java
public TaskVO getById(Long id) {
    String key = "task:" + id;
    String json = redisTemplate.opsForValue().get(key);
    if ("null".equals(json)) {
        return null; // 缓存的空值
    }
    if (json != null) {
        return JSON.parseObject(json, TaskVO.class);
    }
    TaskVO vo = taskMapper.selectById(id);
    if (vo == null) {
        redisTemplate.opsForValue().set(key, "null", Duration.ofMinutes(5));
    } else {
        redisTemplate.opsForValue().set(key, JSON.toJSONString(vo), Duration.ofMinutes(30));
    }
    return vo;
}
```

### 缓存击穿

**问题**：热点 key 过期瞬间，大量请求同时打到数据库。

**解决**：
1. 热点 key 永不过期，异步刷新
2. 互斥锁：只有一个线程去加载数据

```java
public TaskVO getByIdWithLock(Long id) {
    String key = "task:" + id;
    String json = redisTemplate.opsForValue().get(key);
    if (json != null) {
        return JSON.parseObject(json, TaskVO.class);
    }
    // 获取互斥锁
    String lockKey = "lock:task:" + id;
    Boolean locked = redisTemplate.opsForValue().setIfAbsent(lockKey, "1", Duration.ofSeconds(10));
    if (Boolean.TRUE.equals(locked)) {
        try {
            TaskVO vo = taskMapper.selectById(id);
            if (vo != null) {
                redisTemplate.opsForValue().set(key, JSON.toJSONString(vo), Duration.ofMinutes(30));
            }
            return vo;
        } finally {
            redisTemplate.delete(lockKey);
        }
    } else {
        // 未获取到锁，短暂等待后重试
        Thread.sleep(100);
        return getByIdWithLock(id);
    }
}
```

### 缓存雪崩

**问题**：大量 key 同时过期，数据库压力骤增。

**解决**：
1. 过期时间加随机偏移：`baseTTL + random(0, 300)` 秒
2. 热点数据永不过期
3. 多级缓存兜底

---

## 多租户缓存隔离

缓存 key 必须包含 `tenant_id`，防止租户间数据串扰：

```java
public String buildCacheKey(Long tenantId, String bizKey) {
    return tenantId + ":" + bizKey;
}

// 示例
task:100:12345  // 租户 100 的任务 12345
```

---

## 缓存使用规范

### 必须缓存的数据

1. 配置表、字典表（读多写极少）
2. 用户基础信息（登录后频繁使用）
3. 热点业务数据（如首页展示数据）

### 禁止缓存的数据

1. 实时性要求极高的数据（如库存、余额）
2. 大对象（超过 1MB）
3. 敏感数据（密码、密钥）
4. 频繁变更的数据（变更周期 < 1 分钟）

### Spring Cache 注解规范

Spring Cache 提供声明式缓存支持，通过注解即可实现缓存逻辑，无需侵入业务代码。

#### @Cacheable（读取缓存）

方法执行前先从缓存查询，命中则直接返回；未命中则执行方法，并将结果写入缓存。

```java
@Service
public class TaskService {

    /**
     * 查询任务详情，结果缓存 30 分钟。
     * key 格式：task:{tenantId}:{id}
     * condition：仅当 id > 0 时才缓存
     */
    @Cacheable(
        value = "task",
        key = "#id",
        unless = "#result == null"
    )
    public TaskEntity getById(Long tenantId, Long id) {
        return taskMapper.selectById(id);
    }

}
```

| 属性 | 说明 |
|------|------|
| `value` / `cacheNames` | 缓存名称（必填），对应 CacheManager 中的区域 |
| `key` | 缓存键，支持 SpEL 表达式；默认使用所有参数组合 |
| `condition` | SpEL 条件，为 `true` 时才缓存（方法执行前判断） |
| `unless` | SpEL 条件，为 `true` 时不缓存（方法执行后判断，可引用 `#result`） |
| `sync` | 是否同步加载，防止缓存击穿（仅单机有效） |

---

#### @CacheEvict（清除缓存）

用于数据变更后清除缓存，保证一致性。

```java
@Service
public class TaskService {

    /**
     * 更新任务后，删除对应缓存。
     */
    @CacheEvict(value = "task", key = "#dto.id")
    public void update(TaskUpdateDTO dto) {
        taskMapper.updateById(dto);
    }

    /**
     * 删除任务后，同时删除详情缓存和列表缓存。
     */
    @Caching(evict = {
        @CacheEvict(value = "task", key = "#id"),
        @CacheEvict(value = "task:list", allEntries = true)
    })
    public void delete(Long tenantId, Long id) {
        taskMapper.deleteById(id);
    }

    /**
     * 清空某个缓存名称下的所有数据（谨慎使用，影响面大）。
     */
    @CacheEvict(value = "task:list", allEntries = true, beforeInvocation = true)
    public void clearListCache() {
        // 仅用于管理后台等可控场景
    }
}
```

| 属性 | 说明 |
|------|------|
| `allEntries` | 是否清除该 `value` 下所有缓存，默认 `false` |
| `beforeInvocation` | 是否在方法执行前清除，默认 `false`（方法成功后清除） |

---

#### @CachePut（更新缓存）

方法始终执行，并将结果写入缓存（不会先查缓存）。适用于更新后需要立即刷新缓存的场景。

```java
/**
 * 更新任务后，将最新结果写入缓存。
 * 注意：#result 引用方法返回值，因此方法必须返回更新后的对象。
 */
@CachePut(value = "task", key = "#dto.tenantId + ':' + #dto.id", condition = "#result != null")
public TaskVO updateAndRefresh(TaskUpdateDTO dto) {
    taskMapper.updateById(dto);
    return taskMapper.selectById(dto.getId());
}
```

> **注意**：`@CachePut` 与 `@Cacheable` 不应同时用于同一方法，行为会冲突。

---

#### @Caching（组合注解）

同一方法需要多个缓存操作时，使用 `@Caching` 组合。

```java
@Caching(
    cacheable = @Cacheable(value = "task", key = "#tenantId + ':' + #id"),
    evict = @CacheEvict(value = "task:list", allEntries = true)
)
public TaskVO getAndClearList(Long tenantId, Long id) {
    return taskMapper.selectById(id);
}
```

---

#### @CacheConfig（类级配置）

在类上统一配置缓存名称，减少方法上的重复。

```java
@Service
@CacheConfig(cacheNames = "task")
public class TaskService {

    @Cacheable(key = "#id")
    public TaskVO getById(Long tenantId, Long id) { ... }

    @CacheEvict(key = "#id")
    public void delete(Long tenantId, Long id) { ... }
}
```

---

#### 关键配置项

| 配置项 | 说明 | 推荐值 |
|--------|------|--------|
| `entryTtl` | 缓存过期时间 | 业务数据 10~30 分钟，字典数据 1~2 小时 |
| `disableCachingNullValues` | 不缓存 null，避免缓存穿透 | 建议开启 |
| `serializeValuesWith` | 值序列化方式 | `GenericJackson2JsonRedisSerializer` |
| `transactionAware` | 事务提交后才写入缓存 | 建议开启，保证事务一致性 |

---

### SpEL 常用表达式

| 表达式 | 含义 |
|--------|------|
| `#root.methodName` | 当前方法名 |
| `#root.target` | 当前被调用的对象 |
| `#root.args[0]` | 第一个参数（同 `#p0`、`#a0`） |
| `#result` | 方法返回值（仅 `unless`、`@CachePut` 可用） |
| `#tenantId` | 名为 tenantId 的参数 |
| `"'staticKey'"` | 静态字符串 key（注意外层双引号 + 内层单引号） |

---

### Spring Cache 与多租户集成

多租户场景下，缓存 key 必须包含 `tenant_id`，防止数据串扰。

```java
@Service
public class TaskService {

    @Cacheable(
        value = "task",
        key = "T(com.eshore.khala.common.util.TenantContext).getTenantId() + ':' + #id"
    )
    public TaskVO getById(Long id) {
        return taskMapper.selectById(id);
    }
}
```

> 推荐封装统一的 key 生成工具，避免 SpEL 冗长：
> ```java
> key = "@cacheKeyBuilder.task(#id)"
> ```

---

### Spring Cache 使用禁忌

1. **同一方法上 `@Cacheable` 与 `@CachePut` 不可混用**：`@CachePut` 会强制执行方法并覆盖缓存，导致 `@Cacheable` 的读取逻辑失效。
2. **内部调用不走代理**：同类中 `this.method()` 调用不会触发缓存注解，需通过 AOP 代理调用。
3. **缓存 key 避免高基数**：如使用用户 ID 作为 key 的一部分，可能导致 Redis 内存膨胀。
4. **`allEntries = true` 谨慎使用**：会清空整个缓存区域，影响所有租户/所有数据。
5. **异步方法慎用**：`@Async` 与缓存注解同时使用时，缓存逻辑可能在异步线程中执行，上下文（如 TenantContext）可能丢失。

---

## 注意事项

1. **设置合理的 TTL**：根据数据变更频率设置，避免过长导致数据陈旧
2. **监控缓存命中率**：低于 50% 需分析 key 设计是否合理
3. **缓存预热**：系统启动时对热点数据预加载
4. **降级策略**：Redis 故障时自动降级为只查数据库，避免服务不可用
