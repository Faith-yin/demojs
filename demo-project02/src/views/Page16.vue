<!--
 * @Date: 2021-05-30 11:02:25
 * @information: 依次循环异步请求至依次输出
-->
<template>
<div>
  
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      paramsArr: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    getInfo(val) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.apiopen.top/getJoke?page=1&count=${val}&type=video`).then(res => {
          resolve(res.data)
        }).catch(err => {
          reject(err)
        })
      })
    },

    getList() {
      let promiseArr = this.paramsArr.map(el => this.getInfo(el))
      Promise.all(promiseArr).then(res => {
        console.log('成功了：', res)
      }).catch(err => {
        console.log('出错了：', err)
      })
    },


  },
  created() {
    this.getList()
  },
}
</script>

<style lang="scss">

</style>
