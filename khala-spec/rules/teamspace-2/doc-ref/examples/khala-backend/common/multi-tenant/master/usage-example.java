package com.example.multitenant;

import com.baomidou.dynamic.datasource.toolkit.DynamicDataSourceContextHolder;
import com.eshore.khala.common.core.result.CommonResult;
import com.eshore.khala.starter.tenant.context.TenantContextHolder;
import com.eshore.khala.starter.tenant.core.annotation.TenantIgnore;
import com.eshore.khala.starter.tenant.core.util.TenantUtils;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 多租户使用示例
 *
 * &lt;p&gt;说明：Khala 多租户能力由框架自动装配，业务代码只需关注以下使用点：&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 通过 TenantContextHolder 获取当前租户 ID&lt;/li&gt;
 *   &lt;li&gt;2. 如需动态切换数据源，使用 DynamicDataSourceContextHolder&lt;/li&gt;
 *   &lt;li&gt;3. 实体类中的租户字段由框架自动填充，无需手动处理&lt;/li&gt;
 *   &lt;li&gt;4. 通过 @TenantIgnore 注解忽略租户过滤，适用于定时任务、回调等全局数据场景&lt;/li&gt;
 *   &lt;li&gt;5. 通过 TenantUtils.execute 在指定租户上下文中执行逻辑，适用于定时任务遍历所有租户等场景&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Tag(name = &quot;多租户示例&quot;)
@RestController
@RequestMapping(&quot;/api/tenant&quot;)
public class TenantUsageController {

    /**
     * 获取当前租户 ID
     *
     * &lt;p&gt;框架在请求进入时已完成租户解析并写入上下文，业务层直接获取即可。&lt;/p&gt;
     */
    @Operation(summary = &quot;获取当前租户 ID&quot;)
    @GetMapping(&quot;/current-id&quot;)
    public CommonResult&lt;Long&gt; getCurrentTenantId() {
        Long tenantId = TenantContextHolder.getTenantId();
        return CommonResult.success(tenantId);
    }


    /**
     * 基于注解忽略租户过滤示例
     *
     * &lt;p&gt;在方法上添加 @TenantIgnore 注解，该方法内的所有数据库操作都不会拼接 tenant_id 条件。&lt;/p&gt;
     * &lt;p&gt;适用场景：定时任务、支付/短信回调、管理后台查看所有租户数据等。&lt;/p&gt;
     */
    @TenantIgnore
    @Operation(summary = &quot;注解忽略租户过滤&quot;)
    @GetMapping(&quot;/ignore-by-annotation&quot;)
    public CommonResult&lt;String&gt; ignoreByAnnotation() {
        // 该方法内所有 SQL 不会拼接 tenant_id 条件，可查询所有租户的数据
        doGlobalBusiness();
        return CommonResult.success(&quot;已通过 @TenantIgnore 注解忽略租户过滤&quot;);
    }

    /**
     * 编程式忽略租户过滤示例
     *
     * &lt;p&gt;通过 TenantContextHolder.setIgnore(true) 手动控制忽略范围，&lt;/p&gt;
     * &lt;p&gt;适用于需要在方法内部局部忽略租户的场景，务必在 finally 中恢复原状态。&lt;/p&gt;
     */
    @Operation(summary = &quot;编程式忽略租户过滤&quot;)
    @GetMapping(&quot;/ignore-by-code&quot;)
    public CommonResult&lt;String&gt; ignoreByCode() {
        Boolean oldIgnore = TenantContextHolder.isIgnore();
        try {
            TenantContextHolder.setIgnore(true);
            // 此处数据库操作不会拼接 tenant_id 条件
            doGlobalBusiness();
            return CommonResult.success(&quot;已通过编程式忽略租户过滤&quot;);
        } finally {
            // 必须恢复原状态，防止影响后续逻辑
            TenantContextHolder.setIgnore(oldIgnore);
        }
    }

    /**
     * 指定租户执行逻辑示例
     *
     * &lt;p&gt;通过 TenantUtils.execute(tenantId, func) 在指定租户上下文中执行逻辑，&lt;/p&gt;
     * &lt;p&gt;方法执行期间租户 ID 会切换为目标租户，执行完毕后自动恢复原租户。&lt;/p&gt;
     * &lt;p&gt;适用场景：定时任务遍历所有租户执行业务、系统级操作需要代理指定租户等。&lt;/p&gt;
     */
    @Operation(summary = &quot;指定租户执行逻辑&quot;)
    @GetMapping(&quot;/execute-with-tenant&quot;)
    public CommonResult&lt;String&gt; executeWithTenant(@RequestParam Long tenantId) {
        TenantUtils.execute(tenantId, () -&gt; {
            // 此时租户上下文已切换为指定租户，所有数据库操作会拼接该租户的 tenant_id 条件
            doBusiness();
        });
        return CommonResult.success(&quot;已以租户 &quot; + tenantId + &quot; 的身份执行逻辑&quot;);
    }

    /**
     * 忽略租户执行逻辑示例（TenantUtils 工具类方式）
     *
     * &lt;p&gt;通过 TenantUtils.executeIgnore(func) 忽略租户过滤执行逻辑，&lt;/p&gt;
     * &lt;p&gt;与编程式 setIgnore 相比，TenantUtils 封装了异常处理和状态恢复，推荐优先使用。&lt;/p&gt;
     */
    @Operation(summary = &quot;忽略租户执行逻辑（工具类方式）&quot;)
    @GetMapping(&quot;/execute-ignore&quot;)
    public CommonResult&lt;String&gt; executeIgnore() {
        TenantUtils.executeIgnore(() -&gt; {
            // 此处数据库操作不会拼接 tenant_id 条件，可查询所有租户的数据
            doGlobalBusiness();
        });
        return CommonResult.success(&quot;已通过 TenantUtils.executeIgnore 忽略租户过滤执行逻辑&quot;);
    }

    private void doBusiness() {
        // 业务逻辑
    }

    private void doGlobalBusiness() {
        // 全局业务逻辑（跨租户操作）
    }
}
