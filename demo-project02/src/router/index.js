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
]

const router = new VueRouter({
  routes
})

export default router
