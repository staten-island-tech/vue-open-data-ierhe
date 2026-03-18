import { createRouter, createWebHistory } from 'vue-router' 
import MainFile from '@/views/MainFile.vue'
import ChartsPage from '@/views/ChartsPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'Main',
      component: MainFile,
    },
    {
      path: '/charts',
      name: 'Charts',
      component: ChartsPage,
    }
  ],
})

export default router
