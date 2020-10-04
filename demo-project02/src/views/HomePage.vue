<!--
 * @Date: 2020-08-25 09:55:58
 * @information: homepage
-->
<template>
  <div id="home-page">
    <router-link to="Page01">Page01</router-link>
    <router-link to="Page02">Page02</router-link>
    <router-link to="Page03">Page03</router-link>
    <router-link to="Page04">Page04</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  created() {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
#home-page {
  text-align: center;
  a {
    margin: 0 10px;
  }
}
</style>