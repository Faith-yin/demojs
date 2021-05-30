<!--
 * @Date: 2020-08-26 09:03:10
 * @information: 基础样式试验
-->
<template>
  <div id="page01">
    <div class="fz--25 fw--700 mt--100 pt--30 color--primary bgc--eee display--flex jc--sb lh--60">
      <div>这是测试文字daunt111</div>
      <div>这是测试文字daunt222</div>
    </div>
    <com01 :obj="obj"></com01>
  </div>
</template>

<script>
import com01 from '../components/Com01.vue'
import axios from 'axios'

export default {
  data() {
    return {
      obj: {},
    }
  },
  components: {
    com01
  },
  methods: {

  },
  created() {
    // axios.get(`https://dbsitefront.allhome.com.cn/v1/website/home/show/scrollDate`).then(({data}) => {
    //   this.obj = data.result
    // })
  },
  mounted() {
    axios.get(`https://dbsitefront.allhome.com.cn/v1/website/home/show/scrollDate`).then(({data}) => {
      this.obj = data.result
    })

    console.log('children->',this.$children)
  }
}
</script>

<style lang="scss">

</style>