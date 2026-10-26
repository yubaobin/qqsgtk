# Icon 图标
提供了一套常用的图标集合。

## Icon的安装
::: code-group

```shell [npm]
$ npm install @ux-up/icons-vue

# 加强版
$ npm install @ux-up/icons-vue-plus
```

```shell [yarn]
$ yarn add @ux-up/icons-vue

# 加强版
$ yarn add @ux-up/icons-vue-plus
```

```shell [pnpm]
$ pnpm install @ux-up/icons-vue

# 加强版
$ pnpm add @ux-up/icons-vue-plus
```

:::

### 注册所有图标

您需要从 `@ux-up/icons-vue` 中导入所有图标并进行全局注册。

```ts
// main.ts

import * as Icons from '@ux-up/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(Icons)) {
  app.component(key, component)
}
```

### 自动导入

使用 [unplugin-icons](https://github.com/antfu/unplugin-icons) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 可从 [iconify](https://iconify.design/) 或 `@ux-up/icons-vue` 和 `@ux-up/icons-vue-plus` 中自动导入任何图标集。
## Icon的简单使用
 直接当组件来使用即可。
```vue
<template>
<div class="icon-demo">
<Edit />
<Share />
<Delete />
<ux-button type="primary" :icon="Search">搜索</ux-button>
</div>
</template>

<script setup>
import { Search } from '@ux-up/icons-vue'
</script>
```

## Icon的结合 ux-svg-icon 使用
:::info warning

使用 `ux-svg-icon` 时需要先注册图标组件

:::

 使用 `svg-icon` 组件，设置 `icon-name` 即可，还可以设置 `size` 属性改变大小、`type` 属性改变状态、`color` 自定义颜色。
```vue
<template>
<div>
<div class="mb-4 icon-demo">
<ux-svg-icon icon-name="ux-icon-User" />
<ux-svg-icon icon-name="ux-icon-InfoFilled" type="primary" />
<ux-svg-icon icon-name="ux-icon-SuccessFilled" type="success" />
<ux-svg-icon icon-name="ux-icon-WarningFilled" type="warning" />
<ux-svg-icon icon-name="ux-icon-CircleCloseFilled" type="danger" />
</div>
<div class="icon-demo">
<ux-svg-icon :icon-name="WechatFill" size="30" color="#07C160" />
<ux-svg-icon :icon-name="WeiboFill" size="25" color="#E32427" />
<ux-svg-icon :icon-name="WifiFill" size="20" color="#1890FF" />
</div>
</div>
</template>

<script setup>
import { WechatFill, WeiboFill, WifiFill } from '@ux-up/icons-vue-plus'
</script>
```

## Icon的使用iconfont
使用国内 [iconfont](https://www.iconfont.cn/)。把 iconfont 的图标下载，使用 iconfont 提供的 js。
```html
// index.html
<script src="./assets/iconfont.js"></script>
```

或

```javascript
// main.js
import '@/assets/iconfont.js'
...
```

```vue
<template>
<div>
<ux-svg-icon icon-name="ditiexiaotubiao" />
<ux-svg-icon icon-name="huabanfuben" />
</div>
</template>

```

引入后设置 `icon-name` 即可。通过设置 `prefix`，可改变图标的前缀，默认是 `icon`
## Icon的使用复杂 svg
结合 `svg-symbol` 和 `svg-symbol-item` 组件可以设置自定义 `svg` 图标。

```vue
<template>
<div>
<ux-svg-icon icon-name="my-icon" size="160" prefix="" />
<ux-svg-symbol>
<ux-svg-symbol-item name="my-icon" w="380" h="262">
<defs>
<polygon id="path-1" points="0 261.317 379.965 261.317 379.965 0 0 0" />
</defs>
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
<g>
<path
id="Stroke-1"
d="M361.3398,119.3723 C361.3398,116.7593 359.4508,114.5923 356.9648,114.1493 C355.9868,111.2703 353.2668,109.1953 350.0568,109.1953 C346.8208,109.1953 344.0818,111.3023 343.1238,114.2173 C342.7208,114.1203 342.3028,114.0623 341.8708,114.0623 C338.9388,114.0623 336.5608,116.4393 336.5608,119.3723 C336.5608,121.4793 337.7918,123.2953 339.5718,124.1533 C339.9098,124.4793 340.3678,124.6823 340.8748,124.6823 L357.0258,124.6823 C357.5328,124.6823 357.9908,124.4793 358.3288,124.1533 C360.1088,123.2953 361.3398,121.4793 361.3398,119.3723 Z"
stroke="#D3E5EF"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round" />
<path
id="Stroke-3"
d="M21.1327,168.4186 C21.1327,166.2956 19.5977,164.5346 17.5787,164.1756 C16.7837,161.8356 14.5737,160.1496 11.9647,160.1496 C9.3357,160.1496 7.1097,161.8616 6.3317,164.2306 C6.0047,164.1506 5.6657,164.1046 5.3137,164.1046 C2.9317,164.1046 0.9997,166.0356 0.9997,168.4186 C0.9997,170.1306 2.0007,171.6056 3.4457,172.3026 C3.7207,172.5676 4.0937,172.7326 4.5057,172.7326 L17.6277,172.7326 C18.0397,172.7326 18.4117,172.5676 18.6867,172.3026 C20.1327,171.6056 21.1327,170.1306 21.1327,168.4186 Z"
stroke="#D3E5EF"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round" />
<g id="Group-8" transform="translate(6.000000, 239.317000)">
<path id="Fill-5" d="M168.6318,0.8327 L0.9528,0.8327" fill="#FFFFFF" />
<path
id="Stroke-7"
d="M168.6318,0.8327 L0.9528,0.8327"
stroke="#D3E5EF"
stroke-width="2"
stroke-linecap="round"
stroke-linejoin="round" />
</g>
<mask id="mask-2" fill="white">
<use xlink:href="#path-1" />
</mask>
<g id="Clip-10" />
<polygon
id="Stroke-9"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)"
points="137.965 239.4 187.215 239.4 187.215 153.65 137.965 153.65" />
<path
id="Stroke-11"
d="M148.0901,180.1497 L177.0901,180.1497"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-12"
d="M148.0901,190.1557 L177.0901,190.1557"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-13"
d="M148.0901,169.1431 L177.0901,169.1431"
stroke="#DEF1FF"
stroke-width="3"
mask="url(#mask-2)" />
<path
id="Stroke-14"
d="M148.0901,201.1623 L177.0901,201.1623"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<polygon
id="Stroke-15"
stroke="#D3E5EF"
stroke-width="3"
mask="url(#mask-2)"
points="155.715 238.4 169.465 238.4 169.465 214.65 155.715 214.65" />
<polygon
id="Stroke-16"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)"
points="61.715 238.816 129.715 238.816 129.715 132.149 61.715 132.149" />
<path
id="Stroke-17"
d="M70.9651,143.4831 L119.7981,143.4831"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-18"
d="M70.9651,154.4897 L119.7981,154.4897"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-19"
d="M70.9651,170.4993 L119.2981,170.4993"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-20"
d="M70.9651,180.5053 L118.9651,180.5053"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-21"
d="M70.9651,200.5173 L118.9651,200.5173"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-22"
d="M70.9651,210.5233 L118.2981,210.5233"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<polygon
id="Stroke-23"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)"
points="78.215 238.15 113.215 238.15 113.215 220.65 78.215 220.65" />
<polygon
id="Stroke-24"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)"
points="248.808 242.15 296.808 242.15 296.808 152.15 248.808 152.15" />
<path
id="Stroke-25"
d="M258.3077,164.9831 L287.3077,164.9831"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-26"
d="M258.3077,176.9903 L287.3077,176.9903"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-27"
d="M258.3077,188.9975 L287.3077,188.9975"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-28"
d="M258.3077,201.0047 L287.3077,201.0047"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<polygon
id="Stroke-29"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)"
points="267.308 241.15 278.308 241.15 278.308 220.65 267.308 220.65" />
<polygon
id="Stroke-30"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)"
points="255.308 151.65 290.308 151.65 290.308 121.65 255.308 121.65" />
<path
id="Stroke-31"
d="M272.8077,104.6497 L272.8077,120.1497"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-32"
d="M263.5577,136.9831 L282.0577,136.9831"
stroke="#D3E5EF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-33"
d="M315.5756,224.8038 C315.5756,230.5228 310.4566,235.1588 310.4566,235.1588 C310.4566,235.1588 305.3366,230.5228 305.3366,224.8038 C305.3366,219.0848 307.6286,214.4488 310.4566,214.4488 C313.2836,214.4488 315.5756,219.0848 315.5756,224.8038 Z"
stroke="#DEF1FF"
stroke-width="2"
mask="url(#mask-2)" />
<path
id="Stroke-34"
d="M310.4561,234.6497 L310.4561,243.7817"
stroke="#DEF1FF"
stroke-width="2"
mask="url(#mask-2)" />
<path
id="Stroke-35"
d="M330.5846,223.4705 C330.5846,229.9255 325.4656,235.1595 325.4656,235.1595 C325.4656,235.1595 320.3456,229.9255 320.3456,223.4705 C320.3456,217.0155 322.6376,211.7815 325.4656,211.7815 C328.2926,211.7815 330.5846,217.0155 330.5846,223.4705 Z"
stroke="#DEF1FF"
stroke-width="2"
mask="url(#mask-2)" />
<path
id="Stroke-36"
d="M325.4651,234.6497 L325.4651,243.7817"
stroke="#DEF1FF"
stroke-width="2"
mask="url(#mask-2)" />
<path
id="Fill-37"
d="M57.0846,223.9216 C57.0846,228.7616 53.5456,232.6846 53.5456,232.6846 C53.5456,232.6846 50.0056,228.7616 50.0056,223.9216 C50.0056,219.0816 51.5906,215.1586 53.5456,215.1586 C55.4996,215.1586 57.0846,219.0816 57.0846,223.9216"
fill="#FFFFFF"
mask="url(#mask-2)" />
<path
id="Stroke-38"
d="M57.0846,223.9216 C57.0846,228.7616 53.5456,232.6846 53.5456,232.6846 C53.5456,232.6846 50.0056,228.7616 50.0056,223.9216 C50.0056,219.0816 51.5906,215.1586 53.5456,215.1586 C55.4996,215.1586 57.0846,219.0816 57.0846,223.9216 Z"
stroke="#DEF1FF"
stroke-width="2"
mask="url(#mask-2)" />
<path
id="Stroke-39"
d="M53.5452,232.3031 L53.5452,239.1501"
stroke="#DEF1FF"
stroke-width="2"
mask="url(#mask-2)" />
<path
id="Fill-40"
d="M75.6844,217.1497 C75.6844,223.7307 70.4654,229.0657 70.4654,229.0657 C70.4654,229.0657 65.2454,223.7307 65.2454,217.1497 C65.2454,210.5687 67.5824,205.2337 70.4654,205.2337 C73.3474,205.2337 75.6844,210.5687 75.6844,217.1497"
fill="#FFFFFF"
mask="url(#mask-2)" />
<path
id="Stroke-41"
d="M75.6844,217.1497 C75.6844,223.7307 70.4654,229.0657 70.4654,229.0657 C70.4654,229.0657 65.2454,223.7307 65.2454,217.1497 C65.2454,210.5687 67.5824,205.2337 70.4654,205.2337 C73.3474,205.2337 75.6844,210.5687 75.6844,217.1497 Z"
stroke="#DEF1FF"
stroke-width="2"
mask="url(#mask-2)" />
<path
id="Stroke-42"
d="M70.4651,228.5469 L70.4651,237.8569"
stroke="#DEF1FF"
stroke-width="2"
mask="url(#mask-2)" />
<g id="Group-45" mask="url(#mask-2)">
<g transform="translate(268.000000, 243.317000)">
<path
id="Fill-43"
d="M0.9651,0 L84.9651,0"
stroke="none"
fill="#FFFFFF"
fill-rule="evenodd" />
<path
id="Stroke-44"
d="M0.9651,0 L84.9651,0"
stroke="#D3E5EF"
stroke-width="2"
fill="none"
stroke-linecap="round"
stroke-linejoin="round" />
</g>
</g>
<polygon
id="Stroke-46"
stroke="#DEF1FF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)"
points="178.465 239.9 248.465 239.9 248.465 184.15 178.465 184.15" />
<path
id="Stroke-47"
d="M187.2151,196.7673 L235.2151,196.7673"
stroke="#DEF1FF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Stroke-48"
d="M187.2151,206.7733 L234.5481,206.7733"
stroke="#DEF1FF"
stroke-width="3"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<path
id="Fill-49"
d="M268.9651,241.8997 C268.9651,244.7067 265.6821,246.9827 261.6321,246.9827 L184.2981,246.9827 C180.2481,246.9827 176.9651,244.7067 176.9651,241.8997 C176.9651,239.0927 180.2481,236.8167 184.2981,236.8167 L261.6321,236.8167 C265.6821,236.8167 268.9651,239.0927 268.9651,241.8997"
fill="#FFFFFF"
mask="url(#mask-2)" />
<path
id="Stroke-50"
d="M268.9651,241.8997 C268.9651,244.7067 265.6821,246.9827 261.6321,246.9827 L184.2981,246.9827 C180.2481,246.9827 176.9651,244.7067 176.9651,241.8997 C176.9651,239.0927 180.2481,236.8167 184.2981,236.8167 L261.6321,236.8167 C265.6821,236.8167 268.9651,239.0927 268.9651,241.8997 Z"
stroke="#4A84BD"
stroke-width="3"
mask="url(#mask-2)" />
<path
id="Fill-51"
d="M262.2985,228.8166 C262.2985,207.4616 244.9865,190.1496 223.6315,190.1496 C202.2765,190.1496 184.9655,207.4616 184.9655,228.8166 C184.9655,231.5596 185.2555,234.2346 185.7985,236.8166 L261.4655,236.8166 C262.0085,234.2346 262.2985,231.5596 262.2985,228.8166"
fill="#FFFFFF"
mask="url(#mask-2)" />
<path
id="Stroke-52"
d="M262.2985,228.8166 C262.2985,207.4616 244.9865,190.1496 223.6315,190.1496 C202.2765,190.1496 184.9655,207.4616 184.9655,228.8166 C184.9655,231.5596 185.2555,234.2346 185.7985,236.8166 L261.4655,236.8166 C262.0085,234.2346 262.2985,231.5596 262.2985,228.8166 Z"
stroke="#4A84BD"
stroke-width="3"
mask="url(#mask-2)" />
<path
id="Stroke-53"
d="M236.5668,203.9831 C229.1408,196.5571 217.1228,196.5571 209.6968,203.9831"
stroke="#4A84BD"
stroke-width="6"
stroke-linecap="round"
stroke-linejoin="round"
mask="url(#mask-2)" />
<polygon
id="Fill-54"
fill="#FFFFFF"
mask="url(#mask-2)"
points="220.298 199.483 226.298 199.483 226.298 182.15 220.298 182.15" />
<polygon
id="Stroke-55"
stroke="#4A84BD"
stroke-width="3"
mask="url(#mask-2)"
points="220.298 199.483 226.298 199.483 226.298 182.15 220.298 182.15" />
<g id="Group-58" mask="url(#mask-2)">
<g transform="translate(85.000000, 252.317000)">
<path
id="Fill-56"
d="M0.9651,0.5 L84.9651,0.5"
stroke="none"
fill="#FFFFFF"
fill-rule="evenodd" />
<path
id="Stroke-57"
d="M0.9651,0.5 L84.9651,0.5"
stroke="#D3E5EF"
stroke-width="2"
fill="none"
stroke-linecap="round"
stroke-linejoin="round" />
</g>
</g>
<g id="Group-61" mask="url(#mask-2)">
<g transform="translate(223.000000, 260.317000)">
<path
id="Fill-59"
d="M0.9651,0 L71.9651,0"
stroke="none"
fill="#FFFFFF"
fill-rule="evenodd" />
<path
id="Stroke-60"
d="M0.9651,0 L71.9651,0"
stroke="#D3E5EF"
stroke-width="2"
fill="none"
stroke-linecap="round"
stroke-linejoin="round" />
</g>
</g>
<path
id="Fill-62"
d="M216.6318,192.9238 C216.6318,192.9238 186.2988,196.0658 185.7988,235.3398 L195.9648,235.3398 C195.9648,235.3398 191.2988,213.0318 216.6318,192.9238"
fill="#D8E6EF"
mask="url(#mask-2)" />
<g id="Group-65" mask="url(#mask-2)">
<g transform="translate(341.000000, 253.317000)">
<path
id="Fill-63"
d="M0.9651,0 L37.9651,0"
stroke="none"
fill="#FFFFFF"
fill-rule="evenodd" />
<path
id="Stroke-64"
d="M0.9651,0 L37.9651,0"
stroke="#D3E5EF"
stroke-width="2"
fill="none"
stroke-linecap="round"
stroke-linejoin="round" />
</g>
</g>

<path
id="Fill-66"
d="M88.9982,36.2308 C84.7112,39.8318 82.0782,44.8838 81.5852,50.4538 C81.4712,51.7448 82.1462,52.9758 83.2962,53.5718 C84.4452,54.1678 85.8432,54.0128 86.8372,53.1778 C87.4902,52.6308 87.8982,51.8478 87.9722,50.9998 C88.3142,47.1348 90.1402,43.6308 93.1152,41.1318 C96.0902,38.6328 99.8572,37.4388 103.7232,37.7698 C104.5702,37.8418 105.4122,37.5748 106.0642,37.0278 C106.7152,36.4808 107.1232,35.6978 107.1992,34.8508 C107.2732,34.0048 107.0092,33.1638 106.4632,32.5128 C105.9172,31.8628 105.1342,31.4568 104.2882,31.3848 C98.7162,30.9078 93.2862,32.6288 88.9982,36.2308"
fill="#679BED"
mask="url(#mask-2)"
opacity="0">
<animate
id="sign1Show"
attributeName="opacity"
from="0"
to="1"
begin="left.end"
dur=".6s"
fill="freeze" />
<animate
id="sign1Hide"
attributeName="opacity"
from="1"
to="0"
begin="sign3Show.end + .1s"
dur=".6s"
fill="freeze" />
</path>
<path
id="Fill-67"
d="M79.0403,24.3742 C71.5763,30.6432 66.9943,39.4352 66.1363,49.1312 C66.0343,50.2712 66.5503,51.3782 67.4883,52.0332 C68.4263,52.6882 69.6433,52.7922 70.6823,52.3062 C71.7203,51.8212 72.4223,50.8192 72.5233,49.6782 C73.2303,41.6882 77.0063,34.4422 83.1573,29.2762 C89.3083,24.1092 97.0963,21.6412 105.0883,22.3252 C105.9363,22.3982 106.7783,22.1322 107.4293,21.5832 C108.4233,20.7482 108.8183,19.3982 108.4293,18.1632 C108.0413,16.9272 106.9453,16.0502 105.6533,15.9392 C95.9553,15.1102 86.5043,18.1052 79.0403,24.3742"
fill="#206EE0"
mask="url(#mask-2)"
opacity="0">
<animate
id="sign2Show"
attributeName="opacity"
from="0"
to="1"
begin="sign1Show.end"
dur=".6s"
fill="freeze" />
<animate
id="sign2Hide"
attributeName="opacity"
from="1"
to="0"
begin="sign1Hide.end"
dur=".6s"
fill="freeze" />
</path>
<path
id="Fill-68"
d="M107.0462,0.1927 C78.3412,-2.2633 52.9222,19.0867 50.3852,47.7847 C50.2452,49.5387 51.5452,51.0737 53.2992,51.2247 C55.0522,51.3747 56.6032,50.0827 56.7722,48.3307 C58.9992,23.1537 81.2982,4.4237 106.4822,6.5777 C107.3292,6.6507 108.1712,6.3837 108.8222,5.8357 C109.8162,5.0007 110.2112,3.6507 109.8222,2.4157 C109.4332,1.1807 108.3382,0.3027 107.0462,0.1927"
fill="#0D65CE"
mask="url(#mask-2)"
opacity="0">
<animate
id="sign3Show"
attributeName="opacity"
from="0"
to="1"
begin="sign2Show.end"
dur=".6s"
fill="freeze" />
<animate
id="sign3Hide"
attributeName="opacity"
from="1"
to="0"
begin="sign2Hide.end"
dur=".6s"
fill="freeze" />
</path>
<g>
<polygon
id="Fill-69"
fill="#FFFFFF"
mask="url(#mask-2)"
points="196.8614 151.2132 210.1944 164.5462 217.5284 157.2132 204.1944 142.5462" />
<polygon
id="Stroke-70"
stroke="#4A84BD"
stroke-width="3"
mask="url(#mask-2)"
points="196.8614 151.2132 210.1944 164.5462 217.5284 157.2132 204.1944 142.5462" />
<path
id="Fill-71"
d="M211.0818,41.9295 C209.5368,40.4175 207.4828,38.9545 205.8188,37.6445 C214.2278,51.7445 202.2138,84.9305 173.3798,115.6075 C147.0548,143.6155 117.3898,159.3355 102.3698,154.3605 C102.8778,154.8955 103.3768,155.4365 103.9068,155.9555 C130.6698,182.1515 176.3568,177.8615 205.9528,146.3735 C235.5478,114.8855 237.8448,68.1245 211.0818,41.9295"
fill="#FFFFFF"
mask="url(#mask-2)" />
<path
id="Stroke-72"
d="M211.0818,41.9295 C209.5368,40.4175 207.4828,38.9545 205.8188,37.6445 C214.2278,51.7445 202.2138,84.9305 173.3798,115.6075 C147.0548,143.6155 117.3898,159.3355 102.3698,154.3605 C102.8778,154.8955 103.3768,155.4365 103.9068,155.9555 C130.6698,182.1515 176.3568,177.8615 205.9528,146.3735 C235.5478,114.8855 237.8448,68.1245 211.0818,41.9295 Z"
stroke="#4A84BD"
stroke-width="3"
mask="url(#mask-2)" />
<path
id="Fill-73"
d="M209.5541,41.4111 C221.8521,53.2071 208.2391,87.6111 178.2931,118.8311 C148.3481,150.0501 114.1031,165.7971 101.8051,154.0011 C89.5071,142.2051 103.8141,107.3341 133.7591,76.1141 C163.7041,44.8951 197.2561,29.6151 209.5541,41.4111"
fill="#FFFFFF"
mask="url(#mask-2)" />
<path
id="Stroke-74"
d="M209.5541,41.4111 C221.8521,53.2071 208.2391,87.6111 178.2931,118.8311 C148.3481,150.0501 114.1031,165.7971 101.8051,154.0011 C89.5071,142.2051 103.8141,107.3341 133.7591,76.1141 C163.7041,44.8951 197.2561,29.6151 209.5541,41.4111 Z"
stroke="#4A84BD"
stroke-width="3"
mask="url(#mask-2)" />
<path
id="Fill-75"
d="M204.0287,35.6923 C216.3267,47.4883 202.0207,82.3593 172.0747,113.5793 C142.1297,144.7983 107.8847,160.5453 95.5867,148.7493 C83.2887,136.9533 97.5957,102.0823 127.5407,70.8623 C157.4857,39.6433 191.7307,23.8963 204.0287,35.6923"
fill="#95CCF9"
mask="url(#mask-2)" />
<path
id="Stroke-76"
d="M204.0287,35.6923 C216.3267,47.4883 202.0207,82.3593 172.0747,113.5793 C142.1297,144.7983 107.8847,160.5453 95.5867,148.7493 C83.2887,136.9533 97.5957,102.0823 127.5407,70.8623 C157.4857,39.6433 191.7307,23.8963 204.0287,35.6923 Z"
stroke="#4A84BD"
stroke-width="4"
mask="url(#mask-2)" />
<path
id="Stroke-77"
d="M169.2984,115.4831 L117.5284,63.2131"
stroke="#4A84BD"
stroke-width="4"
mask="url(#mask-2)" />
<path
id="Fill-78"
d="M119.528,55.7132 C119.528,60.9602 115.275,65.2132 110.028,65.2132 C104.781,65.2132 100.528,60.9602 100.528,55.7132 C100.528,50.4662 104.781,46.2132 110.028,46.2132 C115.275,46.2132 119.528,50.4662 119.528,55.7132"
fill="#7BB5EF"
mask="url(#mask-2)" />
<path
id="Stroke-79"
d="M119.528,55.7132 C119.528,60.9602 115.275,65.2132 110.028,65.2132 C104.781,65.2132 100.528,60.9602 100.528,55.7132 C100.528,50.4662 104.781,46.2132 110.028,46.2132 C115.275,46.2132 119.528,50.4662 119.528,55.7132 Z"
stroke="#4A84BD"
stroke-width="4"
mask="url(#mask-2)" />
<path
id="Fill-80"
d="M236.528,169.2132 C236.528,177.3132 229.962,183.8802 221.861,183.8802 C213.761,183.8802 207.195,177.3132 207.195,169.2132 C207.195,161.1132 213.761,154.5462 221.861,154.5462 C229.962,154.5462 236.528,161.1132 236.528,169.2132"
fill="#8FC9F9"
mask="url(#mask-2)" />
<path
id="Stroke-81"
d="M236.528,169.2132 C236.528,177.3132 229.962,183.8802 221.861,183.8802 C213.761,183.8802 207.195,177.3132 207.195,169.2132 C207.195,161.1132 213.761,154.5462 221.861,154.5462 C229.962,154.5462 236.528,161.1132 236.528,169.2132 Z"
stroke="#4A84BD"
stroke-width="3"
mask="url(#mask-2)" />
<path
id="Fill-82"
d="M110.6918,159.3763 C113.2418,160.8573 118.5708,160.1673 125.5318,157.7623 C132.1368,161.7093 140.3908,164.2433 151.7418,165.2903 C164.2528,166.4443 176.1058,164.1293 185.9058,159.2863 C174.8698,167.8803 159.3318,172.5243 142.6208,170.9833 C127.7478,169.6113 118.1808,165.6953 110.6918,159.3763"
fill="#D8E6EF"
mask="url(#mask-2)" />
<animateTransform
id="left"
attributeName="transform"
begin="0;right.end"
dur="2s"
type="rotate"
from="90 222 171"
to="0222 171" />
<animateTransform
id="right"
attributeName="transform"
begin="sign3Hide.end"
dur="2s"
type="rotate"
from="0 222 171"
to="90222 171" />
</g>
</g>
</g>
</ux-svg-symbol-item>
</ux-svg-symbol>
</div>
</template>

```

## Icon的图标集合
:::info primary

只要你安装了 @ux-up/icons-vue，**就可以在任意版本里使用 SVG 图标**。

**您可以点击图标复制代码。**

:::

[Icon的图标集合](http://10.18.96.24:8000/ux-up/zh-CN/component/icon.html#%E5%9B%BE%E6%A0%87%E9%9B%86%E5%90%88)

## Icon的图标集合(加强版)
:::info primary

只要你安装了 @ux-up/icons-vue-plus，**就可以在任意版本里使用 SVG 图标**。

**您可以点击图标复制代码。**

:::

<IconListPlus />
