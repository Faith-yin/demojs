<!--
 * @Date: 2020-08-27 14:53:07
 * @information: 
-->
<template>
  <div id="com01">
    <div>{{obj}}</div>
    <div>{{obj2}}</div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {},
    },
    obj2: {
      type: Array,
      default: () => [],
    },
    obj3: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
  created() {
    // console.log(this.obj)
    // console.log(this.obj2)
    // console.log(this.obj3)
  },
  mounted() {
    console.log(this.obj)

    console.log('parent->', this.$parent)
  }
}
</script>

<style lang="scss">

</style>