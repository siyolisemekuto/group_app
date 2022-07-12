import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/viewall_feed',
    name: 'ViewAll_Feed',
 
    component: () => import('../views/ViewAll_Feed.vue')
  },
  {
    path: '/user',
    name: 'user',
 
    component: () => import('../views/User.vue')
  },
  {
    path: '/viewall_feed',
    name: 'ViewAll_Feed',
 
    component: () => import('../views/ViewAll_Feed.vue')
  },
  {
    path: '/singleview/:id',
    name: 'SingleView',
 
    component: () => import('../views/SingleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
