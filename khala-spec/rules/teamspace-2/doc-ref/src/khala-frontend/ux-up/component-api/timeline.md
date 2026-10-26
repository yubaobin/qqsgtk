## Timeline的 API
### Timeline 插槽

|插槽名|说明|子标签|
|-------|-------------------|-------------|
|default|timeline组件的自定义默认内容|TimelineItem|
## Timeline的Item API
### TimelineItem 属性

|属性名|说明|类型|默认值|
|--------------|-------|--------------------|------|
|timestamp|时间戳|string|''|
|hide-timestamp|是否隐藏时间戳|boolean|false|
|center|是否垂直居中|boolean|false|
|placement|时间戳位置|'top'\|'bottom'|bottom|
|type|节点类型|'primary'\|'success'\|'warning'\|'danger'\|'info'|''|
|color|节点颜色|'hsl'\|'hsv'\|'hex'\|'rgb'|''|
|size|节点尺寸|'normal'\|'large'|normal|
|icon|自定义图标|string/Component|—|
|hollow|是否空心点|boolean|false|

### TimelineItem 插槽

|插槽名|说明|
|-------|------------------|
|default|自定义timeline项的默认内容|
|dot|为时间线自定义已定义的节点|
