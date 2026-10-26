package com.example.query;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.eshore.khala.common.model.CommonResult;
import com.eshore.khala.common.model.PageParam;
import com.eshore.khala.db.mybatis.util.PageUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

/**
 * 分页查询示例
 *
 * &lt;p&gt;说明：使用 Khala 框架的 {@link PageParam} + {@link PageUtil#buildPage(PageParam)} 实现分页查询，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 请求参数继承 {@link PageParam}，统一封装页码、每页大小、排序字段&lt;/li&gt;
 *   &lt;li&gt;2. 通过 {@link PageUtil#buildPage(PageParam)} 生成分页对象，自动处理排序&lt;/li&gt;
 *   &lt;li&gt;3. Mapper 继承 {@link com.eshore.khala.db.mybatis.mapper.SuperMapper}，可直接使用 {@code selectPage(PageParam, Wrapper)}&lt;/li&gt;
 * &lt;/ul&gt;
 */
public class PageQueryService {

    /**
     * 基础分页查询
     *
     * @param req 分页参数（继承 PageParam）
     */
    public CommonResult&lt;IPage&lt;SysUser&gt;&gt; list(UserPageReq req) {
        IPage&lt;SysUser&gt; result = new SysUserMapper().selectPage(req, null);
        return CommonResult.success(result);
    }

    /**
     * 分页查询 + 动态条件
     */
    public CommonResult&lt;IPage&lt;SysUser&gt;&gt; search(UserSearchPageReq req) {
        com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper&lt;SysUser&gt; wrapper =
                com.baomidou.mybatisplus.core.toolkit.Wrappers.lambdaQuery();
        wrapper.like(req.getUsername() != null, SysUser::getUsername, req.getUsername());
        wrapper.orderByDesc(SysUser::getCreateTime);

        IPage&lt;SysUser&gt; result = new SysUserMapper().selectPage(req, wrapper);
        return CommonResult.success(result);
    }

    /**
     * 分页查询返回 VO（隐藏敏感字段）
     */
    public CommonResult&lt;IPage&lt;SysUserVO&gt;&gt; listVo(UserPageReq req) {
        IPage&lt;SysUser&gt; userPage = new SysUserMapper().selectPage(req, null);

        // 转换为 VO（实际项目中使用 MapStruct 等工具）
        IPage&lt;SysUserVO&gt; voPage = userPage.convert(user -&gt; {
            SysUserVO vo = new SysUserVO();
            vo.setId(user.getId());
            vo.setUsername(user.getUsername());
            vo.setEmail(user.getEmail());
            return vo;
        });

        return CommonResult.success(voPage);
    }
}

/**
 * 用户基础分页请求参数
 */
class UserPageReq extends PageParam {
}

/**
 * 用户条件分页请求参数
 */
class UserSearchPageReq extends PageParam {
    private String username;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
