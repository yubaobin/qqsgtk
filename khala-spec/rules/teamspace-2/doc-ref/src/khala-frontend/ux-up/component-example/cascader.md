# Cascader 级联选择器
当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

## Cascader的基础用法
有两种触发子菜单的方式

 只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。 通过 `props.expandTrigger` 属性控制子节点的展开方式。
```vue
<template>
    <div>
        <div>
            <div>默认 click 触发子菜单</div>
            <ux-cascader v-model="value" :options="options" @change="handleChange" />
        </div>
        <div>
            <div>hover 触发子菜单</div>
            <ux-cascader v-model="value" :options="options" :props="props" @change="handleChange" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])

const props = {
    expandTrigger: 'hover'
}

const handleChange = (value) => {
    console.log(value)
}

const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的有禁用选项
通过在数据源中设置 `disabled` 字段来声明该选项是禁用的。

 `options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。 在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props.disabled`属性来指定（详见下方 API 表格）。 当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。
```vue
<template>
    <ux-cascader :options="options" />
</template>

<script setup>
const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的可清空
通过 `clearable` 设置输入框可清空

```vue
<template>
    <ux-cascader :options="options" clearable />
</template>

<script setup>
const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的自定义清除图标 ^(1.1.4)
你可以通过 `clear-icon` 属性自定义清除图标

```vue
<template>
    <ux-cascader :options="options" clearable :clear-icon="CloseBold" placeholder="自定义清除按钮" />
</template>

<script setup>
import { CloseBold } from '@ux-up/icons-vue'

const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            }
        ]
    }
]
</script>

```

## Cascader的仅显示最后一级
可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

 属性`show-all-levels`定义了是否显示完整的路径， 将其赋值为 `false` 则仅显示最后一级。
```vue
<template>
    <ux-cascader :options="options" :show-all-levels="false" />
</template>

<script setup>
const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的多选
在标签中添加 `:props="props"` 并设置 `props = { multiple: true }` 来开启多选模式。

推荐:

```vue
<template>
  <ux-cascader :props="props" />
</template>

<script setup>
const props = { multiple: true }
</script>
```

不推荐:

```vue
<template>
  <!--  Object literal binging here is invalid syntax for cascader  -->
  <ux-cascader :props="{ multiple: true }" />
</template>
```

 使用多选时，所有选中的标签将默认显示。 您可以设置 `collapse-tags = true` 将选中的标签折叠。 您可以设置 `max-collapse-tags` 来显示最大tag数量，默认1。 您可以使用 `collapse-tags-tooltip` 属性来启用鼠标悬停折叠文字以显示具体所选值的行为。
```vue
<template>
    <div>
        <div>
            <div>
                <div>默认显示所有Tag</div>
                <ux-cascader :options="options" :props="props" clearable />
            </div>
            <div>
                <div>折叠展示Tag</div>
                <ux-cascader :options="options" :props="props" collapse-tags clearable />
            </div>
        </div>
        <div>
            <div>
                <div>折叠展示Tag，tooltip展示全部</div>
                <ux-cascader :options="options" :props="props" collapse-tags collapse-tags-tooltip clearable />
            </div>
            <div>
                <div>折叠展示Tag，Max显示最大tag数量</div>
                <ux-cascader
                    :options="options"
                    :props="props"
                    collapse-tags
                    collapse-tags-tooltip
                    :max-collapse-tags="3"
                    clearable />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = { multiple: true }

const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的选择任意一级选项
在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。 启用该功能后，可让父子节点取消关联，选择任意一级选项。

 可通过 `props = { checkStrictly: true }` 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。
```vue
<template>
    <div>
        <div>
            <div>单选选择任意一级选项</div>
            <ux-cascader :options="options" :props="props1" clearable />
        </div>
        <div>
            <div>多选选择任意一级选项</div>
            <ux-cascader :options="options" :props="props2" clearable />
        </div>
    </div>
</template>

<script setup>
const props1 = {
    checkStrictly: true
}

const props2 = {
    multiple: true,
    checkStrictly: true
}

const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的动态加载
当选中某一级时，动态加载该级下的选项。

 通过`lazy`开启动态加载，并通过`lazyload`来设置加载数据源的方法。 `lazyload`方法有两个参数，第一个参数`node`为当前点击的节点，第二个`resolve`为数据加载完成的回调(必须调用)。 为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为`leaf`，可通过`props.leaf`修改)。 否则，将以有无子节点来判断其是否为叶子节点。
```vue
<template>
    <ux-cascader :props="props" />
</template>

<script setup>
let id = 0
const props = {
    lazy: true,
    lazyLoad(node, resolve) {
        const { level } = node
        setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map((item) => ({
                value: ++id,
                label: `选项${id}`,
                leaf: level >= 2
            }))
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes)
        }, 1000)
    }
}
</script>

```

## Cascader的可搜索
可以快捷地搜索选项并选择。

 将 `filterable` 赋值为 `true` 即可打开搜索功能，默认会匹配节点的 `label` 或所有父节点的 `label` (由 `show-all-levels` 决定)中包含输入值的选项。你也可以用 `filter-method` 自定义搜索逻辑，接受一个函数，第一个参数是节点 `node` ，第二个参数是搜索关键词 `keyword` ，通过返回布尔值表示是否命中。
```vue
<template>
    <div>
        <div>
            <div>单选可搜索</div>
            <ux-cascader placeholder="试试搜索: 组件" :options="options" filterable />
        </div>
        <div>
            <div>多选可搜索</div>
            <ux-cascader placeholder="试试搜索: 组件" :options="options" :props="props" filterable />
        </div>
    </div>
</template>

<script setup>
const props = {
    multiple: true
}

const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的自定义节点内容
可以自定义备选项的节点内容

 可以通过 `scoped slot` 自定义节点的内容。 scope 中有 `node` 和 `data` 属性，分别表示当前节点的 Node 对象和当前节点的数据。
```vue
<template>
    <ux-cascader :options="options">
        <template #default="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
    </ux-cascader>
</template>

<script setup>
const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的自定义建议项 ^(1.1.4)
你可以通过 `suggestion-item` 插槽自定义建议项。 你可以在作用域中访问 `item`，它代表建议项。

```vue
<template>
    <ux-cascader :options="options" filterable placeholder="尝试搜索: 组件">
        <template #suggestion-item="{ item }">
            <span>🔍 {{ item.pathLabels.join(' > ') }}</span>
        </template>
    </ux-cascader>
</template>

<script setup>
const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的级联面板
级联面板 `<cascader-panel />` 是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。

 和级联选择器一样，通过 `options` 来指定选项，也可通过 `props` 来设置多选、动态加载等功能，具体详情见下方API表格。
```vue
<template>
    <ux-cascader-panel :options="options" />
</template>

<script setup>
const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的自定义标签 ^(1.1.4)
将自定义的标签插入 `ux-cascader` 的 `slot` 中即可。 `collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` 在此模式下不生效.

``
```vue
<template>
    <div>
        <div>
            <div>使用插槽可以更灵活地控制显示器</div>
            <ux-cascader :options="options" :props="props" clearable>
                <template #tag="{ data }">
                    <ux-tag
                        v-for="(item, index) in getTags(data)"
                        :key="item"
                        :color="index % 2 === 0 ? '#67C23A' : ''">
                        {{ item }}
                    </ux-tag>
                </template>
            </ux-cascader>
        </div>
        <div>
            <div>仅显示顶级标签</div>
            <ux-cascader :options="options" :props="props" clearable>
                <template #tag="{ data }">
                    <ux-tag v-for="item in getTopLevelTags(data)" :key="item">
                        {{ item }}
                    </ux-tag>
                </template>
            </ux-cascader>
        </div>
    </div>
</template>

<script setup>
const props = { multiple: true }
const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
const getTags = (data) => {
    return data.map((item) => item.text)
}
const getTopLevelTags = (data) => {
    const set = new Set()
    for (const datum of data) {
        let parent = datum.node?.parent
        while (parent && parent.level !== 1) {
            parent = parent.parent
        }
        const label = parent?.data?.label
        label && set.add(label)
    }
    return [...set]
}
</script>

```

## Cascader的已勾选项显示策略 ^(1.1.4)
控制在多选模式下已选值的显示方式。

 在多选模式下，你可以使用 `show-checked-strategy` 来控制已选值的显示方式。 默认策略为 `child`，即显示所有已选中的子节点。 `parent` 策略仅在其所有子节点都被选中时显示父节点。
```vue
<template>
    <div>
        <div>
            <div>Strategy: child (默认，显示所有选定的子节点)</div>
            <ux-cascader
                v-model="value1"
                :options="options"
                :props="props"
                show-checked-strategy="child"
                clearable
                @change="handleChange1" />
        </div>

        <div>
            <div>Strategy: parent (选择所有子节点时仅显示父节点)</div>
            <ux-cascader
                v-model="value2"
                :options="options"
                :props="props"
                show-checked-strategy="parent"
                clearable
                @change="handleChange2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const props = {
    multiple: true
}

const handleChange1 = (value) => {
    console.log('Child strategy:', value)
}

const handleChange2 = (value) => {
    console.log('Parent strategy:', value)
}

const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的自定义头部与底部 ^(1.1.4)
你可以通过插槽来自定义下拉菜单的头部和底部。

```vue
<template>
    <div>
        <div>
            <div>自定义头部内容</div>
            <ux-cascader
                v-model="value"
                popper-class="cascader-custom-header"
                :options="options"
                :props="props"
                clearable>
                <template #header>
                    <ux-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
                        全选
                    </ux-checkbox>
                </template>
            </ux-cascader>
        </div>
        <div>
            <div>自定义底部内容</div>
            <ux-cascader v-model="value" :options="options" :props="props" clearable>
                <template #footer>
                    <ux-button link size="small" @click="handleClear"> 清除 </ux-button>
                </template>
            </ux-cascader>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = { multiple: true }
const checkAll = ref(false)
const indeterminate = ref(false)
const value = ref([])
const options = ref([
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            }
        ]
    }
])

const getAllValuePaths = computed(() => {
    const result = []
    const queue = options.value.map((node) => ({
        node,
        path: [node.value]
    }))

    while (queue.length > 0) {
        const { node, path } = queue.shift()
        if (node.children?.length) {
            node.children.forEach((child) => {
                queue.push({ node: child, path: [...path, child.value] })
            })
        } else {
            result.push(path)
        }
    }
    return result
})

watch(value, (val) => {
    if (val.length === 0) {
        checkAll.value = false
        indeterminate.value = false
    } else if (val.length === getAllValuePaths.value.length) {
        checkAll.value = true
        indeterminate.value = false
    } else {
        indeterminate.value = true
    }
})

const handleCheckAll = (val) => {
    indeterminate.value = false
    value.value = val ? getAllValuePaths.value : []
}

const handleClear = () => {
    value.value = []
}
</script>

<style scoped>
.cascader-custom-header-footer {
    display: flex;
}

.cascader-custom-header-footer > div {
    flex: 1;
    text-align: center;
}

.cascader-custom-header-footer > div:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
}

.cascader-custom-header .ux-checkbox {
    display: flex;
    height: unset;
}
</style>

```

## Cascader的自定义标签 ^(1.1.5)
您可以自定义标签。

 将自定义的标签插入 `ux-cascader` 的 `slot` 中即可。`collapse-tags`, `collapse-tags-tooltip`, `max-collapse-tags` 在此模式下不生效.
```vue
<template>
    <div>
        <div>
            <div>使用插槽可以更灵活地控制显示器</div>
            <ux-cascader :options="options" :props="props" clearable>
                <template #tag="{ data }">
                    <ux-tag
                        v-for="(item, index) in getTags(data)"
                        :key="item"
                        :color="index % 2 === 0 ? '#67C23A' : ''">
                        {{ item }}
                    </ux-tag>
                </template>
            </ux-cascader>
        </div>
        <div>
            <div>仅显示顶级标签</div>
            <ux-cascader :options="options" :props="props" clearable>
                <template #tag="{ data }">
                    <ux-tag v-for="item in getTopLevelTags(data)" :key="item">
                        {{ item }}
                    </ux-tag>
                </template>
            </ux-cascader>
        </div>
    </div>
</template>

<script setup>
const props = { multiple: true }
const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
const getTags = (data) => {
    return data.map((item) => item.text)
}
const getTopLevelTags = (data) => {
    const set = new Set()
    for (const datum of data) {
        let parent = datum.node?.parent
        while (parent && parent.level !== 1) {
            parent = parent.parent
        }
        const label = parent?.data?.label
        label && set.add(label)
    }
    return [...set]
}
</script>

```

## Cascader的已勾选项显示策略 ^(1.1.5)
控制在多选模式下已选值的显示方式。

 在多选模式下，你可以使用 `show-checked-strategy` 来控制已选值的显示方式。 默认策略为 `child`，即显示所有已选中的子节点。 `parent` 策略仅在其所有子节点都被选中时显示父节点。
```vue
<template>
    <div>
        <div>
            <div>Strategy: child (默认，显示所有选定的子节点)</div>
            <ux-cascader
                v-model="value1"
                :options="options"
                :props="props"
                show-checked-strategy="child"
                clearable
                @change="handleChange1" />
        </div>

        <div>
            <div>Strategy: parent (选择所有子节点时仅显示父节点)</div>
            <ux-cascader
                v-model="value2"
                :options="options"
                :props="props"
                show-checked-strategy="parent"
                clearable
                @change="handleChange2" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const props = {
    multiple: true
}

const handleChange1 = (value) => {
    console.log('Child strategy:', value)
}

const handleChange2 = (value) => {
    console.log('Parent strategy:', value)
}

const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的点击选中节点 ^(1.1.5)
只使用 `multiple` 或 `checkStrictly` 属性。

你可以添加 `checkOnClickNode`，使节点本身也能被点击（不仅限于前缀图标）。 通过 `showPrefix` 来切换前缀的显示与隐藏。

:::info primary

添加 `checkOnClickLeaf` 属性可以仅勾选叶子节点（最末级子节点），该功能默认启用。

:::

```vue
<template>
    <div>
        <div>
            <ux-switch v-model="showPrefix" active-text="显示前缀" inactive-text="隐藏前缀" />
        </div>
        <div>
            <div>
                <div>checkStrictly(单选)</div>
                <ux-cascader v-model="value" :options="options" :props="props1" clearable />
            </div>
            <div>
                <div>checkStrictly(多选)</div>
                <ux-cascader
                    v-model="value2"
                    show-checked-strategy="parent"
                    :options="options"
                    :props="props2"
                    clearable />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const value = ref()
const value2 = ref()
const showPrefix = ref(true)

const props1 = computed(() => ({
    showPrefix: showPrefix.value,
    checkStrictly: true,
    checkOnClickNode: true
}))
const props2 = computed(() => ({
    showPrefix: showPrefix.value,
    multiple: true,
    checkOnClickNode: true
}))

const options = [
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            },
            {
                value: 'form',
                label: 'Form',
                children: [
                    {
                        value: 'radio',
                        label: 'Radio 单选框'
                    },
                    {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    },
                    {
                        value: 'input',
                        label: 'Input 输入框'
                    },
                    {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    },
                    {
                        value: 'select',
                        label: 'Select 选择器'
                    },
                    {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    },
                    {
                        value: 'switch',
                        label: 'Switch 开关'
                    },
                    {
                        value: 'slider',
                        label: 'Slider 滑块'
                    },
                    {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    },
                    {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    },
                    {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    },
                    {
                        value: 'upload',
                        label: 'Upload 上传'
                    },
                    {
                        value: 'rate',
                        label: 'Rate 评分'
                    },
                    {
                        value: 'form',
                        label: 'Form 表单'
                    }
                ]
            },
            {
                value: 'data',
                label: 'Data',
                children: [
                    {
                        value: 'table',
                        label: 'Table 表格'
                    },
                    {
                        value: 'tag',
                        label: 'Tag 标签'
                    },
                    {
                        value: 'progress',
                        label: 'Progress 进度条'
                    },
                    {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    },
                    {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    },
                    {
                        value: 'badge',
                        label: 'Badge 标记'
                    }
                ]
            },
            {
                value: 'notice',
                label: 'Notice',
                children: [
                    {
                        value: 'alert',
                        label: 'Alert 警告'
                    },
                    {
                        value: 'loading',
                        label: 'Loading 加载'
                    },
                    {
                        value: 'message',
                        label: 'Message 消息提示'
                    },
                    {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    },
                    {
                        value: 'notification',
                        label: 'Notification 通知'
                    }
                ]
            },
            {
                value: 'navigation',
                label: 'Navigation',
                children: [
                    {
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    },
                    {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    },
                    {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    },
                    {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    },
                    {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }
                ]
            },
            {
                value: 'others',
                label: 'Others',
                children: [
                    {
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    },
                    {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    },
                    {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    },
                    {
                        value: 'card',
                        label: 'Card 卡片'
                    },
                    {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    },
                    {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
</script>

```

## Cascader的自定义头部与底部 ^(1.1.5)
你可以通过插槽来自定义下拉菜单的头部和底部。

```vue
<template>
    <div>
        <div>
            <div>自定义头部内容</div>
            <ux-cascader
                v-model="value"
                popper-class="cascader-custom-header"
                :options="options"
                :props="props"
                clearable>
                <template #header>
                    <ux-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
                        全选
                    </ux-checkbox>
                </template>
            </ux-cascader>
        </div>
        <div>
            <div>自定义底部内容</div>
            <ux-cascader v-model="value" :options="options" :props="props" clearable>
                <template #footer>
                    <ux-button link size="small" @click="handleClear"> 清除 </ux-button>
                </template>
            </ux-cascader>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = { multiple: true }
const checkAll = ref(false)
const indeterminate = ref(false)
const value = ref([])
const options = ref([
    {
        value: 'zujian',
        label: '组件',
        children: [
            {
                value: 'basic',
                label: 'Basic',
                children: [
                    {
                        value: 'layout',
                        label: 'Layout 布局'
                    },
                    {
                        value: 'color',
                        label: 'Color 色彩'
                    },
                    {
                        value: 'typography',
                        label: 'Typography 字体'
                    },
                    {
                        value: 'icon',
                        label: 'Icon 图标'
                    },
                    {
                        value: 'button',
                        label: 'Button 按钮'
                    }
                ]
            }
        ]
    }
])

const getAllValuePaths = computed(() => {
    const result = []
    const queue = options.value.map((node) => ({
        node,
        path: [node.value]
    }))

    while (queue.length > 0) {
        const { node, path } = queue.shift()
        if (node.children?.length) {
            node.children.forEach((child) => {
                queue.push({ node: child, path: [...path, child.value] })
            })
        } else {
            result.push(path)
        }
    }
    return result
})

watch(value, (val) => {
    if (val.length === 0) {
        checkAll.value = false
        indeterminate.value = false
    } else if (val.length === getAllValuePaths.value.length) {
        checkAll.value = true
        indeterminate.value = false
    } else {
        indeterminate.value = true
    }
})

const handleCheckAll = (val) => {
    indeterminate.value = false
    value.value = val ? getAllValuePaths.value : []
}

const handleClear = () => {
    value.value = []
}
</script>

<style scoped>
.cascader-custom-header-footer {
    display: flex;
}

.cascader-custom-header-footer > div {
    flex: 1;
    text-align: center;
}

.cascader-custom-header-footer > div:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
}

.cascader-custom-header .ux-checkbox {
    display: flex;
    height: unset;
}
</style>

```

