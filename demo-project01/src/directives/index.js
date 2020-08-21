/*
 * @Date: 2020-07-09 14:13:49
 * @information: 指令注册
 */
import Loading from './loading/loading'

let directiveArr = [
  ['ypfLoading' , Loading],
]

export default {
  install (Vue) {
    directiveArr.forEach(el => {
      Vue.directive(el[0], el[1])
    })
  }
}

