/*
 * @Date: 2020-08-25 09:51:45
 * @information: 路由
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/Page01',
    name: 'Page01',
    component: () => import('@/views/Page01.vue')
  },
  {
    path: '/Page02',
    name: 'Page02',
    component: () => import('@/views/Page02.vue')
  },



]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router