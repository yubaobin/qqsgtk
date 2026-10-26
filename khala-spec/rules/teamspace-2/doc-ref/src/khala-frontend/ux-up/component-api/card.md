## Card的 API
### Card 属性

|属性名|说明|类型|默认值|
|--------------------|-----------|----------|------|
|header|卡片的标题你既可以通过设置header来修改标题，也可以通过`slot#header`传入DOM节点|string|—|
|footer|卡片页脚。你既可以通过设置footer来修改卡片底部内容，也可以通过`slot#footer`传入DOM节点|string|—|
|body-style|body的CSS样式|CSSProperties|—|
|header-class|header的自定义类名|string|—|
|body-class|body的自定义类名|string|—|
|footer-class|footer的自定义类名|string|—|
|shadow|卡片阴影显示时机|always\|never\|hover|always|

### Card 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
|header|卡片标题内容|
|footer|卡片页脚内容|
