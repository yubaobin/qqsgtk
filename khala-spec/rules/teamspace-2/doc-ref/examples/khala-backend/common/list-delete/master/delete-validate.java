package com.example.listdelete;

import com.eshore.khala.common.core.result.CommonResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 删除校验示例
 */
@RestController
@RequestMapping(&quot;/users&quot;)
public class DeleteValidateController {

    /**
     * 删除前校验关联数据
     */
    @DeleteMapping(&quot;/{id}&quot;)
    public CommonResult&lt;Boolean&gt; deleteWithValidate(@PathVariable Long id) {
        // 校验是否存在关联数据
        if (hasRelatedData(id)) {
            return CommonResult.error(&quot;该用户存在关联数据，无法删除&quot;);
        }

        boolean success = removeById(id);
        return CommonResult.success(success);
    }

    private boolean hasRelatedData(Long id) {
        // 查询关联数据
        return false;
    }

    private boolean removeById(Long id) {
        // 实际调用 Service 层
        return true;
    }
}
