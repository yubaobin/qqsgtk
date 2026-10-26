package com.example.security;

import com.eshore.khala.starter.protection.ignore.IgnoreProtection;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

/**
 * 忽略安全保护规则示例
 *
 * &lt;p&gt;说明：实现 IgnoreProtection 接口可让指定 URL 跳过安全检查，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 常用于 Swagger 文档、健康检查、静态资源等路径&lt;/li&gt;
 *   &lt;li&gt;2. 返回的 URL 列表支持 Ant 风格通配符（如 /swagger-ui/**）&lt;/li&gt;
 *   &lt;li&gt;3. 可创建多个实现类，分别管理不同场景的忽略规则&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Component
public class SwaggerIgnoreProtection implements IgnoreProtection {

    @Override
    public List&lt;String&gt; getIgnoreUrls() {
        return Arrays.asList(
                &quot;/swagger-ui/**&quot;,
                &quot;/v3/api-docs/**&quot;,
                &quot;/swagger-resources/**&quot;,
                &quot;/webjars/**&quot;
        );
    }
}

/**
 * 健康检查和静态资源忽略保护
 */
@Component
class HealthIgnoreProtection implements IgnoreProtection {

    @Override
    public List&lt;String&gt; getIgnoreUrls() {
        return Arrays.asList(
                &quot;/actuator/health&quot;,
                &quot;/actuator/info&quot;,
                &quot;/favicon.ico&quot;,
                &quot;/error&quot;
        );
    }
}
