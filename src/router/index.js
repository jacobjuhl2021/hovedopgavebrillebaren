import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/underholdning',
      name: 'underholdning',
      component: () => import('../views/underholdning.vue')
    },
    {
      path: '/synsprofil',
      name: 'synsprofil',
      component: () => import('../views/synsprofil.vue')
    },
    {
      path: '/infomation',
      name: '/infomation',
      component: () => import('../views/infomation.vue')
    },
    {
      path: '/home',
      name: '/home',
      component: () => import('../views/home.vue')
    }
  ]
})

export default router
