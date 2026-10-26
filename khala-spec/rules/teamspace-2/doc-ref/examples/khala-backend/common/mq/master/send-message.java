package com.example.mq;

import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 发送普通消息示例
 */
@Tag(name = &quot;消息队列管理&quot;)
@RestController
@RequestMapping(&quot;/api/mq&quot;)
public class SendMessageController {

    @Autowired
    private RocketMQTemplate rocketMQTemplate;

    /**
     * 发送同步消息
     */
    @Operation(summary = &quot;发送同步消息&quot;, description = &quot;发送同步消息到指定 topic&quot;)
    @PostMapping(&quot;/send&quot;)
    public CommonResult&lt;String&gt; send(@RequestParam String message) {
        rocketMQTemplate.syncSend(&quot;test-topic&quot;, message);
        return CommonResult.success(&quot;发送成功&quot;);
    }

    /**
     * 发送带标签的消息
     */
    @Operation(summary = &quot;发送带标签的消息&quot;, description = &quot;发送带 tag 的消息到指定 topic&quot;)
    @PostMapping(&quot;/send-with-tag&quot;)
    public CommonResult&lt;String&gt; sendWithTag(@RequestParam String message, @RequestParam String tag) {
        rocketMQTemplate.syncSend(&quot;test-topic:&quot; + tag, message);
        return CommonResult.success(&quot;发送成功&quot;);
    }

    /**
     * 发送对象消息
     */
    @Operation(summary = &quot;发送对象消息&quot;, description = &quot;发送对象消息到指定 topic&quot;)
    @PostMapping(&quot;/send-object&quot;)
    public CommonResult&lt;String&gt; sendObject(@RequestBody UserMessageReqVO reqVO) {
        rocketMQTemplate.syncSend(&quot;user-topic&quot;,
                MessageBuilder.withPayload(reqVO).build());
        return CommonResult.success(&quot;发送成功&quot;);
    }

    /**
     * 发送异步消息
     */
    @Operation(summary = &quot;发送异步消息&quot;, description = &quot;异步发送消息到指定 topic&quot;)
    @PostMapping(&quot;/send-async&quot;)
    public CommonResult&lt;String&gt; sendAsync(@RequestParam String message) {
        rocketMQTemplate.asyncSend(&quot;test-topic&quot;, message, new org.apache.rocketmq.client.producer.SendCallback() {
            @Override
            public void onSuccess(org.apache.rocketmq.client.producer.SendResult sendResult) {
                System.out.println(&quot;发送成功: &quot; + sendResult.getMsgId());
            }

            @Override
            public void onException(Throwable e) {
                System.out.println(&quot;发送失败: &quot; + e.getMessage());
            }
        });
        return CommonResult.success(&quot;异步发送中&quot;);
    }

    // 消息对象
    public static class UserMessageReqVO {
        private Long userId;
        private String username;
        // getters / setters
    }
}
