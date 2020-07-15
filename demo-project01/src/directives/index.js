/*
 * @Date: 2020-07-09 14:13:49
 * @information: index
 */
import Loading from './loading'


export default {
  install (Vue) {
    Vue.directive('load', Loading)
  }
}

