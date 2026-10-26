package com.example.crud;

import com.eshore.khala.starter.sensitive.desensitization.annocation.DesensitizationEmail;
import com.eshore.khala.starter.sensitive.desensitization.annocation.DesensitizationMobile;
import com.eshore.khala.starter.sensitive.desensitization.annocation.DesensitizationName;
import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * 用户响应数据 VO 示例
 */
@Schema(description = &quot;用户响应数据&quot;)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SysUserRespVO {

    @Schema(description = &quot;用户编号&quot;, requiredMode = Schema.RequiredMode.REQUIRED, example = &quot;1&quot;)
    private Long id;

    @Schema(description = &quot;用户账号&quot;, requiredMode = Schema.RequiredMode.REQUIRED, example = &quot;admin&quot;)
    private String username;

    @Schema(description = &quot;用户名称&quot;, requiredMode = Schema.RequiredMode.REQUIRED, example = &quot;管理员&quot;)
    @DesensitizationName
    private String realName;

    @Schema(description = &quot;用户昵称&quot;, example = &quot;管理员&quot;)
    private String nickname;

    @Schema(description = &quot;用户邮箱&quot;, example = &quot;admin@example.com&quot;)
    @DesensitizationEmail
    private String email;

    @Schema(description = &quot;手机号码&quot;, requiredMode = Schema.RequiredMode.REQUIRED, example = &quot;13800138000&quot;)
    @DesensitizationMobile
    private String mobile;

    @Schema(description = &quot;状态：0-禁用，1-启用&quot;, example = &quot;1&quot;)
    private Integer status;

    @Schema(description = &quot;创建时间&quot;, example = &quot;2024-01-01 12:00:00&quot;)
    @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;)
    private LocalDateTime createTime;

    @Schema(description = &quot;更新时间&quot;, example = &quot;2024-01-01 12:00:00&quot;)
    @JsonFormat(pattern = &quot;yyyy-MM-dd HH:mm:ss&quot;)
    private LocalDateTime updateTime;
}
