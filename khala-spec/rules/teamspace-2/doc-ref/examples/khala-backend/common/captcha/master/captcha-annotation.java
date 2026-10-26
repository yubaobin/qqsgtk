package com.eshore.khala.example.captcha;

import com.eshore.khala.common.model.CommonResult;
import com.eshore.khala.starter.captcha.core.CaptchaServiceFactory;
import com.eshore.khala.starter.captcha.core.annotation.Captcha;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @Captcha 注解与 CaptchaServiceFactory 校验示例
 *
 * &lt;p&gt;Khala 提供两种验证码校验方式：&lt;/p&gt;
 * &lt;p&gt;1. @Captcha 注解：声明式自动校验，推荐使用&lt;/p&gt;
 * &lt;p&gt;2. CaptchaServiceFactory：编程式手动校验，灵活控制&lt;/p&gt;
 */
@RestController
@RequestMapping(&quot;/api/captcha/verify&quot;)
public class CaptchaAnnotationController {

    @Autowired
    private CaptchaServiceFactory captchaServiceFactory;

    /**
     * 方式一：@Captcha 注解自动校验（推荐）
     *
     * &lt;p&gt;在方法上添加 @Captcha 注解，框架在方法执行前自动校验验证码&lt;/p&gt;
     * &lt;p&gt;校验失败抛出异常，由全局异常处理器统一返回错误信息&lt;/p&gt;
     * &lt;p&gt;支持图形验证码、滑块验证码、短信验证码、邮箱验证码的自动路由校验&lt;/p&gt;
     */
    @Captcha
    @PostMapping(&quot;/login&quot;)
    public CommonResult&lt;String&gt; loginWithCaptcha(@RequestBody LoginWithCaptchaReq req) {
        // 验证码校验通过后才会执行到这里
        return CommonResult.success(&quot;登录成功&quot;);
    }

    /**
     * 方式二：CaptchaServiceFactory 手动校验
     *
     * &lt;p&gt;适用于需要自定义校验逻辑或校验后做额外处理的场景&lt;/p&gt;
     * &lt;p&gt;根据参数中的 captchaType 自动路由到对应的验证码服务进行校验&lt;/p&gt;
     * &lt;p&gt;captchaType 值：&lt;/p&gt;
     * &lt;p&gt;- &quot;graph&quot;: 图形验证码&lt;/p&gt;
     * &lt;p&gt;- &quot;slide&quot;: 滑块验证码&lt;/p&gt;
     * &lt;p&gt;- &quot;sms&quot;: 短信验证码&lt;/p&gt;
     * &lt;p&gt;- &quot;email&quot;: 邮箱验证码&lt;/p&gt;
     */
    @PostMapping(&quot;/manual&quot;)
    public CommonResult&lt;Boolean&gt; manualVerify(@RequestBody Map&lt;String, String&gt; params) {
        boolean success = captchaServiceFactory.verify(params);
        return CommonResult.success(success);
    }

    /**
     * 登录请求参数（带验证码）
     */
    @Data
    public static class LoginWithCaptchaReq {
        private String username;
        private String password;
        /** 验证码 */
        private String captchaCode;
        /** 验证码标识 */
        private String captchaKey;
        /** 验证码类型（graph/slide/sms/email） */
        private String captchaType;
        /** 设备ID（图形/滑块验证码使用） */
        private String deviceId;
    }
}
