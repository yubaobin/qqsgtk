package com.eshore.khala.example.captcha;

import cloud.tianai.captcha.application.vo.ImageCaptchaVO;
import com.eshore.khala.starter.captcha.core.slide.ISlideCaptchaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * 滑块验证码示例
 *
 * &lt;p&gt;通过 ISlideCaptchaService 生成和校验滑块验证码&lt;/p&gt;
 * &lt;p&gt;支持多种类型：滑动(SLIDER)、旋转(ROTATE)、拼接(CONCAT)、文字点选(WORD_IMAGE_CLICK)&lt;/p&gt;
 * &lt;p&gt;基于天验(tianai)滑块验证码组件实现&lt;/p&gt;
 */
@RestController
@RequestMapping(&quot;/api/captcha/slide&quot;)
@RequiredArgsConstructor
public class SlideCaptchaController {

    private final ISlideCaptchaService slideCaptchaService;

    /**
     * 生成滑块验证码
     *
     * &lt;p&gt;返回 ImageCaptchaVO，包含：&lt;/p&gt;
     * &lt;p&gt;- id: 验证码唯一标识&lt;/p&gt;
     * &lt;p&gt;- backgroundImage: 背景图片 Base64&lt;/p&gt;
     * &lt;p&gt;- templateImage: 滑块模板图片 Base64&lt;/p&gt;
     *
     * @param captchaKey 验证码标识（可选，不传自动生成）
     */
    @GetMapping(&quot;/generate&quot;)
    public ImageCaptchaVO generate(@RequestParam(required = false) String captchaKey) {
        return slideCaptchaService.generate(captchaKey);
    }

    /**
     * 滑块验证码校验流程
     *
     * &lt;p&gt;1. 前端调用 /generate 获取验证码图片和 id&lt;/p&gt;
     * &lt;p&gt;2. 用户完成滑块操作后，前端将滑动轨迹数据(id + data)提交到后端&lt;/p&gt;
     * &lt;p&gt;3. 后端调用 CaptchaServiceFactory.verify() 或 @Captcha 注解校验&lt;/p&gt;
     * &lt;p&gt;4. 校验成功返回 validCode，用于后续的二次验证&lt;/p&gt;
     *
     * &lt;p&gt;校验参数结构（SlideCaptchaParameter）：&lt;/p&gt;
     * &lt;pre&gt;
     * {
     *   &quot;captchaType&quot;: &quot;slide&quot;,
     *   &quot;id&quot;: &quot;验证码id&quot;,
     *   &quot;data&quot;: { 滑动轨迹数据 },
     *   &quot;validCode&quot;: &quot;二次验证码（二次校验时使用）&quot;
     * }
     * &lt;/pre&gt;
     */
}
