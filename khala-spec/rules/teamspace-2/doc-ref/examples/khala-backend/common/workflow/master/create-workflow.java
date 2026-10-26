package com.example.workflow;

import com.eshore.khala.common.core.result.CommonResult;
import com.eshore.khala.warm.flow.biz.manager.WorkflowManager;
import com.eshore.khala.warm.flow.biz.req.CreateWorkflowFormReq;
import com.eshore.khala.warm.flow.biz.enums.WorkFlowType;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 创建工作流示例
 *
 * &lt;p&gt;说明：使用 WorkflowManager 创建流程定义，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 设置流程基础信息（名称、类型）&lt;/li&gt;
 *   &lt;li&gt;2. 流程类型：PROCESS_FORM（流程表单）、DATA_FORM（数据表单）&lt;/li&gt;
 *   &lt;li&gt;3. 创建成功后返回 workflowId，用于后续流程编排&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Tag(name = &quot;工作流管理&quot;)
@RestController
@RequestMapping(&quot;/api/workflow&quot;)
public class CreateWorkflowController {

    @Autowired
    private WorkflowManager workflowManager;

    /**
     * 创建请假申请流程
     */
    @Operation(summary = &quot;创建工作流&quot;)
    @PostMapping(&quot;/create&quot;)
    public CommonResult&lt;Long&gt; createWorkflow(@RequestBody CreateWorkflowReq req) {
        CreateWorkflowFormReq formReq = new CreateWorkflowFormReq();

        // 设置流程基础信息
        formReq.getSetting().setWorkFlowName(req.getName());
        formReq.getSetting().setWorkFlowType(WorkFlowType.PROCESS_FORM.getValue());

        // 创建流程
        CommonResult&lt;Long&gt; result = workflowManager.create(formReq);
        return result;
    }

    /**
     * 创建数据表单（纯数据收集，无审批）
     */
    @Operation(summary = &quot;创建数据表单&quot;)
    @PostMapping(&quot;/create-data-form&quot;)
    public CommonResult&lt;Long&gt; createDataForm(@RequestBody CreateWorkflowReq req) {
        CreateWorkflowFormReq formReq = new CreateWorkflowFormReq();
        formReq.getSetting().setWorkFlowName(req.getName());
        formReq.getSetting().setWorkFlowType(WorkFlowType.DATA_FORM.getValue());

        CommonResult&lt;Long&gt; result = workflowManager.create(formReq);
        return result;
    }
}

/**
 * 创建请求
 */
class CreateWorkflowReq {
    private String name;
    // getter / setter 省略
}
