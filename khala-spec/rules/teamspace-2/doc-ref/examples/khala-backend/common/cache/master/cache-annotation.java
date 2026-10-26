package com.eshore.khala.example.cache;

import com.eshore.khala.example.cache.entity.User;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

/**
 * Spring Cache 注解使用示例
 *
 * &lt;p&gt;通过 @Cacheable、@CachePut、@CacheEvict 简化缓存操作&lt;/p&gt;
 */
@Service
public class CacheAnnotationService {

    /**
     * 查询用户（优先从缓存读取）
     *
     * &lt;p&gt;cacheNames: 缓存名称&lt;/p&gt;
     * &lt;p&gt;key: 缓存键，支持 SpEL 表达式&lt;/p&gt;
     * &lt;p&gt;unless: 条件满足时不缓存（结果为 null 时不缓存）&lt;/p&gt;
     */
    @Cacheable(cacheNames = &quot;user&quot;, key = &quot;#userId&quot;, unless = &quot;#result == null&quot;)
    public User getUserById(Long userId) {
        // 模拟从数据库查询
        return queryFromDatabase(userId);
    }

    /**
     * 更新用户（更新数据库后同步更新缓存）
     */
    @CachePut(cacheNames = &quot;user&quot;, key = &quot;#user.id&quot;)
    public User updateUser(User user) {
        // 更新数据库
        updateToDatabase(user);
        return user;
    }

    /**
     * 删除用户（删除数据库后清除缓存）
     */
    @CacheEvict(cacheNames = &quot;user&quot;, key = &quot;#userId&quot;)
    public void deleteUser(Long userId) {
        // 从数据库删除
        deleteFromDatabase(userId);
    }

    /**
     * 清除所有用户缓存
     */
    @CacheEvict(cacheNames = &quot;user&quot;, allEntries = true)
    public void clearUserCache() {
    }

    private User queryFromDatabase(Long userId) {
        return new User();
    }

    private void updateToDatabase(User user) {
    }

    private void deleteFromDatabase(Long userId) {
    }
}
