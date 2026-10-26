# InfiniteScroll 无限滚动
滚动至底部时，加载更多数据。

## InfiniteScroll的基础用法
 在要实现滚动加载的列表上添加 `v-infinite-scroll`，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。
```vue
<template>
    <ul v-infinite-scroll="load">
        <li v-for="i in count" :key="i">{{ i }}</li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const load = () => {
    count.value += 2
}
</script>
```

## InfiniteScroll的禁用加载

```vue
<template>
    <div>
        <ul v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
            <li v-for="i in count" :key="i">{{ i }}</li>
        </ul>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const count = ref(10)
const loading = ref(false)
const noMore = computed(() => count.value >= 20)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
    loading.value = true
    setTimeout(() => {
        count.value += 2
        loading.value = false
    }, 2000)
}
</script>
```

