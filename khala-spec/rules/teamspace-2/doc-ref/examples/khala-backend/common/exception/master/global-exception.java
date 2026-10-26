package com.eshore.khala.example.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

/**
 * 全局异常处理器
 *
 * &lt;p&gt;统一捕获并处理各类异常，返回标准响应格式&lt;/p&gt;
 */
@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    /**
     * 处理业务异常
     */
    @ExceptionHandler(BusinessException.class)
    public Result&lt;Void&gt; handleBusinessException(BusinessException e, HttpServletRequest request) {
        log.warn(&quot;业务异常 [{}] - {}&quot;, request.getRequestURI(), e.getMessage());
        return Result.fail(e.getCode(), e.getMessage());
    }

    /**
     * 处理参数校验异常（已在 validation 模块中处理，此处作为兜底）
     */
    @ExceptionHandler(IllegalArgumentException.class)
    public Result&lt;Void&gt; handleIllegalArgument(IllegalArgumentException e, HttpServletRequest request) {
        log.warn(&quot;参数异常 [{}] - {}&quot;, request.getRequestURI(), e.getMessage());
        return Result.fail(ErrorCode.PARAM_ERROR.getCode(), e.getMessage());
    }

    /**
     * 处理空指针异常
     */
    @ExceptionHandler(NullPointerException.class)
    public Result&lt;Void&gt; handleNullPointer(NullPointerException e, HttpServletRequest request) {
        log.error(&quot;空指针异常 [{}]&quot;, request.getRequestURI(), e);
        return Result.fail(ErrorCode.SYSTEM_ERROR.getCode(), &quot;系统繁忙，请稍后重试&quot;);
    }

    /**
     * 处理其他所有未捕获异常
     */
    @ExceptionHandler(Exception.class)
    public Result&lt;Void&gt; handleException(Exception e, HttpServletRequest request) {
        log.error(&quot;系统异常 [{}]&quot;, request.getRequestURI(), e);
        return Result.fail(ErrorCode.SYSTEM_ERROR.getCode(), &quot;系统繁忙，请稍后重试&quot;);
    }
}
