<!--
 * @Date: 2020-11-14 14:48:19
 * @information: 防抖 节流
-->
<template>
  <div id="page11">
    <button @click="onClick()">防抖</button>
    <button @click="onClick2()">节流</button>
  </div>
</template>

<script>
import {throttle} from '../assets/js/util/page'

export default {
  data() {
    return {

    }
  },
  methods: {
    
    onClick(ms  = 2000) {
      let timer;
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        console.log('111')
      }, ms);
    },

    onClick2: throttle(function() {
      console.log('222')
    })




  },
  created() {

  },
  mounted() {

  }
}
</script>

<style lang="scss">

</style>