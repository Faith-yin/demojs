/*
 * @Date: 2020-08-18 18:11:38
 * @information: 自定义loading指令
 */
import Vue from 'vue'
import Loading from './Loading.vue'

let Mask = Vue.extend(Loading)

// 是否显示
function toggleLoading(el, binding) {
  if(binding.value) {
    Vue.nextTick(() => {
      if(binding.modifiers.fullscreen) {
        // 全屏情况下
        document.body.appendChild(el.mask)
      }else {
        // 非全屏情况下
        el.style.position = 'relative'
        let height = el.clientHeight;
        let width = el.clientWidth;
        //给蒙版赋值
        el.mask.style.height = height + "px"
        el.mask.style.width = width + "px"
      }
      // 控制loading组件显示
      el.instance.visible = true
      // 插入到目标元素
      insertDom(el, el, binding)
    })
  }else {
    el.instance.visible = false
  }
}

// 插入到目标元素
function insertDom(parent, el, binding) {
  parent.appendChild(el.mask)
}


export default {
  /**
   * @author: 殷鹏飞
   * @Date: 2020-08-20 16:35:31
   * @information: 第一次绑定到元素时调用
   */
  bind: function(el, binding, vnode) {
    const textExr = el.getAttribute('ypfLoading-text')
    const vm = vnode.context
    const mask = new Mask({
      el: document.createElement('div'),
      data: {
        text: vm && vm[textExr] || textExr
      },
    })
    //用一个变量接住mask实例
    el.instance = mask
    el.mask = mask.$el
    binding.value && toggleLoading(el, binding)
  },
  /**
   * @author: 殷鹏飞
   * @Date: 2020-08-20 16:35:41
   * @information: 所在组件的 VNode 更新时调用
   */
  update: function(el, binding) {
    binding.oldValue !== binding.value && toggleLoading(el, binding)
  },
  /**
   * @author: 殷鹏飞
   * @Date: 2020-08-20 16:35:51
   * @information: 指令与元素解绑时调用
   */
  unbind: function(el, binding) {
    el.instance && el.instance.$destroy()
  },

}
