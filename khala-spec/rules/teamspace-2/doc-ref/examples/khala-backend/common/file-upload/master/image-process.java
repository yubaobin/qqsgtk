package com.example.fileupload;

import cn.hutool.core.img.ImgUtil;
import cn.hutool.core.io.FileUtil;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

/**
 * 图片处理示例
 */
@RestController
@RequestMapping(&quot;/image&quot;)
public class ImageProcessController {

    /**
     * 图片压缩
     */
    @PostMapping(&quot;/compress&quot;)
    public String compress(@RequestParam(&quot;file&quot;) MultipartFile file,
                           @RequestParam(defaultValue = &quot;0.8&quot;) float quality) throws IOException {
        File tempFile = File.createTempFile(&quot;img&quot;, &quot;.jpg&quot;);
        file.transferTo(tempFile);

        // 压缩图片
        ImgUtil.compress(tempFile, tempFile, quality);

        return &quot;压缩完成&quot;;
    }

    /**
     * 添加水印
     */
    @PostMapping(&quot;/watermark&quot;)
    public String addWatermark(@RequestParam(&quot;file&quot;) MultipartFile file) throws IOException {
        BufferedImage image = ImageIO.read(file.getInputStream());

        // 创建水印
        BufferedImage watermarkImage = ImgUtil.pressText(
                image,
                &quot;Khala&quot;,
                Color.RED,
                new Font(&quot;黑体&quot;, Font.BOLD, 40),
                0,
                0,
                0.5f
        );

        File output = new File(&quot;watermarked.jpg&quot;);
        ImageIO.write(watermarkImage, &quot;jpg&quot;, output);

        return &quot;水印添加完成&quot;;
    }
}
