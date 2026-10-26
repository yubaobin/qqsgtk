package com.eshore.khala.example.datapermission;

import com.eshore.khala.starter.datapermission.core.annotation.DataPermission;
import com.eshore.khala.starter.datapermission.core.rule.DataPermissionRule;
import com.eshore.khala.starter.datapermission.core.rule.org.OrgDataPermissionRule;
import com.eshore.khala.starter.datapermission.core.util.DataPermissionUtils;
import com.eshore.khala.starter.datapermission.core.type.DataPermissionType;

/**
 * 数据权限使用示例
 *
 * &lt;p&gt;展示 Khala 数据权限在实际业务中的典型用法。&lt;/p&gt;
 */
@Service
public class OrderService extends ServiceImpl&lt;OrderMapper, Order&gt; {

    /**
     * 查询订单列表（自动应用数据权限）
     *
     * &lt;p&gt;普通用户：只能看到自己创建的订单&lt;/p&gt;
     * &lt;p&gt;部门主管：能看到本部门及子部门的所有订单&lt;/p&gt;
     * &lt;p&gt;管理员：能看到全部订单&lt;/p&gt;
     */
    public List&lt;Order&gt; listOrders() {
        // 无需手动处理数据权限，MyBatis 拦截器自动拼接 SQL 条件
        return baseMapper.selectList(new QueryWrapper&lt;&gt;());
    }

    /**
     * 管理员查看全部数据（禁用数据权限）
     */
    @DataPermission(enabled = false)
    public List&lt;Order&gt; listAllOrdersForAdmin() {
        return baseMapper.selectList(new QueryWrapper&lt;&gt;());
    }

    /**
     * 导出数据（临时忽略数据权限）
     *
     * &lt;p&gt;使用 DataPermissionUtils.executeIgnore 在代码层面动态忽略权限。&lt;/p&gt;
     */
    public void exportAllOrders() {
        DataPermissionUtils.executeIgnore(() -&gt; {
            List&lt;Order&gt; allOrders = baseMapper.selectList(new QueryWrapper&lt;&gt;());
            // 执行导出逻辑...
        });
    }

    /**
     * 自定义数据权限规则
     *
     * &lt;p&gt;实现 DataPermissionRule 接口，自定义 SQL 条件拼接逻辑。&lt;/p&gt;
     */
    @Component
    public class CustomDataPermissionRule implements DataPermissionRule {

        @Override
        public String getDataPermissionType() {
            return DataPermissionType.ORG.getType();
        }

        @Override
        public boolean defaultRule() {
            return false;
        }

        @Override
        public Set&lt;String&gt; getTableNames() {
            return Set.of(&quot;t_order&quot;, &quot;t_order_item&quot;);
        }

        @Override
        public Expression getExpression(String tableName, Alias tableAlias) {
            // 自定义条件：只查询状态为正常的记录
            return new EqualsTo(
                new Column(tableAlias != null ? tableAlias.getName() + &quot;.status&quot; : &quot;status&quot;),
                new StringValue(&quot;1&quot;)
            );
        }

        @Override
        public void addUserColumn(Class&lt;?&gt; entityClass) {}

        @Override
        public void addUserColumn(String tableName) {}

        @Override
        public void addUserColumn(Class&lt;?&gt; entityClass, String columnName) {}

        @Override
        public void addUserColumn(String tableName, String columnName) {}
    }
}
