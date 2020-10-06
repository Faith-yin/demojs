<!--
 * @Date: 2020-10-06 09:27:17
 * @information: computed 计算属性闭包传参无缓存作用
    computed可以使用闭包传参，但并无缓存作用，实际上效果与methods是一样的，所以需要传参的情况下，使用methods才是最直观的方式。
-->
<template>
  <div id="page06">
    <button @click="updateCount()">update Count</button>
    <button @click="getCount1()">Get Count1</button>
    <button @click="getCount2()">Get Count2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  computed: {
    count1() {
      console.log('get count1')
      return 'Count1:' + this.count + ',' + Date.now()
    },
    count2() {
      return () => {
        console.log('get count2')
        return 'Count2:' + this.count + ',' + Date.now()
      }
    }
  },
  methods: {
    updateCount() {
      console.log('update count')
      this.count ++
    }, 
    getCount1() {
      console.log(this.count1)
    },
    getCount2() {
      console.log(this.count2())
    },
  },
  created() {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page06 {
  width: 80%;
  margin: 100px auto 0;
  
}
</style>