<!--
 * @Date: 2020-10-22 17:54:31
 * @information: Promise.all()
-->
<template>
  <div id="page10">

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      token: `D7SQhLg5DPn5EuCAt6Fyy4lVcdH6Iv8E8IYBmC5mSD77NV1BDmCEW+YQnoPm1iXK1CzOW46zspiu+BJXy/Yv+PlhFalkp1IZfw0paiZ81qH9kyygwvMXR5L+qRsoawmJFbq1O3ejwbcYqnM2xEpbZjut9zpUDvAlqFdly6/GP2sw+lmPQ04Z7yE3V4l0CvGHCV90a5tzLD/pcTbOMJVL6yWM33P0LZLsTrLiG4fUy6b1IEfJSL4XvAJnEPPVmsTLgovnaTuDt6lzw0C0ltiBe+Us2w9NfCrh4gWVHTZ5n0ckCONJrqTxWiePEYdtPHTSbKjBI96T25JOTfIpVqOkZw==`
    }
  },
  methods: {
    fun01() {
      let {token} = this
      return axios.get(`https://dfinance.allhome.com.cn/finance/citicPlatform/registerBook/registersHeader`, {headers: {token}})
    },
    fun02() {
      let {token} = this
      return axios.get(`https://dfinance.allhome.com.cn/finance/citicPlatform/registerBook/typeCode`, {headers: {token}})
    },

  },
  async created() {
    let promiseArr = ['fun01', 'fun02'].map(el => this[el]())
    console.log('promise实例数组:', promiseArr)
    let resultArr = await Promise.all(promiseArr)
    console.log('promise队列结果:', resultArr)

  },
}
</script>

<style lang="scss">

</style>