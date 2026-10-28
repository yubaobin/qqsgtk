<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="page-header">
      <h1>问题答案搜索</h1>
      <nav class="nav">
        <RouterLink to="/" class="nav-link" active-class="active">搜索</RouterLink>
        <RouterLink to="/admin" class="nav-link" active-class="active">录入</RouterLink>
      </nav>
    </header>

    <RouterView />
  </div>
</template>

<style scoped>
.app {
  margin: 0 auto;
  padding: 24px 16px;
  font-family: var(--el-font-family);
  background: #f8f8f0;
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
  font-weight: 700;
  color: #794f27;
  margin: 0;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 6px 16px;
  border-radius: 50px;
  text-decoration: none;
  color: #725d42;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-link:hover {
  background: #f0e8d8;
  transform: translateY(-1px);
}

.nav-link.active {
  background: #19c8b9;
  color: #fff;
  box-shadow: 0 3px 0 0 #bdaea0;
}
</style>
