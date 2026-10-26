package com.example.listdelete;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

/**
 * 逻辑删除实体示例
 */
@Data
@TableName(&quot;sys_user&quot;)
public class LogicDeleteEntity {

    @TableId(type = IdType.ASSIGN_ID)
    private Long id;

    private String username;

    /** 逻辑删除字段 */
    @TableLogic
    @TableField(fill = FieldFill.INSERT)
    private Boolean deleted;
}
