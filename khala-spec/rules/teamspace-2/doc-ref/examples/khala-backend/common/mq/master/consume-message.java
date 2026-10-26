package com.example.mq;

import org.apache.rocketmq.spring.annotation.RocketMQMessageListener;
import org.apache.rocketmq.spring.core.RocketMQListener;
import org.springframework.stereotype.Service;

/**
 * 消费消息示例
 */
@Service
@RocketMQMessageListener(
        topic = &quot;test-topic&quot;,
        consumerGroup = &quot;test-consumer-group&quot;
)
public class ConsumeMessageListener implements RocketMQListener&lt;String&gt; {

    @Override
    public void onMessage(String message) {
        System.out.println(&quot;收到消息: &quot; + message);
        // 处理业务逻辑
    }
}

/**
 * 消费对象消息示例
 */
@Service
@RocketMQMessageListener(
        topic = &quot;user-topic&quot;,
        consumerGroup = &quot;user-consumer-group&quot;
)
class UserMessageListener implements RocketMQListener&lt;SendMessageController.UserMessageReqVO&gt; {

    @Override
    public void onMessage(SendMessageController.UserMessageReqVO message) {
        System.out.println(&quot;收到用户消息: &quot; + message.getUsername());
        // 处理业务逻辑
    }
}
