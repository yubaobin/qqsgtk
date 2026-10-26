package com.example.fileimportexport;

import com.alibaba.excel.EasyExcel;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.List;

/**
 * Excel 导出示例
 */
@Tag(name = &quot;Excel 导入导出管理&quot;)
@RestController
@RequestMapping(&quot;/api/excel&quot;)
public class ExcelExportController {

    /**
     * 导出用户列表
     */
    @Operation(summary = &quot;导出用户列表&quot;, description = &quot;导出用户列表为 Excel 文件&quot;)
    @GetMapping(&quot;/export&quot;)
    public void export(HttpServletResponse response) throws IOException {
        // 设置响应头
        response.setContentType(&quot;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&quot;);
        response.setCharacterEncoding(&quot;utf-8&quot;);
        String fileName = URLEncoder.encode(&quot;用户列表&quot;, &quot;UTF-8&quot;).replaceAll(&quot;\\+&quot;, &quot;%20&quot;);
        response.setHeader(&quot;Content-disposition&quot;, &quot;attachment;filename*=utf-8&#39;&#39;&quot; + fileName + &quot;.xlsx&quot;);

        // 查询数据
        List&lt;UserExportExcelVO&gt; data = queryUserList();

        // 写入响应流
        EasyExcel.write(response.getOutputStream(), UserExportExcelVO.class)
                .sheet(&quot;用户列表&quot;)
                .doWrite(data);
    }

    private List&lt;UserExportExcelVO&gt; queryUserList() {
        // 模拟查询数据
        return List.of();
    }
}
