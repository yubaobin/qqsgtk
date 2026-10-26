package com.example.auth;

import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.annotation.security.PermitAll;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 方法级权限控制示例
 */
@Tag(name = &quot;权限控制示例&quot;)
@RestController
@RequestMapping(&quot;/api/demo&quot;)
public class PermissionCheckController {

    /**
     * 允许匿名访问
     */
    @Operation(summary = &quot;公开接口&quot;, description = &quot;允许匿名访问&quot;)
    @PermitAll
    @GetMapping(&quot;/public&quot;)
    public CommonResult&lt;String&gt; publicApi() {
        return CommonResult.success(&quot;任何人都可以访问&quot;);
    }

    /**
     * 需要登录
     */
    @Operation(summary = &quot;登录接口&quot;, description = &quot;需要登录后才能访问&quot;)
    @GetMapping(&quot;/login-only&quot;)
    public CommonResult&lt;String&gt; loginOnly() {
        return CommonResult.success(&quot;登录后即可访问&quot;);
    }

    /**
     * 需要特定角色
     */
    @Operation(summary = &quot;管理员接口&quot;, description = &quot;需要 ADMIN 角色&quot;)
    @PreAuthorize(&quot;hasRole(&#39;ADMIN&#39;)&quot;)
    @GetMapping(&quot;/admin-only&quot;)
    public CommonResult&lt;String&gt; adminOnly() {
        return CommonResult.success(&quot;仅管理员可访问&quot;);
    }

    /**
     * 需要特定权限
     */
    @Operation(summary = &quot;添加用户权限接口&quot;, description = &quot;需要 sys:user:add 权限&quot;)
    @PreAuthorize(&quot;hasAuthority(&#39;sys:user:add&#39;)&quot;)
    @GetMapping(&quot;/add-user&quot;)
    public CommonResult&lt;String&gt; addUser() {
        return CommonResult.success(&quot;有添加用户权限者可访问&quot;);
    }

    /**
     * 组合权限判断
     */
    @Operation(summary = &quot;查看用户权限接口&quot;, description = &quot;需要 ADMIN 角色或 sys:user:view 权限&quot;)
    @PreAuthorize(&quot;hasRole(&#39;ADMIN&#39;) or hasAuthority(&#39;sys:user:view&#39;)&quot;)
    @GetMapping(&quot;/view-user&quot;)
    public CommonResult&lt;String&gt; viewUser() {
        return CommonResult.success(&quot;管理员或有查看权限者可访问&quot;);
    }
}
