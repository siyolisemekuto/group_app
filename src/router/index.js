import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login', 
    name: 'login',
    component: () => import('../views/loginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/registerView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profileView.vue')
  },
  {
    path: '/viewall_feed',
    name: 'about',
  
    component: () => import('../views/ViewAll_Feed.vue')
  },
  {
    path: '/notification',
    name: 'notification',
  
    component: () => import('../views/Notification.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
