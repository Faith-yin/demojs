<!--
 * @Date: 2021-07-03 19:43:11
 * @information: cookie用法
-->

<template>
  <div id="page18">
    <form>
      <input type="text"
             v-model="name">
      <input type="text"
             v-model="value">
    </form>

    <button @click="set">设置cookie</button>
    <button @click="get">获取cookie</button>
    <button @click="del">删除cookie</button>

  </div>
</template>

<script>
import CookieUtil from '@/assets/js/util/cookie.js'

export default {
  data () {
    return {
      name: '',
      value: '',
    }
  },
  created () {

  },
  mounted () {

  },
  activated () {

  },
  methods: {
    set () {
      CookieUtil.setCookie(this.name, this.value, 1 * 24 * 60 * 60 * 1000)
      alert('已设置')
    },

    get () {
      let val = CookieUtil.getCookie(this.name)
      alert(val)
    },

    del () {
      CookieUtil.removeCookie(this.name)
      alert('已删除')
    },


  },
}
</script>

<style lang="scss">
</style>