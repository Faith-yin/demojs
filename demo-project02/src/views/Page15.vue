<!--
 * @Date: 2021-05-25 18:15:58
 * @information:  使用scss封装阴影渐变
                  moment方法使用 - http://momentjs.cn/docs/#/manipulating
-->
<template>
  <div id="container">
    <div class="box"></div>

    <div class="dynamic-shadow"></div>

  </div>
</template>

<script>
import moment from 'moment'
// 引入moment中文包
import 'moment/locale/zh-cn'

export default {
  data () {
    return {

    }
  },
  methods: {
    moment,
    useMomentMethod () {
      console.log('moment上的方法 ->', moment.prototype)
      let a = moment('2021-06-23 10:05:46').fromNow()
      let b = moment().startOf('day')
      let c = moment().endOf('month')
      console.log(a, b, c)
    },
  },
  mounted () {
    this.useMomentMethod()
  },
}
</script>

<style lang="scss">
@import "@/style/var.scss";

#container {
  width: 100%;
}

.box {
  width: 50px;
  height: 50px;
  margin: 50px auto 0;
  border: 1px solid #eee;

  box-shadow: 3px 3px 10px #ff6700;
  background-image: linear-gradient(to right, #ff0000, #8a08f5);
}

.dynamic-shadow {
  width: 10rem;
  height: 10rem;
  margin: 50px auto 0;
  @include linear-shadow(to bottom, #ff6700, #003cff);
}
</style>
