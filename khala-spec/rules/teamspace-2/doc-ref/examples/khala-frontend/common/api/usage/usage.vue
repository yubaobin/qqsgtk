<template>
    {{ userInfo }}
</template>
<script setup>
import { ref } from 'vue'
import userApi from '@/api/modules/user/index.js'

let userInfo = ref({})

function getUserDetail(id) {
    userApi.getUserDetail({ id }).then((data) => {
        userInfo.value = data
    })
}
</script>