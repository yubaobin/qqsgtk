<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()

// 响应式获取状态
const token = computed(() => userStore.token)
const userName = computed(() => userStore.userName)

// 调用 actions 方法
const handleLogin = async () => {
  await userStore.login({
    username: 'admin',
    password: '123456'
  })
  // 登录成功逻辑
}

// 直接修改状态（简单场景）
const updateAvatar = (avatar) => {
  userStore.userInfo.avatar = avatar
}

// 批量修改状态
const batchUpdate = () => {
  userStore.$patch({
    userInfo: { ...userStore.userInfo, name: '新名称' },
    permissions: ['admin', 'edit']
  })
}
</script>