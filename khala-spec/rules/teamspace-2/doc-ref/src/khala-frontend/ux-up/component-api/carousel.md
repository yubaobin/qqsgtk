## Carousel的 API
### Carousel 属性

|属性名|说明|类型|默认值|
|--------------------|-----------------------|----------------|----------|
|height|carousel的高度|string|''|
|initial-index|初始状态激活的幻灯片的索引，从0开始|number|0|
|trigger|指示器的触发方式|'hover'\|'click'|hover|
|autoplay|是否自动切换|boolean|true|
|interval|自动切换的时间间隔，单位为毫秒|number|3000|
|indicator-position|指示器的位置|''\|'none'\|'outside'|''|
|arrow|切换箭头的显示时机|'always'\|'hover'\|'never'|hover|
|type|carousel的类型|''\|'card'|''|
|card-scale|当type为card时，二级卡的缩放大小|number|0.83|
|loop|是否循环显示|boolean|true|
|direction|展示的方向|'horizontal'\|'vertical'|horizontal|
|pause-on-hover|鼠标悬浮时暂停自动切换|boolean|true|
|motion-blur|添加动态模糊以给走马灯注入活力和流畅性。|boolean|false|

### Carousel 事件

|事件名|说明|类型|
|------|-------------------|--------|
|change|当前展示的幻灯片切换时触发，它有两个参数，一个是新幻灯片的索引，另一个是旧幻灯片的索引|(current:number,prev:number)=>boolean|

### Carousel 插槽

|插槽名|说明|子标签|
|-------|-------|-------------|
|default|自定义默认内容|Carousel-Item|

### Carousel 暴露方法/属性

|方法名|说明|类型|
|--------------------|--------------|-------------------------|
|activeIndex|当前幻灯片的索引|number|
|setActiveItem|手动切换幻灯片，传入需要切换的幻灯片的索引，从0开始；或相应`ux-carousel-item`的`name`属性值|(index:string\|number)=>void|
|prev|切换至上一张幻灯片|()=>void|
|next|切换至下一张幻灯片|()=>void|
## Carousel的Item API
### CarouselItem 属性

|属性名|说明|类型|默认值|
|-----|-----|---------------------|---|
|name|幻灯片的名字，可用作`setActiveItem`的参数|string|''|
|label|该幻灯片所对应指示器的文本|string/number|''|

### CarouselItem 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
