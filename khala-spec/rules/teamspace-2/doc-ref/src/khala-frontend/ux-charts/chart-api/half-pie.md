## HalfPie API

### HalfPie 属性

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据项对象 | ^[Object]见下表[SinglePieDataObj](#singlepiedataobj) | — |
| config | 配置项 | 见下表[HalfPieConfig](#halfpieconfig) | — |

### SinglePieDataObj

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 数值 | ^[string] \| ^[number] | — |
| name | 名称 | ^[string] | — |

#### HalfPieConfig

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| radius | 饼图半径 | ^[Array]`string \| number` | ['70%', '80%'] |
| center | 饼图中心点 | ^[Array]`string \| number` | ['50%', '45%'] |
| centerNameSize | 中心名称大小 | ^[number] | 18 |
| centerNameColor | 中心名称颜色 | ^[string] | '#93C5FD' |
| centerValueSize | 中心数值大小 | ^[number] | 26 |
| centerValueColor | 中心数值颜色 | ^[string] | '#3B82F6' |
| centerValueFontFamily | 中心数值字体 | ^[string] | 'YouSheBiaoTiHei' |
| centerUnitSize | 中心单位大小 | ^[number] | 12 |
| centerUnitColor | 中心单位颜色 | ^[string] | '#60A5FA' |
| centerNameOffsetY | 中心名称Y偏移 | ^[number] | 10 |
| symbolSize | 标记大小 | ^[number] \| ^[Array]`number` | [27, 27] |
| symbolOffset | 标记偏移 | ^[Array]`number` | [0, 0] |
| symbolY | 标记Y坐标 | ^[number] | 60 |
| bgColor | 背景颜色 | ^[string] | '#0A1628' |
| mainColor | 主色 | ^[any] | linear gradient |
| silent | 是否静默 | ^[boolean] | true |
| img | 图片地址 | ^[string] | — |
| total | 总数值 | ^[number] | — |
