<!--
 * @Date: 2020-08-21 15:20:57
 * @information: vue-pdf 预览pdf
-->
<template>
  <div id="page19">
    <!-- web端通过新页面窗口打开pdf文件 -->
    <!-- <button v-if="!showMark" @click="onOpen">打开pdf</button>
    <div v-if="showMark" class="pdf-box">
      <pdf  v-for="(item, index) in numPages"
            :key="index"
            ref="pdf"
            :src="pdfUrl"></pdf>
    </div> -->

    <!-- 移动端 -->
    <pdf  :src="pdfUrl"
          :page="currentPage"
          @num-pages="pageCount=$event"
          @page-loaded="currentPage=$event"
          @loaded="loadPdfHandler"></pdf>

  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  metaInfo: {
    title: 'This is the test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=3,user-scalable=yes' }
    ]
  },
  data() {
    return {
      showMark: false,
      // pdfUrl: `https://qjdev-pred-files.oss-cn-beijing.aliyuncs.com/report_accounts_java/EMSSJUJ20200819095103121ws0ZuFWn.pdf`,
      pdfUrl:"http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      currentPage: 0, // pdf文件页码
      pageCount: 1, // pdf文件总页数
    }
  },
  components: {
    pdf
  },
  methods: {
    onOpen() {
      window.open(this.url)
    },

    // pdf加载时
    loadPdfHandler (e) {
      // 加载的时候先加载第一页
      this.currentPage = 1
    }


  },
  created() {
　　// 有时PDF文件地址会出现跨域的情况,这里最好处理一下
　　this.pdfUrl = pdf.createLoadingTask(this.pdfUrl)
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page19 {
  width: 80%;
  margin: 100px auto 0;

}
</style>
