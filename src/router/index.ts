import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: () => import('../views/chart.vue')
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('../views/data.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/new',
      name: 'new',
      component: () => import('@/views/New.vue')
    },
    {
      path: '/getcode',
      name: 'getcode',
      component: () => import('@/views/Getcode.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/ErrorMessage/404.vue')
    }
  ]
})

export default router
