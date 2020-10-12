<!--
 * @Date: 2020-10-09 14:19:37
 * @information: 提前捕获错误不会触发后面和外层的捕获
-->
<template>
  <div id="page07">
    page07
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    fun(val) {
      try {
        val = val.toFixed(2)
      } catch (error) {
        console.log('111出错了:', error)
      }
    },
  },
  created() {
    try {
      this.fun('1.23456')
    } catch (error) {
      console.log('222出错了:', error)
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page07 {



}
</style>