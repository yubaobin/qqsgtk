package com.example.fileupload;

import com.eshore.khala.common.core.result.CommonResult;
import com.eshore.khala.starter.file.core.service.FileService;
import com.eshore.khala.starter.file.core.vo.FileInfoVO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * 单文件上传示例
 */
@Tag(name = &quot;文件上传管理&quot;)
@RestController
@RequestMapping(&quot;/api/upload&quot;)
public class SingleUploadController {

    @Autowired
    private FileService fileService;

    @Operation(summary = &quot;单文件上传&quot;, description = &quot;上传单个文件&quot;)
    @PostMapping(&quot;/single&quot;)
    public CommonResult&lt;FileInfoVO&gt; upload(@RequestParam(&quot;file&quot;) MultipartFile file) {
        FileInfoVO fileInfo = fileService.upload(file);
        return CommonResult.success(fileInfo);
    }
}
