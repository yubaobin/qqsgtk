package com.eshore.khala.example.idempotent;

import com.eshore.khala.starter.idempotent.annotation.Idempotent;
import org.springframework.web.bind.annotation.*;

/**
 * @Idempotent 幂等注解使用示例
 *
 * &lt;p&gt;在方法上添加 @Idempotent 注解，相同参数的请求在指定时间内只会执行一次&lt;/p&gt;
 * &lt;p&gt;实现原理：基于 Redis 的 SETNX 命令，请求到达时尝试设置 Key，设置失败则视为重复请求&lt;/p&gt;
 */
@RestController
@RequestMapping(&quot;/api/order&quot;)
public class IdempotentAnnotationController {

    /**
     * 基本用法：指定业务 Key
     *
     * &lt;p&gt;keys: SpEL 表达式，提取参数值作为幂等 Key 的一部分&lt;/p&gt;
     * &lt;p&gt;默认 1 秒内相同参数的请求会被拦截&lt;/p&gt;
     */
    @Idempotent(keys = {&quot;#orderId&quot;})
    @PostMapping(&quot;/create&quot;)
    public String createOrder(@RequestParam Long orderId) {
        // 创建订单逻辑
        return &quot;订单创建成功&quot;;
    }

    /**
     * 自定义幂等超时时间
     *
     * &lt;p&gt;time: 幂等有效时间，默认 1&lt;/p&gt;
     * &lt;p&gt;unit: 时间单位，默认 SECONDS&lt;/p&gt;
     * &lt;p&gt;注意：如果方法执行时间超过 time，请求仍可能进来&lt;/p&gt;
     */
    @Idempotent(keys = {&quot;#orderId&quot;}, time = 5, unit = java.util.concurrent.TimeUnit.SECONDS)
    @PostMapping(&quot;/submit&quot;)
    public String submitOrder(@RequestParam Long orderId) {
        // 提交订单逻辑
        return &quot;订单提交成功&quot;;
    }

    /**
     * 自定义锁名称
     *
     * &lt;p&gt;name: 锁的名称前缀，便于区分不同业务&lt;/p&gt;
     */
    @Idempotent(name = &quot;payment&quot;, keys = {&quot;#paymentId&quot;}, time = 3)
    @PostMapping(&quot;/pay&quot;)
    public String payOrder(@RequestParam Long paymentId) {
        // 支付逻辑
        return &quot;支付成功&quot;;
    }

    /**
     * 多 Key 组合
     *
     * &lt;p&gt;多个参数组合作为幂等 Key，确保业务维度的唯一性&lt;/p&gt;
     */
    @Idempotent(keys = {&quot;#userId&quot;, &quot;#productId&quot;}, time = 2)
    @PostMapping(&quot;/purchase&quot;)
    public String purchase(@RequestParam Long userId, @RequestParam Long productId) {
        // 购买逻辑
        return &quot;购买成功&quot;;
    }

    /**
     * 不指定 keys 时自动使用所有参数
     *
     * &lt;p&gt;当 keys 为空时，自动将所有方法参数拼接为幂等 Key&lt;/p&gt;
     */
    @Idempotent(time = 5)
    @PostMapping(&quot;/apply&quot;)
    public String apply(@RequestParam String type, @RequestParam Long applicantId) {
        // 申请逻辑
        return &quot;申请成功&quot;;
    }
}
