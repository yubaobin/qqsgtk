## SinglePie API

### SinglePie 属性

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 数据项对象 | ^[Object]见下表[SinglePieDataObj](#singlepiedataobj) | — |
| config | 配置项 | 见下表[SinglePieConfig](#singlepieconfig) | — |

### SinglePieDataObj

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 数值 | ^[string] \| ^[number] | — |
| name | 名称 | ^[string] | — |

#### SinglePieConfig

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| radius | 饼图半径 | ^[Array]`string \| number` | ['50%', '60%'] |
| center | 饼图中心点 | ^[Array]`string \| number` | ['50%', '45%'] |
| unit | 单位 | ^[string] | '%' |
| borderRadius | 圆角 | ^[number] | 10 |
| centerNameSize | 中心名称大小 | ^[number] | 18 |
| centerNameColor | 中心名称颜色 | ^[string] | commonConfig.seriesLabelColor |
| centerSpace | 中心间距 | ^[number] | 30 |
| centerValueSize | 中心数值大小 | ^[number] | 26 |
| centerValueColor | 中心数值颜色 | ^[string] | commonConfig.seriesLabelColor |
| centerValueFontFamily | 中心数值字体 | ^[string] | — |
| centerUnitSize | 中心单位大小 | ^[number] | commonConfig.seriesLabelSize - 2 |
| centerUnitColor | 中心单位颜色 | ^[string] | commonConfig.unitColor |
| centerNameOffsetY | 中心名称Y轴偏移 | ^[number] | 10 |
| symbolSize | 标记大小 | ^[number] \| ^[Array]`number` | [27, 27] |
| symbolOffset | 标记偏移 | ^[Array]`number` | [0, 0] |
| symbolY | 标记Y坐标 | ^[number] | 60 |
| clockwise | 是否顺时针 | ^[boolean] | false |
| bgColor | 背景颜色 | ^[string] | '#EEE' |
| startAngle | 起始角度 | ^[number] | 90 |
| mainColor | 主色 | ^[string] | commonConfig.mainColor[0] |
| silent | 是否静默 | ^[boolean] | true |
| img | 图片地址 | ^[string] | — |
| total | 总数值 | ^[number] | — |
