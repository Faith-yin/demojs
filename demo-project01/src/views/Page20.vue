<!--
 * @Date: 2020-08-23 15:55:48
 * @information: pdfh5 插件的使用，终于找见好用的了。。。
   参考博客：https://www.gjtool.cn/archives/pdfh5
-->
<template>
  <div id="page20">
    <div id="demo"></div>
  </div>
</template>

<script>
import Pdfh5 from "pdfh5";

export default {
  data() {
    return {
      pdfh5: null
    }
  },
  methods: {

  },
  created() {

  },
  mounted() {
		//实例化
	  this.pdfh5 = new Pdfh5("#demo", {
		  pdfurl: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
		  // pdfurl: "https://qjdev-pred-files.oss-cn-beijing.aliyuncs.com/report_accounts_java/EMSSJUJ20200819095103121ws0ZuFWn.pdf",
	  });
	  //监听完成事件
	  this.pdfh5.on("complete", function (status, msg, time) {
		  console.log("状态：" + status + "，信息：" + msg + "，耗时：" + time + "毫秒，总页数：" + this.totalNum)
	  })
  }
}
</script>

<style lang="scss">
@import "pdfh5/css/pdfh5.css";
</style>
