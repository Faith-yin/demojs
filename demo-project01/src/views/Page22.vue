<!--
 * @Date: 2020-08-24 16:23:49
 * @information: svg
   参考：https://www.zhangxinxu.com/wordpress/2014/04/animateion-line-drawing-svg-path-%E5%8A%A8%E7%94%BB-%E8%B7%AF%E5%BE%84/
-->
<template>
  <div id="page22">
    <svg class="box" viewBox="25 25 50 50">
      <circle class="path" cx="50" cy="50" r="20" fill="none" stroke="#409eff" stroke-width="1.5"></circle>
    </svg>
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
#page22 {
  width: 80%;
  margin: 50px auto;
  .box {
    width: 40px;
    animation: loading-rotate 2.5s ease-in-out infinite;
    .path {
      stroke-dasharray: 90, 100;
      animation: loading-dash 2s ease-in-out infinite;
    }
  }


  @keyframes loading-rotate {
    100% {
      transform: rotate(360deg);
    }
  }


  @keyframes loading-dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -40px;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -120px;
    }
  }

}
</style>
