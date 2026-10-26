package com.example.fileimportexport;

import com.alibaba.excel.context.AnalysisContext;
import com.alibaba.excel.read.listener.ReadListener;
import com.alibaba.excel.util.ListUtils;

import java.util.List;

/**
 * 导入数据校验监听器示例
 */
public class UserImportListener implements ReadListener&lt;UserImportVO&gt; {

    private static final int BATCH_COUNT = 100;

    private final List&lt;UserImportVO&gt; successList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);
    private final List&lt;UserImportVO&gt; failList = ListUtils.newArrayListWithExpectedSize(BATCH_COUNT);

    @Override
    public void invoke(UserImportVO data, AnalysisContext context) {
        // 数据校验
        if (data.getUsername() == null || data.getUsername().isEmpty()) {
            data.setErrorMsg(&quot;用户名不能为空&quot;);
            failList.add(data);
            return;
        }
        if (data.getEmail() == null || !data.getEmail().contains(&quot;@&quot;)) {
            data.setErrorMsg(&quot;邮箱格式不正确&quot;);
            failList.add(data);
            return;
        }
        successList.add(data);
    }

    @Override
    public void doAfterAllAnalysed(AnalysisContext context) {
        // 所有数据解析完成后的操作
    }

    public List&lt;UserImportVO&gt; getSuccessList() {
        return successList;
    }

    public List&lt;UserImportVO&gt; getFailList() {
        return failList;
    }
}
