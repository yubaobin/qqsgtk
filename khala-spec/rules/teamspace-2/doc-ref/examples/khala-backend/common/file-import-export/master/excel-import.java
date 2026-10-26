package com.example.fileimportexport;

import com.alibaba.excel.EasyExcel;
import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

/**
 * Excel 导入示例
 */
@Tag(name = &quot;Excel 导入导出管理&quot;)
@RestController
@RequestMapping(&quot;/api/excel&quot;)
public class ExcelImportController {

    /**
     * 导入用户数据
     */
    @Operation(summary = &quot;导入用户数据&quot;, description = &quot;从 Excel 文件导入用户数据&quot;)
    @PostMapping(&quot;/import&quot;)
    public CommonResult&lt;String&gt; importUsers(@RequestParam(&quot;file&quot;) MultipartFile file) throws IOException {
        UserImportListener listener = new UserImportListener();
        EasyExcel.read(file.getInputStream(), UserImportExcelVO.class, listener)
                .sheet()
                .doRead();

        List&lt;UserImportExcelVO&gt; successList = listener.getSuccessList();
        List&lt;UserImportExcelVO&gt; failList = listener.getFailList();

        return CommonResult.success(&quot;导入成功 &quot; + successList.size() + &quot; 条，失败 &quot; + failList.size() + &quot; 条&quot;);
    }
}
