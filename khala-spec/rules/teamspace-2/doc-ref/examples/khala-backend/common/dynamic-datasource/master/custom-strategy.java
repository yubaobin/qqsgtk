package com.eshore.khala.example.datasource;

import com.eshore.khala.starter.dynamic.datasource.customizer.DynamicDataSourceCustomizer;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * 自定义数据源选择策略示例
 *
 * &lt;p&gt;实现 DynamicDataSourceCustomizer 接口自定义数据源选择逻辑&lt;/p&gt;
 * &lt;p&gt;适用于读写分离、负载均衡等需要动态选择数据源的场景&lt;/p&gt;
 */
@Component
public class CustomDataSourceStrategy implements DynamicDataSourceCustomizer {

    /**
     * 自定义数据源选择逻辑
     *
     * @param dbNames 可用的数据源名称列表
     * @return 选择的数据源名称
     */
    @Override
    public String customize(List&lt;String&gt; dbNames) {
        // 示例：读写分离 - 简单轮询选择从库
        if (dbNames == null || dbNames.isEmpty()) {
            return &quot;master&quot;;
        }

        // 根据业务逻辑选择合适的数据源
        // 例如：根据请求上下文、线程变量等判断
        for (String dbName : dbNames) {
            if (dbName.startsWith(&quot;slave&quot;)) {
                return dbName;
            }
        }

        return dbNames.get(0);
    }
}
