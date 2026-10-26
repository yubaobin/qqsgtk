## HorizontalBar3d API

### HorizontalBar3d 属性

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据项对象 | ^[Object]见下表[HorizontalBarDataObj](#horizontalbardataobj) | — |
| config | 配置项 | 见下表[HorizontalBar3dConfig](#horizontalbar3dconfig) | — |

### HorizontalBarDataObj

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 系列名称 | ^[string] | — |
| data | 数据项 | ^[Array]`{ name: string, value: string \| number }` | — |

#### HorizontalBar3dConfig

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showLegend | 是否显示图例 | ^[boolean] | true |
| legendPosition | 图例位置 | ^[object] | {} |
| legendFormatter | 图例格式化 | ^[Function]`(name: string) => string` | null |
| showBackground | 是否显示背景 | ^[boolean] | true |
| backgroundColor | 背景颜色 | ^[string] | '#60A5FA' |
| barWidth | 柱子宽度 | ^[number] | 20 |
| axisLabel | 坐标轴标签 | ^[Array]`string` | [] |
| labelPosition | 标签位置 | ^[string] | 'right' |
| labelFormatter | 标签格式化 | ^[Function]`(params: any) => string` | — |
| labelRich | 标签富文本 | ^[object] | {} |
| xAxisMargin | X轴边距 | ^[number] | 8 |
| mainColor | 主色 | ^[string] | commonConfig.mainColor[0] |
| silent | 是否静默 | ^[boolean] | false |
| total | 总数值 | ^[number] | — |
| legendWidth | 图例宽度 | ^[number] | — |
| legendHeight | 图例高度 | ^[number] | — |
| gridPosition | 网格位置 | ^[object] | — |
