## Container的 API
### Container 属性

|属性名|说明|类型|默认值|
|---------|--------|-----------|--------|
|direction|子元素的排列方向|'horizontal'\|'vertical'|子元素中有`ux-header`或`ux-footer`时为vertical，否则为horizontal|

### Container 插槽

|插槽名|说明|子标签|
|-------|-------|-----------------|
|default|自定义默认内容|Container/Header/Aside/Main/Footer|
## Container的Header API
### Header 属性

|属性名|说明|类型|默认值|
|------|----|---------|----|
|height|顶栏高度|string|60px|

### Header 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
## Container的Aside API
### Aside 属性

|属性名|说明|类型|默认值|
|-----|-----|---------|-----|
|width|侧边栏宽度|string|300px|

### Aside 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
## Container的Main API
### Main 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
## Container的Footer API
### Footer 属性

|属性名|说明|类型|默认值|
|------|----|---------|----|
|height|底栏高度|string|60px|

### Footer 插槽

|插槽名|说明|
|-------|-------|
|default|自定义默认内容|
