## Message的 API
### Message 配置项

|属性名|说明|类型|默认值|
|------------------------|--------------------|-----|-----|
|message|消息文字|string/VNode/()=>VNode|''|
|type|消息类型|enum`'primary'(1.1.4)\|'success'\|'warning'\|'info'\|'error'`|info|
|plain|是否纯色|boolean|false|
|icon|自定义图标，该属性会覆盖`type`的图标。|string/Component|—|
|dangerouslyUseHTMLString|是否将message属性作为HTML片段处理|boolean|false|
|customClass|自定义类名|string|''|
|duration|显示时间，单位为毫秒。设为0则不会自动关闭|number|3000|
|showClose|是否显示关闭按钮|boolean|false|
|onClose|关闭时的回调函数,参数为被关闭的message实例|()=>void|—|
|offset|Message距离窗口顶部的偏移量|number|16|
|appendTo|设置message的根元素，默认为`document.body`|CSSSelector/HTMLElement|—|
|grouping|合并内容相同的消息，不支持VNode类型的消息|boolean|false|
|repeatNum|重复次数，类似于Badge。当和`grouping`属性一起使用时作为初始数量使用|number|1|

### Message 方法

调用 `Message` 或 `this.$message` 会返回当前 Message 的实例。 如果需要手动关闭实例，可以调用它的 `close` 方法。

|方法名|说明|类型|
|-----|-------------|-|
|close|关闭当前的Message|()=>void|
