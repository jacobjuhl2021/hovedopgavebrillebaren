import { createRouter, createWebHistory } from 'vue-router'
import book_tid from '../views/book_tid.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Book_tid',
      component: book_tid
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/infomation',
      name: '/infomation',
      component: () => import('../views/infomation.vue')
    }
  ]
})

export default router
