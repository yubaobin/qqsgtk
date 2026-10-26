package com.example.listdelete;

import com.eshore.khala.common.core.result.CommonResult;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 批量删除示例
 */
@Tag(name = &quot;用户管理&quot;)
@RestController
@RequestMapping(&quot;/api/user&quot;)
public class BatchDeleteController {

    /**
     * 批量删除用户
     */
    @Operation(summary = &quot;批量删除用户&quot;, description = &quot;根据 ID 列表批量删除用户&quot;)
    @ApiResponses({
            @ApiResponse(responseCode = &quot;200&quot;, description = &quot;删除成功&quot;),
            @ApiResponse(responseCode = &quot;400&quot;, description = &quot;参数校验失败&quot;)
    })
    @PostMapping(&quot;/delete-batch&quot;)
    public CommonResult&lt;Boolean&gt; deleteBatch(@RequestBody UserBatchDeleteReqVO reqVO) {
        // 调用 Service 批量删除
        boolean success = removeByIds(reqVO.getIds());
        return CommonResult.success(success);
    }

    private boolean removeByIds(List&lt;Long&gt; ids) {
        // 实际调用 Service 层
        return true;
    }
}

/**
 * 批量删除用户请求参数示例
 */
class UserBatchDeleteReqVO {

    private List&lt;Long&gt; ids;

    public List&lt;Long&gt; getIds() {
        return ids;
    }

    public void setIds(List&lt;Long&gt; ids) {
        this.ids = ids;
    }
}
