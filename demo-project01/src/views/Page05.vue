<!--
 * @author: 殷鹏飞
 * @Date: 2020-04-09 17:26:29
 * @information: 插槽
-->
<template>
  <div id="page05">
    这是page05呢
    <!-- 默认插槽 插槽使用父组件中的数据 -->
    <test05 :user="user">
      <template v-slot:default="slotProps">
        {{slotProps.user.name}}
      </template>
      <!-- 作用域插槽 父组件使用子组件中的数据 -->
      <div slot="slot" slot-scope="gain">
        {{gain.age}}
      </div>
    </test05>
  </div>
</template>

<script>
import test05 from '@/components/test05.vue'

export default {
  data() {
    return {
      user: {name: '小明'},
    }
  },
  components: {
    test05,
  },
  methods: {
    
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page05 {
  width: 800px;
  margin: 50px auto;
}
</style>