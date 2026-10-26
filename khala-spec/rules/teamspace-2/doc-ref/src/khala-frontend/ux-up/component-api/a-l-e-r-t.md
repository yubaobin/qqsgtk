## Alert的 API
### Alert 属性

|属性名|说明|类型|默认值|
|-----------|---------|-----|-----|
|title|Alert标题。|string|—|
|type|Alert类型。|enum`'primary'(1.1.4)\|'success'\|'warning'\|'info'\|'error'`|info|
|description|描述性文本|string|—|
|closable|是否可以关闭|boolean|true|
|center|文字是否居中|boolean|false|
|close-text|自定义关闭按钮文本|string|—|
|show-icon|是否显示类型图标|boolean|false|
|effect|主题样式|'light'\|'dark'|light|

### Alert 事件

|事件名|说明|类型|
|-----|---------------|------------------|
|close|关闭Alert时触发的事件|(event:MouseEvent)=>void|

### Alert 插槽

|插槽名|说明|
|-------|----------|
|default|Alert内容描述|
|title|标题的内容|
|icon|icon的内容|
