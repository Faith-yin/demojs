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
      // 若第一字符是 .  则替换为 0.
      val = val.replace(/^\./, "0.")
      // 保证 . 只出现一次 ， 而不能出现两次或两次以上
      val = val.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".")
      // 只能输入两个小数
      val = val.replace(/^(\d+)\.(\d\d).*$/, "$1.$2")
      // 如果没有小数点，首位不能为类似于 01、02的金额
      if((val.indexOf(".") == -1) && val != 0){
        val = parseFloat(val)
      }
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