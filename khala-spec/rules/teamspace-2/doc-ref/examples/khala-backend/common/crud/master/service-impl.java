package com.example.crud;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Service 层实现示例
 */
@Service
public class SysUserServiceImpl extends ServiceImpl&lt;SysUserMapper, SysUser&gt; implements SysUserService {

    /**
     * 分页查询用户列表
     */
    @Override
    public IPage&lt;SysUser&gt; pageUsers(UserPageReq req) {
        Page&lt;SysUser&gt; page = new Page&lt;&gt;(req.getPageNum(), req.getPageSize());

        LambdaQueryWrapper&lt;SysUser&gt; wrapper = new LambdaQueryWrapper&lt;&gt;();
        // 动态条件
        wrapper.like(req.getUsername() != null, SysUser::getUsername, req.getUsername());
        wrapper.eq(req.getStatus() != null, SysUser::getStatus, req.getStatus());
        wrapper.orderByDesc(SysUser::getCreateTime);

        return baseMapper.selectPage(page, wrapper);
    }

    /**
     * 根据用户名查询
     */
    @Override
    public SysUser getByUsername(String username) {
        LambdaQueryWrapper&lt;SysUser&gt; wrapper = new LambdaQueryWrapper&lt;&gt;();
        wrapper.eq(SysUser::getUsername, username);
        return baseMapper.selectOne(wrapper);
    }

    /**
     * 批量新增
     */
    @Override
    public boolean saveBatchUsers(List&lt;SysUser&gt; users) {
        return saveBatch(users, 500);
    }

    /**
     * 逻辑删除用户
     */
    @Override
    public boolean removeUserById(Long id) {
        return removeById(id);
    }
}
