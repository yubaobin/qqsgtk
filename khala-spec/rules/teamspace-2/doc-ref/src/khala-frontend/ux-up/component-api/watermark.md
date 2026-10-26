## Watermark的 API
### Watermark 属性

|属性名|说明|类型|默认值|
|-------|---|----|-------|
|width|水印的宽度，`content`的默认值是它自己的宽度|number|120|
|height|水印的高度，`content`的默认值是它自己的高度|number|64|
|rotate|水印的旋转角度,单位`°`|number|-22|
|z-index|水印元素的z-index值|number|9|
|image|水印图片，建议使用2x或3x图像|string|—|
|content|水印文本内容|string/object`string[]`|—|
|font|文字样式|[Font](#font)|[字体](#font)|
|gap|水印之间的间距|object`[number,number]`|\[100,100\]|
|offset|水印从容器左上角的偏移默认值为`gap/2`|object`[number,number]`|\[gap\[0\]/2,gap\[1\]/2\]|

### Font

|名称|说明|类型|默认|
|------------|----|--------------|---------------|
|color|字体颜色|string|rgba(0,0,0,.15)|
|fontSize|字体大小|number|16|
|fontWeight|字重|'normal'\|'light'\|'weight'\|number|normal|
|fontFamily|字体|string|sans-serif|
|fontStyle|字体样式|'none'\|'normal'\|'italic'\|'oblique'|normal|
|textAlign|文本对齐|'left'\|'right'\|'center'\|'start'\|'end'|center|
|textBaseline|文本基线|'top'\|'hanging'\|'middle'\|'alphabetic'\|'ideographic'\|'bottom'|hanging|

### Watermark 插槽

|名称|说明|
|--|-------|
|default|添加水印的容器|
