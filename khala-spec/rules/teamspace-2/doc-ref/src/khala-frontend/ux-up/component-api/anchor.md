## Anchor的 API
### Anchor 属性

|属性|说明|类型|默认值|
|---------|-----------------|--------------|----------|
|container|滚动的容器|`string`\\|`HTMLElement`\\|`Window`|—|
|offset|设置锚点滚动的偏移量|`number`|0|
|bound|触发锚点的元素的位置偏移量|`number`|15|
|duration|设置容器滚动持续时间，单位为毫秒。|`number`|300|
|marker|是否显示标记|boolean|true|
|type|设置锚点类型|'default'\\|'underline'|`default`|
|direction|设置锚点方向|'vertical'\\|'horizontal'|`vertical`|
|select-scroll-top|滚动时被选中的链接是否在顶部|boolean|false|

### Anchor 事件

|事件名|说明|类型|
|------|-----------|----------------------------|
|change|step改变时的回调|(href:string)=>void|
|click|当用户点击链接时触发|(e:MouseEvent,href?:string)=>void|

### Anchor 方法

|名称|说明|类型|
|--------|----------|------------|
|scrollTo|手动滚动到特定位置。|(href:string)=>void|

### Anchor 插槽

|名称|说明|
|-------|---------------|
|default|AnchorLink组件列表|
## Anchor的Link API
### AnchorLink 属性

|属性|说明|类型|默认值|
|-----|--------|--------|---|
|title|链接的文本内容。|`string`|—|
|href|链接的地址。|`string`|—|

### AnchorLink 插槽

|名称|说明|
|--------|-------|
|default|链接的内容|
|sub-link|子链接的槽位。|
