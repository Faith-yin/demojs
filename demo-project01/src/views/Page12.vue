<!--
 * @Date: 2020-06-21 17:59:58
 * @information: 自定义指令
-->
<template>
  <div id="page12">
    <!-- 传参方式 -->
    <div class="box" v-task:color="'#1fb19e'">了解了自定义指令概念后，来看下如何使用一个自定义指令，下面用一个例子来实现我们刚才所说的</div>
    <div class="box" v-task="{color: 'red', 'font-size': '30px'}">了解了自定义指令概念后，来看下如何使用一个自定义指令，下面用一个例子来实现我们刚才所说的</div>

    <div class="top" v-dire>返回顶部</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  directives: {
    dire: {
      bind(el, binding, vnode) {
        console.log(el, binding, vnode)
        console.log(el.scrollTop)
      }
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style lang="scss">
#page12 {
  width: 50%;
  min-height: 500vh;
  margin: 100px auto 0;
  .top {
    position: fixed;
    right: 200px;
    bottom: 100px;
    writing-mode: vertical-lr; /* 文字竖向排列： 从左向右 从右向左是 writing-mode: vertical-rl;*/
    &:hover {
      cursor: pointer;
      color: #ff6700;
    }
  }
}
</style>
