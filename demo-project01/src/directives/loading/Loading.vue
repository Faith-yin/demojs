<!--
 * @Date: 2020-08-18 18:12:52
 * @information: 自定义loading指令
-->
<template>
  <div id="Loading" v-show="visible">
    <div class="container">
      <div class="loading-box">
        <i class="spot-item spot-item1"></i>
        <i class="spot-item spot-item2"></i>
        <i class="spot-item spot-item3"></i>
        <i class="spot-item spot-item4"></i>
        <i class="spot-item spot-item5"></i>
        <i class="spot-item spot-item6"></i>
        <i class="spot-item spot-item7"></i>
        <i class="spot-item spot-item8"></i>
        <i class="spot-item spot-item9"></i>
        <i class="spot-item spot-item10"></i>
        <i class="spot-item spot-item11"></i>
        <i class="spot-item spot-item12"></i>
        <i class="spot-item spot-item13"></i>
        <i class="spot-item spot-item14"></i>
      </div>
      <div v-if="text" class="loading-text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      text: null,
      width: null,
      height: null,
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
#Loading {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.8);
  .container {
    width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .loading-box {
      width: 40px;
      height: 40px;
      display: inline-block;
      position: relative;
      animation: loadingRotate 1s steps(12) infinite;
      .spot-item {
        position: absolute;
        left: 0;
        top: 0;
        width: 40px;
        height: 40px;
        &::after {
          content: '';
          display: block;
          width: 2px;
          height: 25%;
          margin: 0 auto;
          background-color: #1fb19e;
          border-radius: 40%;
        }
      }
      .spot-item2 {
        transform: rotate(30deg);
        opacity: 0.2;
      }
      .spot-item3 {
        transform: rotate(60deg);
        opacity: 0.4;
      }
      .spot-item4 {
        transform: rotate(90deg);
        opacity: 0.6;
      }
      .spot-item5 {
        transform: rotate(120deg);
        opacity: 0.8;
      }
      .spot-item6 {
        transform: rotate(150deg);
      }
      .spot-item7 {
        transform: rotate(180deg);
      }
      .spot-item9 {
        transform: rotate(210deg);
      }
      .spot-item10 {
        transform: rotate(240deg);
      }
      .spot-item11 {
        transform: rotate(270deg);
      }
      .spot-item12 {
        transform: rotate(300deg);
      }
      .spot-item13 {
        transform: rotate(330deg);
      }
      .spot-item14 {
        transform: rotate(360deg);
      }
    }
    .loading-text {
      margin-top: 5px;
      text-align: center;
      color: #1fb19e;
      font-size: 14px;
    }
  }

  @keyframes loadingRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

}
</style>
