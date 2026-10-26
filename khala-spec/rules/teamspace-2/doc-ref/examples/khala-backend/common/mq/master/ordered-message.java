package com.example.mq;

import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.rocketmq.spring.core.RocketMQTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 顺序消息示例
 */
@Tag(name = &quot;消息队列管理&quot;)
@RestController
@RequestMapping(&quot;/api/mq&quot;)
public class OrderedMessageController {

    @Autowired
    private RocketMQTemplate rocketMQTemplate;

    /**
     * 发送顺序消息
     *
     * @param message 消息内容
     * @param hashKey 用于选择队列的哈希键（相同 hashKey 的消息进入同一队列）
     */
    @Operation(summary = &quot;发送顺序消息&quot;, description = &quot;发送顺序消息到指定 topic&quot;)
    @PostMapping(&quot;/send-ordered&quot;)
    public CommonResult&lt;String&gt; sendOrdered(@RequestParam String message, @RequestParam String hashKey) {
        rocketMQTemplate.syncSendOrderly(&quot;ordered-topic&quot;, message, hashKey);
        return CommonResult.success(&quot;顺序消息发送成功&quot;);
    }
}
