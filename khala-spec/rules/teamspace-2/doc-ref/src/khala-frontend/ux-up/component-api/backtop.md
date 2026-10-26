## Backtop的 API
### Backtop 属性

|名称|说明|类型|默认值|
|-----------------|----------------|---------|---|
|target|触发滚动的对象|string|—|
|visibility-height|滚动高度达到此参数值才出现|number|200|
|right|控制其显示位置，距离页面右边距|number|40|
|bottom|控制其显示位置，距离页面底部距离|number|40|

### Backtop 事件

|名称|说明|回调参数|
|-----|---------|----------------|
|click|点击按钮触发的事件|(evt:MouseEvent)=>void|

### Backtop 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
