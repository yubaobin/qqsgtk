package com.example.schedule;

import tech.powerjob.worker.core.processor.ProcessResult;
import tech.powerjob.worker.core.processor.TaskContext;
import tech.powerjob.worker.core.processor.sdk.BasicProcessor;
import org.springframework.stereotype.Component;

/**
 * 基础定时任务示例
 *
 * &lt;p&gt;说明：实现 BasicProcessor 接口即可创建一个简单的定时任务，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 类需标注 @Component 被 Spring 管理&lt;/li&gt;
 *   &lt;li&gt;2. 实现 process 方法编写任务逻辑&lt;/li&gt;
 *   &lt;li&gt;3. 返回 ProcessResult 表示执行结果（success / msg）&lt;/li&gt;
 *   &lt;li&gt;4. 在 PowerJob 控制台配置任务并绑定 Processor 全类名&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Component
public class DemoBasicJob implements BasicProcessor {

    @Override
    public ProcessResult process(TaskContext context) {
        // 获取任务参数
        String jobParams = context.getJobParams();
        System.out.println(&quot;任务参数: &quot; + jobParams);

        // 执行业务逻辑
        doBusiness();

        // 返回执行成功
        return new ProcessResult(true, &quot;DemoBasicJob 执行成功&quot;);
    }

    private void doBusiness() {
        // 业务逻辑，例如：数据清理、报表生成、消息推送等
        System.out.println(&quot;执行业务逻辑...&quot;);
    }
}
