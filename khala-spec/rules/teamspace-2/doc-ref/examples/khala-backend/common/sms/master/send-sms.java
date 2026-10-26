package com.eshore.khala.example.sms;

import com.eshore.khala.starter.sms.SmsManager;
import com.eshore.khala.starter.sms.pojo.parameter.SendSmsParameter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * 短信发送示例
 *
 * &lt;p&gt;通过 SmsManager 统一发送短信，支持多供应商切换&lt;/p&gt;
 * &lt;p&gt;支持的供应商：华为、阿里云、腾讯、广信、智恒、亿纵通、CAIH&lt;/p&gt;
 */
@RestController
@RequestMapping(&quot;/api/sms&quot;)
@RequiredArgsConstructor
public class SendSmsController {

    private final SmsManager smsManager;

    /**
     * 发送验证码短信
     *
     * &lt;p&gt;使用配置文件中定义的 login 模板&lt;/p&gt;
     * &lt;p&gt;template 对应 yml 中 khala.sms.template 下的 key&lt;/p&gt;
     */
    @PostMapping(&quot;/captcha&quot;)
    public String sendCaptcha(@RequestParam String mobile, @RequestParam String code) {
        SendSmsParameter parameter = new SendSmsParameter();
        parameter.setMobile(mobile);
        parameter.setTemplate(&quot;login&quot;);
        // 模板参数：替换模板中的 {code} 占位符
        Map&lt;String, Object&gt; templateParams = new HashMap&lt;&gt;(4);
        templateParams.put(&quot;code&quot;, code);
        parameter.setTemplateParams(templateParams);

        smsManager.sendSms(parameter);
        return &quot;验证码发送成功&quot;;
    }

    /**
     * 发送通知短信
     *
     * &lt;p&gt;使用自定义模板发送通知类短信&lt;/p&gt;
     */
    @PostMapping(&quot;/notify&quot;)
    public String sendNotify(@RequestParam String mobile,
                             @RequestParam String template,
                             @RequestBody Map&lt;String, Object&gt; params) {
        SendSmsParameter parameter = new SendSmsParameter();
        parameter.setMobile(mobile);
        parameter.setTemplate(template);
        parameter.setTemplateParams(params);

        smsManager.sendSms(parameter);
        return &quot;通知短信发送成功&quot;;
    }

    /**
     * 指定应用编码发送短信
     *
     * &lt;p&gt;appCode: 用于区分不同应用的短信发送记录&lt;/p&gt;
     */
    @PostMapping(&quot;/app-send&quot;)
    public String sendWithAppCode(@RequestParam String mobile,
                                  @RequestParam String template,
                                  @RequestParam String appCode) {
        SendSmsParameter parameter = new SendSmsParameter();
        parameter.setMobile(mobile);
        parameter.setTemplate(template);
        parameter.setAppCode(appCode);

        smsManager.sendSms(parameter);
        return &quot;短信发送成功&quot;;
    }
}
