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
    
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#home-page {
  width: 800px;
  margin: 0 auto;
  .title-info {
    text-align: center;
    padding: 50px 0;
  }
  .container {
    display: flex;
    justify-content: space-around;
  }
}
</style>