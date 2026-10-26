## Tag的 API
### Tag 属性

|属性名|说明|类型|默认值|
|-------------------|---------|--------------------|-------|
|type|Tag的类型|'primary'\|'success'\|'info'\|'warning'\|'danger'|primary|
|closable|是否可关闭|boolean|false|
|disable-transitions|是否禁用渐变动画|boolean|false|
|hit|是否有边框描边|boolean|false|
|color|背景色|string|—|
|size|Tag的尺寸|'large'\|'default'\|'small'\|'mini'|—|
|effect|Tag的主题|'dark'\|'light'\|'plain'|light|
|round|Tag是否为圆形|boolean|false|

### Tag 事件

|事件名|说明|类型|
|-----|-------------|----------------|
|click|点击Tag时触发的事件|(evt:MouseEvent)=>void|
|close|关闭Tag时触发的事件|(evt:MouseEvent)=>void|

### Tag 插槽

|名称|说明|
|-------|-------|
|default|自定义默认内容|
## Tag的Check API
### CheckTag 属性

|属性名|说明|类型|默认值|
|-------------------------|-----------|--------------------|-------|
|checked/v-model:checked|是否选中|boolean|false|
|disabled|是否禁用|boolean|false|
|type|CheckTag类型|'primary'\|'success'\|'info'\|'warning'\|'danger'|primary|

### CheckTag 事件

|事件名|说明|类型|
|------|-------------------|---------------|
|change|点击CheckTag时触发的事件|(value:boolean)=>void|

### CheckTag 插槽

|名称|说明|
|-------|-------|
|default|自定义默认内容|
