## Dialog的 API
### Dialog 属性

|属性名|说明|类型|默认值|
|-|------|-------------|-----|
|model-value/v-model|是否显示Dialog|boolean|—|
|title|Dialog对话框Dialog的标题，也可通过具名slot（见下表）传入|string|''|
|width|对话框的宽度，默认值为50%|string/number|''|
|fullscreen|是否为全屏Dialog|boolean|false|
|top|dialogCSS中的margin-top值，默认为15vh|string|''|
|modal|是否需要遮罩层|boolean|true|
|modal-penetrable|是否允许穿透遮罩层。`modal`属性必须为`false`。|boolean|false|
|modal-class|遮罩的自定义类名|string|—|
|header-class|header部分的自定义class名|string|—|
|body-class|body部分的自定义class名|string|—|
|footer-class|footer部分的自定义class名|string|—|
|append-to-body|Dialog自身是否插入至body元素上。嵌套的Dialog必须指定该属性并赋值为`true`|boolean|false|
|append-to|Dialog挂载到哪个DOM元素将覆盖`append-to-body`|CSSSelector/HTMLElement|body|
|lock-scroll|是否在Dialog出现时将body滚动锁定|boolean|true|
|open-delay|dialog打开的延时时间，单位毫秒|number|0|
|close-delay|dialog关闭的延时时间，单位毫秒|number|0|
|close-on-click-modal|是否可以通过点击modal关闭Dialog|boolean|true|
|close-on-press-escape|是否可以通过按下ESC关闭Dialog|boolean|true|
|show-close|是否显示关闭按钮|boolean|true|
|before-close|关闭前的回调，会暂停Dialog的关闭.回调函数内执行done参数方法的时候才是真正关闭对话框的时候.|(done:DoneFn)=>void|—|
|draggable|为Dialog启用可拖拽功能|boolean|false|
|overflow|拖动范围可以超出可视区|boolean|false|
|center|是否让Dialog的header和footer部分居中排列|boolean|false|
|align-center|是否水平垂直对齐对话框|boolean|false|
|destroy-on-close|当关闭Dialog时，销毁其中的元素|boolean|false|
|close-icon|自定义关闭图标，默认Close|string/Component|—|
|z-index|和原生的CSS的z-index相同，改变z轴的顺序|number|—|
|header-aria-level|header的`aria-level`属性|string|2|
|page-scale|页面缩放比例,用于解决大屏页面缩放后，拖动时坐标错位问题|Number|1|
|transition|对话框动画的自定义过渡配置。可以是一个字符串（过渡名称），也可以是一个包含`Vue`过渡属性的对象。|string/TransitionProps|dialog-fade|
|custom-class^(deprecated)|Dialog的自定义类名|string|''|

### Dialog 插槽

|插槽名|说明|
|-------------------|--|
|default|自定义默认内容|
|header|对话框标题的内容；会替换标题部分，但不会移除关闭按钮。|
|footer|Dialog按钮操作区的内容|
|title|与header作用相同请使用header|

### Dialog 事件

|Name|Description|类型|
|----------------|---------------------|-|
|open|Dialog打开的回调|()=>void|
|opened|Dialog打开动画结束时的回调|()=>void|
|close|Dialog关闭的回调|()=>void|
|closed|Dialog关闭动画结束时的回调|()=>void|
|open-auto-focus|输入焦点聚焦在Dialog内容时的回调|()=>void|
|close-auto-focus|输入焦点从Dialog内容失焦时的回调|()=>void|

### Dialog 暴露方法/属性

|名称|说明|类型|
|----------------------|----|-|
|resetPosition|重置位置|()=>void|
|handleClose|关闭弹窗|()=>void|
