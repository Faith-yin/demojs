<!--
 * @Date: 2020-10-03 11:14:27
 * @information: copy
-->
<template>
  <div id="page04">
    <div class="box">
      <input type="text" id="input_text">
      <button @click="copy01" class="btn01" data-clipboard-target="#input_text">copy top input</button>
    </div>

    <div class="box">
      <div id="text">{{textData}}</div>
      <button @click="copy02" class="btn02" :data-clipboard-text="textData">copy top text</button>
      <button @click="copy03">原生拷贝</button>
    </div>
  </div>
</template>

<script>
// clipboard 移动端兼容性有问题 部分机型不行
import Clipboard from 'clipboard'

export default {
  data() {
    return {
      textData: '这是你将要复制到的内容呢',
    }
  },
  methods: {
    /**
     * 复制input中的内容
     */
    copy01() {
      let btnCopy01 = new Clipboard('.btn01')
      // 成功回调
      btnCopy01.on('success', (e) => {
        console.log(111,e)
        alert(`复制成功：${e.text}`)
        e.clearSelection(); // 清除选中内容
      })
      // 失败回调
      btnCopy01.on('error', (e) => {
        alert(`失败操作，请重试`)
      })
    },

    /**
     * 复制div中的内容
     */
    copy02() {
      let btnCopy02 = new Clipboard('.btn02')
      console.log(btnCopy02)
      // 成功回调
      btnCopy02.on('success', (e) => {
        alert(`复制成功：${e.text}`)
        e.clearSelection(); // 清除选中内容
      })
      // 失败回调
      btnCopy02.on('error', (e) => {
        alert(`失败操作，请重试`)
      })
    },

    /**
     * 原生document.execCommand('copy')方法用于`可编辑区域`的复制
     */
    copy03() {
      let {textData} = this
      let input = document.createElement('input')
      input.setAttribute('readonly', 'readonly')
      input.setAttribute('value', textData)
      document.body.append(input)
      input.setSelectionRange(0, 9999)
      if(document.execCommand('copy')) {
        document.execCommand('copy')
        alert(`复制成功：${this.textData}`)
      }
      document.body.removeChild(input)
    },
  },
  created() {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page04 {
  width: 80%;
  margin: 100px auto 0;
  text-align: center;
}
</style>