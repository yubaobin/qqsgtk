package com.example.workflow;

import com.eshore.khala.warm.flow.biz.manager.WorkflowTaskManager;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 任务转办、委派、加签减签示例
 *
 * &lt;p&gt;说明：WorkflowTaskManager 支持多种任务操作，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 转办：将任务转交给他人处理，自己不再处理&lt;/li&gt;
 *   &lt;li&gt;2. 委派：将任务委派给他人处理，处理完成后回到自己&lt;/li&gt;
 *   &lt;li&gt;3. 加签：增加审批人&lt;/li&gt;
 *   &lt;li&gt;4. 减签：减少审批人&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Tag(name = &quot;任务操作&quot;)
@RestController
@RequestMapping(&quot;/api/workflow/task/operation&quot;)
public class TransferTaskController {

    @Autowired
    private WorkflowTaskManager workflowTaskManager;

    /**
     * 转办任务
     *
     * &lt;p&gt;将当前任务转交给 assigneeUserId 处理，原处理人不再参与&lt;/p&gt;
     */
    @Operation(summary = &quot;转办任务&quot;)
    @PostMapping(&quot;/transfer&quot;)
    public boolean transferTask(@RequestBody TransferTaskReq req) {
        return workflowTaskManager.transferTask(req.getTaskId(), req.getAssigneeUserId());
    }

    /**
     * 委派任务
     *
     * &lt;p&gt;将任务委派给 assigneeUserId 处理，处理完成后回到原处理人&lt;/p&gt;
     */
    @Operation(summary = &quot;委派任务&quot;)
    @PostMapping(&quot;/depute&quot;)
    public boolean deputeTask(@RequestBody TransferTaskReq req) {
        return workflowTaskManager.deputeTask(req.getTaskId(), req.getAssigneeUserId());
    }

    /**
     * 加签
     *
     * &lt;p&gt;在当前节点增加审批人&lt;/p&gt;
     */
    @Operation(summary = &quot;加签&quot;)
    @PostMapping(&quot;/add-sign&quot;)
    public boolean addSignTask(@RequestBody SignTaskReq req) {
        return workflowTaskManager.addSignTask(req.getTaskId(), req.getUserIds());
    }

    /**
     * 减签
     *
     * &lt;p&gt;从当前节点移除审批人&lt;/p&gt;
     */
    @Operation(summary = &quot;减签&quot;)
    @PostMapping(&quot;/reduce-sign&quot;)
    public boolean reduceSignTask(@RequestBody SignTaskReq req) {
        return workflowTaskManager.reduceSignTask(req.getTaskId(), req.getUserIds());
    }

    /**
     * 撤销流程
     */
    @Operation(summary = &quot;撤销流程&quot;)
    @PostMapping(&quot;/revoke&quot;)
    public boolean revokeTask(@RequestBody TaskIdReq req) {
        return workflowTaskManager.revokeTask(req.getTaskId());
    }

    /**
     * 终止流程
     */
    @Operation(summary = &quot;终止流程&quot;)
    @PostMapping(&quot;/terminate&quot;)
    public boolean terminateTask(@RequestBody TaskIdReq req) {
        return workflowTaskManager.terminateTask(req.getTaskId());
    }
}

/**
 * 转办/委派请求
 */
class TransferTaskReq {
    private Long taskId;
    private Long assigneeUserId;
    // getter / setter 省略
}

/**
 * 加签/减签请求
 */
class SignTaskReq {
    private Long taskId;
    private java.util.List&lt;Long&gt; userIds;
    // getter / setter 省略
}

/**
 * 任务 ID 请求
 */
class TaskIdReq {
    private Long taskId;
    // getter / setter 省略
}
