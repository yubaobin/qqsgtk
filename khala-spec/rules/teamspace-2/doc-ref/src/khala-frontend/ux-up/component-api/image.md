## Image的 API
### Image 属性

|属性名|说明|类型|默认值|
|---------------------|----|--------------------------|-----|
|src|图片源地址，同原生属性一致|string|''|
|fit|确定图片如何适应容器框，同原生[object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit)|''\|'fill'\|'contain'\|'cover'\|'none'\|'scale-down'|''|
|hide-on-click-modal|当开启preview功能时，是否可以通过点击遮罩层关闭preview|boolean|false|
|loading|浏览器加载图像的策略，和[浏览器原生](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-loading)能力一致|'eager'\|'lazy'|—|
|lazy|是否使用懒加载|boolean|false|
|scroll-container|开启懒加载功能后，监听scroll事件的容器默认情况下，开启懒加载功能后，监听scroll事件的容器|string/HTMLElement|—|
|alt|原生属性`alt`|string|—|
|referrerpolicy|原生属性[referrerPolicy](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/referrerPolicy)。|string|—|
|crossorigin|原生属性[crossorigin](https://developer.mozilla.org/zh-CN/docs/Web/HTML/属性/crossorigin)|''\|'anonymous'\|'use-credentials'|—|
|preview-src-list|开启图片预览功能|object`string[]`|[]|
|z-index|设置图片预览的z-index|number|—|
|initial-index|初始预览图像索引，小于`url-list`的长度|number|0|
|close-on-press-escape|是否可以通过按下ESC关闭ImageViewer|boolean|true|
|preview-teleported|image-viewer是否插入至body元素上。嵌套的父元素属性会发生修改时应该将此属性设置为`true`|boolean|false|
|infinite|是否可以无限循环预览|boolean|true|
|zoom-rate|图像查看器缩放事件的缩放速率。|number|1.2|
|min-scale|图像查看器缩放事件的最小缩放比例|number|0.2|
|max-scale|图像查看器缩放事件的最大缩放比例|number|7|
|show-progress|是否在预览图片时显示进度条|boolean|false|

### Image 事件

|事件名|说明|类型|
|------|-------------------------|--------------|
|load|图片加载成功触发|(e:Event)=>void|
|error|图片加载失败触发|(e:Event)=>void|
|switch|切换图像时触发。|(index:number)=>void|
|close|当点击X按钮或者在`hide-on-click-modal`为true时点击遮罩层时触发|()=>void|
|show|当Viewer显示时触发|()=>void|

### Image 插槽

|插槽名|说明|类型|
|-----------|------------------|--------------|
|placeholder|当图像尚未加载时，自定义的占位符内容|-|
|error|自定义图像加载失败的内容|-|
|viewer|当图像预览时自定义内容|-|
|progress|自定义进度内容(优先级高于show-progressprop)|{activeIndex:number,total:number}|
|toolbar|自定义工具栏内容|{actions:(action:ImageViewerAction,options?:ImageViewerActionOptions)=>void,prev:()=>void,next:()=>void,reset:()=>void,activeIndex:number},setActiveItem:(index:number)=>void|

### Image 暴露方法/属性

|名称|说明|类型|
|--------------------|------|-----------------------|
|showPreview|手动打开大图预览|()=>void|
## Image的Viewer API
### ImageViewer 属性

|属性名|说明|类型|默认值|
|---------------------|----|---------------------|-----|
|url-list|用于预览的图片链接列表|object`string[]`|[]|
|z-index|预览时遮罩层的z-index|number/string|—|
|initial-index|初始预览图像索引，小于`url-list`的长度|number|0|
|infinite|是否可以无限循环预览|boolean|true|
|hide-on-click-modal|是否可以通过点击遮罩层关闭预览|boolean|false|
|teleported|image自身是否插入至body元素上。嵌套的父元素属性会发生修改时应该将此属性设置为`true`|boolean|false|
|zoom-rate|图像查看器缩放事件的缩放速率。|number|1.2|
|min-scale|图像查看器缩放事件的最小缩放比例|number|0.2|
|max-scale|图像查看器缩放事件的最大缩放比例|number|7|
|close-on-press-escape|是否可以通过按下ESC关闭ImageViewer|boolean|true|
|show-progress|是否显示预览图片的进度条内容|boolean|false|

### ImageViewer 事件

|事件名|说明|类型|
|----------------|-------------------------|--------------|
|close|当点击X按钮或者在`hide-on-click-modal`为true时点击遮罩层时触发|()=>void|
|switch|切换图像时触发。|(index:number)=>void|
|rotate|旋转图像时触发。|(deg:number)=>void|

### ImageViewer 暴露方法/属性

|Name|说明|类型|
|-------------|------|--------------|
|setActiveItem|手动切换图片|(index:number)=>void|

