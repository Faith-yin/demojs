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
  {
    path: '/Page03',
    name: 'Page03',
    component: () => import('@/views/Page03.vue')
  },
  {
    path: '/Page04',
    name: 'Page04',
    component: () => import('@/views/Page04.vue')
  },
  {
    path: '/Page05',
    name: 'Page05',
    component: () => import('@/views/Page05.vue')
  },
  {
    path: '/Page06',
    name: 'Page06',
    component: () => import('@/views/Page06.vue')
  },
  {
    path: '/Page07',
    name: 'Page07',
    component: () => import('@/views/Page07.vue')
  },
  {
    path: '/Page08',
    name: 'Page08',
    component: () => import('@/views/Page08.vue')
  },
  {
    path: '/Page09',
    name: 'Page09',
    component: () => import('@/views/Page09.vue')
  },
  {
    path: '/Page10',
    name: 'Page10',
    component: () => import('@/views/Page10.vue')
  },
  {
    path: '/Page11',
    name: 'Page11',
    component: () => import('@/views/Page11.vue')
  },
  {
    path: '/Page12',
    name: 'Page12',
    component: () => import('@/views/Page12.vue')
  },
  {
    path: '/Page13',
    name: 'Page13',
    component: () => import('@/views/Page13.vue')
  },
  {
    path: '/Page14',
    name: 'Page14',
    component: () => import('@/views/Page14.vue')
  },
  {
    path: '/Page15',
    name: 'Page15',
    component: () => import('@/views/Page15.vue')
  },


]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
