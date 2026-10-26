## SimpleLine API

### SimpleLine 属性

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据项数组 | ^[Array]见下表[CategoryDataItem](#categorydataitem) | — |
| config | 配置项 | 见下表[SimpleLineConfig](#simplelineconfig) | — |

### CategoryDataItem

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 类目名称 | ^[string] | — |
| value | 数值 | ^[string] \| ^[number] | — |

#### SimpleLineConfig

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| showLegend | 是否显示图例 | ^[boolean] | true |
| legendPosition | 图例位置 | ^[object] | {} |
| legendWidth | 图例宽度 | ^[number] | — |
| legendHeight | 图例高度 | ^[number] | — |
| gridPosition | 网格位置 | ^[object] | {} |
| smooth | 是否平滑曲线 | ^[boolean] | — |
| showArea | 是否显示面积 | ^[boolean] | true |
| border | 是否显示边框 | ^[boolean] | true |
| borderList | 边框颜色列表 | ^[Array]`string` | [] |
| symbol | 标记图形 | ^[any] | — |
| symbolSize | 标记大小 | ^[number] | — |
| unit | 单位 | ^[string] | '' |
| yLineBorder | Y轴线边框 | ^[boolean] | false |
| showYLabel | 是否显示Y轴标签 | ^[boolean] | true |
| axisLabel | 坐标轴标签 | ^[Array]`string` | [] |
| showXLabel | 是否显示X轴标签 | ^[boolean] | true |
| xLabelRotate | X轴标签旋转角度 | ^[number] | 0 |
| xBoundaryGap | X轴两边留白 | ^[boolean] | true |
| xInterval | X轴间隔 | ^[number] | — |
| mainColor | 主色 | ^[Array]`string` | commonConfig.mainColor |
| showLabel | 是否显示标签 | ^[boolean] | true |
| tooltipFormatter | 提示框格式化 | ^[Function]`(params: any) => string` | — |
| silent | 是否静默 | ^[boolean] | false |
| labelFormatter | 标签格式化 | ^[Function]`(params: any) => string` | — |
| labelLayout | 标签布局 | ^[any] | — |
| yLabelFormatter | Y轴标签格式化 | ^[Function]`(value: any) => string` | — |
| xLabelFormatter | X轴标签格式化 | ^[Function]`(value: any) => string` | — |
| legendFormatter | 图例格式化 | ^[Function]`(name: string) => string` | — |
