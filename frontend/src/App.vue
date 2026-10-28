<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>

<template>
  <el-config-provider :locale="zhCn" class="app">
    <header class="page-header">
      <h1>问题答案搜索</h1>
      <nav class="nav">
        <RouterLink to="/" class="nav-link" active-class="active">搜索</RouterLink>
        <RouterLink to="/admin" class="nav-link" active-class="active">录入</RouterLink>
      </nav>
    </header>

    <RouterView />
  </el-config-provider>
</template>

<style scoped>
.app {
  margin: 0 auto;
  padding: 24px 16px;
  font-family: var(--ds-font-family);
  background: var(--ds-bg);
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
  color: var(--ds-text);
  margin: 0;
}

.nav {
  display: flex;
  gap: 8px;
}

.nav-link {
  padding: 6px 16px;
  border-radius: var(--ds-radius-pill);
  text-decoration: none;
  color: var(--ds-text-body);
  font-size: 14px;
  font-weight: 600;
  transition: var(--ds-transition);
}

.nav-link:hover {
  background: var(--ds-bg-secondary);
  transform: translateY(-1px);
}

.nav-link.active {
  background: var(--ds-primary);
  color: #fff;
  box-shadow: 0 3px 0 0 var(--ds-shadow-btn);
}
</style>
