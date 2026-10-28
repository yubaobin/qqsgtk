import { createRouter, createWebHashHistory } from 'vue-router'
import SearchPage from '../pages/SearchPage.vue'
import AdminPage from '../pages/AdminPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'search', component: SearchPage },
    { path: '/admin', name: 'admin', component: AdminPage },
  ],
})

export default router
