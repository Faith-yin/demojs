<!--
 * @Date: 2020-10-05 17:01:53
 * @information: 动画loading
-->
<template>
  <div id="page05">
    <div id="loading"><div class="loader-inner"></div></div>
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
#page05 {
  
#loading {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
  background-color: #f4f5f5;
  pointer-events: none;
}
.loader-inner {
  will-change: transform;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -20px 0 0 -20px;
  background-color: #ff6700;
  border-radius: 50%;
  animation: scaleout 0.8s infinite ease-in-out forwards;
  text-indent: -99999px;
  z-index: 999991;
}
@keyframes scaleout {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}


}
</style>