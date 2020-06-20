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
  methods: {},
  mounted() {
    console.log('路由参数-->',this.$route);
    console.log('accessToken',_readUrlQuery('accessToken'));
    console.log('equipmentType',_readUrlQuery('equipmentType'));
  }
}
</script>
