package com.example.security;

import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 请求加密解密示例
 *
 * &lt;p&gt;说明：Khala 安全组件自动处理请求解密和响应加密，业务代码无感知，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 开启 khala.protection.encrypt=true 后自动生效&lt;/li&gt;
 *   &lt;li&gt;2. 开启动态加密后，登录后会使用用户级别动态密钥&lt;/li&gt;
 *   &lt;li&gt;3. 前端需按约定格式加密请求体、解密响应体&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Tag(name = &quot;加密解密示例&quot;)
@RestController
@RequestMapping(&quot;/api/security/encrypt&quot;)
public class RequestEncryptController {

    /**
     * 创建用户（请求体会被自动解密，响应体会被自动加密）
     *
     * &lt;p&gt;前端请求示例（加密后）：&lt;/p&gt;
     * &lt;pre&gt;
     * POST /api/security/encrypt/create
     * Content-Type: application/json
     * X-Encrypt-Key: base64EncodedKey
     *
     * { &quot;encryptedData&quot;: &quot;...密文...&quot; }
     * &lt;/pre&gt;
     */
    @Operation(summary = &quot;创建用户（自动加解密）&quot;)
    @PostMapping(&quot;/create&quot;)
    public CommonResult&lt;UserVO&gt; create(@RequestBody UserCreateReq req) {
        // 此处 req 已被框架自动解密
        // 业务处理...
        UserVO vo = new UserVO();
        vo.setId(1L);
        vo.setUsername(req.getUsername());

        // 返回值会被框架自动加密
        return CommonResult.success(vo);
    }

    /**
     * 请求体（解密后）
     */
    static class UserCreateReq {
        private String username;
        private String password;
        // getter / setter 省略
    }

    /**
     * 响应体（加密前）
     */
    static class UserVO {
        private Long id;
        private String username;
        // getter / setter 省略
    }
}
