## SimplePie API

### SimplePie 属性

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据项数组 | ^[Array]见下表[PieDataItem](#piedataitem) | — |
| config | 配置项 | 见下表[SimplePieConfig](#simplepieconfig) | — |

### PieDataItem

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 名称 | ^[string] | — |
| value | 数值 | ^[string] \| ^[number] | — |

#### SimplePieConfig

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 系列名称 | ^[string] | '' |
| radius | 饼图半径 | ^[Array]`string \| number` | ['40%', '50%'] |
| center | 饼图中心点 | ^[Array]`string \| number` | ['50%', '50%'] |
| clockwise | 是否顺时针 | ^[boolean] | true |
| startAngle | 起始角度 | ^[number] | 90 |
| showLegend | 是否显示图例 | ^[boolean] | false |
| legendWidth | 图例宽度 | ^[number] | — |
| legendHeight | 图例高度 | ^[number] | — |
| legendItemGap | 图例项间隔 | ^[number] | 12 |
| legendOrient | 图例朝向 | ^[string] | 'horizontal' |
| legendFormatter | 图例格式化 | ^[Function]`(name: string) => string` | '{name}' |
| legendPosition | 图例位置 | ^[object] | {} |
| gradientColor | 是否渐变色 | ^[boolean] | false |
| showCenterLabel | 是否显示中心标签 | ^[boolean] | true |
| labelPosition | 标签位置 | ^[string] | 'outside' |
| emphasisScale | 高亮缩放 | ^[boolean] | false |
| emphasisShowLabel | 高亮显示标签 | ^[boolean] | false |
| bgCenter | 背景中心点 | ^[Array]`string \| number` | [] |
| showLabel | 是否显示标签 | ^[boolean] | true |
| labelSize | 标签大小 | ^[number] | 14 |
| labelColor | 标签颜色 | ^[string] | commonConfig.mainLabelColor |
| labelFormatter | 标签格式化 | ^[Function]`(params: any) => string` | null |
| labelrich | 标签富文本 | ^[object] | {} |
| length | 引线第一段长度 | ^[number] | — |
| length2 | 引线第二段长度 | ^[number] | — |
| centerLabelSize | 中心标签大小 | ^[number] | 14 |
| centerLabelColor | 中心标签颜色 | ^[string] | commonConfig.mainLabelColor |
| centerLabelFormatter | 中心标签格式化 | ^[Function]`(params: any) => string` | — |
| centerRich | 中心富文本 | ^[object] | {} |
| mainColor | 主色 | ^[Array]`string` | commonConfig.mainColor |
| silent | 是否静默 | ^[boolean] | true |
| legendRich | 图例富文本 | ^[object] | {} |
| roseType | 玫瑰图类型 | ^[any] | — |
| img | 图片地址 | ^[string] | — |
| symbolSize | 标记大小 | ^[number] \| ^[Array]`number` | — |
