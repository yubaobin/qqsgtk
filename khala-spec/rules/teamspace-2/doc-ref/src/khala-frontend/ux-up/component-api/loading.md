## Loading的 API
### Loading 配置项

|名称|说明|类型|默认值|
|--------------------|--------------------|----|-------------|
|target|Loading需要覆盖的DOM节点。可传入一个DOM对象或字符串；若传入字符串，则会将其作为参数传入`document.querySelector`以获取到对应DOM节点|string/HTMLElement|document.body|
|body|同`v-loading`指令中的`body`修饰符|boolean|false|
|fullscreen|同`v-loading`指令中的`fullscreen`修饰符|boolean|true|
|lock|同`v-loading`指令中的`lock`修饰符|boolean|false|
|text|显示在加载图标下方的加载文案|string|—|
|spinner|自定义加载图标类名|string|—|
|background|遮罩背景色|string|—|
|customClass|Loading的自定义类名|string|—|
|svg|自定义SVG元素覆盖默认加载器|string|—|
|svgViewBox|设置用于加载svg元素的viewBox属性|string|—|
|beforeClose|Loading关闭之前执行的函数。如果此函数返回false，关闭过程将被中止。反之，loading将被关闭。|()=>boolean|—|
|closed|Loading完全关闭后触发的函数|()=>void|—|

### Loading 指令

|名称|说明|类型|
|---|-------------|-----|
|v-loading|是否显示动画|boolean/LoadingOptions|
|element-loading-text|显示在加载图标下方的加载文案|string|
|element-loading-spinner|自定义加载图标|string|
|element-loading-svg|自定义加载图标(与element-loading-spinner相同)|string|
|element-loading-svg-view-box|设置用于加载svg元素的viewBox属性|string|
|element-loading-background|背景遮罩的颜色|string|
|element-loading-custom-class|loading的自定义类名|string|
