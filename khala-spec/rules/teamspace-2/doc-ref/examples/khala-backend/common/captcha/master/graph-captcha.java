package com.eshore.khala.example.captcha;

import com.eshore.khala.common.model.CommonResult;
import com.eshore.khala.starter.captcha.core.graph.IGraphCaptchaService;
import com.eshore.khala.starter.captcha.core.graph.vo.GraphCaptchaVO;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

/**
 * 图形验证码示例
 *
 * &lt;p&gt;通过 IGraphCaptchaService 生成和校验图形验证码（GIF/PNG）&lt;/p&gt;
 * &lt;p&gt;验证码存储在 Redis 中，自动管理过期和重试次数&lt;/p&gt;
 */
@RestController
@RequestMapping(&quot;/api/captcha/graph&quot;)
@RequiredArgsConstructor
public class GraphCaptchaController {

    private final IGraphCaptchaService graphCaptchaService;

    /**
     * 生成图形验证码（返回 Base64）
     *
     * &lt;p&gt;返回 GraphCaptchaVO，包含 captchaKey 和 base64Img&lt;/p&gt;
     * &lt;p&gt;前端使用 captchaKey 标识本次验证码，base64Img 展示图片&lt;/p&gt;
     */
    @GetMapping(&quot;/generate&quot;)
    public CommonResult&lt;GraphCaptchaVO&gt; generate(@RequestParam(required = false) String captchaKey) {
        return graphCaptchaService.generate(captchaKey);
    }

    /**
     * 生成图形验证码（直接输出图片流）
     *
     * &lt;p&gt;通过 HttpServletResponse 直接输出图片流&lt;/p&gt;
     * &lt;p&gt;captchaKey 通过响应头或其他方式返回给前端&lt;/p&gt;
     */
    @GetMapping(&quot;/image&quot;)
    public void generateImage(@RequestParam String captchaKey,
                              HttpServletResponse response) {
        graphCaptchaService.generate(captchaKey, response);
    }
}
