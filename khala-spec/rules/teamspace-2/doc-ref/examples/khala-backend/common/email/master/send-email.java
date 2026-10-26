package com.eshore.khala.example.email;

import com.eshore.khala.starter.email.EmailManager;
import com.eshore.khala.starter.email.pojo.parameter.SendEmailParameter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * 邮件发送示例
 *
 * &lt;p&gt;通过 EmailManager 统一发送邮件，支持模板和自定义内容&lt;/p&gt;
 */
@RestController
@RequestMapping(&quot;/api/email&quot;)
@RequiredArgsConstructor
public class SendEmailController {

    private final EmailManager emailManager;

    /**
     * 发送验证码邮件
     *
     * &lt;p&gt;使用配置文件中定义的 captcha 模板&lt;/p&gt;
     * &lt;p&gt;template 对应 yml 中 khala.email.template 下的 key&lt;/p&gt;
     */
    @PostMapping(&quot;/captcha&quot;)
    public String sendCaptcha(@RequestParam String email, @RequestParam String code) {
        SendEmailParameter parameter = new SendEmailParameter();
        parameter.setEmail(email);
        parameter.setTemplate(&quot;captcha&quot;);
        parameter.setApplyId(&quot;captcha-&quot; + email);
        // 模板参数
        Map&lt;String, Object&gt; templateParams = new HashMap&lt;&gt;(4);
        templateParams.put(&quot;code&quot;, code);
        parameter.setTemplateParams(templateParams);

        emailManager.sendEmail(parameter);
        return &quot;验证码邮件发送成功&quot;;
    }

    /**
     * 发送通知邮件
     *
     * &lt;p&gt;使用自定义模板发送通知类邮件&lt;/p&gt;
     */
    @PostMapping(&quot;/notify&quot;)
    public String sendNotify(@RequestParam String email,
                             @RequestParam String template,
                             @RequestBody Map&lt;String, Object&gt; params) {
        SendEmailParameter parameter = new SendEmailParameter();
        parameter.setEmail(email);
        parameter.setTemplate(template);
        parameter.setApplyId(&quot;notify-&quot; + System.currentTimeMillis());
        parameter.setTemplateParams(params);

        emailManager.sendEmail(parameter);
        return &quot;通知邮件发送成功&quot;;
    }
}
