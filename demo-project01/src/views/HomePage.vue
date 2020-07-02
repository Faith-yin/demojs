<!--
 * @author: 殷鹏飞
 * @Date: 2020-03-29 10:17:09
 * @information: home-page
-->
<template>
  <div id="home-page">
    <div class="title-info">导航：</div>
    <div class="container">
      <div>
        <router-link to="Page01">Page01</router-link>
      </div>
      <div>
        <router-link to="Page02">Page02</router-link>
      </div>
      <div>
        <router-link to="Page03">Page03</router-link>
      </div>
      <div>
        <router-link to="Page04">Page04</router-link>
      </div>
      <div>
        <router-link to="Page05">Page05</router-link>
      </div>
      <div>
        <router-link to="Page06">Page06</router-link>
      </div>
      <div @click="jumpPage">Page07</div>
      <div>
        <router-link to="Page08">Page08</router-link>
      </div>
      <div>
        <router-link to="Page09">Page09</router-link>
      </div>
      <div>
        <router-link to="Page10">Page10</router-link>
      </div>
      <div>
        <router-link to="Page11">Page11</router-link>
      </div>
      <div>
        <router-link to="Page12">Page12</router-link>
      </div>
      <div>
        <router-link to="Page13">Page13</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    jumpPage() {
      this.$router.push({name: 'Page07', query: {accessToken: 'ypf123456789', equipmentType: 1}})
    },
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#home-page {
  margin: 0 auto;
  .title-info {
    text-align: center;
    padding: 50px 0;
  }
  .container {
    text-align: center;
    div {
      margin: 20px 0;
    }
  }
}
</style>
