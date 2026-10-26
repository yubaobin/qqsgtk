package com.eshore.khala.example.cache;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

/**
 * 缓存击穿防护示例
 *
 * &lt;p&gt;缓存击穿：热点 key 过期瞬间，大量请求同时打到数据库&lt;/p&gt;
 * &lt;p&gt;解决方案：互斥锁、逻辑过期&lt;/p&gt;
 */
@Service
public class CacheBreakdownService {

    private final StringRedisTemplate redisTemplate;
    private final ReentrantLock lock = new ReentrantLock();

    public CacheBreakdownService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    /**
     * 互斥锁方案
     *
     * &lt;p&gt;热点 key 过期时，只有一个线程去重建缓存，其他线程等待&lt;/p&gt;
     */
    public String getHotDataWithLock(String key) {
        String cacheKey = &quot;hot:&quot; + key;
        String value = redisTemplate.opsForValue().get(cacheKey);

        if (value != null) {
            return value;
        }

        // 获取互斥锁
        String lockKey = &quot;lock:&quot; + key;
        Boolean locked = redisTemplate.opsForValue()
                .setIfAbsent(lockKey, &quot;1&quot;, 10, TimeUnit.SECONDS);

        try {
            if (Boolean.TRUE.equals(locked)) {
                // 双重检查
                value = redisTemplate.opsForValue().get(cacheKey);
                if (value != null) {
                    return value;
                }
                // 查询数据库并重建缓存
                value = queryFromDatabase(key);
                redisTemplate.opsForValue().set(cacheKey, value, 30, TimeUnit.MINUTES);
                return value;
            } else {
                // 未获取到锁，短暂等待后重试
                Thread.sleep(100);
                return getHotDataWithLock(key);
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            return null;
        } finally {
            if (Boolean.TRUE.equals(locked)) {
                redisTemplate.delete(lockKey);
            }
        }
    }

    /**
     * 逻辑过期方案
     *
     * &lt;p&gt;不设置 TTL，而是在 value 中存储逻辑过期时间，由后台线程异步重建&lt;/p&gt;
     */
    public String getHotDataWithLogicalExpire(String key) {
        // 实现逻辑过期逻辑...
        return null;
    }

    private String queryFromDatabase(String key) {
        return &quot;data&quot;;
    }
}
