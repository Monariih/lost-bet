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
        path: '/info',
        name: 'Info',
        component: () => import('@/views/info.vue'),
      },
      {
        path: '/config',
        name: 'Config',
        component: () => import('@/views/Config.vue'),
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
        component: () => import('@/views/money-options/Withdraw.vue'),
      },
      {
        path: '/deposit',
        name: 'Deposit',
        component: () => import('@/views/money-options/Deposit.vue'),
      },
      {
        path: '/games/blackjack',
        name: 'Blackjack',
        component: () => import('@/views/games/Blackjack.vue'),
      },

      {
        path: '/games/roulette',
        name: 'Roulette',
        component: () => import('@/views/games/Roulette.vue'),
      },

      {
        path: '/games/jackpot',
        name: 'Jackpot',
        component: () => import('@/views/games/Jackpot.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
