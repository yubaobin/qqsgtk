<template>
    <div>
        <ux-select v-model="approvalType" >
            <ux-option 
                v-for="item in sexOptoins"
                :key="item.value"
                :label="item.label"
                :value="item.value" />
        </ux-select>
    </div>
</template>
<script setup>
import { useDictStore } from '@/store/modules/dict'

const { getDictListMap, dictCache } = useDictStore()

// 获取字典值
onBeforeMount(() => {
    // dict_code为 sex
    getDictListMap('sex')
})

const sexOptoins = computed(() => dictCache.dict_code?.list || [])
</script>
