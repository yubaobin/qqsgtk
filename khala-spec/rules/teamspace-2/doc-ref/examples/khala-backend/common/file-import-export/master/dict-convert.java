package com.example.fileimportexport;

import com.alibaba.excel.converters.Converter;
import com.alibaba.excel.metadata.GlobalConfiguration;
import com.alibaba.excel.metadata.data.ReadCellData;
import com.alibaba.excel.metadata.data.WriteCellData;
import com.alibaba.excel.metadata.property.ExcelContentProperty;

/**
 * 字典转换器示例：状态码转中文
 */
public class StatusConverter implements Converter&lt;Integer&gt; {

    @Override
    public Class&lt;?&gt; supportJavaTypeKey() {
        return Integer.class;
    }

    @Override
    public WriteCellData&lt;?&gt; convertToExcelData(Integer value, ExcelContentProperty contentProperty,
                                                GlobalConfiguration globalConfiguration) {
        String text = switch (value) {
            case 0 -&gt; &quot;禁用&quot;;
            case 1 -&gt; &quot;启用&quot;;
            default -&gt; &quot;未知&quot;;
        };
        return new WriteCellData&lt;&gt;(text);
    }

    @Override
    public Integer convertToJavaData(ReadCellData&lt;?&gt; cellData, ExcelContentProperty contentProperty,
                                      GlobalConfiguration globalConfiguration) {
        String text = cellData.getStringValue();
        return switch (text) {
            case &quot;禁用&quot; -&gt; 0;
            case &quot;启用&quot; -&gt; 1;
            default -&gt; null;
        };
    }
}
