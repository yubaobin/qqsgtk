package com.example.query;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 动态条件查询示例
 *
 * &lt;p&gt;说明：使用 QueryWrapper / LambdaQueryWrapper 构建动态查询条件，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 条件方法第一个参数为 boolean，可控制条件是否生效&lt;/li&gt;
 *   &lt;li&gt;2. LambdaQueryWrapper 使用实体属性引用，避免硬编码字段名&lt;/li&gt;
 *   &lt;li&gt;3. 支持链式调用，构建复杂条件&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Service
public class DynamicQueryService {

    /**
     * 动态条件查询用户列表
     *
     * @param username 用户名（可选）
     * @param status   状态（可选）
     * @param deptId   部门 ID（可选）
     * @return 用户列表
     */
    public List&lt;SysUser&gt; queryUsers(String username, Integer status, Long deptId) {
        LambdaQueryWrapper&lt;SysUser&gt; wrapper = Wrappers.lambdaQuery();

        // 动态条件：仅当参数不为空时才加入条件
        wrapper.like(username != null &amp;&amp; !username.isEmpty(), SysUser::getUsername, username);
        wrapper.eq(status != null, SysUser::getStatus, status);
        wrapper.eq(deptId != null, SysUser::getDeptId, deptId);

        // 默认按创建时间降序
        wrapper.orderByDesc(SysUser::getCreateTime);

        return new SysUserMapper().selectList(wrapper);
    }

    /**
     * 使用普通 QueryWrapper（字段名硬编码，不推荐）
     */
    public List&lt;SysUser&gt; queryUsersClassic(String username, Integer status) {
        QueryWrapper&lt;SysUser&gt; wrapper = new QueryWrapper&lt;&gt;();
        wrapper.like(username != null, &quot;username&quot;, username);
        wrapper.eq(status != null, &quot;status&quot;, status);
        return new SysUserMapper().selectList(wrapper);
    }

    /**
     * 多条件组合查询（and / or）
     */
    public List&lt;SysUser&gt; queryUsersComplex(String keyword, Integer status) {
        LambdaQueryWrapper&lt;SysUser&gt; wrapper = Wrappers.lambdaQuery();

        // (username LIKE ? OR email LIKE ?) AND status = ?
        wrapper.and(keyword != null, w -&gt; w.like(SysUser::getUsername, keyword)
                .or()
                .like(SysUser::getEmail, keyword));
        wrapper.eq(status != null, SysUser::getStatus, status);

        return new SysUserMapper().selectList(wrapper);
    }
}
