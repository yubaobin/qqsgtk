package com.example.query;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * 多表联查示例（XML Mapper 方式）
 *
 * &lt;p&gt;说明：复杂的多表联查建议使用 XML Mapper 或注解 @Select 编写原生 SQL，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 一对一联查：使用 association 标签&lt;/li&gt;
 *   &lt;li&gt;2. 一对多联查：使用 collection 标签&lt;/li&gt;
 *   &lt;li&gt;3. 动态 SQL：使用 if、where、foreach 等标签&lt;/li&gt;
 * &lt;/ul&gt;
 *
 * &lt;p&gt;对应 XML 文件位置：resources/mapper/SysUserJoinMapper.xml&lt;/p&gt;
 */
@Mapper
public interface SysUserJoinMapper {

    /**
     * 查询用户及其部门信息（一对一）
     */
    List&lt;UserDeptDTO&gt; selectUserWithDept(@Param(&quot;userId&quot;) Long userId);

    /**
     * 查询部门及其用户列表（一对多）
     */
    List&lt;DeptUserDTO&gt; selectDeptWithUsers(@Param(&quot;deptId&quot;) Long deptId);

    /**
     * 三表联查：用户 + 部门 + 角色
     */
    List&lt;UserDetailDTO&gt; selectUserDetail(@Param(&quot;username&quot;) String username);
}

/**
 * 用户部门 DTO（一对一）
 */
class UserDeptDTO {
    private Long userId;
    private String username;
    private String email;
    private Long deptId;
    private String deptName;
    // getter / setter 省略
}

/**
 * 部门用户 DTO（一对多）
 */
class DeptUserDTO {
    private Long deptId;
    private String deptName;
    private List&lt;UserSimpleDTO&gt; users;
    // getter / setter 省略
}

class UserSimpleDTO {
    private Long userId;
    private String username;
    // getter / setter 省略
}

/**
 * 用户详情 DTO（多表联查）
 */
class UserDetailDTO {
    private Long userId;
    private String username;
    private String deptName;
    private String roleName;
    // getter / setter 省略
}
