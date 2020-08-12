<!--
 * @Date: 2020-05-27 09:49:58
 * @information:路由参数
-->
<template>
  <div>

  </div>
</template>

<script>
import {_readUrlQuery} from 'zjsmethods'

export default {
  data() {
    return {}
  },
  methods: {
    /**
     * @author: 殷鹏飞
     * @Date: 2020-08-12 14:19:18
     * @information: 获取路由地址上拼接的参数
     */
    getQueryParameter(val) {
      let {href} = window.location
      let obj = {}
      let parameterArr = href.split('?').pop().split('&').forEach(el => {
        let arr = el.split('=')
        Reflect.set(obj, arr[0], arr[1])
      })
      return Reflect.get(obj, val)
    },
  },
  mounted() {
    console.log('路由参数-->',this.$route);
    // console.log('accessToken',_readUrlQuery('accessToken'));
    // console.log('equipmentType',_readUrlQuery('equipmentType'));

    let accessToken = this.getQueryParameter('accessToken')
    console.log(accessToken)
  }
}
</script>
