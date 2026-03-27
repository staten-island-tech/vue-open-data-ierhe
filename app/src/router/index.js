import { createRouter, createWebHistory } from 'vue-router' 
import MainFile from '@/views/MainFile.vue'
import ChartsPage from '@/views/ChartsPage.vue'
import OtherPage from '@/components/OtherChart.vue'
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
    },
    {
      path: '/Other',
      name: 'other',
      component: OtherPage,
    }
  ],
})

export default router
