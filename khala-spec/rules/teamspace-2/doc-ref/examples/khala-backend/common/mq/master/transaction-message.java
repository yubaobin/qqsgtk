package com.example.mq;

import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.rocketmq.spring.annotation.RocketMQTransactionListener;
import org.apache.rocketmq.spring.core.RocketMQLocalTransactionListener;
import org.apache.rocketmq.spring.core.RocketMQLocalTransactionState;
import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 事务消息示例
 */
@Tag(name = &quot;消息队列管理&quot;)
@RestController
@RequestMapping(&quot;/api/mq&quot;)
public class TransactionMessageController {

    @Autowired
    private RocketMQTemplate rocketMQTemplate;

    /**
     * 发送事务消息
     */
    @Operation(summary = &quot;发送事务消息&quot;, description = &quot;发送事务消息到指定 topic&quot;)
    @PostMapping(&quot;/send-transaction&quot;)
    public CommonResult&lt;String&gt; sendTransaction(@RequestParam String message) {
        rocketMQTemplate.sendMessageInTransaction(&quot;transaction-producer-group&quot;,
                &quot;transaction-topic&quot;, message, null);
        return CommonResult.success(&quot;事务消息发送成功&quot;);
    }
}

/**
 * 事务消息监听器
 */
@RocketMQTransactionListener(rocketMQTemplateBeanName = &quot;rocketMQTemplate&quot;)
class TransactionListenerImpl implements RocketMQLocalTransactionListener {

    /**
     * 执行本地事务
     */
    @Override
    public RocketMQLocalTransactionState executeLocalTransaction(Message msg, Object arg) {
        try {
            // 执行本地业务逻辑
            // 例如：更新数据库状态
            System.out.println(&quot;执行本地事务: &quot; + new String((byte[]) msg.getPayload()));
            return RocketMQLocalTransactionState.COMMIT;
        } catch (Exception e) {
            return RocketMQLocalTransactionState.ROLLBACK;
        }
    }

    /**
     * 回查本地事务状态
     */
    @Override
    public RocketMQLocalTransactionState checkLocalTransaction(Message msg) {
        // 查询本地事务状态
        System.out.println(&quot;回查本地事务状态: &quot; + new String((byte[]) msg.getPayload()));
        return RocketMQLocalTransactionState.COMMIT;
    }
}
