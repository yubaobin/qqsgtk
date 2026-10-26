## Drawer的 API
### Drawer 属性

|属性名|说明|类型|默认值|
|-|------------|-------|-----|
|model-value/v-model|是否显示Drawer|boolean|false|
|append-to-body|Drawer自身是否插入至body元素上。嵌套的Drawer必须指定该属性并赋值为**true**|boolean|false|
|append-to|挂载到哪个DOM元素将覆盖`append-to-body`|CSSSelector/HTMLElement|body|
|lock-scroll|是否在Drawer出现时将body滚动锁定|boolean|true|
|before-close|关闭前的回调，会暂停Drawer的关闭|(done:(cancel?:boolean)=>void)=>void(done是个functiontype接受一个boolean参数,执行done使用true参数或不提供参数将会终止关闭)|—|
|close-on-click-modal|是否可以通过点击modal关闭Drawer|boolean|true|
|close-on-press-escape|是否可以通过按下ESC关闭Drawer|boolean|true|
|open-delay|Drawer打开的延时时间，单位毫秒|number|0|
|close-delay|Drawer关闭的延时时间，单位毫秒|number|0|
|destroy-on-close|控制是否在关闭Drawer之后将子元素全部销毁|boolean|false|
|modal|是否需要遮罩层|boolean|true|
|direction|Drawer打开的方向|'rtl'\|'ltr'\|'ttb'\|'btt'|rtl|
|show-close|是否显示关闭按钮|boolean|true|
|size|Drawer窗体的大小,当使用`number`类型时,以像素为单位,当使用`string`类型时,请传入'x%',否则便会以`number`类型解释|number/string|30%|
|title|Drawer的标题，也可通过具名slot（见下表）传入|string|—|
|with-header|控制是否显示header栏,默认为true,当此项为false时,titleattribute和titleslot均不生效|boolean|true|
|modal-class|遮罩层的自定义类名|string|—|
|header-class|header部分的自定义class名|string|—|
|body-class|body部分的自定义class名|string|—|
|footer-class|footer部分的自定义class名|string|—|
|z-index|设置z-index|number|—|
|header-aria-level|header的`aria-level`属性|string|2|
|custom-class|Drawer的自定义类名|string|—|

### Drawer 事件

|事件名称|说明|类型|
|----------------|---------------------|-|
|open|Drawer打开的回调|()=>void|
|opened|Drawer打开动画结束时的回调|()=>void|
|close|Drawer关闭的回调|()=>void|
|closed|Drawer关闭动画结束时的回调|()=>void|
|open-auto-focus|输入焦点聚焦在Drawer内容时的回调|()=>void|
|close-auto-focus|输入焦点从Drawer内容失焦时的回调|()=>void|

### Drawer 插槽

|名称|说明|
|-------------------|------|
|default|Drawer的内容|
|header|Drawer标题的内容；会替换标题部分，但不会移除关闭按钮。|
|footer|Drawer页脚部分|
|title|与header作用相同请使用header|

### Drawer 暴露方法/属性

|事件名|说明|
|-----------|---------------|
|handleClose|用于关闭Drawer,该方法会调用传入的`before-close`方法|
