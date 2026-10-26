package com.example.crud;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.List;

/**
 * Service 接口示例
 */
public interface SysUserService extends IService&lt;SysUser&gt; {

    /**
     * 分页查询用户列表
     */
    IPage&lt;SysUserRespVO&gt; pageUsers(UserPageReqVO req);

    /**
     * 根据 ID 查询用户详情
     */
    SysUserRespVO getUserById(Long id);

    /**
     * 创建用户
     */
    Long createUser(UserCreateReqVO reqVO);

    /**
     * 更新用户
     */
    boolean updateUser(UserUpdateReqVO reqVO);

    /**
     * 根据用户名查询
     */
    SysUser getByUsername(String username);

    /**
     * 批量新增
     */
    boolean saveBatchUsers(List&lt;SysUser&gt; users);

    /**
     * 逻辑删除用户
     */
    boolean removeUserById(Long id);
}
