package com.example.auth;

import com.eshore.khala.starter.captcha.core.code.provider.CodeCaptchaManager;
import com.eshore.khala.starter.captcha.core.code.vo.CaptchaVO;
import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * 发送短信/邮箱验证码示例
 */
@Tag(name = &quot;验证码管理&quot;)
@RestController
@RequestMapping(&quot;/api/code&quot;)
public class SendCodeController {

    @Autowired
    private CodeCaptchaManager codeCaptchaManager;

    /**
     * 发送短信验证码
     *
     * @param mobile 手机号
     * @return 验证码发送结果
     */
    @Operation(summary = &quot;发送短信验证码&quot;, description = &quot;发送短信验证码，默认使用 login 模板&quot;)
    @PostMapping(&quot;/send-sms&quot;)
    public CommonResult&lt;CaptchaVO&gt; sendSmsCode(@RequestParam String mobile) {
        // type: sms, clientId: khala, template: login, target: 手机号
        return codeCaptchaManager.send(&quot;sms&quot;, &quot;khala&quot;, &quot;login&quot;, mobile);
    }

    /**
     * 发送邮箱验证码
     *
     * @param email 邮箱地址
     * @return 验证码发送结果
     */
    @Operation(summary = &quot;发送邮箱验证码&quot;, description = &quot;发送邮箱验证码，默认使用 login 模板&quot;)
    @PostMapping(&quot;/send-email&quot;)
    public CommonResult&lt;CaptchaVO&gt; sendEmailCode(@RequestParam String email) {
        // type: email, clientId: khala, template: login, target: 邮箱
        return codeCaptchaManager.send(&quot;email&quot;, &quot;khala&quot;, &quot;login&quot;, email);
    }

    /**
     * 发送注册短信验证码
     *
     * @param mobile 手机号
     * @return 验证码发送结果
     */
    @Operation(summary = &quot;发送注册短信验证码&quot;, description = &quot;使用 register 模板发送短信验证码&quot;)
    @PostMapping(&quot;/send-sms-register&quot;)
    public CommonResult&lt;CaptchaVO&gt; sendRegisterSmsCode(@RequestParam String mobile) {
        // 使用 register 模板
        return codeCaptchaManager.send(&quot;sms&quot;, &quot;khala&quot;, &quot;register&quot;, mobile);
    }
}
