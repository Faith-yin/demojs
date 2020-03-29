<!--
 * @author: 殷鹏飞
 * @Date: 2020-03-29 08:20:41
 * @information: 图形化验证码的实现
-->
<template>
  <div id="page01">
    <!-- 使用自定义的验证码组件 -->
    <valid-code @createValue='validCode=arguments[0]'></valid-code>
  </div>
</template>

<script>
import ValidCode from '@/components/ValidCode.vue';

export default {
  data() {
    return {
      // 验证码
      validCode: null,
    }
  },
  components: {
    'valid-code': ValidCode
  },
  methods: {},
  mounted() {
    console.log('验证码是:',this.validCode);
  },
}
</script>

<style lang="scss">
#page01 {
  display: flex;
  justify-content: center;
}
</style>