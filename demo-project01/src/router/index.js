/*
 * @author: 殷鹏飞
 * @Date: 2020-03-29 08:18:19
 * @information: 路由视图
 */
import Vue from 'vue'
import Router from 'vue-router'
import Page01 from '@/views/page01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page01',
      component: Page01
    }
  ]
})
