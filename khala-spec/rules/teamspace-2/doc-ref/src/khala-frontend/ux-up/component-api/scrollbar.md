## Scrollbar的 API
### Scrollbar 属性

|属性名|说明|类型|默认值|
|--------|---------|---------------------|-----|
|height|滚动条高度|string/number|—|
|max-height|滚动条最大高度|string/number|—|
|native|是否使用原生滚动条样式|boolean|false|
|wrap-style|包裹容器的自定义样式|string/object`CSSSProperties\|CSSSProperties[]\|string[]`|—|
|wrap-class|包裹容器的自定义类名|string|—|
|view-style|视图的自定义样式|string/object`CSSSProperties\|CSSSProperties[]\|string[]`|—|
|view-class|视图的自定义类名|string|—|
|noresize|不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能|boolean|false|
|tag|视图的元素标签|string|div|
|always|滚动条总是显示|boolean|false|
|min-size|滚动条最小尺寸|number|20|
|id|视图ID|string|—|
|role|视图的角色|string|—|
|aria-label|视图的aria-label|string|—|
|aria-orientation|视图的aria-orientation|'horizontal'\|'vertical'|—|
|tabindex|容器的tabindex|number/string|—|
|page-scale|页面缩放比例,用于解决大屏页面缩放后，拖动时坐标错位问题|Number|1|
|distance|触发到达底部事件的距离（像素）|number|0|

### Scrollbar 事件

|事件名|说明|类型|
|------|----------------|-----------------|
|scroll|当触发滚动事件时，返回滚动的距离|({scrollLeft:number,scrollTop:number})=>void|
|end-reached|触发滚动结束时的触发器|(direction:'top'\|'bottom'\|'left'\|'right')=>void|

### Scrollbar 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|

### Scrollbar 暴露方法/属性

|名称|说明|类型|
|-------------|-------------|---|
|handleScroll|触发滚动事件|()=>void|
|scrollTo|滚动到一组特定坐标|(options:ScrollToOptions\|number,yCoord?:number)=>void|
|setScrollTop|设置滚动条到顶部的距离|(scrollTop:number)=>void|
|setScrollLeft|设置滚动条到左边的距离|(scrollLeft:number)=>void|
|update|手动更新滚动条状态|()=>void|
|wrapRef|滚动条包裹的ref对象|Ref<HTMLDivElement>|
