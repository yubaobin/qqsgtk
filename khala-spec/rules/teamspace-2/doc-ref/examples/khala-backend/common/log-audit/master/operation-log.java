package com.example.logaudit;

import com.eshore.khala.starter.log.core.annotation.BizAuditLog;
import com.eshore.khala.starter.log.core.context.BizAuditLogContext;
import com.eshore.khala.starter.log.core.enmus.LogLevel;
import org.springframework.stereotype.Service;

/**
 * @BizAuditLog 操作日志注解使用示例
 *
 * &lt;p&gt;在 Service 方法上添加 @BizAuditLog 注解，框架会通过 AOP 自动记录操作日志。
 * 支持SpEL表达式引用方法参数，自动记录操作人、IP、链路追踪ID等信息。
 *
 * &lt;p&gt;相关源码：
 * - 注解定义：com.eshore.khala.starter.log.core.annotation.BizAuditLog
 * - 切面逻辑：com.eshore.khala.starter.log.core.aspect.BizAuditLogAspect
 * - 日志模型：com.eshore.khala.starter.log.core.model.BizAuditLogRecord
 */
@Service
public class OperationLogExample {

    // ======================== 基础用法 ========================

    /**
     * 最简用法：指定 type 和 successInfo 即可
     * 框架自动记录操作人、操作时间、IP、链路ID等
     */
    @BizAuditLog(type = &quot;用户&quot;, successInfo = &quot;创建用户成功&quot;, failInfo = &quot;创建用户失败&quot;)
    public Long createUser(UserCreateReq req) {
        // 业务逻辑...
        return 1L;
    }

    // ======================== SpEL 表达式引用方法参数 ========================

    /**
     * 使用 {#paramName} 引用方法参数
     * bizNo：绑定业务标识（如用户ID），方便后续按业务编号检索日志
     * successInfo / failInfo：支持 SpEL 表达式动态拼接日志内容
     */
    @BizAuditLog(
            type = &quot;用户&quot;,
            subType = &quot;创建用户&quot;,
            bizNo = {&quot;{#user.id}&quot;},
            successInfo = &quot;创建用户[{#user.username}]成功&quot;,
            failInfo = &quot;创建用户失败&quot;
    )
    public Long createUserWithSpEL(UserCreateReq user) {
        // 业务逻辑...
        return user.getId();
    }

    /**
     * 多个 bizNo 会用 &quot;-&quot; 拼接
     * 例如：bizNo = {&quot;#roleId&quot;, &quot;#userIds&quot;} &rarr; &quot;1-[1,2,3]&quot;
     */
    @BizAuditLog(
            type = &quot;权限&quot;,
            subType = &quot;分配角色用户&quot;,
            bizNo = {&quot;#roleId&quot;, &quot;#userIds&quot;},
            successInfo = &quot;分配角色用户成功&quot;,
            failInfo = &quot;分配角色用户失败&quot;
    )
    public void assignRoleUsers(Long roleId, java.util.List&lt;Long&gt; userIds) {
        // 业务逻辑...
    }

    // ======================== 日志级别 ========================

    /**
     * 通过 level 指定日志级别
     * - LogLevel.INFO：正常操作（默认）
     * - LogLevel.WARN：潜在风险
     * - LogLevel.ERROR：错误操作
     * - LogLevel.AUDIT：专门审计级别，用于关键操作留痕
     */
    @BizAuditLog(
            type = &quot;用户&quot;,
            subType = &quot;重置密码&quot;,
            bizNo = {&quot;{#userId}&quot;},
            level = LogLevel.AUDIT,
            successInfo = &quot;重置用户密码成功&quot;,
            failInfo = &quot;重置用户密码失败&quot;
    )
    public void resetPassword(Long userId) {
        // 业务逻辑...
    }

    // ======================== BizAuditLogContext 传递额外变量 ========================

    /**
     * 在方法执行过程中，可通过 BizAuditLogContext.putVariable() 放入变量
     * 注解中的 SpEL 表达式可以引用这些变量
     *
     * &lt;p&gt;注意：BizAuditLogContext 基于 TransmittableThreadLocal，
     * 在异步线程中也能正确传递（需配合 TTL 包装的线程池）
     */
    @BizAuditLog(
            type = &quot;文件&quot;,
            subType = &quot;上传文件&quot;,
            bizNo = {&quot;{#fileId}&quot;},
            successInfo = &quot;上传文件[{#filePath}]成功&quot;,
            failInfo = &quot;上传文件失败&quot;
    )
    public String uploadFile(String bucketName, String path) {
        // 业务逻辑...
        String fileId = &quot;123456&quot;;
        String filePath = &quot;/data/&quot; + path;

        // 将方法执行过程中产生的变量放入上下文，供注解 SpEL 表达式引用
        BizAuditLogContext.putVariable(&quot;fileId&quot;, fileId);
        BizAuditLogContext.putVariable(&quot;filePath&quot;, filePath);

        return filePath;
    }

    // ======================== extras 扩展信息 ========================

    /**
     * extras 字段用于记录额外的结构化信息
     * 适合记录不便于放入 logInfo 的补充说明
     */
    @BizAuditLog(
            type = &quot;用户&quot;,
            subType = &quot;导入用户&quot;,
            level = LogLevel.INFO,
            extras = &quot;导入来源:管理后台&quot;,
            successInfo = &quot;导入用户数据成功&quot;,
            failInfo = &quot;导入用户数据失败&quot;
    )
    public void importUsers() {
        // 业务逻辑...
    }

    // ======================== 注意事项 ========================

    // 1. @BizAuditLog 注解加在 Service 方法上（非 Controller），因为操作日志关注的是业务操作
    // 2. SpEL 表达式格式：{#param} 引用方法参数，{#variable} 引用 BizAuditLogContext 中的变量
    // 3. 日志记录逻辑在独立 try-catch 中，不会影响主流程
    // 4. 日志异步写入（@Async），不会阻塞业务方法返回
    // 5. 旧版 @AuditLog 注解已废弃，请使用 @BizAuditLog
}

/**
 * 请求参数示例
 */
class UserCreateReq {
    private Long id;
    private String username;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
}
