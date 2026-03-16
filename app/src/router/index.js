import { createRouter, createWebHistory } from 'vue-router' 
import MainFile from '@/views/MainFile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/Main/:id',
      name:'Main',
      component: MainFile,
    },
  ],
})

export default router
