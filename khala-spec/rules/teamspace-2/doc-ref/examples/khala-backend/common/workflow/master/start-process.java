package com.example.workflow;

import com.eshore.khala.common.core.result.CommonResult;
import com.eshore.khala.warm.flow.biz.manager.WorkflowInstanceManager;
import com.eshore.khala.warm.flow.biz.req.ProcessStartReq;
import com.eshore.khala.warm.flow.biz.vo.ProcessInstanceDetailVO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 启动流程实例示例
 *
 * &lt;p&gt;说明：使用 WorkflowInstanceManager 启动流程实例，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 指定 workflowId（流程定义 ID）&lt;/li&gt;
 *   &lt;li&gt;2. 指定 businessId（业务单据 ID，用于关联业务数据）&lt;/li&gt;
 *   &lt;li&gt;3. 可传入流程变量，供后续节点使用&lt;/li&gt;
 *   &lt;li&gt;4. 返回流程实例详情，包含当前待办任务&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Tag(name = &quot;流程实例&quot;)
@RestController
@RequestMapping(&quot;/api/workflow/instance&quot;)
public class StartProcessController {

    @Autowired
    private WorkflowInstanceManager workflowInstanceManager;

    /**
     * 启动请假流程
     */
    @Operation(summary = &quot;启动流程实例&quot;)
    @PostMapping(&quot;/start&quot;)
    public CommonResult&lt;ProcessInstanceDetailVO&gt; startProcess(@RequestBody StartProcessReq req) {
        ProcessStartReq startReq = new ProcessStartReq();
        startReq.setWorkflowId(req.getWorkflowId());
        startReq.setBusinessId(req.getBusinessId());

        // 可选：传入流程变量
        startReq.setVariables(req.getVariables());

        CommonResult&lt;ProcessInstanceDetailVO&gt; result = workflowInstanceManager.startProcess(startReq);
        return result;
    }

    /**
     * 启动并自动提交（适用于无需草稿直接提交的场景）
     */
    @Operation(summary = &quot;启动并提交&quot;)
    @PostMapping(&quot;/start-and-submit&quot;)
    public CommonResult&lt;ProcessInstanceDetailVO&gt; startAndSubmit(@RequestBody StartProcessReq req) {
        ProcessStartReq startReq = new ProcessStartReq();
        startReq.setWorkflowId(req.getWorkflowId());
        startReq.setBusinessId(req.getBusinessId());
        startReq.setVariables(req.getVariables());

        CommonResult&lt;ProcessInstanceDetailVO&gt; result = workflowInstanceManager.startProcess(startReq);
        // 如需自动提交第一个任务，可在此处调用 handleTask
        return result;
    }
}

/**
 * 启动请求
 */
class StartProcessReq {
    private Long workflowId;
    private String businessId;
    private java.util.Map&lt;String, Object&gt; variables;
    // getter / setter 省略
}
