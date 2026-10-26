<template>
    <div>
        <ux-select v-model="approvalType" >
            <ux-option 
                v-for="item in approvalTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value" />
        </ux-select>
    </div>
</template>
<script setup>
import { approvalTypeOptions } from './dict.js'
const approvalType = ref()
</script>
