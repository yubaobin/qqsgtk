## Collapse的 API
### Collapse 属性

|属性名|说明|类型|默认值|
|---------------------|----------------|--------------------|-----|
|model-value/v-model|当前活动面板，在手风琴模式下其类型是`string`，在其他模式下是`array`|string/array|[]|
|accordion|是否手风琴模式|boolean|false|
|expand-icon-position|设置展开图标位置|'left'\|'right'|right|
|before-collapse|折叠状态更改之前的折叠钩子。返回`false`或者返回`Promise`且被`reject`则停止切换|()=>Promise<boolean>\|boolean|—|

### Collapse 事件

|事件名|说明|类型|
|------|------------------|-----|
|change|切换当前活动面板，在手风琴模式下其类型是`string`，在其他模式下是`array`|(activeNames:array\|string)=>void|

### Collapse 插槽

|插槽名|Description|子标签|
|-------|-----------|-------------|
|default|自定义默认内容|CollapseItem|

### Collapse 暴露方法/属性

|Name|Description|Type|
|--------------|---|------|
|activeNames|当前活动的面板名称|object`ComputedRef<(string\|number)[]>`|
|setActiveNames|设置活动面板名称|Function`(activeNames:(string\|number)[])=>void`|
## Collapse的Item API
### CollapseItem 属性

|属性名|说明|类型|默认值|
|-------------|-------|------------------------|----------|
|name|唯一标志符|string/number|—|
|title|面板标题|string|''|
|icon|折叠项目的图标|string/Component|ArrowRight|
|disabled|是否禁用|boolean|false|

### CollapseItem Slot

|插槽名|说明|类型|
|-------------|-----------------|-------|
|default|CollapseItem的内容|—|
|title|CollapseItem的标题|{isActive:boolean}|
|icon|折叠项目图标的内容|{isActive:boolean}|

### CollapseItem 暴露方法/属性

|Name|Description|Type|
|--------|------------------|-------------------|
|isActive|当前折叠项是否激活|ComputedRef<boolean\|undefined>|
