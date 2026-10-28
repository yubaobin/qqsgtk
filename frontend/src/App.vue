<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import SearchPage from './pages/SearchPage.vue'
import AdminPage from './pages/AdminPage.vue'

const route = ref(window.location.hash)

function onHashChange() {
  route.value = window.location.hash
}

onMounted(() => {
  window.addEventListener('hashchange', onHashChange)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', onHashChange)
})

const currentPage = computed(() => {
  if (route.value === '#/admin') return 'admin'
  return 'search'
})
</script>

<template>
  <div class="app">
    <header class="page-header">
      <h1>问题答案搜索</h1>
      <nav class="nav">
        <a
          href="#/"
          class="nav-link"
          :class="{ active: currentPage === 'search' }"
        >搜索</a>
        <a
          href="#/admin"
          class="nav-link"
          :class="{ active: currentPage === 'admin' }"
        >录入</a>
      </nav>
    </header>

    <SearchPage v-if="currentPage === 'search'" />
    <AdminPage v-else />
  </div>
</template>

<style scoped>
.app {
  margin: 0 auto;
  padding: 24px 16px;
  font-family: system-ui, -apple-system, sans-serif;
  background: #f5f7fa;
  min-height: 100vh;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.page-header h1 {
  font-size: 1.5em;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 6px 16px;
  border-radius: 6px;
  text-decoration: none;
  color: #606266;
  font-size: 14px;
  transition: all 0.2s;
}

.nav-link:hover {
  background: #ecf0f1;
}

.nav-link.active {
  background: #409eff;
  color: #fff;
}
</style>
