// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Login.vue'),
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('@/views/ForgotPassword.vue'),
      },
      {
        path: '/create-user',
        name: 'CreateUser',
        component: () => import('@/views/CreateUser.vue'),
      },
      {
        path: '/games',
        name: 'Games',
        component: () => import('@/views/Games.vue'),
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import('@/views/Account.vue'),
      },
      {
        path: '/withdraw',
        name: 'Withdraw',
        component: () => import('@/views/Withdraw.vue'),
      },
      {
        path: '/games/roulette',
        name: 'Roulette',
        component: () => import('@/views/games/Roulette.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
