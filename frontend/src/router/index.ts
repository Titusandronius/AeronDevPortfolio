import {createRouter, createWebHistory} from 'vue-router'

import Home from '@/pages/Home.vue'
import Auth from '@/pages/auth.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/auth',
        name: 'auth',
        component: Auth
      },  
    ],
    scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
});

export default router