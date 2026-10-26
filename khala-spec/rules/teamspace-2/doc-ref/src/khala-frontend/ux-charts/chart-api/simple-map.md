## SimpleMap API

### SimpleMap 属性

| 参数名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 数据项数组 | ^[Array]见下表[MapDataItem](#mapdataitem) | — |
| config | 配置项 | 见下表[SimpleMapConfig](#simplemapconfig) | — |

### MapDataItem

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 区域名称 | ^[string] | — |
| value | 数值 | ^[string] \| ^[number] | — |

#### SimpleMapConfig

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| position | 地图位置 | ^[object] | { top: 0, left: 'center', bottom: 20 } |
| bgColor | 背景颜色 | ^[string] | '#0F2847' |
| bgBorderColor | 背景边框颜色 | ^[string] | '#60A5FA' |
| aspectScale | 纵横比 | ^[number] | 1 |
| bgLevel | 背景层级 | ^[number] | 3 |
| showTooltip | 是否显示提示框 | ^[boolean] | false |
| tooltipFormatter | 提示框格式化 | ^[Function]`(params: any) => string` | '{b}' |
| selectPoints | 选中点 | ^[Array]`string` | [] |
| mapName | 地图名称 | ^[string] | — |
