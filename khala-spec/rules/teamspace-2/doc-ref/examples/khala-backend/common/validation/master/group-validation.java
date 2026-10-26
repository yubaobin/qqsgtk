package com.eshore.khala.example.validation;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;
import javax.validation.groups.Default;

/**
 * 分组校验示例
 *
 * &lt;p&gt;新增时 ID 必须为空，更新时 ID 不能为空，其他字段共用相同规则&lt;/p&gt;
 */
@Data
public class UserReq {

    /**
     * 新增时 ID 必须为空，更新时不能为空
     */
    @Null(message = &quot;新增时不能传入 ID&quot;, groups = CreateGroup.class)
    @NotNull(message = &quot;更新时 ID 不能为空&quot;, groups = UpdateGroup.class)
    private Long id;

    /**
     * 新增和更新都需要校验
     */
    @NotBlank(message = &quot;用户名不能为空&quot;, groups = {CreateGroup.class, UpdateGroup.class})
    @Size(min = 2, max = 20, message = &quot;用户名长度必须在 2-20 之间&quot;, groups = {CreateGroup.class, UpdateGroup.class})
    private String username;

    /**
     * 只有新增时需要密码
     */
    @NotBlank(message = &quot;新增时密码不能为空&quot;, groups = CreateGroup.class)
    @Size(min = 6, max = 32, message = &quot;密码长度必须在 6-32 之间&quot;, groups = CreateGroup.class)
    private String password;

    /**
     * 更新时可以为空（不修改），不为空时校验格式
     */
    @Size(max = 500, message = &quot;个人简介不能超过 500 字&quot;, groups = {CreateGroup.class, UpdateGroup.class})
    private String bio;

    /**
     * 创建分组标记接口
     */
    public interface CreateGroup extends Default {
    }

    /**
     * 更新分组标记接口
     */
    public interface UpdateGroup extends Default {
    }
}

/**
 * Controller 中使用分组校验
 */
@RestController
@RequestMapping(&quot;/users&quot;)
class UserGroupController {

    @PostMapping
    public Result&lt;Void&gt; create(@RequestBody @Validated(UserReq.CreateGroup.class) UserReq req) {
        return Result.ok();
    }

    @PutMapping
    public Result&lt;Void&gt; update(@RequestBody @Validated(UserReq.UpdateGroup.class) UserReq req) {
        return Result.ok();
    }
}
