<!--
 * @Date: 2020-07-21 15:45:29
 * @information: 弹出层组件化
-->
<template>
  <div id="page15">
    <user name="小明"></user>
  </div>
</template>

<script>
import user from '@/components/User'

export default {
  data() {
    return {

    }
  },
  components: {
    user
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page15 {
  width: 80%;
  margin: 200px auto 0;




}
</style>
