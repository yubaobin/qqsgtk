# Tour 漫游式引导
用于分步引导用户了解产品功能的气泡组件。 用来引导用户并介绍产品。

## Tour的基础用法
最简单的用法。

```vue
<template>
    <div>
        <ux-button type="primary" @click="open = true">开始漫游</ux-button>

        <ux-divider />

        <ux-space>
            <ux-button ref="ref1">上传</ux-button>
            <ux-button ref="ref2" type="primary">保存</ux-button>
            <ux-button ref="ref3" :icon="MoreFilled" />
        </ux-space>

        <ux-tour v-model="open">
            <ux-tour-step :target="ref1.$el" title="上传文件">
                <img :src="url" alt="tour.png" />
                <div>这里可以上传文件。</div>
            </ux-tour-step>
            <ux-tour-step :target="ref2.$el" title="保存信息" description="这里保存信息" />
            <ux-tour-step :target="ref3.$el" title="其他" description="点击可查看更多操作" />
        </ux-tour>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MoreFilled } from '@ux-up/icons-vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const ref1 = ref()
const ref2 = ref()
const ref3 = ref()

const open = ref(false)

const url = `${props.baseUrl}images/demo/demo1.png`
</script>

```

## Tour的非模态
使用 `:mask="false"` 可以将引导变为非模态， 同时为了强调引导本身，建议与 `type="primary"` 组合使用。

```vue
<template>
    <div>
        <ux-button type="primary" @click="open = true">开始漫游</ux-button>

        <ux-divider />

        <ux-space>
            <ux-button ref="ref1">Upload</ux-button>
            <ux-button ref="ref2" type="primary">保存</ux-button>
            <ux-button ref="ref3" :icon="MoreFilled" />
        </ux-space>

        <ux-tour v-model="open" type="primary" :mask="false">
            <ux-tour-step :target="ref1.$el" title="上传文件">
                <img :src="url" alt="tour.png" />
                <div>这里可以上传文件。</div>
            </ux-tour-step>
            <ux-tour-step :target="ref2.$el" title="保存信息" description="这里保存信息" />
            <ux-tour-step :target="ref3.$el" title="其他" description="点击可查看更多操作" />
        </ux-tour>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MoreFilled } from '@ux-up/icons-vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const ref1 = ref()
const ref2 = ref()
const ref3 = ref()

const open = ref(false)

const url = `${props.baseUrl}images/demo/demo1.png`
</script>

```

## Tour的位置
改变引导相对于目标的位置，共有 12 种位置可供选择。 当 `target` 为空时引导将会展示在正中央。

```vue
<template>
    <div>
        <ux-button ref="btnRef" type="primary" @click="open = true">开始漫游</ux-button>

        <ux-tour v-model="open">
            <ux-tour-step title="Center" description="在屏幕中间展示。" />
            <ux-tour-step title="Right" description="在元素右边展示。" placement="right" :target="btnRef.$el" />
            <ux-tour-step title="Top" description="在元素顶部展示。" placement="top" :target="btnRef.$el" />
        </ux-tour>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const btnRef = ref()

const open = ref(false)
</script>

```

## Tour的自定义遮罩样式
自定义遮罩样式。

```vue
<template>
    <div>
        <ux-button type="primary" @click="open = true">开始漫游</ux-button>

        <ux-divider />

        <ux-space>
            <ux-button ref="ref1">上传</ux-button>
            <ux-button ref="ref2" type="primary">保存</ux-button>
            <ux-button ref="ref3" :icon="MoreFilled" />
        </ux-space>

        <ux-tour
            v-model="open"
            :mask="{
                style: {
                    boxShadow: 'inset 0 0 15px #333'
                },
                color: 'rgba(244, 194, 194, .4)'
            }">
            <ux-tour-step :target="ref1.$el" title="上传文件">
                <img :src="url" alt="tour.png" />
                <div>这里可以上传文件。</div>
            </ux-tour-step>
            <ux-tour-step
                :target="ref2.$el"
                title="保存信息"
                description="这里保存信息"
                :mask="{
                    style: {
                        boxShadow: 'inset 0 0 15px #fff'
                    },
                    color: 'rgba(255, 215, 217, .4)'
                }" />
            <ux-tour-step :target="ref3.$el" title="其他" description="点击可查看更多操作" :mask="false" />
        </ux-tour>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MoreFilled } from '@ux-up/icons-vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const ref1 = ref()
const ref2 = ref()
const ref3 = ref()

const open = ref(false)

const url = `${props.baseUrl}images/demo/demo1.png`
</script>

```

## Tour的自定义指示器
自定义指示器。

```vue
<template>
    <div>
        <ux-button type="primary" @click="open = true">开始漫游</ux-button>

        <ux-divider />

        <ux-space>
            <ux-button ref="ref1">上传</ux-button>
            <ux-button ref="ref2" type="primary">保存</ux-button>
            <ux-button ref="ref3" :icon="MoreFilled" />
        </ux-space>

        <ux-tour v-model="open">
            <ux-tour-step :target="ref1.$el" title="上传文件" description="这里可以上传文件。" />
            <ux-tour-step :target="ref2.$el" title="保存信息" description="这里保存信息" />
            <ux-tour-step :target="ref3.$el" title="其他" description="点击可查看更多操作" />
            <template #indicators="{ current, total }">
                <span>{{ current + 1 }} / {{ total }}</span>
            </template>
        </ux-tour>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MoreFilled } from '@ux-up/icons-vue'

const ref1 = ref()
const ref2 = ref()
const ref3 = ref()

const open = ref(false)
</script>

```

## Tour的目标
可以传入目标的各种类型的参数。 

```vue
<template>
    <div>
        <ux-button type="primary" @click="open = true">开始漫游</ux-button>

        <ux-divider />

        <ux-space>
            <ux-button id="btn1">上传</ux-button>
            <ux-button id="btn2" type="primary">保存</ux-button>
            <ux-button ref="btnRef" :icon="MoreFilled" />
        </ux-space>

        <ux-tour v-model="open">
            <ux-tour-step target="#btn1" title="上传文件" description="这里可以上传文件。" />
            <ux-tour-step :target="el" title="保存信息" description="这里保存信息" />
            <ux-tour-step :target="btnRef.$el" title="其他" description="点击可查看更多操作" />
        </ux-tour>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { MoreFilled } from '@ux-up/icons-vue'

const el = () => document.querySelector('#btn2')
const btnRef = ref()

const open = ref(false)
</script>

```

