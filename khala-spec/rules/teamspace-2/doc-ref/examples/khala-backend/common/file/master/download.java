package com.example.file;

import com.eshore.khala.starter.file.core.service.FileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 文件下载示例
 */
@Tag(name = &quot;文件管理&quot;)
@RestController
@RequestMapping(&quot;/api/file&quot;)
public class FileDownloadController {

    @Autowired
    private FileService fileService;

    /**
     * 根据文件 ID 下载
     */
    @Operation(summary = &quot;根据文件 ID 下载&quot;, description = &quot;根据文件 ID 下载文件&quot;)
    @GetMapping(&quot;/download&quot;)
    public void download(@RequestParam String fileId, HttpServletResponse response) throws IOException {
        fileService.download(fileId, response);
    }

    /**
     * 根据文件路径下载
     */
    @Operation(summary = &quot;根据文件路径下载&quot;, description = &quot;根据文件路径下载文件&quot;)
    @GetMapping(&quot;/download-by-path&quot;)
    public void downloadByPath(@RequestParam String filePath, HttpServletResponse response) throws IOException {
        fileService.downloadByPath(filePath, response);
    }
}
