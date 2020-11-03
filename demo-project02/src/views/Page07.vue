<!--
 * @Date: 2020-10-09 14:19:37
 * @information: 提前捕获错误不会触发后面和外层的捕获
-->
<template>
  <div id="page07">
    page07
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {

    }
  },
  methods: {
    fun(val) {
      return axios.post(`https://dfinance.allhome.com.cn/finance/citicPlatform/registerBook/unbindCard`, {
        mchntUserId: "pred00002590",
        userIdNumber: "pMsYOnCzi98ELN5hXsH9SLnPKNP5X9fgZmojO+LgTGlswhpp0iJ2JAtagz1ANyiH54ETK5dCH/2pUVKmMujU9ObxcUSJa/+JbvpffAPWT1kpI6X1ZlQEZM2XxM59uwZxd2nE9zycW+eoK9fc4AlqAYT15LwAUznuMuUPYGmwsLs=",
        userName: "小可科技有限公司",
      }).then(res => {
        if(res.data.statusCode === 1000) {
          console.log('Promise.resolve', res)
          return Promise.resolve(res)
        } else {
          console.log('Promise.resolve...reject')
          return Promise.reject(res.data)
        }
      }).catch(error => {
        console.log('Promise.reject', error)
        return Promise.reject(error)
      })


    },
  },
  async created() {

    try {
      let res = await this.fun(12343)
      console.log('res-->', res)
    } catch (error) {
      console.log('error-->', error)
    }



  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page07 {



}
</style>