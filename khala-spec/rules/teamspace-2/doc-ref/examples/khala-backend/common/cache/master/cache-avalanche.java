package com.eshore.khala.example.cache;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.concurrent.TimeUnit;

/**
 * 缓存雪崩防护示例
 *
 * &lt;p&gt;缓存雪崩：大量 key 同时过期，导致数据库压力激增&lt;/p&gt;
 * &lt;p&gt;解决方案：随机过期时间、多级缓存、热点数据永不过期&lt;/p&gt;
 */
@Service
public class CacheAvalancheService {

    private final StringRedisTemplate redisTemplate;
    private final Random random = new Random();

    public CacheAvalancheService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    /**
     * 随机过期时间方案
     *
     * &lt;p&gt;基础过期时间 + 随机偏移量，避免同时过期&lt;/p&gt;
     */
    public void setWithRandomExpire(String key, String value) {
        int baseExpire = 30; // 基础 30 分钟
        int randomOffset = random.nextInt(10); // 0-10 分钟随机偏移
        int expireTime = baseExpire + randomOffset;

        redisTemplate.opsForValue().set(key, value, expireTime, TimeUnit.MINUTES);
    }

    /**
     * 多级缓存方案（伪代码）
     *
     * &lt;p&gt;L1: Caffeine 本地缓存 -&gt; L2: Redis 分布式缓存 -&gt; DB&lt;/p&gt;
     */
    public String getWithMultiLevelCache(String key) {
        // 1. 查本地缓存
        // String localValue = caffeineCache.getIfPresent(key);
        // if (localValue != null) return localValue;

        // 2. 查 Redis
        String redisValue = redisTemplate.opsForValue().get(key);
        if (redisValue != null) {
            // 回填本地缓存
            // caffeineCache.put(key, redisValue);
            return redisValue;
        }

        // 3. 查数据库并重建多级缓存
        String dbValue = queryFromDatabase(key);
        redisTemplate.opsForValue().set(key, dbValue, 30, TimeUnit.MINUTES);
        // caffeineCache.put(key, dbValue);
        return dbValue;
    }

    private String queryFromDatabase(String key) {
        return &quot;data&quot;;
    }
}
