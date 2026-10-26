## Skeleton的 API
### Skeleton 属性

|属性名|说明|类型|默认值|
|--------|---------|------|-----|
|animated|是否使用动画|boolean|false|
|count|渲染多少个template,建议使用尽可能小的数字|number|1|
|loading|是否显示加载结束后的DOM结构|boolean|false|
|rows|骨架屏段落数量|number|3|
|throttle|渲染延迟（以毫秒为单位）数字代表延迟显示,也可以设置为延迟隐藏,例如`{leading:500,trailing:500}`当需要控制初始加载值时，您可以设置`{initVal:true}`|number/{leading?:number,trailing?:number,initVal?:boolean}|0|

### Skeleton 插槽

|插槽名|说明|作用域|
|--------|-----------------|-|
|default|真正渲染的DOM|object`$attrs`|
|template|渲染skeleton模板的内容|{key:number}|
## Skeleton的Item API
### SkeletonItem 属性

|属性名|说明|类型|默认值|
|-------|----------------|----|----|
|variant|当前渲染skeleton类型|enum`'p'\|'text'\|'h1'\|'h3'\|'caption'\|'button'\|'image'\|'circle'\|'rect'`|text|
