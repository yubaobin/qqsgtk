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

import java.util.List;

/**
 * 多文件上传示例
 */
@Tag(name = &quot;文件上传管理&quot;)
@RestController
@RequestMapping(&quot;/api/upload&quot;)
public class MultiUploadController {

    @Autowired
    private FileService fileService;

    @Operation(summary = &quot;多文件上传&quot;, description = &quot;批量上传多个文件&quot;)
    @PostMapping(&quot;/multi&quot;)
    public CommonResult&lt;List&lt;FileInfoVO&gt;&gt; uploadMulti(@RequestParam(&quot;files&quot;) List&lt;MultipartFile&gt; files) {
        List&lt;FileInfoVO&gt; fileInfos = fileService.uploadBatch(files);
        return CommonResult.success(fileInfos);
    }
}
