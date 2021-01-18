<!--
 * @Date: 2020-12-26 09:49:43
 * @information:  
-->
<template>
  <div id="page14">
    <input id="input" type="file" @change="onChange" accept="audio/mpeg, video/mp4">

    <div>大小: {{fileSize}}M</div>


    <div></div>




  </div>
</template>

<script>
import Mock from 'mockjs'

export default {
  data() {
    return {
      fileSize: 0, // 文件大小
    }
  },
  methods: {
    onChange(e) {
      let file = e.target.files[0] || null
      if(!file) return;
      this.fileSize = Number(file.size / 1024 / 1024).toFixed(2)
      console.log(file)

      // 切片大小
      const blockSize = 5 * 1024 * 1024
      // 切完的数组 当前大小
      let blockList = [], current = 0

      while(current < file.size) {
        let fileData = file.slice(current, current + blockSize)
        blockList.push(fileData)
        current += blockSize
      }

      console.log(blockList)

      let reader = new FileReader()
      reader.readAsDataURL(blockList[0])
      reader.onload = (e) => {
        console.log('读取结果:',reader.result)
      }
    },



  },
  created() {
    try {
      // throw Error('这是测试错误')
      // throw new Error('ceshi a')
      // throw new Object({needRefresh: true, message: `当前订单信息已更新，请重试`})
      throw {statusCode: 100, message: '这是服务器的错误o'}
    } catch (error) {
      console.log(typeof(error), error)
    }

    

  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page14 {



}
</style>