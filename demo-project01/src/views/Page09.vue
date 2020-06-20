<!--
 * @Date: 2020-06-10 14:06:23
 * @information: js间接读取本地文件
-->
<template>
  <div id="page09">
    <input type="file" accept="image/*" onchange="loadFile(event)" />
    <br/><br/><br/><br/><br/><br/>
    <van-button size="mini"
                plain
                type="primary">修改金额</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    loadFile(event) {
      let file =  event.target.files[0]
      const reader = new FileReader()
      reader.onload = function () {
        console.log(reader.result)
      }
      reader.readAsDataURL(file)
    }
  },
  mounted() {
    console.log(1,this._encryStr('15631171788', 3, -4))
  },
}
</script>

<style lang="scss">
#page09 {
  width: 80%;
  margin: 100px auto 0;
  color: #333;
  .van-button {
    padding: 0 5px;
    border-radius: 4px;
    border: 0.5px solid #00B067;
    font-size: 12px;
    overflow: hidden;
    color: #00B067 !important;
    &::before {
      border: none;
    }
  }
}
</style>
