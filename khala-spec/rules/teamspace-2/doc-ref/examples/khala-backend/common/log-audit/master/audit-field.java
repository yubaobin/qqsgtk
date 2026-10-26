package com.example.logaudit;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 审计字段自动填充示例
 *
 * &lt;p&gt;Khala 框架基于 MyBatis Plus 的 MetaObjectHandler 机制，自动填充创建人、创建时间、
 * 更新人、更新时间等审计字段。只需在实体类字段上加 @TableField(fill = ...) 注解即可。
 *
 * &lt;p&gt;相关源码：
 * - 填充处理器：com.eshore.khala.db.mybatis.handler.DataMetaObjectHandler
 * - 用户上下文：com.eshore.khala.common.context.UserIdContextHolder
 */
public class AuditFieldExample {

    // ======================== 实体类定义 ========================

    /**
     * 标准实体类 &mdash; 包含完整审计字段
     *
     * &lt;p&gt;审计字段说明：
     * - createTime：创建时间，INSERT 时自动填充
     * - updateTime：更新时间，INSERT 和 UPDATE 时自动填充
     * - createBy：创建人ID，INSERT 时从 UserIdContextHolder 获取当前用户ID
     * - updateBy：更新人ID，INSERT 和 UPDATE 时从 UserIdContextHolder 获取当前用户ID
     * - deleted：逻辑删除标记，INSERT 时自动填充为 false
     */
    @Data
    @TableName(&quot;sys_user&quot;)
    public static class SysUser {

        @TableId(type = IdType.ASSIGN_ID)
        private Long id;

        private String username;

        private String nickname;

        /** 创建时间 &mdash; 新增时自动填充 */
        @TableField(fill = FieldFill.INSERT)
        private LocalDateTime createTime;

        /** 更新时间 &mdash; 新增和修改时自动填充 */
        @TableField(fill = FieldFill.INSERT_UPDATE)
        private LocalDateTime updateTime;

        /** 创建人 &mdash; 新增时自动填充为当前登录用户ID */
        @TableField(fill = FieldFill.INSERT)
        private Long createBy;

        /** 更新人 &mdash; 新增和修改时自动填充为当前登录用户ID */
        @TableField(fill = FieldFill.INSERT_UPDATE)
        private Long updateBy;

        /** 逻辑删除 &mdash; 新增时自动填充为 false */
        @TableLogic
        @TableField(fill = FieldFill.INSERT)
        private Boolean deleted;
    }

    // ======================== 填充策略说明 ========================

    // FieldFill.INSERT        &mdash; 仅 INSERT 时填充
    // FieldFill.INSERT_UPDATE &mdash; INSERT 和 UPDATE 时都填充
    // FieldFill.UPDATE        &mdash; 仅 UPDATE 时填充
    // FieldFill.DEFAULT       &mdash; 不填充（默认）

    // ======================== 填充机制原理 ========================

    // 1. DataMetaObjectHandler 实现 MetaObjectHandler 接口
    // 2. insertFill()：在 INSERT 时自动设置 createTime、createBy、updateTime、updateBy
    // 3. updateFill()：在 UPDATE 时自动设置 updateTime、updateBy
    // 4. createBy/updateBy 的值来自 UserIdContextHolder.getUserId()
    // 5. 当 UserIdContextHolder 中无用户信息时，createBy/updateBy 默认填充为 0
    // 6. createBy/updateBy 支持 String 和 Long 两种类型（兼容旧版）

    // ======================== 注意事项 ========================

    // 1. 如果字段已有值，MetaObjectHandler 不会覆盖（仅填充空值）
    // 2. 审计字段的填充依赖 UserIdContextHolder，需确保请求上下文中已设置用户信息
    // 3. 逻辑删除字段 deleted 需配合 @TableLogic 注解使用
    // 4. 所有实体类都应包含审计字段，保持数据可追溯
}
