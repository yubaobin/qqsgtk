## Popconfirm的 API
### Popconfirm 属性

|属性名|说明|类型|默认值|
|-------------------|-------------|------|--------------|
|title|标题|string|—|
|confirm-button-text|确认按钮文字|string|—|
|cancel-button-text|取消按钮文字|string|—|
|confirm-button-type|确认按钮类型|'primary'\|'success'\|'warning'\|'danger'\|'info'\|'text'|primary|
|cancel-button-type|取消按钮类型|'primary'\|'success'\|'warning'\|'danger'\|'info'\|'text'|text|
|icon|自定义图标|string/Component|QuestionFilled|
|icon-color|Icon颜色|string|#FF9900|
|hide-icon|是否隐藏Icon|boolean|false|
|hide-after|关闭时的延迟|number|200|
|teleported|是否将popover的下拉列表插入至body元素|boolean|true|
|persistent|当popover组件长时间不触发且`persistent`属性设置为`false`时,popover将会被删除|boolean|false|
|width|弹层宽度，最小宽度150px|string/number|150|

### Popconfirm 事件

|事件名|说明|类型|
|-------|---------|--------------|
|confirm|点击确认按钮时触发|(e:MouseEvent)=>void|
|cancel|点击取消按钮时触发|(e:MouseEvent)=>void|

### Popconfirm 插槽

|插槽名|说明|类型|
|----------------|-------------------------|-----------|
|reference|触发Popconfirm显示的HTML元素|—|
|actions|页脚的内容|{confirm:(e:MouseEvent)=>void,cancel:(e:MouseEvent)=>void}|

### Popconfirm 暴露方法/属性

|Name|Description|Type|
|-------------------|---|------------------|
|popperRef|ux-popper组件实例|Ref<PopperInstance\|undefined>|
|hide|隐藏popconfirm|()=>void|
