package com.example.auth;

import com.eshore.khala.common.core.result.CommonResult;
import com.eshore.khala.starter.auth.model.LoginAppUser;
import com.eshore.khala.starter.auth.util.LoginUserUtils;
import com.eshore.khala.starter.auth.context.UserContextHolder;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 获取当前登录用户信息示例
 */
@Tag(name = &quot;用户信息管理&quot;)
@RestController
@RequestMapping(&quot;/api/user&quot;)
public class CurrentUserController {

    /**
     * 方式一：使用 LoginUserUtils 工具类
     */
    @Operation(summary = &quot;获取当前登录用户信息&quot;, description = &quot;使用 LoginUserUtils 工具类获取当前登录用户信息&quot;)
    @GetMapping(&quot;/info&quot;)
    public CommonResult&lt;LoginAppUser&gt; getCurrentUser() {
        // 获取完整用户信息
        LoginAppUser user = LoginUserUtils.getLoginAppUser();

        // 获取用户 ID
        Long userId = LoginUserUtils.getUserId();

        // 获取用户名
        String username = LoginUserUtils.getUsername();

        // 获取租户 ID
        Long tenantId = LoginUserUtils.getTenantId();

        return CommonResult.success(user);
    }

    /**
     * 方式二：使用 UserContextHolder
     */
    @Operation(summary = &quot;从上下文获取当前用户&quot;, description = &quot;使用 UserContextHolder 获取当前登录用户&quot;)
    @GetMapping(&quot;/context&quot;)
    public CommonResult&lt;String&gt; getUserFromContext() {
        LoginAppUser user = UserContextHolder.getUser();
        if (user != null) {
            return CommonResult.success(&quot;当前用户: &quot; + user.getUsername());
        }
        return CommonResult.success(&quot;未登录&quot;);
    }
}
