## Segmented的 API
### Segmented 属性

|名称|说明|类型|默认值|
|-------------------|------------------|---------------|----|
|model-value/v-model|绑定值|string/number/boolean|—|
|options|选项的数据|array`Option[]`|[]|
|[props](#props)|配置选项，详见下表|object|—|
|size|组件大小|''\|'large'\|'default'\|'small'\|'mini'|''|
|block|撑满父元素宽度|boolean|—|
|disabled|是否禁用|boolean|false|
|validate-event|是否触发表单验证|boolean|true|
|name|原生name属性|string|—|
|id|原生`id`属性|string|—|
|aria-label|原生`aria-label`属性|string|—|
|direction|展示的方向|'horizontal'\|'vertical'|horizontal|

### props

|名称|说明|类型|默认值|
|---------|-------------|---------|--------|
|value|指定键为节点对象的某个属性值|string|value|
|label|指定标签为节点对象的某个属性值|string|label|
|disabled|指定禁用状态为节点对象的某个属性值|string|disabled|

### Segmented 事件

|名称|说明|类型|
|------|-------------------|--------|
|change|当所选值更改时触发，参数是当前选中的值|(val:any)=>void|

### Segmented 插槽

|名称|说明|作用域|
|-------|-------------|----|
|default|自定义Option模板|{item:Option}|

