# Mention 提及
用于在输入中提及某人或某事。

## Mention的基础用法
简单的用法。

```vue
<template>
    <ux-mention v-model="value" :options="options" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('@')

const options = ref([
    {
        label: '用户1',
        value: '用户1'
    },
    {
        label: '用户2',
        value: '用户2'
    },
    {
        label: '用户3',
        value: '用户3'
    },
    {
        label: '用户4',
        value: '用户4'
    }
])
</script>

```

## Mention的文本域
输入类型可以设置为 `textarea` 。

```vue
<template>
    <ux-mention v-model="value" type="textarea" :options="options" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const options = ref([
    {
        label: '用户1',
        value: '用户1'
    },
    {
        label: '用户2',
        value: '用户2'
    },
    {
        label: '用户3',
        value: '用户3'
    },
    {
        label: '用户4',
        value: '用户4'
    }
])
</script>

```

## Mention的自定义标签
使用 `label` 自定义标签。

```vue
<template>
    <ux-mention v-model="value" :options="options" placeholder="请输入内容">
        <template #label="{ item }">
            <div>
                <ux-avatar :size="24" :src="item.avatar" />
                <span>{{ item.value }}</span>
            </div>
        </template>
    </ux-mention>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const value = ref('')

const options = ref([
    {
        value: '用户1',
        avatar: `${props.baseUrl}images/avatar-circle.png`
    },
    {
        value: '用户2',
        avatar: `${props.baseUrl}images/avatar-rect.png`
    },
    {
        value: '用户3',
        avatar: `${props.baseUrl}images/avatar-circle.png`
    },
    {
        value: '用户4',
        avatar: `${props.baseUrl}images/avatar-rect.png`
    }
])
</script>

```

## Mention的加载远程选项
异步加载选项。

```vue
<template>
    <ux-mention
        v-model="value"
        :options="options"
        :loading="loading"
       
        placeholder="请输入内容"
        @search="handleSearch" />
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'

const value = ref('')
const loading = ref(false)
const options = ref([])

let timer
const handleSearch = (pattern) => {
    if (timer) clearTimeout(timer)

    loading.value = true
    timer = setTimeout(() => {
        options.value = ['用户1', '用户2', '用户3', '用户4'].map((item) => ({
            label: pattern + item,
            value: pattern + item
        }))
        loading.value = false
    }, 1500)
}

onBeforeUnmount(() => {
    if (timer) clearTimeout(timer)
})
</script>

```

## Mention的自定义触发字段
通过 `prefix` 属性 自定义触发字段。 默认为 `@`。

```vue
<template>
    <ux-mention
        v-model="value"
        :options="options"
        :prefix="['@', '#']"
       
        placeholder="输入 @ 展示用户列, # 展示标签列表"
        @search="handleSearch" />
</template>

<script setup>
import { ref } from 'vue'

const MOCK_DATA = {
    '@': ['用户1', '用户2', '用户3', '用户4'],
    '#': ['1.0', '2.0', '3.0']
}
const value = ref('')
const options = ref([])

const handleSearch = (_, prefix) => {
    options.value = (MOCK_DATA[prefix] || []).map((value) => ({
        value
    }))
}
</script>

```

## Mention的整体删除
将 `whole` 属性设置为 `true`，当您按下退格键时，此处的 mention 区域将作为一个整体被删除。

 设置 "check-is-whole" 属性来自定义检查逻辑。
```vue
<template>
    <ux-mention v-model="value1" whole :options="options1" placeholder="请输入内容" />
    <ux-divider />
    <ux-mention
        v-model="value2"
        :options="options2"
        :prefix="['@', '#']"
        whole
        :check-is-whole="checkIsWhole"
       
        placeholder="输入 @ 展示用户列, # 展示标签列表"
        @search="handleSearch" />
</template>

<script setup>
import { ref } from 'vue'

const MOCK_DATA = {
    '@': ['用户1', '用户2', '用户3', '用户4'],
    '#': ['1.0', '2.0', '3.0']
}
const value1 = ref('')
const value2 = ref('')
const options1 = ref(MOCK_DATA['@'].map((value) => ({ value })))
const options2 = ref([])

const handleSearch = (_, prefix) => {
    options2.value = (MOCK_DATA[prefix] || []).map((value) => ({
        value
    }))
}

const checkIsWhole = (pattern, prefix) => {
    return (MOCK_DATA[prefix] || []).includes(pattern)
}
</script>

```

## Mention的在表单里使用
与 `ux-form` 一起使用

```vue
<template>
    <ux-form ref="ruleFormRef" :model="ruleForm" :rules="rules">
        <ux-form-item label="姓名" prop="name">
            <ux-mention v-model="ruleForm.name" :options="options" placeholder="@ 展示列表" />
        </ux-form-item>
        <ux-form-item label="简介" prop="desc">
            <ux-mention v-model="ruleForm.desc" type="textarea" :options="options" placeholder="@ 展示列表" />
        </ux-form-item>
        <ux-form-item>
            <ux-button type="primary" @click="submitForm(ruleFormRef)">提交</ux-button>
            <ux-button @click="resetForm(ruleFormRef)">重置</ux-button>
        </ux-form-item>
    </ux-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { UxMessage } from 'ux-up'

const ruleFormRef = ref()
const ruleForm = reactive({
    name: '',
    desc: ''
})

const options = ref([
    {
        label: '用户1',
        value: '用户1'
    },
    {
        label: '用户2',
        value: '用户2'
    },
    {
        label: '用户3',
        value: '用户3'
    },
    {
        label: '用户4',
        value: '用户4'
    }
])

const rules = reactive({
    name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    desc: [{ required: true, message: '请输入简介', trigger: 'blur' }]
})

const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            UxMessage.success('提交成功')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>

```

:::info primary

由于这个组件是基于 `ux-input` 派生的，他们的原始属性未被更改，故不在此重复。请跳转查看[原组件的相应文档](/zh-CN/component/input#input-属性)。

:::
