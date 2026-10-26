package com.example.transaction;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 只读事务示例
 *
 * &lt;p&gt;说明：对于纯查询操作，建议标记为只读事务，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. Spring 会对只读事务进行优化，不刷新持久化上下文&lt;/li&gt;
 *   &lt;li&gt;2. 某些数据库（如 MySQL）在只读事务下可提升查询性能&lt;/li&gt;
 *   &lt;li&gt;3. 明确标识只读意图，防止意外写入操作&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Service
public class ReadOnlyServiceImpl implements ReadOnlyService {

    private UserMapper userMapper;
    private OrderMapper orderMapper;

    /**
     * 查询用户列表（只读事务）
     */
    @Override
    @Transactional(readOnly = true)
    public List&lt;User&gt; listUsers() {
        return userMapper.selectList();
    }

    /**
     * 查询用户详情（只读事务 + 指定超时）
     */
    @Override
    @Transactional(readOnly = true, timeout = 10)
    public User getUserById(Long id) {
        return userMapper.selectById(id);
    }

    /**
     * 统计查询（只读事务）
     */
    @Override
    @Transactional(readOnly = true)
    public long countUsers() {
        return userMapper.selectCount();
    }

    /**
     * 复杂报表查询（只读事务 + 较长超时）
     */
    @Override
    @Transactional(readOnly = true, timeout = 60)
    public List&lt;OrderReportDTO&gt; generateOrderReport() {
        return orderMapper.selectOrderReport();
    }
}

// 接口与实体定义（简化）
interface ReadOnlyService {
    List&lt;User&gt; listUsers();
    User getUserById(Long id);
    long countUsers();
    List&lt;OrderReportDTO&gt; generateOrderReport();
}

class UserMapper {
    List&lt;User&gt; selectList() { return null; }
    User selectById(Long id) { return null; }
    long selectCount() { return 0; }
}

class OrderMapper {
    List&lt;OrderReportDTO&gt; selectOrderReport() { return null; }
}

class User {
    private Long id;
    private String username;
}

class OrderReportDTO {
    private Long orderId;
    private BigDecimal totalAmount;
}
