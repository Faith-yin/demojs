<!--
 * @Date: 2020-11-24 17:32:32
 * @information: 用额外的Vue实例实现事件的监听与触发，用于通信：$on,$once,$emit,$off的用法

  rem 适配试验
-->
<template>
  <div id="page13">

    <button @click="onAddEvent">触发当前实例上的事件</button>


    <div class="div-text">这是易制毒那测试赛文字这是易制毒那测试赛文字这是易制毒那测试赛文测试wenzi 文字测试wenzi 文字测试wenzi 文字测试wenzi 文字字</div>

    <button>测试按钮</button>

    <p class="p-text">测试wenzi 文字测试wenzi 文字测试wenzi 文字测试w测试wenzi 文字测试wenzi 文字enzi 文字</p>

  </div>
</template>

<script>
// 引入新建的额外实例
import Bus from '@/assets/js/event_bus'

export default {
  data() {
    return {

    }
  },
  methods: {
    onAddEvent() {
      Bus.$emit('testFun', {name: 'ypf'})
    },
    
  },
  created() {
    let a = this.$ypfMethods._encryStr('15631171788',3,7)
    console.log(a)

  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page13 {


.div-text {
  font-size: 16px;
  border-top: solid #eee 1px;
}

.p-text {
  font-size: 32px;
}




}
</style>