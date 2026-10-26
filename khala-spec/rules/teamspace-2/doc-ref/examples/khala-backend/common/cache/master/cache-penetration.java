package com.eshore.khala.example.cache;

import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

/**
 * 缓存穿透防护示例
 *
 * &lt;p&gt;缓存穿透：查询一个不存在的数据，每次都会穿透到数据库&lt;/p&gt;
 * &lt;p&gt;解决方案：布隆过滤器、空值缓存&lt;/p&gt;
 */
@Service
public class CachePenetrationService {

    private final StringRedisTemplate redisTemplate;

    public CachePenetrationService(StringRedisTemplate redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    /**
     * 空值缓存方案
     *
     * &lt;p&gt;对于查询结果为 null 的数据，也缓存一个空值（短过期时间）&lt;/p&gt;
     */
    public String getDataWithNullCache(String key) {
        String cacheKey = &quot;data:&quot; + key;
        String value = redisTemplate.opsForValue().get(cacheKey);

        // 缓存中存在空值标记
        if (&quot;NULL&quot;.equals(value)) {
            return null;
        }

        // 缓存命中
        if (value != null) {
            return value;
        }

        // 查询数据库
        String dbValue = queryFromDatabase(key);

        if (dbValue == null) {
            // 缓存空值，设置短过期时间（如 5 分钟）
            redisTemplate.opsForValue().set(cacheKey, &quot;NULL&quot;, 5, TimeUnit.MINUTES);
            return null;
        }

        // 缓存真实值
        redisTemplate.opsForValue().set(cacheKey, dbValue, 30, TimeUnit.MINUTES);
        return dbValue;
    }

    /**
     * 布隆过滤器方案（伪代码）
     *
     * &lt;p&gt;先判断布隆过滤器，不存在则直接返回，存在再查缓存&lt;/p&gt;
     */
    public String getDataWithBloomFilter(String key) {
        // if (!bloomFilter.mightContain(key)) {
        //     return null;
        // }
        // 继续查缓存...
        return null;
    }

    private String queryFromDatabase(String key) {
        return null;
    }
}
