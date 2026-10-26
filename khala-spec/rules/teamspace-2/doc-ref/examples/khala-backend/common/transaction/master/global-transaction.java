package com.example.transaction;

import io.seata.spring.annotation.GlobalTransactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

/**
 * 分布式事务示例（Seata AT 模式）
 *
 * &lt;p&gt;说明：使用 @GlobalTransactional 实现跨服务的分布式事务，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 在业务入口方法上添加 @GlobalTransactional&lt;/li&gt;
 *   &lt;li&gt;2. 参与方服务使用普通 @Transactional 即可&lt;/li&gt;
 *   &lt;li&gt;3. 任一参与方异常，全局事务协调器触发所有分支回滚&lt;/li&gt;
 *   &lt;li&gt;4. 需确保各服务数据库已初始化 Seata UNDO_LOG 表&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Service
public class OrderBizServiceImpl implements OrderBizService {

    @Autowired
    private OrderFeignClient orderFeignClient;

    @Autowired
    private StorageFeignClient storageFeignClient;

    @Autowired
    private AccountFeignClient accountFeignClient;

    /**
     * 创建订单（分布式事务）
     *
     * &lt;p&gt;涉及订单服务、库存服务、账户服务三个微服务&lt;/p&gt;
     */
    @Override
    @GlobalTransactional(name = &quot;create-order&quot;, rollbackFor = Exception.class)
    public void createOrder(Order order) {
        // 1. 创建订单
        orderFeignClient.create(order);

        // 2. 扣减库存
        storageFeignClient.decrease(order.getProductId(), order.getCount());

        // 3. 扣减账户余额
        accountFeignClient.debit(order.getUserId(), order.getAmount());

        // 任意步骤异常，Seata 全局协调器触发所有已执行分支回滚
    }
}

// Feign 客户端接口（简化）
interface OrderFeignClient {
    void create(Order order);
}

interface StorageFeignClient {
    void decrease(Long productId, Integer count);
}

interface AccountFeignClient {
    void debit(Long userId, BigDecimal amount);
}

// 接口与实体定义（简化）
interface OrderBizService {
    void createOrder(Order order);
}

class Order {
    private Long id;
    private Long productId;
    private Long userId;
    private Integer count;
    private BigDecimal amount;
    // getter / setter 省略
}
