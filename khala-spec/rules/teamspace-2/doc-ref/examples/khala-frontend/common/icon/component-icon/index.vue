<template>
    <ux-input :prefix-icon="CloseCircleLine" :suffix-icon="AddCircleLine" />
    <ux-button :icon="AddCircleLine">添加</ux-button>
</template>
<script setup>
import { CloseCircleLine, AddCircleLine } from '@ux-up/icons-vue-plus'
</script>