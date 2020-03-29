/*
 * @author: 殷鹏飞
 * @Date: 2020-03-29 08:18:19
 * @information: 路由视图
 */
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import Page01 from '@/views/page01'
import Page02 from '@/views/Page02'
import Page03 from '@/views/Page03'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Page01',
      name: 'Page01',
      component: Page01
    },
    {
      path: '/Page02',
      name: 'Page02',
      component: Page02
    },
    {
      path: '/Page03',
      name: 'Page03',
      component: Page03
    },
  ]
})
