# Descriptions 描述列表
列表形式展示多个字段。

## Descriptions的基础用法

```vue
<template>
    <ux-descriptions title="用户信息">
        <ux-descriptions-item label="用户名">ux-ui</ux-descriptions-item>
        <ux-descriptions-item label="手机号">18100000000</ux-descriptions-item>
        <ux-descriptions-item label="居住地">广州市</ux-descriptions-item>
        <ux-descriptions-item label="备注">
            <ux-tag size="small">学校</ux-tag>
        </ux-descriptions-item>
        <ux-descriptions-item label="联系地址">广东省广州市10000号</ux-descriptions-item>
    </ux-descriptions>
</template>

```

## Descriptions的不同尺寸

```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="size">
                <ux-radio value="large">大型</ux-radio>
                <ux-radio value="default">默认</ux-radio>
                <ux-radio value="small">小型</ux-radio>
                <ux-radio value="mini">超小</ux-radio>
            </ux-radio-group>
        </div>
        <div>
            <ux-descriptions title="带边框列表" :column="3" :size="size" border>
                <template #extra>
                    <ux-button type="primary" size="small">操作</ux-button>
                </template>
                <ux-descriptions-item>
                    <template #label>
                        <div>
                            <ux-svg-icon :style="iconStyle" icon-name="ux-icon-User" />
                            用户名
                        </div>
                    </template>
                    ux-ui
                </ux-descriptions-item>
                <ux-descriptions-item>
                    <template #label>
                        <div>
                            <ux-svg-icon :style="iconStyle" icon-name="ux-icon-Iphone" />
                            手机号
                        </div>
                    </template>
                    18100000000
                </ux-descriptions-item>
                <ux-descriptions-item>
                    <template #label>
                        <div>
                            <ux-svg-icon :style="iconStyle" icon-name="ux-icon-Location" />
                            居住地
                        </div>
                    </template>
                    广州市
                </ux-descriptions-item>
                <ux-descriptions-item>
                    <template #label>
                        <div>
                            <ux-svg-icon :style="iconStyle" icon-name="ux-icon-Tickets" />
                            备注
                        </div>
                    </template>
                    <ux-tag size="mini">学校</ux-tag>
                </ux-descriptions-item>
                <ux-descriptions-item>
                    <template #label>
                        <div>
                            <ux-svg-icon :style="iconStyle" icon-name="ux-icon-OfficeBuilding" />
                            联系地址
                        </div>
                    </template>
                    广东省广州市10000号
                </ux-descriptions-item>
            </ux-descriptions>
        </div>
        <ux-descriptions title="无边框列表" :column="3" :size="size">
            <template #extra>
                <ux-button type="primary" size="small">操作</ux-button>
            </template>
            <ux-descriptions-item label="用户名">ux-ui</ux-descriptions-item>
            <ux-descriptions-item label="手机号">18100000000</ux-descriptions-item>
            <ux-descriptions-item label="居住地">广州市</ux-descriptions-item>
            <ux-descriptions-item label="备注">
                <ux-tag size="mini">学校</ux-tag>
            </ux-descriptions-item>
            <ux-descriptions-item label="联系地址">广东省广州市10000号</ux-descriptions-item>
        </ux-descriptions>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const size = ref('default')

const iconStyle = computed(() => {
    const marginMap = {
        large: '8px',
        default: '6px',
        small: '4px',
        mini: '4px'
    }
    return {
        marginRight: marginMap[size.value] || marginMap.default
    }
})
</script>

```

## Descriptions的垂直列表

```vue
<template>
    <div>
        <div>
            <ux-radio-group v-model="size">
                <ux-radio value="large">大型</ux-radio>
                <ux-radio value="default">默认</ux-radio>
                <ux-radio value="small">小型</ux-radio>
                <ux-radio value="mini">超小</ux-radio>
            </ux-radio-group>
        </div>
        <div>
            <ux-descriptions title="带边框框垂直列表" direction="vertical" :column="4" :size="size" border>
                <ux-descriptions-item label="用户名">ux-ui</ux-descriptions-item>
                <ux-descriptions-item label="手机号">18100000000</ux-descriptions-item>
                <ux-descriptions-item label="居住地" :span="2">广州市</ux-descriptions-item>
                <ux-descriptions-item label="备注">
                    <ux-tag size="small">学校</ux-tag>
                </ux-descriptions-item>
                <ux-descriptions-item label="Address">广东省广州市10000号</ux-descriptions-item>
            </ux-descriptions>
        </div>
        <div>
            <ux-descriptions title="无边框垂直列表" :column="4" :size="size" direction="vertical">
                <ux-descriptions-item label="用户名">ux-ui</ux-descriptions-item>
                <ux-descriptions-item label="手机号">18100000000</ux-descriptions-item>
                <ux-descriptions-item label="居住地" :span="2">广州市</ux-descriptions-item>
                <ux-descriptions-item label="备注">
                    <ux-tag size="small">学校</ux-tag>
                </ux-descriptions-item>
                <ux-descriptions-item label="Address">广东省广州市10000号</ux-descriptions-item>
            </ux-descriptions>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const size = ref('default')
</script>
```

## Descriptions的单元格跨行

```vue
<template>
    <div>
        <div>
            <ux-descriptions title="带边框列表" border>
                <ux-descriptions-item :rowspan="2" :width="140" label="Photo" align="center">
                    <ux-image :src="demo1" />
                </ux-descriptions-item>
                <ux-descriptions-item label="用户名">ux-ui</ux-descriptions-item>
                <ux-descriptions-item label="手机号">18100000000</ux-descriptions-item>
                <ux-descriptions-item label="居住地">广州市</ux-descriptions-item>
                <ux-descriptions-item label="备注">
                    <ux-tag size="small">学校</ux-tag>
                </ux-descriptions-item>
                <ux-descriptions-item label="Address">广东省广州市10000号</ux-descriptions-item>
            </ux-descriptions>
        </div>

        <ux-descriptions title="带边框垂直列表" direction="vertical" border>
            <ux-descriptions-item :rowspan="2" :width="140" label="Photo" align="center">
                <ux-image :src="demo2" />
            </ux-descriptions-item>
            <ux-descriptions-item label="用户名">ux-ui</ux-descriptions-item>
            <ux-descriptions-item label="手机号">18100000000</ux-descriptions-item>
            <ux-descriptions-item label="居住地">广州市</ux-descriptions-item>
            <ux-descriptions-item label="备注">
                <ux-tag size="small">学校</ux-tag>
            </ux-descriptions-item>
            <ux-descriptions-item label="Address">广东省广州市10000号</ux-descriptions-item>
        </ux-descriptions>
    </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const demo1 = ref(`${props.baseUrl}images/demo/demo1.png`)
const demo2 = ref(`${props.baseUrl}images/demo/demo2.png`)
</script>

```

## Descriptions的自定义样式

```vue
<template>
    <ux-descriptions title="自定义样式列表" :column="3" border>
        <ux-descriptions-item
            label="用户名"
            label-align="right"
            align="center"
            label-class-name="my-label"
            class-name="my-content"
            width="150px">
            ux-ui
        </ux-descriptions-item>
        <ux-descriptions-item label="手机号" label-align="right" align="center"> 18100000000 </ux-descriptions-item>
        <ux-descriptions-item label="居住地" label-align="right" align="center">广州市</ux-descriptions-item>
        <ux-descriptions-item label="备注" label-align="right" align="center">
            <ux-tag size="small">学校</ux-tag>
        </ux-descriptions-item>
        <ux-descriptions-item label="Address" label-align="right" align="center">
            广东省广州市10000号
        </ux-descriptions-item>
    </ux-descriptions>
</template>
```

