package com.example.transaction;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * 事务隔离级别示例
 *
 * &lt;p&gt;说明：通过 isolation 属性控制事务的隔离级别，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;READ_UNCOMMITTED：读未提交（最低，可能脏读）&lt;/li&gt;
 *   &lt;li&gt;READ_COMMITTED：读已提交（Oracle 默认，避免脏读）&lt;/li&gt;
 *   &lt;li&gt;REPEATABLE_READ：可重复读（MySQL 默认，避免不可重复读）&lt;/li&gt;
 *   &lt;li&gt;SERIALIZABLE：串行化（最高，避免幻读）&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Service
public class IsolationServiceImpl implements IsolationService {

    private UserMapper userMapper;

    /**
     * 报表查询：允许读取已提交数据即可
     *
     * &lt;p&gt;使用 READ_COMMITTED 平衡一致性与并发性能&lt;/p&gt;
     */
    @Override
    @Transactional(isolation = Isolation.READ_COMMITTED, readOnly = true)
    public List&lt;User&gt; listUsersForReport() {
        return userMapper.selectList();
    }

    /**
     * 统计查询：需要可重复读，防止统计过程中数据变化
     */
    @Override
    @Transactional(isolation = Isolation.REPEATABLE_READ, readOnly = true)
    public long countUsers() {
        return userMapper.selectCount();
    }

    /**
     * 关键数据核对：最高隔离级别，完全串行化
     *
     * &lt;p&gt;适用于对数据一致性要求极高的场景，如财务对账&lt;/p&gt;
     */
    @Override
    @Transactional(isolation = Isolation.SERIALIZABLE, readOnly = true)
    public List&lt;User&gt; auditUsers() {
        return userMapper.selectList();
    }
}

// 接口与实体定义（简化）
interface IsolationService {
    List&lt;User&gt; listUsersForReport();
    long countUsers();
    List&lt;User&gt; auditUsers();
}

class UserMapper {
    List&lt;User&gt; selectList() { return null; }
    long selectCount() { return 0; }
}

class User {
    private Long id;
    private String username;
}
