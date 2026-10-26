package com.example.crud;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;

/**
 * Mapper 层示例
 */
@Mapper
public interface SysUserMapper extends BaseMapper&lt;SysUser&gt; {

    // 继承 BaseMapper 即可获得基础 CRUD 方法：
    // insert(T entity) - 插入
    // deleteById(Serializable id) - 根据 ID 删除
    // deleteByMap(Map&lt;String, Object&gt; columnMap) - 根据 columnMap 条件删除
    // delete(Wrapper&lt;T&gt; wrapper) - 条件删除
    // deleteBatchIds(Collection&lt;? extends Serializable&gt; idList) - 批量删除
    // updateById(T entity) - 根据 ID 更新
    // update(T entity, Wrapper&lt;T&gt; wrapper) - 条件更新
    // selectById(Serializable id) - 根据 ID 查询
    // selectBatchIds(Collection&lt;? extends Serializable&gt; idList) - 批量查询
    // selectByMap(Map&lt;String, Object&gt; columnMap) - 根据 columnMap 查询
    // selectOne(Wrapper&lt;T&gt; wrapper) - 查询一条记录
    // selectCount(Wrapper&lt;T&gt; wrapper) - 查询总记录数
    // selectList(Wrapper&lt;T&gt; wrapper) - 条件查询列表
    // selectMaps(Wrapper&lt;T&gt; wrapper) - 查询列表（返回 Map）
    // selectPage(IPage&lt;T&gt; page, Wrapper&lt;T&gt; wrapper) - 分页查询
}
