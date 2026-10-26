## Notification的 API
### Notification 配置项

|名称|说明|类型|默认值|
|------------------------|----|----------------------|---------|
|title|标题|string|''|
|message|通知栏正文内容|string/VNode/()=>VNode|''|
|dangerouslyUseHTMLString|是否将message属性作为HTML片段处理|boolean|false|
|type|通知的类型|enum`'primary'(1.1.4)\|'success'\|'warning'\|'info'\|'error'\|''`|''|
|icon|自定义图标。若设置了`type`，则`icon`会被覆盖|string/Component|—|
|customClass|自定义类名|string|''|
|duration|显示时间,单位为毫秒。值为0则不会自动关闭|number|4500|
|position|自定义弹出位置|'top-right'\|'top-left'\|'bottom-right'\|'bottom-left'|top-right|
|showClose|是否显示关闭按钮|boolean|true|
|onClose|关闭时的回调函数|()=>void|—|
|onClick|点击Notification时的回调函数|()=>void|—|
|offset|相对屏幕顶部的偏移量偏移的距离，在同一时刻，所有的Notification实例应当具有一个相同的偏移量|number|0|
|appendTo|设置notification的根元素，默认为`document.body`|CSSSelector/HTMLElement|—|
|zIndex|初始zIndex|number|0|
|closeIcon|自定义关闭图标|string/Component|Close|

### Notification 方法

`Notification` 和 `this.$notify` 都返回当前的 `UxNotification` 实例。 如果需要手动关闭实例，可以调用它的 `close` 方法。

|名称|说明|类型|
|-----|------------------|-|
|close|关闭当前的Notification|()=>void|
