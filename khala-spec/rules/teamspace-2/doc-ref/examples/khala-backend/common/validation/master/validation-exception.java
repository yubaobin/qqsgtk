package com.eshore.khala.example.validation;

import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.List;
import java.util.stream.Collectors;

/**
 * 全局校验异常处理
 *
 * &lt;p&gt;统一处理参数校验失败，返回友好的错误信息&lt;/p&gt;
 */
@Slf4j
@RestControllerAdvice
public class ValidationExceptionHandler {

    /**
     * 处理 @RequestBody 参数校验失败
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Result&lt;Void&gt; handleMethodArgumentNotValid(MethodArgumentNotValidException e) {
        List&lt;FieldError&gt; fieldErrors = e.getBindingResult().getFieldErrors();
        String message = fieldErrors.stream()
                .map(error -&gt; error.getField() + &quot;: &quot; + error.getDefaultMessage())
                .collect(Collectors.joining(&quot;; &quot;));
        return Result.fail(400, message);
    }

    /**
     * 处理 @RequestParam / @PathVariable 参数校验失败
     */
    @ExceptionHandler(ConstraintViolationException.class)
    public Result&lt;Void&gt; handleConstraintViolation(ConstraintViolationException e) {
        String message = e.getConstraintViolations().stream()
                .map(ConstraintViolation::getMessage)
                .collect(Collectors.joining(&quot;; &quot;));
        return Result.fail(400, message);
    }

    /**
     * 处理表单绑定校验失败
     */
    @ExceptionHandler(BindException.class)
    public Result&lt;Void&gt; handleBindException(BindException e) {
        String message = e.getFieldErrors().stream()
                .map(error -&gt; error.getField() + &quot;: &quot; + error.getDefaultMessage())
                .collect(Collectors.joining(&quot;; &quot;));
        return Result.fail(400, message);
    }
}

/**
 * 统一响应结果（简化版）
 */
class Result&lt;T&gt; {
    private Integer code;
    private String message;
    private T data;

    public static &lt;T&gt; Result&lt;T&gt; ok() {
        Result&lt;T&gt; result = new Result&lt;&gt;();
        result.code = 200;
        result.message = &quot;success&quot;;
        return result;
    }

    public static &lt;T&gt; Result&lt;T&gt; fail(Integer code, String message) {
        Result&lt;T&gt; result = new Result&lt;&gt;();
        result.code = code;
        result.message = message;
        return result;
    }
}
