package com.eshore.khala.example.captcha;

import com.eshore.khala.common.model.CommonResult;
import com.eshore.khala.starter.captcha.core.code.provider.CodeCaptchaManager;
import com.eshore.khala.starter.captcha.core.code.vo.CaptchaVO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * 短信/邮箱验证码示例
 *
 * &lt;p&gt;通过 CodeCaptchaManager 统一发送和校验短信/邮箱验证码&lt;/p&gt;
 * &lt;p&gt;验证码自动生成、存储到 Redis、过期管理&lt;/p&gt;
 */
@RestController
@RequestMapping(&quot;/api/captcha/code&quot;)
@RequiredArgsConstructor
public class CodeCaptchaController {

    private final CodeCaptchaManager codeCaptchaManager;

    // ==================== 发送验证码 ====================

    /**
     * 发送短信验证码
     *
     * &lt;p&gt;参数说明：&lt;/p&gt;
     * &lt;p&gt;- type: 验证码类型，&quot;sms&quot; 短信 / &quot;email&quot; 邮箱&lt;/p&gt;
     * &lt;p&gt;- clientId: 应用标识，默认 &quot;khala&quot;&lt;/p&gt;
     * &lt;p&gt;- template: 模板名称，对应短信/邮件配置中的 template key，如 &quot;login&quot;、&quot;register&quot;&lt;/p&gt;
     * &lt;p&gt;- target: 接收目标（手机号/邮箱地址）&lt;/p&gt;
     */
    @PostMapping(&quot;/send-sms&quot;)
    public CommonResult&lt;CaptchaVO&gt; sendSmsCode(@RequestParam String mobile) {
        return codeCaptchaManager.send(&quot;sms&quot;, &quot;khala&quot;, &quot;login&quot;, mobile);
    }

    /**
     * 发送注册短信验证码（使用 register 模板）
     */
    @PostMapping(&quot;/send-sms-register&quot;)
    public CommonResult&lt;CaptchaVO&gt; sendRegisterSmsCode(@RequestParam String mobile) {
        return codeCaptchaManager.send(&quot;sms&quot;, &quot;khala&quot;, &quot;register&quot;, mobile);
    }

    /**
     * 发送邮箱验证码
     */
    @PostMapping(&quot;/send-email&quot;)
    public CommonResult&lt;CaptchaVO&gt; sendEmailCode(@RequestParam String email) {
        return codeCaptchaManager.send(&quot;email&quot;, &quot;khala&quot;, &quot;login&quot;, email);
    }

    // ==================== 校验验证码 ====================

    /**
     * 短信/邮箱验证码校验流程
     *
     * &lt;p&gt;验证码校验支持两种方式：&lt;/p&gt;
     *
     * &lt;p&gt;方式一：@Captcha 注解自动校验（推荐）&lt;/p&gt;
     * &lt;p&gt;在需要校验的接口方法上添加 @Captcha 注解，框架自动校验请求中的验证码参数&lt;/p&gt;
     * &lt;p&gt;详见 captcha-annotation.java&lt;/p&gt;
     *
     * &lt;p&gt;方式二：CaptchaServiceFactory 手动校验&lt;/p&gt;
     * &lt;p&gt;调用 captchaServiceFactory.verify(params) 手动校验&lt;/p&gt;
     * &lt;p&gt;params 中需包含 captchaType、目标地址和验证码&lt;/p&gt;
     *
     * &lt;p&gt;校验参数结构：&lt;/p&gt;
     * &lt;pre&gt;
     * {
     *   &quot;captchaType&quot;: &quot;sms&quot;,      // 或 &quot;email&quot;
     *   &quot;target&quot;: &quot;13800138000&quot;,    // 手机号或邮箱
     *   &quot;code&quot;: &quot;123456&quot;           // 用户输入的验证码
     * }
     * &lt;/pre&gt;
     */
}
