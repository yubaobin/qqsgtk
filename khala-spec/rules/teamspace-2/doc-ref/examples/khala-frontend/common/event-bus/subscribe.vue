<script setup>
import { onMounted, onUnmounted } from 'vue'
import vueBus from '@/vue-bus'
// 监听事件（接收用户信息更新通知）
onMounted(() => {
  vueBus.$on('user-info-updated', handleUserUpdate)
})

// 组件卸载时移除监听，防止内存泄漏
onUnmounted(() => {
  vueBus.$off('user-info-updated', handleUserUpdate)
})

// 事件处理函数（必须是具名函数）
function handleUserUpdate(userInfo) {
  console.log('用户信息已更新:', userInfo)
  // 更新当前组件的用户信息
}
</script>