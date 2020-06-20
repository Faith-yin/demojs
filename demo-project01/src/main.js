/*
 * @author: 殷鹏飞
 * @Date: 2020-03-29 08:18:19
 * @information: 全局配置
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import ypfMethods from 'ypf-methods'
import Vant from 'vant'
import 'vant/lib/index.css'


Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.use(ypfMethods)
Vue.use(Vant)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
