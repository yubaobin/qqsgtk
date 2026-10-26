package com.example.file;

import com.eshore.khala.starter.file.core.service.FileService;
import com.eshore.khala.starter.file.core.vo.FileInfoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

/**
 * FileService 常用方法示例
 */
@Component
public class FileServiceExample {

    @Autowired
    private FileService fileService;

    public void examples() {
        // 上传文件
        // FileInfoVO fileInfo = fileService.upload(multipartFile);

        // 批量上传
        // List&lt;FileInfoVO&gt; fileInfos = fileService.uploadBatch(files);

        // 根据 ID 下载
        // fileService.download(fileId, response);

        // 根据路径下载
        // fileService.downloadByPath(filePath, response);

        // 删除文件
        // boolean success = fileService.delete(fileId);

        // 获取文件信息
        // FileInfoVO info = fileService.getFileInfo(fileId);

        // 获取文件访问 URL
        // String url = fileService.getFileUrl(fileId);
    }
}
