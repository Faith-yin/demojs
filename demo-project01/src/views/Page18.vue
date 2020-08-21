<!--
 * @Date: 2020-08-18 18:08:17
 * @information: 自定义loading指令使用
-->
<template>
  <div id="page18">
    <div  v-ypfLoading="visible"
          ypfLoading-text="加载中"
          class="box">
      这是示例文字。。。
    </div>
    <button @click="visible=!visible">开关loading</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    }
  },
  methods: {
  },
  created() {

  },
}
</script>

<style lang="scss">
#page18 {
  width: 80%;
  margin: 100px auto 0;
  .box {
    width: 400px;
    height: 400px;
    margin: 0 auto;
    border: 1px solid #1fb19e;
    position: relative;
  }

}
</style>
