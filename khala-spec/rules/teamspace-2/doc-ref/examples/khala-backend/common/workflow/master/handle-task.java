package com.example.workflow;

import com.eshore.khala.warm.flow.biz.manager.WorkflowTaskManager;
import com.eshore.khala.warm.flow.biz.req.TaskHandleReq;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 处理任务（审批）示例
 *
 * &lt;p&gt;说明：使用 WorkflowTaskManager 处理待办任务，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. taskId：待办任务 ID&lt;/li&gt;
 *   &lt;li&gt;2. approvalResult：审批结果（1-同意, 2-拒绝, 3-回退）&lt;/li&gt;
 *   &lt;li&gt;3. comment：审批意见&lt;/li&gt;
 *   &lt;li&gt;4. 可传入变量影响后续流程走向&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Tag(name = &quot;任务审批&quot;)
@RestController
@RequestMapping(&quot;/api/workflow/task&quot;)
public class HandleTaskController {

    @Autowired
    private WorkflowTaskManager workflowTaskManager;

    /**
     * 同意任务
     */
    @Operation(summary = &quot;同意任务&quot;)
    @PostMapping(&quot;/approve&quot;)
    public boolean approve(@RequestBody HandleTaskReq req) {
        TaskHandleReq handleReq = new TaskHandleReq();
        handleReq.setTaskId(req.getTaskId());
        handleReq.setApprovalResult(1); // 1 = 同意
        handleReq.setComment(req.getComment());
        handleReq.setVariables(req.getVariables());

        return workflowTaskManager.handleTask(handleReq);
    }

    /**
     * 拒绝任务
     */
    @Operation(summary = &quot;拒绝任务&quot;)
    @PostMapping(&quot;/reject&quot;)
    public boolean reject(@RequestBody HandleTaskReq req) {
        TaskHandleReq handleReq = new TaskHandleReq();
        handleReq.setTaskId(req.getTaskId());
        handleReq.setApprovalResult(2); // 2 = 拒绝
        handleReq.setComment(req.getComment());

        return workflowTaskManager.handleTask(handleReq);
    }

    /**
     * 回退任务
     */
    @Operation(summary = &quot;回退任务&quot;)
    @PostMapping(&quot;/rollback&quot;)
    public boolean rollback(@RequestBody HandleTaskReq req) {
        TaskHandleReq handleReq = new TaskHandleReq();
        handleReq.setTaskId(req.getTaskId());
        handleReq.setApprovalResult(3); // 3 = 回退
        handleReq.setComment(req.getComment());

        return workflowTaskManager.handleTask(handleReq);
    }
}

/**
 * 审批请求
 */
class HandleTaskReq {
    private Long taskId;
    private String comment;
    private java.util.Map&lt;String, Object&gt; variables;
    // getter / setter 省略
}
