package com.example.file;

import com.eshore.khala.common.core.result.CommonResult;
import com.eshore.khala.starter.file.core.service.FileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 文件删除示例
 */
@Tag(name = &quot;文件管理&quot;)
@RestController
@RequestMapping(&quot;/api/file&quot;)
public class FileDeleteController {

    @Autowired
    private FileService fileService;

    /**
     * 根据文件 ID 删除
     */
    @Operation(summary = &quot;删除文件&quot;, description = &quot;根据文件 ID 删除文件&quot;)
    @ApiResponses({
            @ApiResponse(responseCode = &quot;200&quot;, description = &quot;删除成功&quot;),
            @ApiResponse(responseCode = &quot;404&quot;, description = &quot;文件不存在&quot;)
    })
    @PostMapping(&quot;/delete&quot;)
    public CommonResult&lt;Boolean&gt; delete(@RequestBody FileDeleteReqVO reqVO) {
        boolean success = fileService.delete(reqVO.getFileId());
        return CommonResult.success(success);
    }
}

/**
 * 文件删除请求参数示例
 */
class FileDeleteReqVO {

    private String fileId;

    public String getFileId() {
        return fileId;
    }

    public void setFileId(String fileId) {
        this.fileId = fileId;
    }
}
