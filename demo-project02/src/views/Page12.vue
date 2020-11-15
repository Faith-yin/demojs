<!--
 * @Date: 2020-11-15 15:18:50
 * @information: 非响应更改值
-->
<template>
  <div id="page12">
    <button @click="arrModify">数组更改</button>
    <div v-for="(item, index) in arr" :key="index">
      {{index}} - {{item}}
    </div>

    ———————————————————————————<br>

    <button @click="objModify">对象更改</button>
    <div v-for="(item, index) in Object.keys(obj)" :key="`item-${index}`">
      {{index}} - {{item}}
    </div>

    <input type="text" v-model="obj.age">


    
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {},
      arr: ['ypf', 'yyy', 'js']
    }
  },
  methods: {
    /**
     * @author: ypf
     * @Date: 2020-11-15 15:22:39
     * @information: 通过数组索引改变的值是非响应式的
     */
    arrModify() {
      this.arr[0] = 'ypf111'
      // this.$set(this.arr, 0, 'ypf222')
      // this.arr.push(4,5)
      console.log('数组更改', this.arr)
    },

    objModify() {
      this.obj.name = 'ypf'
      // this.$set(this.obj, 'university', 'tsxy')
      console.log('对象更改', this.obj)
    },



    
  },
  created() {

  },
  mounted() {

  }
}
</script>

<style lang="scss">

</style>