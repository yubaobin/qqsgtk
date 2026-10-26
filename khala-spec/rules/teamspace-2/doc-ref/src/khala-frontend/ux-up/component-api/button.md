## Button的 API
### Button 属性

|属性名|说明|类型|默认值|
|-----------------|---------------|-------------------|-------|
|size|尺寸|'large'\|'default'\|'small'\|'mini'|—|
|type|类型,在设置`color`时，后者优先|'default'\|'primary'\|'success'\|'warning'\|'danger'\|'info'\|'text'|—|
|plain|是否为朴素按钮|boolean|false|
|is-text|是否文本字按钮，保留原来padding|boolean|false|
|is-bg|是否显示文字按钮背景颜色|boolean|false|
|is-link|是否为链接按钮|boolean|false|
|round|是否为圆角按钮|boolean|false|
|circle|是否为圆形按钮|boolean|false|
|loading|是否为加载中状态|boolean|false|
|loading-icon|自定义加载中状态图标组件|string/Component|Loading|
|disabled|按钮是否为禁用状态|boolean|false|
|icon|图标组件|string/Component|—|
|autofocus|原生`autofocus`属性|boolean|false|
|native-type|原生type属性|'button'\|'submit'\|'reset'|button|
|auto-insert-space|自动在两个中文字符之间插入空格(仅当文本长度为2且所有字符均为中文时才生效)|boolean|—|
|color|自定义按钮颜色,并自动计算`hover`和`active`触发后的颜色|string|—|
|dark|dark模式,意味着自动设置`color`为dark模式的颜色|boolean|false|
|tag|自定义元素标签|string/Component|button|

### Button 插槽

|插槽名|说明|
|-------|--------|
|default|自定义默认内容|
|loading|自定义加载中组件|
|icon|自定义图标组件|

### Button 暴露方法/属性

|属性名|说明|类型|
|--------------|-------------|-----------------------|
|ref|按钮html元素|Ref<HTMLButtonElement>|
|size|按钮尺寸|ComputedRef<''\|'mini'\|'small'\|'default'\|'large'>|
|type|按钮类型|ComputedRef<''\|'default'\|'primary'\|'success'\|'warning'\|'info'\|'danger'\|'text'>|
|disabled|按钮已禁用|ComputedRef<boolean>|
|shouldAddSpace|是否在两个字符之间插入空格|ComputedRef<boolean>|
## Button的Group API
### ButtonGroup 属性

|属性名|说明|类型|默认值|
|----|--------------|--------------------|---|
|size|用于控制该按钮组内按钮的大小|'large'\|'default'\|'small'|—|
|type|用于控制该按钮组内按钮的类型|'primary'\|'success'\|'warning'\|'danger'\|'info'|—|
|direction|展示的方向|'horizontal'\|'vertical'|horizontal|

### ButtonGroup 插槽

|插槽名|说明|子标签|
|-------|--------|------|
|default|自定义按钮组内容|Button|
