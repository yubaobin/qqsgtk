package com.example.auth;

import com.eshore.khala.starter.auth.ignore.anonymous.IgnorePermission;
import org.springframework.stereotype.Component;

/**
 * 自定义忽略鉴权规则示例
 */
@Component
public class CustomIgnorePermission implements IgnorePermission {

    /**
     * 自定义匿名访问规则
     *
     * @param requestUrl 请求 URL
     * @return true 表示允许匿名访问
     */
    @Override
    public boolean match(String requestUrl) {
        // 允许 /custom/public/ 前缀的所有接口匿名访问
        if (requestUrl.startsWith(&quot;/custom/public/&quot;)) {
            return true;
        }

        // 允许 /webhook/ 前缀的所有接口匿名访问（如支付回调）
        if (requestUrl.startsWith(&quot;/webhook/&quot;)) {
            return true;
        }

        return false;
    }
}
