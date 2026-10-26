package com.example.transaction;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

/**
 * 事务传播行为示例
 *
 * &lt;p&gt;说明：通过 propagation 属性控制事务的传播方式，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;REQUIRED（默认）：当前无事务则新建，有则加入&lt;/li&gt;
 *   &lt;li&gt;REQUIRES_NEW：挂起当前事务，新建独立事务&lt;/li&gt;
 *   &lt;li&gt;NESTED：在当前事务中创建嵌套事务（部分回滚）&lt;/li&gt;
 *   &lt;li&gt;SUPPORTS：有事务则加入，无则以非事务执行&lt;/li&gt;
 *   &lt;li&gt;NOT_SUPPORTED：挂起当前事务，以非事务执行&lt;/li&gt;
 *   &lt;li&gt;MANDATORY：必须有事务，否则抛异常&lt;/li&gt;
 *   &lt;li&gt;NEVER：必须无事务，否则抛异常&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Service
public class AccountServiceImpl implements AccountService {

    private AccountMapper accountMapper;
    private LogService logService;

    /**
     * 转账（主事务）
     *
     * &lt;p&gt;日志记录使用 REQUIRES_NEW，独立提交不受主事务回滚影响&lt;/p&gt;
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void transfer(Long fromId, Long toId, BigDecimal amount) {
        // 1. 扣款
        accountMapper.decreaseBalance(fromId, amount);

        // 2. 收款
        accountMapper.increaseBalance(toId, amount);

        // 3. 记录日志（独立事务）
        logService.recordTransferLog(fromId, toId, amount);

        // 若扣款/收款失败回滚，但日志已独立提交保留记录
    }
}

/**
 * 日志服务（独立事务）
 */
@Service
class LogServiceImpl implements LogService {

    private LogMapper logMapper;

    /**
     * 记录转账日志（REQUIRES_NEW：独立事务）
     */
    @Override
    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void recordTransferLog(Long fromId, Long toId, BigDecimal amount) {
        TransferLog log = new TransferLog();
        log.setFromId(fromId);
        log.setToId(toId);
        log.setAmount(amount);
        logMapper.insert(log);
        // 独立提交，不受调用方事务回滚影响
    }
}

/**
 * 查询服务（SUPPORTS：有事务则加入）
 */
@Service
class QueryServiceImpl implements QueryService {

    private AccountMapper accountMapper;

    @Override
    @Transactional(propagation = Propagation.SUPPORTS, readOnly = true)
    public Account getAccount(Long id) {
        return accountMapper.selectById(id);
    }
}

// 接口与实体定义（简化）
interface AccountService {
    void transfer(Long fromId, Long toId, BigDecimal amount);
}

interface LogService {
    void recordTransferLog(Long fromId, Long toId, BigDecimal amount);
}

interface QueryService {
    Account getAccount(Long id);
}

class AccountMapper {
    void decreaseBalance(Long id, BigDecimal amount) {}
    void increaseBalance(Long id, BigDecimal amount) {}
    Account selectById(Long id) { return null; }
}

class LogMapper {
    void insert(TransferLog log) {}
}

class Account {
    private Long id;
    private BigDecimal balance;
}

class TransferLog {
    private Long fromId;
    private Long toId;
    private BigDecimal amount;
}
