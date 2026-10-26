## HorizontalBar API

### HorizontalBar 属性

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据项对象 | ^[Object]见下表[HorizontalBarDataObj](#horizontalbardataobj) | — |
| config | 配置项 | 见下表[HorizontalBarConfig](#horizontalbarconfig) | — |

### HorizontalBarDataObj

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 系列名称 | ^[string] | — |
| data | 数据项 | ^[Array]`{ name: string, value: string \| number }` | — |

#### HorizontalBarConfig

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showLegend | 是否显示图例 | ^[boolean] | true |
| legendPosition | 图例位置 | ^[object] | {} |
| legendFormatter | 图例格式化 | ^[Function]`(name: string) => string` | null |
| showBackground | 是否显示背景 | ^[boolean] | true |
| top | 顶部距离 | ^[number] | 0 |
| barWidth | 柱子宽度 | ^[number] | — |
| legendWidth | 图例宽度 | ^[number] | — |
| legendHeight | 图例高度 | ^[number] | — |
| axisLabel | 坐标轴标签 | ^[Array]`string` | [] |
| labelFormatter | 标签格式化 | ^[Function]`(params: any) => string` | null |
| xAxisMargin | X轴边距 | ^[number] | 8 |
| mainColor | 主色 | ^[string] | commonConfig.mainColor[0] |
| borderRadius | 圆角 | ^[Array]`number` | [0, 4, 4, 0] |
| silent | 是否静默 | ^[boolean] | false |
| gridPosition | 网格位置 | ^[object] | — |
