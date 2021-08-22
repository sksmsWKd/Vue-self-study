import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./views/Users.vue')
    },

    {
      path: '/posts',
      name: 'posts',
      component: () => import('./views/Posts.vue')
    },
    {
      path: '/create',
      name: 'postcreate',
      component: () => import('./views/PostCreate.vue')
    }
  ]
})