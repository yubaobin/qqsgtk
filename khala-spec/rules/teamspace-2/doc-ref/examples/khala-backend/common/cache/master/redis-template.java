package com.eshore.khala.example.cache;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

/**
 * RedisTemplate 基础操作示例
 *
 * &lt;p&gt;直接使用 RedisTemplate 进行缓存的增删改查&lt;/p&gt;
 */
@Service
public class RedisTemplateService {

    private final StringRedisTemplate stringRedisTemplate;
    private final RedisTemplate&lt;String, Object&gt; redisTemplate;

    public RedisTemplateService(StringRedisTemplate stringRedisTemplate,
                                RedisTemplate&lt;String, Object&gt; redisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
        this.redisTemplate = redisTemplate;
    }

    /**
     * 字符串操作
     */
    public void stringOps() {
        // 设置值
        stringRedisTemplate.opsForValue().set(&quot;key&quot;, &quot;value&quot;);
        // 设置值并指定过期时间
        stringRedisTemplate.opsForValue().set(&quot;key&quot;, &quot;value&quot;, 30, TimeUnit.MINUTES);
        // 获取值
        String value = stringRedisTemplate.opsForValue().get(&quot;key&quot;);
        // 删除键
        stringRedisTemplate.delete(&quot;key&quot;);
    }

    /**
     * Hash 操作
     */
    public void hashOps() {
        String key = &quot;user:1&quot;;
        // 设置字段值
        stringRedisTemplate.opsForHash().put(key, &quot;name&quot;, &quot;张三&quot;);
        stringRedisTemplate.opsForHash().put(key, &quot;age&quot;, &quot;25&quot;);
        // 获取字段值
        Object name = stringRedisTemplate.opsForHash().get(key, &quot;name&quot;);
        // 删除字段
        stringRedisTemplate.opsForHash().delete(key, &quot;age&quot;);
    }

    /**
     * List 操作
     */
    public void listOps() {
        String key = &quot;list:key&quot;;
        // 左侧插入
        stringRedisTemplate.opsForList().leftPush(key, &quot;item1&quot;);
        // 右侧弹出
        String item = stringRedisTemplate.opsForList().rightPop(key);
    }

    /**
     * Set 操作
     */
    public void setOps() {
        String key = &quot;set:key&quot;;
        // 添加成员
        stringRedisTemplate.opsForSet().add(key, &quot;member1&quot;, &quot;member2&quot;);
        // 判断成员是否存在
        Boolean isMember = stringRedisTemplate.opsForSet().isMember(key, &quot;member1&quot;);
    }

    /**
     * 对象缓存（使用 JSON 序列化）
     */
    public void objectOps() {
        // redisTemplate 配置 JSON 序列化后可存储对象
        redisTemplate.opsForValue().set(&quot;obj:key&quot;, new Object());
    }
}
