## Icon的Svg API
### SvgIcon 属性

|参数|说明|类型|默认值|
|--------|-------------------------|--------|------|
|iconName|图标名字，使用`ux-icon-`开的图标会使用组件的图标|string|-|
|size|图标大小，单位px|string/number|-|
|type|图标类型|'primary'\|'success'\|'warning'\|'danger'\|'info'|-|
|prefix|图标前缀，可以设置为`''`表示无前缀| string
## Icon的SvgSymbol API
### SvgSymbol 插槽

|插槽名|说明|子标签|
|-------|--------------|--------|
|default|自定义默认内容|SvgSymbolItem|
## Icon的SvgSymbolItem API
### SvgSymbolItem 属性

|参数|说明|类型|默认值|
|----|----|----|------|
|name|图标名字，对应`SvgIcon`的`iconname`|string|-|
|viewBox|同svg的[viewBox](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/viewBox)|string|-|
|x|`viewBox`中的`min-x`|string/number|0|
|y|`viewBox`中的`min-y`|string/number|0|
|w|`viewBox`中的`width`|string/number|0|
|h|`viewBox`中的`height`|string/number|0|

### SvgSymbolItem 插槽

|插槽名|说明|
|-------|--------------|
|default|自定义默认内容|
