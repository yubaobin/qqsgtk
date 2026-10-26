package com.example.workflow;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.eshore.khala.common.core.result.CommonResult;
import com.eshore.khala.warm.flow.biz.manager.WorkflowInstanceManager;
import com.eshore.khala.warm.flow.biz.req.ProcessInstancePageReq;
import com.eshore.khala.warm.flow.biz.vo.ProcessInstanceDetailVO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 流程实例查询示例
 *
 * &lt;p&gt;说明：使用 WorkflowInstanceManager 查询流程实例，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 待办列表：当前用户需要处理的任务&lt;/li&gt;
 *   &lt;li&gt;2. 已办列表：当前用户已处理过的任务&lt;/li&gt;
 *   &lt;li&gt;3. 我发起的：当前用户发起的流程实例&lt;/li&gt;
 *   &lt;li&gt;4. 流程轨迹：追踪流程执行历史&lt;/li&gt;
 * &lt;/ul&gt;
 */
@Tag(name = &quot;流程查询&quot;)
@RestController
@RequestMapping(&quot;/api/workflow/query&quot;)
public class QueryInstanceController {

    @Autowired
    private WorkflowInstanceManager workflowInstanceManager;

    /**
     * 查询待办列表
     */
    @Operation(summary = &quot;待办列表&quot;)
    @GetMapping(&quot;/todo&quot;)
    public CommonResult&lt;IPage&lt;ProcessInstanceDetailVO&gt;&gt; todoList(
            @RequestParam(defaultValue = &quot;1&quot;) long pageNum,
            @RequestParam(defaultValue = &quot;10&quot;) long pageSize) {

        ProcessInstancePageReq req = new ProcessInstancePageReq();
        req.setPageNum(pageNum);
        req.setPageSize(pageSize);

        return workflowInstanceManager.toDoInstancePage(req);
    }

    /**
     * 查询已办列表
     */
    @Operation(summary = &quot;已办列表&quot;)
    @GetMapping(&quot;/done&quot;)
    public CommonResult&lt;IPage&lt;ProcessInstanceDetailVO&gt;&gt; doneList(
            @RequestParam(defaultValue = &quot;1&quot;) long pageNum,
            @RequestParam(defaultValue = &quot;10&quot;) long pageSize) {

        ProcessInstancePageReq req = new ProcessInstancePageReq();
        req.setPageNum(pageNum);
        req.setPageSize(pageSize);

        return workflowInstanceManager.processedInstancePage(req);
    }

    /**
     * 查询我发起的流程
     */
    @Operation(summary = &quot;我发起的&quot;)
    @GetMapping(&quot;/my-instance&quot;)
    public CommonResult&lt;IPage&lt;ProcessInstanceDetailVO&gt;&gt; myInstance(
            @RequestParam(defaultValue = &quot;1&quot;) long pageNum,
            @RequestParam(defaultValue = &quot;10&quot;) long pageSize) {

        ProcessInstancePageReq req = new ProcessInstancePageReq();
        req.setPageNum(pageNum);
        req.setPageSize(pageSize);
        // 当前用户 ID 可从上下文中获取
        // req.setStartUserId(currentUserId);

        return workflowInstanceManager.getPage(req);
    }

    /**
     * 查询流程详情
     */
    @Operation(summary = &quot;流程详情&quot;)
    @GetMapping(&quot;/detail&quot;)
    public CommonResult&lt;ProcessInstanceDetailVO&gt; detail(@RequestParam Long instanceId) {
        // 查询流程实例详情及轨迹
        return workflowInstanceManager.getById(instanceId);
    }
}
