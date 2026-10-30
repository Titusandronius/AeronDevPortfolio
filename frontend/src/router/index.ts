import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Auth from '@/pages/auth.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
    },
    {
      path: '/projects/:slug',
      name: 'project-details',
      component: () => import('@/pages/ProjectDetails.vue'),
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return false
    }
    return {
      top: 0,
    }
  },
})

export default router
