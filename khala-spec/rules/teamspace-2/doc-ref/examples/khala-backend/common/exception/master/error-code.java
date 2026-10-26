package com.eshore.khala.example.exception;

import lombok.Getter;

/**
 * 统一错误码枚举
 *
 * &lt;p&gt;错误码规则：A-BB-CCC&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;A: 1-系统级错误，2-业务级错误&lt;/li&gt;
 *   &lt;li&gt;BB: 模块编号（01-通用，02-用户，03-订单...）&lt;/li&gt;
 *   &lt;li&gt;CCC: 具体错误序号&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Getter
public enum ErrorCode {

    // 系统级错误 1xxxxx
    SUCCESS(200, &quot;操作成功&quot;),
    SYSTEM_ERROR(100001, &quot;系统繁忙，请稍后重试&quot;),
    PARAM_ERROR(100002, &quot;参数错误：%s&quot;),
    NOT_FOUND(100003, &quot;%s [%s] 不存在&quot;),
    UNAUTHORIZED(100004, &quot;未登录或登录已过期&quot;),
    FORBIDDEN(100005, &quot;权限不足：%s&quot;),
    REQUEST_TOO_FREQUENT(100006, &quot;请求过于频繁，请稍后重试&quot;),

    // 用户模块 2xxxxx
    USER_NOT_FOUND(200001, &quot;用户不存在&quot;),
    USER_PASSWORD_ERROR(200002, &quot;用户名或密码错误&quot;),
    USER_DISABLED(200003, &quot;用户已被禁用&quot;),
    USER_EXISTS(200004, &quot;用户已存在&quot;),

    // 文件模块 3xxxxx
    FILE_UPLOAD_ERROR(300001, &quot;文件上传失败：%s&quot;),
    FILE_SIZE_EXCEED(300002, &quot;文件大小超过限制&quot;),
    FILE_TYPE_NOT_SUPPORT(300003, &quot;不支持的文件类型&quot;),

    // 业务通用 4xxxxx
    BUSINESS_ERROR(400001, &quot;业务处理失败：%s&quot;),
    STATUS_NOT_ALLOWED(400002, &quot;当前状态不允许此操作&quot;),
    DATA_CONFLICT(400003, &quot;数据冲突：%s&quot;);

    private final Integer code;
    private final String message;

    ErrorCode(Integer code, String message) {
        this.code = code;
        this.message = message;
    }
}
