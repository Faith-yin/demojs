<!--
 * @Date: 2020-11-24 17:32:32
 * @information: 
-->
<template>
  <div id="page13">

    <button @click="onAddEvent">触发当前实例上的事件</button>

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

</style>