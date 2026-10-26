package com.example.logaudit;

import com.eshore.khala.starter.log.core.trace.MdcTraceUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

/**
 * 链路追踪 TraceId 使用示例
 *
 * &lt;p&gt;Khala 框架通过 MdcTraceUtils 在 MDC 中维护 traceId 和 spanId，
 * 实现 HTTP 请求级别的全链路日志追踪。
 *
 * &lt;p&gt;相关源码：
 * - 工具类：com.eshore.khala.starter.log.core.trace.MdcTraceUtils
 * - Filter：通过 Filter 在请求入口自动设置 traceId
 * - BizAuditLog 切面自动获取 traceId 写入审计日志
 *
 * &lt;p&gt;日志输出格式中引用 %X{traceId} 即可输出链路ID，参见 log-config.yml
 */
public class TraceIdExample {

    private static final Logger logger = LoggerFactory.getLogger(TraceIdExample.class);

    // ======================== 自动模式（推荐） ========================

    /**
     * 框架已内置 Filter，在 HTTP 请求入口自动执行以下逻辑：
     *
     * 1. 从请求头 x-traceId-header 读取 traceId
     * 2. 如果没有则自动生成（雪花算法ID）
     * 3. 放入 MDC，后续所有 logger 输出自动携带
     * 4. 请求结束时清除 MDC
     *
     * 因此在 Controller/Service 中无需手动操作，直接使用 logger 即可。
     */
    public void autoMode() {
        // 框架已自动设置 traceId，直接打印日志即可
        logger.info(&quot;处理业务逻辑&quot;);
        // 日志输出示例：2026-06-08 10:00:00.000 [traceId:1895048372610] INFO  - 处理业务逻辑
    }

    // ======================== 手动操作 API ========================

    /**
     * MdcTraceUtils 提供的核心方法
     */
    public void manualApiDemo() {
        // 创建新的 traceId 并放入 MDC
        MdcTraceUtils.addTrace();

        // 创建 traceId 并记录请求URL
        MdcTraceUtils.addTrace(&quot;/api/user/list&quot;);

        // 手动设置已有的 traceId 和 spanId（用于跨服务传递）
        MdcTraceUtils.putTrace(&quot;1895048372610&quot;, &quot;0&quot;);

        // 获取当前 traceId
        String traceId = MdcTraceUtils.getTraceId();

        // 获取当前 spanId
        String spanId = MdcTraceUtils.getSpanId();

        // 生成下一个 spanId（格式: 0.1, 0.2, 0.1.1 等）
        String nextSpanId = MdcTraceUtils.getNextSpanId();

        // 清除 MDC 中的追踪信息
        MdcTraceUtils.removeTrace();
    }

    // ======================== 跨服务传递 ========================

    /**
     * 微服务间传递 traceId 的方式：
     *
     * 1. HTTP 调用：通过请求头 x-traceId-header 和 x-spanId-header 传递
     * 2. 消息队列：将 traceId 放入消息属性中，消费端取出后 putTrace()
     * 3. 异步线程：使用 TransmittableThreadLocal（TTL）自动传递
     *
     * &lt;p&gt;下游服务收到请求后，Filter 会自动从请求头读取 traceId 放入 MDC，
     * 无需手动处理。
     */
    public void crossServiceCall() {
        String traceId = MdcTraceUtils.getTraceId();
        String spanId = MdcTraceUtils.getNextSpanId();

        // 使用 RestTemplate / Feign 调用时，设置请求头
        // headers.add(&quot;x-traceId-header&quot;, traceId);
        // headers.add(&quot;x-spanId-header&quot;, spanId);
    }

    // ======================== 在审计日志中的集成 ========================

    /**
     * @BizAuditLog 注解自动集成 traceId：
     *
     * 1. 如果注解中指定了 traceId 属性，使用指定的值
     * 2. 如果未指定，自动从 MDC 获取当前 traceId
     * 3. 审计日志记录的 traceId 字段可用于关联业务操作与系统日志
     *
     * &lt;p&gt;示例：
     * @BizAuditLog(type = &quot;用户&quot;, successInfo = &quot;操作成功&quot;)
     * // 自动从 MDC 获取 traceId 写入 BizAuditLogRecord.traceId
     */

    // ======================== 注意事项 ========================

    // 1. traceId 基于雪花算法生成，全局唯一
    // 2. MDC 是 ThreadLocal 实现，异步线程需使用 TTL 传递
    // 3. 请求结束后必须清除 MDC，避免线程池复用导致的 traceId 残留
    // 4. Logback 日志格式中用 %X{traceId} 输出链路ID
    // 5. Filter 优先级为 -1，确保最先执行
}
