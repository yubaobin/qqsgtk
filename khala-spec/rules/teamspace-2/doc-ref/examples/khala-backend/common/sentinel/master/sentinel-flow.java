package com.eshore.khala.example.sentinel;

import com.alibaba.csp.sentinel.annotation.SentinelResource;
import com.alibaba.csp.sentinel.slots.block.BlockException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * Sentinel 限流降级示例
 *
 * &lt;p&gt;使用 @SentinelResource 注解定义资源并配置限流降级处理&lt;/p&gt;
 * &lt;p&gt;Khala 已内置限流统一响应：Web 返回 429 + CommonResult，WebFlux 返回 429 + CommonResult&lt;/p&gt;
 */
@Slf4j
@RestController
@RequestMapping(&quot;/api/sentinel&quot;)
public class SentinelFlowController {

    /**
     * 基本限流
     *
     * &lt;p&gt;value: 资源名称，在 Sentinel Dashboard 中配置规则&lt;/p&gt;
     * &lt;p&gt;blockHandler: 限流时的处理方法&lt;/p&gt;
     */
    @GetMapping(&quot;/query&quot;)
    @SentinelResource(value = &quot;query&quot;, blockHandler = &quot;queryBlockHandler&quot;)
    public String query(@RequestParam String id) {
        return &quot;查询结果: &quot; + id;
    }

    /**
     * 限流处理方法
     *
     * &lt;p&gt;方法签名需与原方法一致，最后增加 BlockException 参数&lt;/p&gt;
     */
    public String queryBlockHandler(String id, BlockException e) {
        log.warn(&quot;请求被限流: id={}&quot;, id);
        return &quot;系统繁忙，请稍后重试&quot;;
    }

    /**
     * 限流 + 降级
     *
     * &lt;p&gt;blockHandler: 限流处理&lt;/p&gt;
     * &lt;p&gt;fallback: 业务异常时的降级处理&lt;/p&gt;
     */
    @GetMapping(&quot;/detail&quot;)
    @SentinelResource(value = &quot;detail&quot;,
            blockHandler = &quot;detailBlockHandler&quot;,
            fallback = &quot;detailFallback&quot;)
    public String detail(@RequestParam String id) {
        // 模拟业务异常
        if (&quot;error&quot;.equals(id)) {
            throw new RuntimeException(&quot;业务异常&quot;);
        }
        return &quot;详情: &quot; + id;
    }

    public String detailBlockHandler(String id, BlockException e) {
        return &quot;请求被限流，请稍后重试&quot;;
    }

    public String detailFallback(String id, Throwable t) {
        log.error(&quot;业务异常降级: id={}&quot;, id, t);
        return &quot;服务暂时不可用，请稍后重试&quot;;
    }

    /**
     * 默认限流处理
     *
     * &lt;p&gt;不指定 blockHandler 时，Khala 会统一返回 429 状态码 + CommonResult 错误信息&lt;/p&gt;
     * &lt;p&gt;Web MVC: 返回 HTTP 429 + {&quot;code&quot;: xxx, &quot;msg&quot;: &quot;xxx&quot;}&lt;/p&gt;
     * &lt;p&gt;WebFlux: 返回 HTTP 429 + {&quot;code&quot;: xxx, &quot;msg&quot;: &quot;xxx&quot;}&lt;/p&gt;
     */
    @GetMapping(&quot;/list&quot;)
    public String list() {
        return &quot;列表数据&quot;;
    }
}
