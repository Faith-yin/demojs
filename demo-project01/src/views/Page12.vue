<!--
 * @Date: 2020-06-21 17:59:58
 * @information:
-->
<template>
  <div id="page12">

  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    setTimer() {
      setTimeout(this.func, 1000);
    },
    setInter() {
      setInterval(this.func, 5000);
    },
    func() {
      console.log(this, this.count)
    },
  },
  mounted() {
    this.setInter()
  }
}
</script>

<style lang="scss">
#page12 {

}
</style>
