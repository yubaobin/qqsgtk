## Space的API
### 属性

|属性名|说明|类型|默认值|
|----------|-------------------|----------------------------|----------|
|alignment|对齐的方式|enum`'center'\|'normal'\|'stretch'\|...`[align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)|center|
|class|className|string/object/array|—|
|direction|排列的方向|'vertical'\|'horizontal'|horizontal|
|prefix-cls|给space-items的类名前缀|string|—|
|style|额外样式|string/object`CSSProperties\|CSSProperties[]\|string[]`|—|
|spacer|间隔符|string/number/VNode|—|
|size|间隔大小|'default'\|'small'\|'large'/number/array`[number,number]`|small|
|wrap|设置是否自动折行|boolean|false|
|fill|子元素是否填充父容器|boolean|false|
|fill-ratio|填充父容器的比例|number|100|

### 插槽

|名称|说明|
|-------|---------|
|default|需要添加间隔的元素|
