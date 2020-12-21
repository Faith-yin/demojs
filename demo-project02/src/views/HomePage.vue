<!--
 * @Date: 2020-08-25 09:55:58
 * @information: homepage 
 
 用额外的Vue实例实现事件的监听与触发，用于通信：$on,$once,$emit,$off的用法
-->
<template>
  <div id="home-page">
    <router-link to="Page01">Page01</router-link>
    <router-link to="Page02">Page02</router-link>
    <router-link to="Page03">Page03</router-link>
    <router-link to="Page04">Page04</router-link>
    <router-link to="Page05">Page05</router-link>
    <router-link to="Page06">Page06</router-link>
    <router-link to="Page07">Page07</router-link>
    <router-link to="Page08">Page08</router-link>
    <router-link to="Page09">Page09</router-link>
    <router-link to="Page10">Page10</router-link>
    <router-link to="Page11">Page11</router-link>
    <router-link to="Page12">Page12</router-link>
    <router-link to="Page13">Page13</router-link>


    <button @click="onRemoveEvent">移除自定义事件监听器</button>

  </div>
</template>

<script>
// 引入新建的额外实例
import Bus from '@/assets/js/event_bus'

export default {
  data() {
    return {
      homeName: '120....'
    }
  },
  methods: {
    /**
     * @author: ypf
     * @Date: 2020-12-19 11:30:20
     * @information: 在另外新建的vue实例 通过 $on() 监听相应事件, 每次都会触发
     */
    funEvent() {
      Bus.$on('testFun', e => {
        console.log('$on 捕获到事件了，参数：', e, Bus)
      })
    },

    /**
     * @author: ypf
     * @Date: 2020-12-20 09:42:07
     * @information: $once 监听一个自定义事件，但是只触发一次。一旦触发之后，监听器就会被移除。
     */
    funEvent2() {
      Bus.$once('testFun', e => {
        console.log('$once 捕获到事件了，参数：', e, Bus)
      })
    },

    /**
     * @author: ypf
     * @Date: 2020-12-20 09:45:56
     * @information: 移除自定义事件监听器
     */
    onRemoveEvent() {
      Bus.$off('testFun')
    },

  },
  created() {

    this.funEvent()

    // this.funEvent2()

    console.log('Bus实例：',  Bus)

  },
  mounted() {

  }
}
</script>

<style lang="scss">
#home-page {
  text-align: center;
  a {
    margin: 10px 0px;
    display: block;
  }
}
</style>