package com.eshore.khala.example.exception;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * 统一响应结果
 *
 * &lt;p&gt;所有 API 接口统一返回此结构&lt;/p&gt;
 *
 * @param &lt;T&gt; 响应数据类型
 */
@Data
public class Result&lt;T&gt; {

    /**
     * 状态码（200 表示成功，其他表示失败）
     */
    private Integer code;

    /**
     * 提示信息
     */
    private String message;

    /**
     * 响应数据
     */
    private T data;

    /**
     * 时间戳
     */
    private LocalDateTime timestamp;

    public Result() {
        this.timestamp = LocalDateTime.now();
    }

    /**
     * 成功响应（无数据）
     */
    public static &lt;T&gt; Result&lt;T&gt; ok() {
        Result&lt;T&gt; result = new Result&lt;&gt;();
        result.setCode(ErrorCode.SUCCESS.getCode());
        result.setMessage(ErrorCode.SUCCESS.getMessage());
        return result;
    }

    /**
     * 成功响应（有数据）
     */
    public static &lt;T&gt; Result&lt;T&gt; ok(T data) {
        Result&lt;T&gt; result = ok();
        result.setData(data);
        return result;
    }

    /**
     * 失败响应（错误码枚举）
     */
    public static &lt;T&gt; Result&lt;T&gt; fail(ErrorCode errorCode) {
        Result&lt;T&gt; result = new Result&lt;&gt;();
        result.setCode(errorCode.getCode());
        result.setMessage(errorCode.getMessage());
        return result;
    }

    /**
     * 失败响应（自定义错误码和消息）
     */
    public static &lt;T&gt; Result&lt;T&gt; fail(Integer code, String message) {
        Result&lt;T&gt; result = new Result&lt;&gt;();
        result.setCode(code);
        result.setMessage(message);
        return result;
    }

    /**
     * 失败响应（业务异常）
     */
    public static &lt;T&gt; Result&lt;T&gt; fail(BusinessException e) {
        Result&lt;T&gt; result = new Result&lt;&gt;();
        result.setCode(e.getCode());
        result.setMessage(e.getMessage());
        return result;
    }

    /**
     * 判断是否成功
     */
    public boolean isSuccess() {
        return ErrorCode.SUCCESS.getCode().equals(this.code);
    }
}
