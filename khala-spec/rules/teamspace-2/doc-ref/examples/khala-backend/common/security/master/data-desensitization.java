package com.example.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.io.IOException;

/**
 * 数据脱敏示例
 *
 * &lt;p&gt;说明：在返回前端时对敏感数据进行脱敏处理，保护用户隐私，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 使用 @JsonSerialize 自定义序列化器&lt;/li&gt;
 *   &lt;li&gt;2. 使用 @JsonIgnore 完全隐藏字段&lt;/li&gt;
 *   &lt;li&gt;3. 可在 VO / DTO 层统一处理脱敏逻辑&lt;/li&gt;
 * &lt;/ul&gt;
 */
public class DataDesensitizationExample {

    /**
     * 用户 VO：包含脱敏处理
     */
    public static class UserVO {
        private Long id;
        private String username;

        // 手机号脱敏：138****8888
        @JsonSerialize(using = PhoneDesensitizeSerializer.class)
        private String phone;

        // 邮箱脱敏：a***@example.com
        @JsonSerialize(using = EmailDesensitizeSerializer.class)
        private String email;

        // 身份证号脱敏：110101********1234
        @JsonSerialize(using = IdCardDesensitizeSerializer.class)
        private String idCard;

        // 密码完全不返回
        @JsonIgnore
        private String password;

        // getter / setter 省略
    }

    /**
     * 手机号脱敏序列化器
     */
    static class PhoneDesensitizeSerializer extends JsonSerializer&lt;String&gt; {
        @Override
        public void serialize(String value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
            if (value != null &amp;&amp; value.length() == 11) {
                gen.writeString(value.substring(0, 3) + &quot;****&quot; + value.substring(7));
            } else {
                gen.writeString(value);
            }
        }
    }

    /**
     * 邮箱脱敏序列化器
     */
    static class EmailDesensitizeSerializer extends JsonSerializer&lt;String&gt; {
        @Override
        public void serialize(String value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
            if (value != null &amp;&amp; value.contains(&quot;@&quot;)) {
                int atIndex = value.indexOf(&quot;@&quot;);
                String prefix = value.substring(0, Math.min(1, atIndex));
                gen.writeString(prefix + &quot;***&quot; + value.substring(atIndex));
            } else {
                gen.writeString(value);
            }
        }
    }

    /**
     * 身份证号脱敏序列化器
     */
    static class IdCardDesensitizeSerializer extends JsonSerializer&lt;String&gt; {
        @Override
        public void serialize(String value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
            if (value != null &amp;&amp; value.length() == 18) {
                gen.writeString(value.substring(0, 6) + &quot;********&quot; + value.substring(14));
            } else {
                gen.writeString(value);
            }
        }
    }
}
