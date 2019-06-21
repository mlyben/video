import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

import routeData from '@/routerData'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/Index.vue'),
      meta: {},
      redirect: '/TongJiFenXi',
      children: routeData
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue'),
    //   children: [
    //     {
    //       path: 'tongji',
    //       name: 'tongji',
    //       // route level code-splitting
    //       // this generates a separate chunk (about.[hash].js) for this route
    //       // which is lazy-loaded when the route is visited.
    //       component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    //     }, {
    //       path: 'zhuanlu',
    //       name: 'zhuanlu',
    //       component: () => import('@/views/About.vue')
    //     }, {
    //       path: 'anjian',
    //       name: 'anjian',
    //       component: () => import('@/views/About.vue')
    //     }, {
    //       path: 'chaxun',
    //       name: 'chaxun',
    //       component: () => import('@/views/About.vue')
    //     }, {
    //       path: 'shezhi',
    //       name: 'shezhi',
    //       component: () => import('@/views/About.vue')
    //     }
    //   ]
    // },

  ]
})
