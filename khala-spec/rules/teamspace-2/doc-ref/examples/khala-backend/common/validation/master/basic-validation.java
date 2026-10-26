package com.eshore.khala.example.validation;

import lombok.Data;

import javax.validation.constraints.*;
import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * 基础校验注解使用示例
 *
 * &lt;p&gt;展示常用 JSR-380（Bean Validation 2.0）注解的使用&lt;/p&gt;
 */
@Data
public class UserCreateReq {

    /**
     * 用户名：不能为空，长度 2-20
     */
    @NotBlank(message = &quot;用户名不能为空&quot;)
    @Size(min = 2, max = 20, message = &quot;用户名长度必须在 2-20 之间&quot;)
    private String username;

    /**
     * 密码：不能为空，长度 6-32
     */
    @NotBlank(message = &quot;密码不能为空&quot;)
    @Size(min = 6, max = 32, message = &quot;密码长度必须在 6-32 之间&quot;)
    private String password;

    /**
     * 邮箱：必须符合邮箱格式
     */
    @NotBlank(message = &quot;邮箱不能为空&quot;)
    @Email(message = &quot;邮箱格式不正确&quot;)
    private String email;

    /**
     * 手机号：必须符合手机号格式
     */
    @Pattern(regexp = &quot;^1[3-9]\\d{9}$&quot;, message = &quot;手机号格式不正确&quot;)
    private String phone;

    /**
     * 年龄：必须大于等于 0，小于等于 150
     */
    @Min(value = 0, message = &quot;年龄不能小于 0&quot;)
    @Max(value = 150, message = &quot;年龄不能大于 150&quot;)
    private Integer age;

    /**
     * 状态：不能为空
     */
    @NotNull(message = &quot;状态不能为空&quot;)
    private Integer status;

    /**
     * 生日：必须是过去的日期
     */
    @Past(message = &quot;生日必须是过去的日期&quot;)
    private LocalDate birthday;

    /**
     * 薪资：必须为正数，最多 2 位小数
     */
    @DecimalMin(value = &quot;0.00&quot;, inclusive = false, message = &quot;薪资必须大于 0&quot;)
    @Digits(integer = 10, fraction = 2, message = &quot;薪资最多保留 2 位小数&quot;)
    private BigDecimal salary;

    /**
     * 个人简介：长度不能超过 500
     */
    @Size(max = 500, message = &quot;个人简介不能超过 500 字&quot;)
    private String bio;
}

/**
 * Controller 中使用 @Valid 触发校验
 */
@RestController
@RequestMapping(&quot;/users&quot;)
class UserController {

    @PostMapping
    public Result&lt;Void&gt; create(@RequestBody @Valid UserCreateReq req) {
        // 校验通过后执行业务逻辑
        return Result.ok();
    }
}
