<!--
 * @Date: 2020-06-21 17:56:12
 * @information:
-->
<template>
  <div id="page11">
    <!-- <img src=" ./assets/scan.svg" @click="scanBank" /> -->
    <button @click="scanBank">扫描</button>
    <!-- 扫描界面html -->
    <div class="camera" v-show="isScan">
        <!-- 遮罩层 -->
        <canvas class="shade" id="canvasMaskShade" ref="videoShade"></canvas>
        <!-- 视频存放处 -->
        <video id="video" class="video"></video>
        <!-- 取消识别按钮 -->
        <button id="shootBtn" @click="cancelScan" class="shootBtn"><span>取消</span></button>
        <!-- 存放扫描的图片 -->
        <div id="iamgeBox"></div>
    </div>
  </div>
</template>

<script>
import Camera from '../assets/js/camera'

export default {
  data() {
    return {
      camera: null,
      isScan: false, // 是否在扫描
      isDrawCanvas: false,
      takePictureInterval: null,
      bankNumber: '',
    }
  },
  methods: {
    /**
    * 点击扫描按钮触发函数，调用摄像头插件开启摄像头
    */
    scanBank() {
      this.isScan = !this.isScan // 显示银行卡识别的界面
      this.$nextTick(() => { // 渲染完成后执行
        if(this.isScan && !this.isDrawCanvas) {
          this.drawBankMask() // 如果没有画遮罩，将遮罩画出来
        }
        let canvasMask = document.getElementById("canvasMaskShade")
        let self = this
        // 调用插件开启摄像头，两个参数，第一个参数是video数据，第二个是遮罩层数据，用于视频剪切
        self.camera = Camera.create({
          video: document.querySelector('#video'),
          width: canvasMask.clientWidth,
          height: canvasMask.clientHeight,
          onError: function(error) {
            console.log("调用扫描失败")
            self.isScan = !self.isScan //调用失败后关闭识别页面
          }
        },{
          canvasStyle: {
            "width": canvasMask.bankWidth,
            "height": canvasMask.bankHeight,
            "marginTop": canvasMask.bankMarginTop,
            "marginLeft": canvasMask.bankMarginLeft
          }
        })
      })
      // 设置定时器，定时将此刻获取的图片传输到后台进行识别银行卡来完成自动识别功能，
      // 定时器将一直执行，直到用户取消识别或银行卡识别成功后，将定时器清除；
      // 如果调用摄像头失败或开始识别失败，则会清除定时器
      clearInterval(this.takePictureInterval)
      this.takePictureInterval = setInterval(() => {
        this.takePicture()
      }, 3000)
    },
    /**
    * 绘制遮罩层
    */
    drawBankMask() {
      let canvasMask = document.getElementById('canvasMaskShade')

      let screenWidth = canvasMask.clientWidth // 获得可视区域宽度
      let screenHeight = canvasMask.clientHeight // 获得可视区域高度
      canvasMask.width = screenWidth // 设置遮罩的width属性
      canvasMask.height = screenHeight // 设置遮罩的height属性
      let bankWidth = screenWidth - 40 // 设置银行卡框的宽度，规定距离左右屏幕边缘20px
      let bankHeight = Math.ceil(bankWidth / 1.6) // 根据银行卡宽高比设置银行卡框的高度，取整数
      let otherHeight = (screenHeight - bankHeight) / 2 // 设置银行卡框在屏幕中间位置，故这样计算其距离屏幕顶部的高度
      let bankMarginTop = Mail.floor(otherHeight) // 设置银行卡框距离顶部距离，取整数
      canvasMask.bankMarginTop = bankMarginTop // 添加银行卡框距离屏幕上下两侧距离属性，用作camera插件参数：将视频流转换成canvas时的画布剪切y坐标计算参数
      canvasMask.bankMarginLeft = 20 // 添加银行卡框距离屏幕左右两侧距离属性，用作camera插件参数：将视频流转换成canvas时的画布剪切x坐标计算参数
      canvasMask.bankWidth = bankWidth // 添加银行卡框宽度属性，用作camera插件参数：将视频流转换成canvas时画布剪切宽度的计算参数
      canvasMask.bankHeight = bankHeight // 添加银行卡框高度属性，用作camera插件参数：将视频流转换成canvas时画布剪切高度的计算参数

      // 开始画遮罩层
      let ctx = canvasMask.getContext('2d');
      ctx.fillStyle = "rgba(51, 51, 51, 0.5)";
      ctx.fillRect(0, 0, screenWidth, screenHeight)

      // 银行卡框边框常量，画一个银行卡边框，将银行卡框凸显出来
      const ineWidth = 4
      const lineColor = "#DCDCDC"

      // 银行卡框上边框绘制
      ctx.beginPath();
      ctx.moveTo(17, bankMarginTop - 2);
      ctx.lineTo(bankWidth + 23, bankMarginTop - 2);
      ctx.closePath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      ctx.stroke();

      // 银行卡框左边框绘制
      ctx.beginPath();
      ctx.moveTo(18, bankMarginTop - 3);
      ctx.lineTo(18, bankMarginTop + bankHeight + 3);
      ctx.closePath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      ctx.stroke();

      // 银行卡框下边框绘制
      ctx.beginPath();
      ctx.moveTo(17, bankMarginTop + bankHeight + 2);
      ctx.lineTo(bankWidth + 23, bankMarginTop + bankHeight + 2);
      ctx.closePath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      ctx.stroke();

      // 银行卡框右边框绘制
      ctx.beginPath();
      ctx.moveTo(bankWidth + 22, bankMarginTop - 3);
      ctx.lineTo(bankWidth + 22, bankMarginTop + bankHeight + 3);
      ctx.closePath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = lineColor;
      ctx.stroke();

      ctx.clearRect(20, bankMarginTop, bankWidth, bankHeight) // 清除银行卡框的遮罩，展示出银行卡应放的位置
      this.isDrawCanvas = true
    },
    /**
    * 将此刻得到的图片传输到后台进行银行卡验证
    */
    takePicture() {
      let self = this
      if(!self.isScan) { // 如果没有展示扫描页面或者调用扫描失败，则清除定时任务
        clearInterval(self.takePictureInterval)
        return
      }
      self.camera.snapshot(function(imageUrl) {
        let imageBox = document.querySelector('#imageBox');
        let image = imageBox.querySelector('img');
        if (!image) {
          image = document.createElement('img');
          image.src = imageUrl;
          document.querySelector('#imageBox').appendChild(image)
        }else {
          image.src = imageUrl;
        }
        // 请求接口识别
        let params = { // 接口参数
          data: image.src,
          type: 'jpeg'
        }
        console.log('接口入参',params)
        // this.axios.post(...).then( res => {
        //   // 如果请求成功，将定时器清除，关闭摄像头，关闭银行卡识别界面
        //   self.bankNumber = res.data.number // 将识别的银行卡号码赋值，假设识别出来的银行卡信息存放在data的number中
        //   clearInterval(self.takePictureInterval);
        //   self.camera.puse
        //   self.$nextTick(() => {
        //       self.isScan = false
        //   })
        // })
      })
    },
    /**
    * 手动取消银行卡识别
    */
    cancelScan() {
      this.camera.pause() // 关闭摄像头
      clearInterval(this.takePictureInterval) // 清除定时器
      this.isScan = false // 关闭银行卡识别页面
    },
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page11 {
  .camera {
    position: relative;
    width: 100%;
    height: 100%;
    .shade {
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      z-index: 10;
    }
    .video {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: 5;
      background: #000;
    }
    .shootBtn {
      position: absolute;
      top: 0.4rem;
      left: 0;
      z-index: 15;
      height: 0.6rem;
      padding-right: 0.2rem;
      background: rgba(255, 255, 255, 0.3);
      border-top-right-radius: 0.1rem;
      border-bottom-right-radius: 0.1rem;
      font-size: 0.32rem;
      color: #fff;
      text-align: center;
      display: flex;
      align-items: center;
    }
  }



}
</style>
