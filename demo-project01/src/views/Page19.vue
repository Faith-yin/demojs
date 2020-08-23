<!--
 * @Date: 2020-08-21 15:20:57
 * @information: vue-pdf 预览pdf
-->
<template>
  <div id="page19">
    <!-- web端通过新页面窗口打开pdf文件 -->
    <!-- <button v-if="!showMark" @click="onOpen">打开pdf</button> -->


    <div class="page">{{pageNum}}/{{pageTotalNum}} </div>
		<div class="box">
      <div class="tools">
        <button type="submit" @click.stop="prePage"> 上一页</button>
        <button type="submit" @click.stop="nextPage"> 下一页</button>
      </div>
      <div class="tools">
        <button @touchstart="idx=0"
                @touchend="idx=-1"
                @click="scaleD">放大</button>
        <button @touchstart="idx=1"
                @touchend="idx=-1"
                @click="scaleX">缩小</button>
      </div>
      <div class="tools">
        <button @click.stop="clock"> 顺时针</button>
        <button @click.stop="counterClock"> 逆时针</button>
      </div>
		</div>
		<pdf   ref="pdf"
          :src="url"
          :page="pageNum"
          :rotate="pageRotate"
          @progress="loadedRatio = $event"
          @page-loaded="pageLoaded($event)"
          @num-pages="pageTotalNum=$event"
          @error="pdfError($event)"
          @link-clicked="page = $event"></pdf>

  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  metaInfo: {
    title: 'This is the test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2,user-scalable=yes' }
    ]
  },
  data() {
    return {
      showMark: false,
      // pdfUrl: `https://qjdev-pred-files.oss-cn-beijing.aliyuncs.com/report_accounts_java/EMSSJUJ20200819095103121ws0ZuFWn.pdf`,
      pdfUrl:"",
      pageCount: 1, // pdf文件总页数

      url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      curPageNum: 0,

      scale: 100, //放大系数
      idx: -1,
    }
  },
  components: {
    pdf
  },
  methods: {
    onOpen() {
      window.open(this.url)
    },


    // 上一页函数，
    prePage() {
      var page = this.pageNum
      page = page > 1 ? page - 1 : this.pageTotalNum
      this.pageNum = page
    },
    // 下一页函数
    nextPage() {
      var page = this.pageNum
      page = page < this.pageTotalNum ? page + 1 : 1
      this.pageNum = page
    },
    // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90
    },
    // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90
    },
    // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e
    },
    // 其他的一些回调函数
    pdfError(error) {
      console.error(error)
    },
    //放大
    scaleD() {
      this.scale += 20;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    //缩小
    scaleX() {
      if (this.scale == 100) return;
      this.scale += -20;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },



  },
  created() {
  },
  mounted() {
  }
}
</script>

<style lang="scss">
#page19 {
  .tools {
    display: flex;
  }

}
</style>
