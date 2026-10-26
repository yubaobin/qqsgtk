## Progress的 API
### Progress 属性

|属性名|说明|类型|默认值|
|----------------------|------------------|----------|-----|
|percentage^(required)|percentage|number`(0-100)`|0|
|type|进度条类型|'line'\|'circle'\|'dashboard'|line|
|stroke-width|进度条的宽度|number|6|
|text-inside|进度条显示文字内置在进度条内（仅`type`为'line'时可用）|boolean|false|
|status|进度条当前状态|'success'\|'exception'\|'warning'|—|
|indeterminate|是否为动画进度条|boolean|false|
|duration|控制动画进度条速度和条纹进度条流动速度|number|3|
|color|进度条背景色（会覆盖`status`状态颜色）|string/function`(percentage:number)=>string`/Array`{color:string;percentage:number}[]`|''|
|width|环形进度条画布宽度（只在type为circle或dashboard时可用）|number|126|
|show-text|是否显示进度条文字内容|boolean|true|
|stroke-linecap|circle/dashboard类型路径两端的形状|'butt'\|'round'\|'square'|round|
|format|指定进度条文字内容|(percentage:number)=>string|—|
|striped|在进度条上增加条纹|boolean|false|
|striped-flow|让进度条上的条纹流动起来|boolean|false|

### Progress 插槽

|名称|说明|类型|
|-------|-----|--------|
|default|自定义内容|{percentage:number}|
