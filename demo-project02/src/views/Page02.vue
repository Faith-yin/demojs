<!--
 * @Date: 2020-09-21 10:11:15
 * @information: Promise.all() 方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
-->
<template>
  <div id="page02">

  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    async aa(arr) {
      return arr.map(async (el) => {
        if(el) {
          return Promise.resolve(`${el}:成功了`)
        } else {
          return Promise.reject(`${el}:出错了`)
        }
      })
    },

    async bb() {
      try {
        // let promiseList = await this.aa([0,1,2,3,4])
        let promiseList = await this.aa([1,2,3,4])
        let result = await Promise.all(promiseList)
        console.log('结果: 成功->', result)
      } catch (error) {
        console.log('结果：失败->', error)
      }
    },

  },
  async created() {
    await this.bb()
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page02 {

}
</style>