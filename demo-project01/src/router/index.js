/*
 * @author: 殷鹏飞
 * @Date: 2020-03-29 08:18:19
 * @information: 路由视图
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/HomePage')
    },
    {
      path: '/Page01',
      name: 'Page01',
      component: () => import('@/views/Page01')
    },
    {
      path: '/Page02',
      name: 'Page02',
      component: () => import('@/views/Page02')
    },
    {
      path: '/Page03',
      name: 'Page03',
      component: () => import('@/views/Page03')
    },
    {
      path: '/Page04',
      name: 'Page04',
      component: () => import('@/views/Page04')
    },
    {
      path: '/Page05',
      name: 'Page05',
      component: () => import('@/views/Page05')
    },
    {
      path: '/Page06',
      name: 'Page06',
      component: () => import('@/views/Page06')
    },
    {
      path: '/Page07',
      name: 'Page07',
      component: () => import('@/views/Page07')
    },
    {
      path: '/Page08',
      name: 'Page08',
      component: () => import('@/views/Page08')
    },
    {
      path: '/Page09',
      name: 'Page09',
      component: () => import('@/views/Page09')
    },
    {
      path: '/Page10',
      name: 'Page10',
      component: () => import('@/views/Page10')
    },
    {
      path: '/Page11',
      name: 'Page11',
      component: () => import('@/views/Page11')
    },
    {
      path: '/Page12',
      name: 'Page12',
      component: () => import('@/views/Page12')
    },
    {
      path: '/Page13',
      name: 'Page13',
      component: () => import('@/views/Page13')
    },
    {
      path: '/Page14',
      name: 'Page14',
      component: () => import('@/views/Page14')
    },
    {
      path: '/Page15',
      name: 'Page15',
      component: () => import('@/views/Page15')
    },
    {
      path: '/Page16',
      name: 'Page16',
      component: () => import('@/views/Page16')
    },
    {
      path: '/Page17',
      name: 'Page17',
      component: () => import('@/views/Page17')
    },
    {
      path: '/Page18',
      name: 'Page18',
      component: () => import('@/views/Page18')
    },
  ]
})
