## Affix的 API
### Affix 属性

|名称|说明|类型|默认值|
|--------|-------------|--|---|
|offset|偏移距离|number|0|
|position|固钉位置|'top'\|'bottom'|top|
|target|指定容器（CSS选择器）|string|—|
|z-index|`z-index`|number|100|
|teleported|Affix元素是否使用teleport特性，设置为true将会使得该元素“传送”至append-to设置的位置|boolean|false|
|append-to|Affix元素将被挂载至哪个元素|CSSSelector/HTMLElement|body|

### Affix 事件

|名称|说明|类型|
|------|------------|--------------------|
|change|固钉状态改变时触发的事件|(fixed:boolean)=>void|
|scroll|滚动时触发的事件|(value:{scrollTop:number,fixed:boolean})=>void|

### Affix 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|

### Affix 暴露方法/属性

|名称|说明|类型|
|----------|-------------|-|
|update|手动更新固钉状态|()=>void|
|updateRoot|手动更新根元素的盒模型信息|()=>void|
