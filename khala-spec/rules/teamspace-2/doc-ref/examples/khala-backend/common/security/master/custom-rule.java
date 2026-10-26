package com.example.security;

import com.eshore.khala.starter.protection.rule.AbstractProtectionRule;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

/**
 * 自定义安全规则示例
 *
 * &lt;p&gt;说明：继承 AbstractProtectionRule 可扩展自定义安全检查规则，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 规则会被 ProtectionServletFilter 自动收集并执行&lt;/li&gt;
 *   &lt;li&gt;2. 校验失败时抛出异常，Filter 会统一返回错误响应&lt;/li&gt;
 *   &lt;li&gt;3. 支持 Servlet 和 Reactive 两种模式（此处为 Servlet 示例）&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Component
public class CustomSecurityRule extends AbstractProtectionRule {

    @Override
    public void filter(HttpServletRequest request, HttpServletResponse response) {
        // 自定义安全检查逻辑
        String customHeader = request.getHeader(&quot;X-Custom-Token&quot;);
        if (!validateCustomToken(customHeader)) {
            throw new SecurityException(&quot;自定义安全检查失败：无效的 X-Custom-Token&quot;);
        }
    }

    private boolean validateCustomToken(String token) {
        // 实际项目中替换为真实校验逻辑
        // 例如：校验 Token 签名、有效期等
        return token != null &amp;&amp; token.startsWith(&quot;KHALA_&quot;);
    }
}

/**
 * IP 白名单自定义规则示例
 */
@Component
class IpWhitelistRule extends AbstractProtectionRule {

    private static final java.util.List&lt;String&gt; ALLOWED_IPS = java.util.Arrays.asList(
            &quot;127.0.0.1&quot;,
            &quot;192.168.1.100&quot;
    );

    @Override
    public void filter(HttpServletRequest request, HttpServletResponse response) {
        String clientIp = getClientIp(request);
        if (!ALLOWED_IPS.contains(clientIp)) {
            throw new SecurityException(&quot;IP 不在白名单中: &quot; + clientIp);
        }
    }

    private String getClientIp(HttpServletRequest request) {
        String ip = request.getHeader(&quot;X-Forwarded-For&quot;);
        if (ip == null || ip.isEmpty()) {
            ip = request.getRemoteAddr();
        }
        return ip.split(&quot;,&quot;)[0].trim();
    }
}
