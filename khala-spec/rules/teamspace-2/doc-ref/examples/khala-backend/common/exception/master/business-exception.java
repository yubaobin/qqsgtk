package com.eshore.khala.example.exception;

import lombok.Getter;

/**
 * 业务异常
 *
 * &lt;p&gt;用于封装业务逻辑错误，如参数不合法、状态不允许、资源不存在等&lt;/p&gt;
 */
@Getter
public class BusinessException extends RuntimeException {

    /**
     * 错误码
     */
    private final Integer code;

    /**
     * 错误信息
     */
    private final String message;

    public BusinessException(String message) {
        super(message);
        this.code = ErrorCode.BUSINESS_ERROR.getCode();
        this.message = message;
    }

    public BusinessException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.code = errorCode.getCode();
        this.message = errorCode.getMessage();
    }

    public BusinessException(ErrorCode errorCode, String message) {
        super(message);
        this.code = errorCode.getCode();
        this.message = message;
    }

    public BusinessException(ErrorCode errorCode, Object... args) {
        super(String.format(errorCode.getMessage(), args));
        this.code = errorCode.getCode();
        this.message = String.format(errorCode.getMessage(), args);
    }
}

/**
 * 参数异常
 */
class ParamException extends BusinessException {

    public ParamException(String message) {
        super(ErrorCode.PARAM_ERROR, message);
    }
}

/**
 * 资源不存在异常
 */
class NotFoundException extends BusinessException {

    public NotFoundException(String resourceName, Object id) {
        super(ErrorCode.NOT_FOUND, resourceName, id);
    }
}

/**
 * 权限不足异常
 */
class ForbiddenException extends BusinessException {

    public ForbiddenException(String message) {
        super(ErrorCode.FORBIDDEN, message);
    }
}
