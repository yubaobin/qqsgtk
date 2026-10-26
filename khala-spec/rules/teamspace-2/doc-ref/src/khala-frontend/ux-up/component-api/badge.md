## Badge的 API
### Badge 属性

|属性名|说明|类型|默认值|
|--------------------|------------------|--------------------|------|
|value|显示值|string/number|''|
|max|最大值，超过最大值会显示`{max}+`。只有当value是数字类型时起作用。|number|99|
|is-dot|是否显示小圆点。|boolean|false|
|hidden|是否隐藏Badge。|boolean|false|
|type|badgetype.|'primary'\|'success'\|'warning'\|'danger'\|'info'|danger|
|show-zero|值为零时是否显示Badge|boolean|true|
|color|背景色|string||
|offset|badge的偏移量|array`[number,number]`|[0,0]|
|badge-style|自定义badge样式|CSSProperties|—|
|badge-class|自定义badge类名|string|—|

### Badge 插槽

|插槽名|说明|类型|
|----------------|-------|---|
|default|自定义默认内容|-|
|content|自定义显示内容|{value:string}|
