package com.example.fileimportexport;

import com.alibaba.excel.EasyExcel;
import com.alibaba.excel.ExcelWriter;
import com.alibaba.excel.write.metadata.WriteSheet;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.List;

/**
 * 大数据量导出示例
 */
@RestController
@RequestMapping(&quot;/excel&quot;)
public class BigDataExportController {

    /**
     * 分页导出大数据量
     */
    @GetMapping(&quot;/export-big&quot;)
    public void exportBigData(HttpServletResponse response) throws IOException {
        response.setContentType(&quot;application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&quot;);
        response.setCharacterEncoding(&quot;utf-8&quot;);
        String fileName = URLEncoder.encode(&quot;大数据导出&quot;, &quot;UTF-8&quot;).replaceAll(&quot;\\+&quot;, &quot;%20&quot;);
        response.setHeader(&quot;Content-disposition&quot;, &quot;attachment;filename*=utf-8&#39;&#39;&quot; + fileName + &quot;.xlsx&quot;);

        ExcelWriter excelWriter = EasyExcel.write(response.getOutputStream(), UserExportVO.class).build();
        WriteSheet writeSheet = EasyExcel.writerSheet(&quot;数据&quot;).build();

        int pageSize = 1000;
        int pageNum = 1;
        while (true) {
            List&lt;UserExportVO&gt; data = queryUserPage(pageNum, pageSize);
            if (data.isEmpty()) {
                break;
            }
            excelWriter.write(data, writeSheet);
            pageNum++;
        }
        excelWriter.finish();
    }

    private List&lt;UserExportVO&gt; queryUserPage(int pageNum, int pageSize) {
        // 模拟分页查询
        return List.of();
    }
}
