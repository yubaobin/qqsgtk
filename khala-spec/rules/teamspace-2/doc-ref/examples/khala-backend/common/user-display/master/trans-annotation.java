package com.example.userdisplay;

import com.eshore.dromara.trans.annotation.Trans;
import com.eshore.dromara.trans.type.TransType;
import lombok.Data;

/**
 * 实体翻译注解示例
 *
 * &lt;p&gt;说明：在 VO / DTO 的 ID 字段上使用 @Trans 注解，dromara-trans 会自动拦截并翻译，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. type = TransType.AUTO_TRANS：自动翻译模式&lt;/li&gt;
 *   &lt;li&gt;2. key = &quot;user&quot;：对应翻译服务的 namespace&lt;/li&gt;
 *   &lt;li&gt;3. target = SysUserModel.class：翻译目标实体类型&lt;/li&gt;
 *   &lt;li&gt;4. fields = &quot;realName&quot;：要取回的字段&lt;/li&gt;
 *   &lt;li&gt;5. ref = &quot;createByName&quot;：翻译结果填充到哪个字段&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Data
public class OrderVO {

    private Long id;
    private String orderNo;

    /**
     * 创建人 ID（会被自动翻译为 createByName）
     */
    @Trans(
            type = TransType.AUTO_TRANS,
            key = &quot;user&quot;,
            target = SysUserModel.class,
            fields = &quot;realName&quot;,
            ref = &quot;createByName&quot;
    )
    private Long createBy;

    /**
     * 翻译后填充的字段
     */
    private String createByName;

    /**
     * 更新人 ID
     */
    @Trans(
            type = TransType.AUTO_TRANS,
            key = &quot;user&quot;,
            target = SysUserModel.class,
            fields = &quot;realName&quot;,
            ref = &quot;updateByName&quot;
    )
    private Long updateBy;

    private String updateByName;

    /**
     * 租户 ID（翻译为租户名称）
     */
    @Trans(
            type = TransType.AUTO_TRANS,
            key = &quot;tenant&quot;,
            target = SysTenantModel.class,
            fields = &quot;tenantName&quot;,
            ref = &quot;tenantName&quot;
    )
    private Long tenantId;

    private String tenantName;
}

/**
 * 用户模型（翻译目标）
 */
@Data
class SysUserModel {
    private Long id;
    private String realName;
}

/**
 * 租户模型（翻译目标）
 */
@Data
class SysTenantModel {
    private Long id;
    private String tenantName;
}
