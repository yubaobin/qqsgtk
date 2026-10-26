package com.example.crud;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 用户分页查询请求参数示例
 */
@Schema(description = &quot;用户分页查询请求参数&quot;)
@Data
@EqualsAndHashCode(callSuper = true)
public class UserPageReqVO extends PageParam {

    @Schema(description = &quot;用户名（模糊查询）&quot;, example = &quot;admin&quot;)
    private String username;

    @Schema(description = &quot;状态：0-禁用，1-启用&quot;, example = &quot;1&quot;)
    private Integer status;
}

/**
 * 创建用户请求参数示例
 */
@Schema(description = &quot;创建用户请求参数&quot;)
@Data
class UserCreateReqVO {

    @Schema(description = &quot;用户名&quot;, requiredMode = Schema.RequiredMode.REQUIRED, example = &quot;admin&quot;)
    private String username;

    @Schema(description = &quot;昵称&quot;, example = &quot;管理员&quot;)
    private String nickname;

    @Schema(description = &quot;邮箱&quot;, example = &quot;admin@example.com&quot;)
    private String email;

    @Schema(description = &quot;手机号&quot;, example = &quot;13800138000&quot;)
    private String mobile;

    @Schema(description = &quot;状态：0-禁用，1-启用&quot;, example = &quot;1&quot;)
    private Integer status;
}

/**
 * 更新用户请求参数示例
 */
@Schema(description = &quot;更新用户请求参数&quot;)
@Data
class UserUpdateReqVO {

    @Schema(description = &quot;用户编号&quot;, requiredMode = Schema.RequiredMode.REQUIRED, example = &quot;1&quot;)
    private Long id;

    @Schema(description = &quot;昵称&quot;, example = &quot;管理员&quot;)
    private String nickname;

    @Schema(description = &quot;邮箱&quot;, example = &quot;admin@example.com&quot;)
    private String email;

    @Schema(description = &quot;手机号&quot;, example = &quot;13800138000&quot;)
    private String mobile;

    @Schema(description = &quot;状态：0-禁用，1-启用&quot;, example = &quot;1&quot;)
    private Integer status;
}

/**
 * 删除用户请求参数示例
 */
@Schema(description = &quot;删除用户请求参数&quot;)
@Data
class UserDeleteReqVO {

    @Schema(description = &quot;用户编号&quot;, requiredMode = Schema.RequiredMode.REQUIRED, example = &quot;1&quot;)
    private Long id;
}

/**
 * 批量删除用户请求参数示例
 */
@Schema(description = &quot;批量删除用户请求参数&quot;)
@Data
class UserBatchDeleteReqVO {

    @Schema(description = &quot;用户编号列表&quot;, requiredMode = Schema.RequiredMode.REQUIRED, example = &quot;[1,2,3]&quot;)
    private java.util.List&lt;Long&gt; ids;
}
