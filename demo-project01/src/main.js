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
import Directive from './directives'
import VueMeta from 'vue-meta'
import VueBetterScroll from 'vue2-better-scroll'
import zjsmethods from 'zjsmethods'


Vue.config.productionTip = false


Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.use(ypfMethods)
Vue.use(zjsmethods)
Vue.use(Vant)
Vue.use(Directive)
Vue.use(VueMeta)
Vue.use(VueBetterScroll)


// 自定义全局指令
Vue.directive('task', {
  bind(el, binding, vnode) {
    // console.log(el, binding, vnode)
    // :后的参数 =后的参数
    let {arg, value} = binding
    if(arg) {
      el.style[arg] = value
    }else {
      Object.keys(value).forEach(el1 => {
        Object.values(value).forEach(el2 => {
          el.style[el1] = el2
        })
      })
    }
  }
})



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
