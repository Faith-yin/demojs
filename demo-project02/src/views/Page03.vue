<!--
 * @Date: 2020-10-01 14:22:45
 * @information: 数组去重
-->
<template>
  <div id="page03">

  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1,2,3,4,5,6,7,8,1,1,3,5,7],
    }
  },
  methods: {
    // 01 es6 Set
    fun01() {
      let aa = new Set(this.arr)
      console.log('fun01', [...aa])
      return [...aa]
    },
    // 02 es6 includes() forEach()
    fun02() {
      let aa = []
      this.arr.map(el => {
        !aa.includes(el) && aa.push(el)
      })
      console.log('fun02', aa)
      return aa
    },
    // 03 es5
    fun03() {
      let arr03 = [...this.arr]
      for(let i=0; i<arr03.length; i++) {
        for(let j=i+1; j<arr03.length; j++) {
          if(arr03[i] === arr03[j]) {
            arr03.splice(j, 1)
            j--
          }
        }
      }
      console.log('fun03:', arr03)
      return arr03
    },
    // 04 indexOf
    fun04() {
      let arr04 = []
      // for循环也可用数组方法代替
      for(let i=0; i<this.arr.length; i++) {
        arr04.indexOf(this.arr[i]) === -1 && arr04.push(this.arr[i])
      }
      console.log('fun04:', arr04)
    },
    // 05 map
    fun05() {
      let map = new Map()
      let arr05 = []
      this.arr.forEach(el => {
        if(!map.has(el)) {
          map.set(el, true)
          arr05.push(el)
        }
      })
      console.log('fun05:', arr05)
      return arr05
    },
  },
  created() {
    this.fun01()
    this.fun02()
    this.fun03()
    this.fun04()
    this.fun05()
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page03 {
  
}
</style>