<!--
 * @Date: 2020-07-21 15:48:00
 * @information:
-->
<template>
  <div id="user">
    <div class="box" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <a :href="`user/${uid}/detail`" >@{{name}}</a>
      <popup v-if="isShowBox" :data="data"></popup>
    </div>
  </div>
</template>

<script>
import popup from '@/components/PopUp'
import Mock from 'mockjs'

export default {
  props: {
    name: {
      type: String,
      default: '默认'
    },
    uid: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShowBox: false,
      data: {},
      timer: null,
    }
  },
  components: {
    popup
  },
  methods: {
    onMouseEnter() {
      this.data = Mock.mock({
        'number1': /\d{1,8}/,
        'number2': /\d{1,8}/,
        'number3': /\d{1,8}/,
      })
      this.timer = setTimeout(() => {
        this.isShowBox = true
      }, 400);
    },
    onMouseLeave() {
      this.timer && clearTimeout(this.timer)
      this.isShowBox = false
    },
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#user {



}
</style>
