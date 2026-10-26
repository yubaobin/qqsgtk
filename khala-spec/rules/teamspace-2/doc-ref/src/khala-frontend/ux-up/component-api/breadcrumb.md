## Breadcrumb的 API
### Breadcrumb 属性

|属性名|说明|类型|默认值|
|--------------|------------|------------------------|---|
|separator|分隔符|string|/|
|separator-icon|图标分隔符的组件或组件名|string/Component|—|

### Breadcrumb 插槽

|插槽名|说明|子标签|
|-------|-------|---------------|
|default|自定义默认内容|BreadcrumbItem|
## Breadcrumb的Item API
### BreadcrumbItem 属性

|属性名|说明|类型|默认值|
|-------|------|--------------|-----|
|to|路由跳转目标，同`vue-router`的`to`属性|string/RouteLocationRaw|''|
|replace|如果设置该属性为`true`,导航将不会留下历史记录|boolean|false|

### BreadcrumbItem 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
