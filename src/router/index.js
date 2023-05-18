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
      path: '/information',
      name: '/information',
      component: () => import('../views/information.vue')
    },
    {
      path: '/home',
      name: '/home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/booktid',
      name: '/booktid',
      component: () => import('../views/booktid.vue')
    }
  ]
})

export default router
