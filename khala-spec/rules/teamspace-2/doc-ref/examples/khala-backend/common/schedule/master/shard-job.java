package com.example.schedule;

import tech.powerjob.worker.core.processor.ProcessResult;
import tech.powerjob.worker.core.processor.TaskContext;
import tech.powerjob.worker.core.processor.sdk.MapReduceProcessor;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 分片定时任务示例（MapReduce）
 *
 * &lt;p&gt;说明：实现 MapReduceProcessor 接口实现分片任务，适用于大数据量处理场景，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. map 阶段：将大任务拆分为多个子任务&lt;/li&gt;
 *   &lt;li&gt;2. reduce 阶段：汇总所有子任务的执行结果&lt;/li&gt;
 *   &lt;li&gt;3. 在 PowerJob 控制台配置分片数量&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Component
public class DemoShardJob implements MapReduceProcessor {

    @Override
    public ProcessResult process(TaskContext context) {
        if (isRootTask(context)) {
            // Root 任务：拆分子任务
            return map(context);
        } else {
            // 子任务：执行具体逻辑
            return reduce(context);
        }
    }

    /**
     * Map 阶段：拆分任务
     */
    private ProcessResult map(TaskContext context) {
        // 假设有 1000 条数据，拆分为 10 个子任务，每个处理 100 条
        int total = 1000;
        int pageSize = 100;
        int pageCount = total / pageSize;

        for (int i = 0; i &lt; pageCount; i++) {
            int start = i * pageSize;
            int end = Math.min(start + pageSize, total);
            String subTaskParam = start + &quot;-&quot; + end;
            // 发送子任务
            map(subTaskParam, subTaskParam, null);
        }

        return new ProcessResult(true, &quot;Map 阶段完成，已拆分 &quot; + pageCount + &quot; 个子任务&quot;);
    }

    /**
     * Reduce 阶段：执行子任务
     */
    private ProcessResult reduce(TaskContext context) {
        String subTaskParam = context.getSubTask();
        System.out.println(&quot;子任务执行: &quot; + subTaskParam);

        // 解析参数，处理对应范围的数据
        String[] range = subTaskParam.split(&quot;-&quot;);
        int start = Integer.parseInt(range[0]);
        int end = Integer.parseInt(range[1]);

        // 执行业务逻辑
        processDataRange(start, end);

        return new ProcessResult(true, &quot;子任务 &quot; + subTaskParam + &quot; 执行成功&quot;);
    }

    private void processDataRange(int start, int end) {
        // 处理指定范围的数据
        System.out.println(&quot;处理数据范围: &quot; + start + &quot; ~ &quot; + end);
    }

    private boolean isRootTask(TaskContext context) {
        return context.getSubTask() == null;
    }
}
