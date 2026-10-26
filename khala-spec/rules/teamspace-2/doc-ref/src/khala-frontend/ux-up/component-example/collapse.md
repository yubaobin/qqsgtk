# Collapse 折叠面板
通过折叠面板收纳内容区域

## Collapse的基础用法
 可同时展开多个面板，面板之间不影响。
```vue
<template>
    <div>
        <ux-collapse v-model="activeNames" @change="handleChange">
            <ux-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </ux-collapse-item>
            <ux-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </ux-collapse-item>
            <ux-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </ux-collapse-item>
            <ux-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </ux-collapse-item>
        </ux-collapse>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val) => {
    console.log(val)
}
</script>

```

## Collapse的手风琴效果
 通过 `accordion` 属性来设置是否以手风琴模式显示，每次只能展开一个面板。
```vue
<template>
    <div>
        <ux-collapse v-model="activeName" accordion>
            <ux-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </ux-collapse-item>
            <ux-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </ux-collapse-item>
            <ux-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </ux-collapse-item>
            <ux-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </ux-collapse-item>
        </ux-collapse>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('1')
</script>

```

## Collapse的自定义面板标题
除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

:::info primary

从版本 ^(1.1.4) 开始， `title` 插槽提供一个 `isActive` 属性，显示当前折叠项是否活跃。

:::

```vue
<template>
    <div>
        <ux-collapse accordion>
            <ux-collapse-item name="1">
                <template #title="{ isActive }">
                    <div :class="['title-wrapper', { 'is-active': isActive }]">
                        一致性 Consistency <ux-svg-icon icon-name="ux-icon-InfoFilled" />
                    </div>
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </ux-collapse-item>
            <ux-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </ux-collapse-item>
            <ux-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </ux-collapse-item>
            <ux-collapse-item title="可控 Controllability" name="3">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </ux-collapse-item>
        </ux-collapse>
    </div>
</template>

```

## Collapse的自定义图标
除了使用 `icon` 属性外，您还可以自定义面板项目图标，从而添加自定义内容。

```vue
<template>
    <div>
        <ux-collapse v-model="activeNames" @change="handleChange">
            <ux-collapse-item title="一致性 Consistency" name="1" :icon="CaretRight">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </ux-collapse-item>
            <ux-collapse-item title="反馈 Feedback" name="2">
                <template #icon="{ isActive }">
                    <span>
                        {{ isActive ? 'Expanded' : 'Collapsed' }}
                    </span>
                </template>
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </ux-collapse-item>
            <ux-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </ux-collapse-item>
            <ux-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </ux-collapse-item>
        </ux-collapse>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { CaretRight } from '@ux-up/icons-vue'

const activeNames = ref(['1'])
const handleChange = (val) => {
    console.log(val)
}
</script>

```

## Collapse的自定义图标位置 ^(1.1.4)
使用 `expand-icon-position` 属性，您可以自定义图标位置。

```vue
<template>
    <div>
        <div>
            <span>icon 位置: </span>
            <ux-switch
                v-model="position"
                inactive-value="left"
                active-value="right"
                inactive-text="左边"
                active-text="右边" />
        </div>

        <ux-collapse :expand-icon-position="position">
            <ux-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </ux-collapse-item>
            <ux-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </ux-collapse-item>
            <ux-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </ux-collapse-item>
            <ux-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </ux-collapse-item>
        </ux-collapse>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const position = ref('left')
</script>

```

## Collapse的阻止折叠 ^(1.1.4)
设置 `before-change` 属性，若返回 `false` 或者返回 `Promise` 且被 `reject` ，则停止切换。

```vue
<template>
    <div v-loading="loading">
        <div>
            <span>before collapse 返回值: </span>
            <ux-switch
                v-model="before"
                :inactive-value="false"
                :active-value="true"
                inactive-text="false"
                active-text="true" />
        </div>

        <ux-collapse v-model="activeNames" :before-collapse="beforeCollapse">
            <ux-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </ux-collapse-item>
            <ux-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </ux-collapse-item>
            <ux-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </ux-collapse-item>
            <ux-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </ux-collapse-item>
        </ux-collapse>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const before = ref(true)
const activeNames = ref(['1'])
const loading = ref(false)

const beforeCollapse = () => {
    loading.value = true
    return new Promise((resolve) => {
        setTimeout(() => {
            loading.value = false
            return resolve(before.value)
        }, 1000)
    })
}
</script>

```

