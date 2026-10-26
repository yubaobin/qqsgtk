package com.eshore.khala.example.lock;

import com.eshore.khala.common.exception.LockException;
import com.eshore.khala.starter.lock.DistributedLock;
import com.eshore.khala.starter.lock.Zlock;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

/**
 * 编程式分布式锁示例
 *
 * &lt;p&gt;通过注入 DistributedLock 接口手动控制加锁/解锁&lt;/p&gt;
 * &lt;p&gt;适用于需要精细控制锁生命周期的场景&lt;/p&gt;
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class LockProgrammaticService {

    private final DistributedLock distributedLock;

    /**
     * 基本加锁：阻塞等待直到获取锁
     *
     * &lt;p&gt;lock() 会一直等待直到获取锁&lt;/p&gt;
     * &lt;p&gt;使用 try-with-resources 自动释放锁（Zlock 实现了 AutoCloseable）&lt;/p&gt;
     */
    public void basicLock(String key) {
        try (Zlock lock = distributedLock.lock(key)) {
            // 获取锁成功，执行业务逻辑
            doBusiness();
        } catch (LockException e) {
            log.error(&quot;获取锁失败: {}&quot;, e.getMessage());
        } catch (Exception e) {
            log.error(&quot;业务执行异常&quot;, e);
        }
    }

    /**
     * 指定持有时间加锁
     *
     * &lt;p&gt;leaseTime: 锁的持有时间，超时自动释放&lt;/p&gt;
     */
    public void lockWithLeaseTime(String key) {
        try (Zlock lock = distributedLock.lock(key, 30, TimeUnit.SECONDS)) {
            doBusiness();
        } catch (Exception e) {
            log.error(&quot;执行异常&quot;, e);
        }
    }

    /**
     * 尝试加锁：等待指定时间后放弃
     *
     * &lt;p&gt;tryLock() 在指定时间内尝试获取锁，获取不到返回 null&lt;/p&gt;
     */
    public void tryLock(String key) {
        Zlock lock = null;
        try {
            lock = distributedLock.tryLock(key, 5, 30, TimeUnit.SECONDS);
            if (lock != null) {
                // 获取锁成功
                doBusiness();
            } else {
                log.warn(&quot;获取锁超时，key={}&quot;, key);
            }
        } catch (LockException e) {
            log.error(&quot;获取锁失败: {}&quot;, e.getMessage());
        } finally {
            if (lock != null) {
                distributedLock.unlock(lock);
            }
        }
    }

    /**
     * 公平锁
     */
    public void fairLock(String key) {
        try (Zlock lock = distributedLock.lock(key, true)) {
            doBusiness();
        } catch (Exception e) {
            log.error(&quot;执行异常&quot;, e);
        }
    }

    private void doBusiness() {
        // 业务逻辑
    }
}
