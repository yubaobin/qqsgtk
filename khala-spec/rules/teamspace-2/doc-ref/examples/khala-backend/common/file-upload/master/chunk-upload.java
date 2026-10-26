package com.example.fileupload;

import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 * 分片上传示例
 */
@Tag(name = &quot;文件上传管理&quot;)
@RestController
@RequestMapping(&quot;/api/upload&quot;)
public class ChunkUploadController {

    /**
     * 上传分片
     */
    @Operation(summary = &quot;上传分片&quot;, description = &quot;上传文件分片&quot;)
    @PostMapping(&quot;/chunk&quot;)
    public CommonResult&lt;String&gt; uploadChunk(
            @RequestParam(&quot;file&quot;) MultipartFile file,
            @RequestParam(&quot;chunkNumber&quot;) int chunkNumber,
            @RequestParam(&quot;chunkSize&quot;) long chunkSize,
            @RequestParam(&quot;currentChunkSize&quot;) long currentChunkSize,
            @RequestParam(&quot;totalSize&quot;) long totalSize,
            @RequestParam(&quot;identifier&quot;) String identifier,
            @RequestParam(&quot;filename&quot;) String filename,
            @RequestParam(&quot;totalChunks&quot;) int totalChunks) {

        // 保存分片到临时目录
        // mergeChunks(identifier, totalChunks, filename);

        return CommonResult.success(&quot;分片上传成功&quot;);
    }

    /**
     * 合并分片
     */
    @Operation(summary = &quot;合并分片&quot;, description = &quot;合并所有分片文件&quot;)
    @PostMapping(&quot;/merge&quot;)
    public CommonResult&lt;String&gt; mergeChunks(@RequestParam String identifier,
                                            @RequestParam int totalChunks,
                                            @RequestParam String filename) {
        // 合并所有分片文件
        return CommonResult.success(&quot;文件合并成功&quot;);
    }
}
