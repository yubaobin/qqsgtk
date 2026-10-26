package com.example.crud;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller 层示例
 */
@Tag(name = &quot;用户管理&quot;)
@RestController
@RequestMapping(&quot;/api/user&quot;)
public class SysUserController {

    @Autowired
    private SysUserService sysUserService;

    /**
     * 查询用户列表（分页）
     */
    @Operation(summary = &quot;查询用户列表&quot;, description = &quot;分页查询用户列表&quot;)
    @GetMapping(&quot;/list&quot;)
    public CommonResult&lt;IPage&lt;SysUserRespVO&gt;&gt; list(UserPageReqVO req) {
        return CommonResult.success(sysUserService.pageUsers(req));
    }

    /**
     * 查询用户详情
     */
    @Operation(summary = &quot;查询用户详情&quot;, description = &quot;根据 ID 查询用户详情&quot;)
    @GetMapping(&quot;/get&quot;)
    public CommonResult&lt;SysUserRespVO&gt; getById(@RequestParam Long id) {
        return CommonResult.success(sysUserService.getUserById(id));
    }

    /**
     * 创建用户
     */
    @Operation(summary = &quot;创建用户&quot;, description = &quot;创建新用户，用户名不可重复&quot;)
    @ApiResponses({
            @ApiResponse(responseCode = &quot;201&quot;, description = &quot;创建成功&quot;),
            @ApiResponse(responseCode = &quot;400&quot;, description = &quot;参数校验失败&quot;),
            @ApiResponse(responseCode = &quot;409&quot;, description = &quot;用户名已存在&quot;)
    })
    @PostMapping(&quot;/create&quot;)
    public CommonResult&lt;Long&gt; create(@RequestBody UserCreateReqVO reqVO) {
        return CommonResult.success(sysUserService.createUser(reqVO));
    }

    /**
     * 更新用户
     */
    @Operation(summary = &quot;更新用户&quot;, description = &quot;全量或部分更新用户信息&quot;)
    @ApiResponses({
            @ApiResponse(responseCode = &quot;200&quot;, description = &quot;更新成功&quot;),
            @ApiResponse(responseCode = &quot;400&quot;, description = &quot;参数校验失败&quot;),
            @ApiResponse(responseCode = &quot;404&quot;, description = &quot;用户不存在&quot;)
    })
    @PostMapping(&quot;/update&quot;)
    public CommonResult&lt;Boolean&gt; update(@RequestBody UserUpdateReqVO reqVO) {
        return CommonResult.success(sysUserService.updateUser(reqVO));
    }

    /**
     * 删除用户（逻辑删除）
     */
    @Operation(summary = &quot;删除用户&quot;, description = &quot;根据 ID 删除用户&quot;)
    @ApiResponses({
            @ApiResponse(responseCode = &quot;200&quot;, description = &quot;删除成功&quot;),
            @ApiResponse(responseCode = &quot;404&quot;, description = &quot;用户不存在&quot;)
    })
    @PostMapping(&quot;/delete&quot;)
    public CommonResult&lt;Boolean&gt; delete(@RequestBody UserDeleteReqVO reqVO) {
        return CommonResult.success(sysUserService.removeUserById(reqVO.getId()));
    }

    /**
     * 批量删除用户
     */
    @Operation(summary = &quot;批量删除用户&quot;, description = &quot;根据 ID 列表批量删除用户&quot;)
    @ApiResponses({
            @ApiResponse(responseCode = &quot;200&quot;, description = &quot;删除成功&quot;),
            @ApiResponse(responseCode = &quot;400&quot;, description = &quot;参数校验失败&quot;)
    })
    @PostMapping(&quot;/delete-batch&quot;)
    public CommonResult&lt;Boolean&gt; deleteBatch(@RequestBody UserBatchDeleteReqVO reqVO) {
        return CommonResult.success(sysUserService.removeByIds(reqVO.getIds()));
    }
}
