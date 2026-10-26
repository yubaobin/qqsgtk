package com.eshore.khala.example.datasource;

import com.baomidou.dynamic.datasource.annotation.DS;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 数据源切换示例
 *
 * &lt;p&gt;通过 @DS 注解在方法或类级别切换数据源&lt;/p&gt;
 * &lt;p&gt;基于 baomidou dynamic-datasource 实现&lt;/p&gt;
 */
@Service
public class DataSourceSwitchService {

    /**
     * 使用默认（master）数据源
     *
     * &lt;p&gt;不标注 @DS 注解时，默认使用 primary 数据源&lt;/p&gt;
     */
    public List&lt;Object&gt; queryFromMaster() {
        // 从主库查询
        return List.of();
    }

    /**
     * 切换到从库数据源
     *
     * &lt;p&gt;@DS(&quot;slave&quot;) 切换到名为 slave 的数据源&lt;/p&gt;
     */
    @DS(&quot;slave&quot;)
    public List&lt;Object&gt; queryFromSlave() {
        // 从从库查询
        return List.of();
    }

    /**
     * 方法级别切换优先于类级别
     *
     * &lt;p&gt;方法上的 @DS 注解优先级高于类上的注解&lt;/p&gt;
     */
    @DS(&quot;report&quot;)
    public List&lt;Object&gt; queryFromReportDb() {
        // 从报表库查询
        return List.of();
    }
}

/**
 * 类级别切换：整个 Service 使用指定数据源
 */
@DS(&quot;slave&quot;)
@Service
class ReadOnlyService {

    /**
     * 默认使用 slave 数据源
     */
    public List&lt;Object&gt; list() {
        return List.of();
    }

    /**
     * 方法级别覆盖类级别，使用 master 数据源
     */
    @DS(&quot;master&quot;)
    public Object getDetail(Long id) {
        return null;
    }
}
