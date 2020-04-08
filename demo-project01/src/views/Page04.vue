<!--
 * @author: 殷鹏飞
 * @Date: 2020-04-08 11:58:45
 * @information: 定时器
-->
<template>
  <div id="page04">
    <div>{{whileTime1}}</div>

    <div>{{whileTime2}}</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      timer1: null, //定时器1: 1s执行一次，用来在页面上显示
      timer2: null, //定时器2: 3s执行一次，用来轮询请求
      whileTime1: 15, //定时器1时长
      whileTime2: 15, //定时器2时长
    }
  },
  methods: {
    setTimer() {
      this.timer1 = setInterval(() => {
        if(!this.whileTime1) {
          clearInterval(this.timer1)
          clearInterval(this.timer2)
        }
        this.whileTime1 --
        console.log('1s执行一次-------------------',this.whileTime1)
      }, 1000);
      this.timer2 = setInterval(() => {
        if(!this.whileTime1) return;
        this.whileTime2 --
        console.log('3s执行一次轮询请求',this.whileTime2);
      }, 3000);
    },

  },
  mounted() {
    this.setTimer()
  },
  beforeDestroy() {
    clearInterval(this.timer1)
    clearInterval(this.timer2)
  },
}
</script>

<style lang="scss">
#page04 {
  width: 800px;
  margin: 50px auto;
}
</style>