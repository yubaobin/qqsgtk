package com.example.auth;

import com.eshore.khala.starter.captcha.core.annotation.Captcha;
import com.eshore.khala.starter.captcha.core.CaptchaServiceFactory;
import com.eshore.khala.starter.captcha.core.code.provider.CodeCaptchaManager;
import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * 验证码使用示例
 */
@Tag(name = &quot;验证码管理&quot;)
@RestController
@RequestMapping(&quot;/api/captcha&quot;)
public class CaptchaController {

    @Autowired
    private CaptchaServiceFactory captchaServiceFactory;

    @Autowired
    private CodeCaptchaManager codeCaptchaManager;

    /**
     * 方式一：使用 @Captcha 注解自动校验（推荐）
     *
     * 方法执行前会自动校验验证码
     */
    @Operation(summary = &quot;登录（带验证码校验）&quot;, description = &quot;使用 @Captcha 注解自动校验验证码&quot;)
    @Captcha
    @PostMapping(&quot;/login&quot;)
    public CommonResult&lt;String&gt; loginWithAnnotation(@RequestBody LoginReqVO reqVO) {
        // 验证码校验通过后才会执行到这里
        return CommonResult.success(&quot;登录成功&quot;);
    }

    /**
     * 方式二：手动校验验证码
     */
    @Operation(summary = &quot;手动校验验证码&quot;, description = &quot;根据参数自动路由到对应的验证码服务进行校验&quot;)
    @PostMapping(&quot;/verify&quot;)
    public CommonResult&lt;Boolean&gt; verifyCaptcha(@RequestBody Map&lt;String, String&gt; params) {
        // 根据参数自动路由到对应的验证码服务进行校验
        boolean success = captchaServiceFactory.verify(params);
        return CommonResult.success(success);
    }

    /**
     * 发送短信验证码
     */
    @Operation(summary = &quot;发送短信验证码&quot;, description = &quot;发送短信验证码，默认使用 LOGIN 模板&quot;)
    @PostMapping(&quot;/send-sms&quot;)
    public CommonResult&lt;?&gt; sendSmsCode(@RequestParam String mobile) {
        // 发送短信验证码，默认使用 LOGIN 模板
        return codeCaptchaManager.send(&quot;sms&quot;, &quot;khala&quot;, &quot;login&quot;, mobile);
    }

    /**
     * 发送邮箱验证码
     */
    @Operation(summary = &quot;发送邮箱验证码&quot;, description = &quot;发送邮箱验证码&quot;)
    @PostMapping(&quot;/send-email&quot;)
    public CommonResult&lt;?&gt; sendEmailCode(@RequestParam String email) {
        return codeCaptchaManager.send(&quot;email&quot;, &quot;khala&quot;, &quot;login&quot;, email);
    }

    // 登录参数
    public static class LoginReqVO {
        private String username;
        private String password;
        private String captchaCode;
        private String captchaKey;
        // getters / setters
    }
}
