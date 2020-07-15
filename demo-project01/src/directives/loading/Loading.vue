<!--
 * @Date: 2020-07-09 14:15:07
 * @information:
-->
<template>

    <div v-show="visible" class="loading-wrap">
      <div class="loading-box">加载中...</div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">

  .loading-wrap {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
  }
  .loading-box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100px;
    transform: translate(-50%, -50%);
  }




</style>
