package com.eshore.khala.example.lock;

import com.eshore.khala.starter.klock.Klock;
import com.eshore.khala.starter.klock.KlockKey;
import org.springframework.stereotype.Service;

/**
 * @Klock 注解分布式锁示例
 *
 * &lt;p&gt;相比 @Lock，@Klock 支持通过 @KlockKey 标注参数来自定义业务 Key&lt;/p&gt;
 * &lt;p&gt;适用于需要基于方法参数组合生成锁 Key 的场景&lt;/p&gt;
 */
@Service
public class KlockAnnotationService {

    /**
     * 基本用法：指定锁名称和业务 Key
     *
     * &lt;p&gt;name: 锁的名称前缀&lt;/p&gt;
     * &lt;p&gt;keys: SpEL 表达式，用于提取参数值组合为锁 Key&lt;/p&gt;
     */
    @Klock(name = &quot;orderLock&quot;, keys = {&quot;#orderId&quot;})
    public void createOrder(Long orderId) {
        // 业务逻辑
    }

    /**
     * 多 Key 组合：基于多个参数构建锁 Key
     *
     * &lt;p&gt;最终锁 Key = name + 参数值组合&lt;/p&gt;
     */
    @Klock(name = &quot;transferLock&quot;, keys = {&quot;#fromAccount&quot;, &quot;#toAccount&quot;}, waitTime = 10, leaseTime = 30)
    public void transfer(String fromAccount, String toAccount, Long amount) {
        // 转账逻辑
    }

    /**
     * 使用 @KlockKey 标注参数
     *
     * &lt;p&gt;通过 @KlockKey 在参数上标注，自动提取该参数作为锁 Key 的一部分&lt;/p&gt;
     */
    @Klock(name = &quot;paymentLock&quot;)
    public void payOrder(@KlockKey Long orderId, Long amount) {
        // 支付逻辑
    }

    /**
     * 公平锁：保证获取锁的顺序与请求顺序一致
     */
    @Klock(name = &quot;fairLock&quot;, keys = {&quot;#id&quot;}, isFair = true)
    public void fairLockProcess(Long id) {
        // 业务逻辑
    }
}
