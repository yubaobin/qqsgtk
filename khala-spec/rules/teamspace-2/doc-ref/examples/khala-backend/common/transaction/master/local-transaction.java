package com.example.transaction;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 本地事务示例
 *
 * &lt;p&gt;说明：使用 Spring @Transactional 实现声明式本地事务管理，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 在 Service 方法上添加 @Transactional 注解&lt;/li&gt;
 *   &lt;li&gt;2. 异常时自动回滚，需指定 rollbackFor = Exception.class&lt;/li&gt;
 *   &lt;li&gt;3. 默认仅对 RuntimeException 回滚，受检异常需显式配置&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Service
public class OrderServiceImpl implements OrderService {

    private OrderMapper orderMapper;
    private OrderItemMapper orderItemMapper;

    /**
     * 创建订单（本地事务）
     *
     * &lt;p&gt;同时保存订单主表和订单明细，任一操作失败整体回滚&lt;/p&gt;
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void createOrder(Order order, List&lt;OrderItem&gt; items) {
        // 1. 保存订单主表
        orderMapper.insert(order);

        // 2. 保存订单明细
        for (OrderItem item : items) {
            item.setOrderId(order.getId());
            orderItemMapper.insert(item);
        }

        // 3. 业务校验：明细不能为空
        if (items == null || items.isEmpty()) {
            throw new IllegalArgumentException(&quot;订单明细不能为空&quot;);
        }

        // 异常时自动回滚订单主表和明细的插入操作
    }
}

// 接口与实体定义（简化）
interface OrderService {
    void createOrder(Order order, List&lt;OrderItem&gt; items);
}

class OrderMapper {
    void insert(Order order) {}
}

class OrderItemMapper {
    void insert(OrderItem item) {}
}

class Order {
    private Long id;
    // getter / setter 省略
}

class OrderItem {
    private Long id;
    private Long orderId;
    // getter / setter 省略
}
