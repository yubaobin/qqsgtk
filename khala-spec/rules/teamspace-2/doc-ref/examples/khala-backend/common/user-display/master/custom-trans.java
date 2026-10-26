package com.example.userdisplay;

import com.eshore.dromara.trans.service.AutoTransable;
import com.eshore.dromara.trans.annotation.AutoTrans;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 自定义翻译扩展示例
 *
 * &lt;p&gt;说明：通过实现 AutoTransable 接口扩展新的翻译类型，&lt;/p&gt;
 * &lt;ul&gt;
 *   &lt;li&gt;1. 使用 @AutoTrans 声明翻译命名空间和字段&lt;/li&gt;
 *   &lt;li&gt;2. 实现 selectByIds 方法提供批量查询能力&lt;/li&gt;
 *   &lt;li&gt;3. 组件会自动注册并拦截对应的 @Trans 注解&lt;/li&gt;
 * &lt;/ul&gt;
 */

/**
 * 部门翻译服务
 */
@Component
@AutoTrans(namespace = &quot;dept&quot;, fields = {&quot;deptName&quot;})
public class DeptTransService implements AutoTransable&lt;DeptModel&gt; {

    private DeptMapper deptMapper;

    @Override
    public List&lt;DeptModel&gt; selectByIds(List ids) {
        return deptMapper.selectBatchIds(ids);
    }
}

/**
 * 地区翻译服务
 */
@Component
@AutoTrans(namespace = &quot;region&quot;, fields = {&quot;regionName&quot;})
class RegionTransService implements AutoTransable&lt;RegionModel&gt; {

    private RegionMapper regionMapper;

    @Override
    public List&lt;RegionModel&gt; selectByIds(List ids) {
        return regionMapper.selectBatchIds(ids);
    }
}

/**
 * 使用自定义翻译的 VO
 */
class CustomTransVO {

    private Long id;

    /**
     * 部门 ID 翻译为部门名称
     */
    @com.eshore.dromara.trans.annotation.Trans(
            type = com.eshore.dromara.trans.type.TransType.AUTO_TRANS,
            key = &quot;dept&quot;,
            target = DeptModel.class,
            fields = &quot;deptName&quot;,
            ref = &quot;deptName&quot;
    )
    private Long deptId;
    private String deptName;

    /**
     * 地区 ID 翻译为地区名称
     */
    @com.eshore.dromara.trans.annotation.Trans(
            type = com.eshore.dromara.trans.type.TransType.AUTO_TRANS,
            key = &quot;region&quot;,
            target = RegionModel.class,
            fields = &quot;regionName&quot;,
            ref = &quot;regionName&quot;
    )
    private Long regionId;
    private String regionName;

    // getter / setter 省略
}

// 模型与 Mapper（简化）
class DeptModel {
    private Long id;
    private String deptName;
}

class RegionModel {
    private Long id;
    private String regionName;
}

class DeptMapper {
    List&lt;DeptModel&gt; selectBatchIds(List ids) { return null; }
}

class RegionMapper {
    List&lt;RegionModel&gt; selectBatchIds(List ids) { return null; }
}
