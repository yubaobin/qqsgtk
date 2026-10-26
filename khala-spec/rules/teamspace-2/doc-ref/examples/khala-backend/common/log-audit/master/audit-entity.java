package com.example.logaudit;

/**
 * 审计日志表结构设计示例
 *
 * &lt;p&gt;Khala 审计日志表 khala_sys_logger_audit，对应实体类 BizAuditLogRecord。
 * 框架自动写入此表，开发者通常只需查询，无需手动写入。
 *
 * &lt;p&gt;相关源码：
 * - 实体类：com.eshore.khala.starter.log.core.model.BizAuditLogRecord
 * - 业务实体：com.eshore.khala.entity.log.SysLoggerAudit
 * - Mapper：com.eshore.khala.starter.log.core.mapper.BizAuditLogRepository
 * - 数据库写入实现：com.eshore.khala.starter.log.core.service.impl.DbAuditLogServiceImpl
 * - 文件写入实现：com.eshore.khala.starter.log.core.service.impl.FileAuditLogServiceImpl
 */
public class AuditEntityExample {

    // ======================== 建表 SQL ========================

    // CREATE TABLE `khala_sys_logger_audit` (
    //     `id`              BIGINT       NOT NULL COMMENT &#39;主键ID&#39;,
    //     `tenant_id`       BIGINT       DEFAULT NULL COMMENT &#39;租户ID&#39;,
    //     `type`            VARCHAR(64)  DEFAULT NULL COMMENT &#39;操作日志类型（如：用户、文件、权限）&#39;,
    //     `sub_type`        VARCHAR(64)  DEFAULT NULL COMMENT &#39;日志子类型（如：创建用户、上传文件）&#39;,
    //     `level`           VARCHAR(16)  DEFAULT &#39;info&#39; COMMENT &#39;日志级别：info/warn/error/audit&#39;,
    //     `biz_no`          VARCHAR(128) DEFAULT NULL COMMENT &#39;业务标识编号（如用户ID、文件ID）&#39;,
    //     `operator_id`     BIGINT       DEFAULT NULL COMMENT &#39;操作人ID&#39;,
    //     `operator_name`   VARCHAR(64)  DEFAULT NULL COMMENT &#39;操作人名称&#39;,
    //     `operator_time`   DATETIME     DEFAULT NULL COMMENT &#39;操作时间&#39;,
    //     `success`         TINYINT(1)   DEFAULT 1 COMMENT &#39;是否操作成功：0-失败，1-成功&#39;,
    //     `trace_id`        VARCHAR(64)  DEFAULT NULL COMMENT &#39;链路追踪ID&#39;,
    //     `user_ip`         VARCHAR(64)  DEFAULT NULL COMMENT &#39;操作人IP地址&#39;,
    //     `user_agent`      VARCHAR(512) DEFAULT NULL COMMENT &#39;浏览器UA&#39;,
    //     `log_info`        VARCHAR(512) DEFAULT NULL COMMENT &#39;日志内容描述&#39;,
    //     `param`           TEXT         DEFAULT NULL COMMENT &#39;操作参数（JSON）&#39;,
    //     `before_value`    TEXT         DEFAULT NULL COMMENT &#39;操作前的值（JSON）&#39;,
    //     `after_value`     TEXT         DEFAULT NULL COMMENT &#39;操作后的值（JSON）&#39;,
    //     `extras`          TEXT         DEFAULT NULL COMMENT &#39;额外信息&#39;,
    //     `code_variable`   JSON         DEFAULT NULL COMMENT &#39;代码信息（ClassName、MethodName）&#39;,
    //     `signature`       VARCHAR(128) DEFAULT NULL COMMENT &#39;日志签名（防篡改）&#39;,
    //     `create_by`       BIGINT       DEFAULT NULL COMMENT &#39;创建人&#39;,
    //     `create_time`     DATETIME     DEFAULT NULL COMMENT &#39;创建时间&#39;,
    //     PRIMARY KEY (`id`),
    //     KEY `idx_type` (`type`),
    //     KEY `idx_biz_no` (`biz_no`),
    //     KEY `idx_operator_id` (`operator_id`),
    //     KEY `idx_trace_id` (`trace_id`),
    //     KEY `idx_create_time` (`create_time`)
    // ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;业务审计日志表&#39;;

    // ======================== 字段说明 ========================

    // | 字段          | 来源                              | 说明                                         |
    // |--------------|----------------------------------|----------------------------------------------|
    // | id           | 框架自动生成 / 注解指定              | 主键，雪花算法                                  |
    // | tenant_id    | 租户上下文                         | 多租户隔离                                     |
    // | type         | @BizAuditLog.type                | 操作类型（如：用户、文件、权限）                    |
    // | sub_type     | @BizAuditLog.subType             | 子类型（如：创建用户、上传文件）                    |
    // | level        | @BizAuditLog.level               | 日志级别：INFO/WARN/ERROR/AUDIT                 |
    // | biz_no       | @BizAuditLog.bizNo               | 业务编号，多个用&quot;-&quot;拼接                           |
    // | operator_id  | UserIdContextHolder              | 操作人ID，自动获取当前登录用户                      |
    // | operator_name| BizLogCustomizer 扩展填充          | 操作人名称                                      |
    // | operator_time| LocalDateTime.now()              | 操作时间                                        |
    // | success      | 方法执行结果                        | 是否操作成功                                    |
    // | trace_id     | MDC / @BizAuditLog.traceId        | 链路追踪ID，自动从MDC获取                        |
    // | user_ip      | ServletUtils                     | 操作人IP地址                                    |
    // | user_agent   | ServletUtils                     | 浏览器UA                                       |
    // | log_info     | successInfo / failInfo           | 日志内容，根据操作成功/失败选择不同模板              |
    // | param        | BizLogCustomizer 扩展填充          | 操作参数                                       |
    // | before_value| BizLogCustomizer 扩展填充          | 操作前的值（数据变更对比）                        |
    // | after_value | BizLogCustomizer 扩展填充          | 操作后的值（数据变更对比）                        |
    // | extras       | @BizAuditLog.extras              | 额外信息                                       |
    // | code_variable| 切面自动记录                        | 代码位置（类名+方法名）                           |
    // | signature    | LogSignatureUtil 自动生成          | 日志签名（防篡改验证）                            |
    // | create_by    | UserIdContextHolder              | 创建人                                         |
    // | create_time  | LocalDateTime.now()              | 创建时间                                        |

    // ======================== 日志存储方式 ========================

    // 通过 khala.audit-log.log-type 配置：
    // - db：写入数据库表 khala_sys_logger_audit（默认，推荐生产环境）
    // - logger：写入日志文件，格式为管道分隔的纯文本（适合日志采集系统）
    //
    // 数据库方式：DbAuditLogServiceImpl &rarr; BizAuditLogRepository.insert()
    // 文件方式：FileAuditLogServiceImpl &rarr; logger.info() 输出结构化文本

    // ======================== 自定义扩展 ========================

    // 通过实现 BizLogCustomizer 接口，可以在日志记录前自定义修改 BizAuditLogRecord：
    //
    // @Component
    // public class MyBizLogCustomizer implements BizLogCustomizer {
    //     @Override
    //     public void customize(BizAuditLogRecord record) {
    //         // 填充操作人名称
    //         record.setOperatorName(userService.getNameById(record.getOperatorId()));
    //         // 记录操作参数
    //         record.setParam(JsonUtil.toJsonString(methodArgs));
    //     }
    //
    //     @Override
    //     public int getOrder() {
    //         return 0;  // 数字越小优先级越高
    //     }
    // }

    // ======================== 注意事项 ========================

    // 1. 日志异步写入（@Async），不会阻塞业务方法
    // 2. 日志签名（signature）用于防篡改，写入时自动生成
    // 3. before_value / after_value 用于数据变更对比，需通过 BizLogCustomizer 自行填充
    // 4. 建议按 type + create_time 建立联合索引，满足常见查询场景
}
