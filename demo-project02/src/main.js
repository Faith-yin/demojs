/*
 * @Date: 2020-08-25 09:51:45
 * @information: main
 */
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/style/index.scss'
import ypfMethods from 'ypf-methods'


Vue.prototype.$ypfMethods = ypfMethods

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
