<!--
 * @Date: 2020-07-21 16:06:31
 * @information:
-->
<template>
  <div id="pop-up">
    <div class="pop-box">
      <div>关注：{{data.number1}}</div>
      <div>粉丝：{{data.number2}}</div>
      <div>微博：{{data.number3}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
#pop-up {
  .pop-box {
    max-width: 150px;
    padding: 20px;
    background-color: #eee;
  }



}
</style>
