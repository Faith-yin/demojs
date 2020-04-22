<!--
 * @Date: 2020-04-22 15:51:22
 * @information: 金额格式限定replace
-->
<template>
  <div id="page06">
    <el-input v-model="inputValue" 

              placeholder="请输入内容"
              @input="handleInput"></el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: null, //输入框值
    }
  },
  methods: {
    /**
     * @author: 殷鹏飞
     * @Date: 2020-04-22 16:21:22
     * @information: value值改变时
     */
    handleInput(val) {
      // let value = val
      // // 保证输入的是数字 和 .
      // value = val.replace(/[^\d.]/g, "")
      // // 若第一字符是 .  则替换为 0.
      // value = val.replace(/^\./, "0.")
      // // 保证只有出现一个  .而没有多个 .
      // // value = val.replace(/\.{2,}/g, ".")
      // value = val.replace(/^(\d+),(\.{2,})/g, "$1.")
      // // 保证.只出现一次，而不能出现两次以上
      // value = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")
      // // 只能输入两个小数
      // value = val.replace(/^(\d+)\.(\d\d).*$/, "$1.$2")

      // // 此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
      // if((value.indexOf(".") == -1) && value != 0){
      //   value = parseFloat(value)
      // }


      // 若第一字符是 .  则替换为 0.
      val = val.replace(/^\./, "0.")
      // 保证.只出现一次，而不能出现两次以上
      val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")
      // 只能输入两个小数
      val = val.replace(/^(\d+)\.(\d\d).*$/, "$1.$2")
      // 赋值输入框值
      this.inputValue = val
      console.log(val);
    },
  }
}
</script>

<style lang="scss">
#page06 {
  width: 800px;
  margin: 50px auto;
}
</style>