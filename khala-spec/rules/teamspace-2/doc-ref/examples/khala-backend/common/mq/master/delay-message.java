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
 * 延迟消息示例
 */
@Tag(name = &quot;消息队列管理&quot;)
@RestController
@RequestMapping(&quot;/api/mq&quot;)
public class DelayMessageController {

    @Autowired
    private RocketMQTemplate rocketMQTemplate;

    /**
     * 发送延迟消息
     *
     * 延迟级别：
     * 1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h
     * level: 1   2   3   4   5  6  7  8  9  10 11 12 13 14  15  16  17 18
     */
    @Operation(summary = &quot;发送延迟消息&quot;, description = &quot;发送延迟消息到指定 topic&quot;)
    @PostMapping(&quot;/send-delay&quot;)
    public CommonResult&lt;String&gt; sendDelay(@RequestParam String message, @RequestParam int delayLevel) {
        rocketMQTemplate.syncSendDelayTimeSeconds(&quot;delay-topic&quot;, message, delayLevel);
        return CommonResult.success(&quot;延迟消息发送成功&quot;);
    }

    /**
     * 发送定时消息（指定时间）
     */
    @Operation(summary = &quot;发送定时消息&quot;, description = &quot;发送定时消息到指定 topic&quot;)
    @PostMapping(&quot;/send-timer&quot;)
    public CommonResult&lt;String&gt; sendTimer(@RequestParam String message, @RequestParam long deliverTime) {
        org.apache.rocketmq.common.message.Message msg = new org.apache.rocketmq.common.message.Message();
        msg.setTopic(&quot;timer-topic&quot;);
        msg.setBody(message.getBytes());
        msg.setDeliverTimeMs(deliverTime);
        rocketMQTemplate.syncSend(&quot;timer-topic&quot;, msg);
        return CommonResult.success(&quot;定时消息发送成功&quot;);
    }
}
