<!--
 * @author: 殷鹏飞
 * @Date: 2020-04-09 17:29:06
 * @information: 
 -->
<template>
  <div id="test05">
    这是test05组件中的内容呢。。。
    <slot :user="user"></slot>
    <slot name="slot" :age='age'></slot>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      age: 18,
    }
  },
  methods: {
    
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#test05 {

}
</style>