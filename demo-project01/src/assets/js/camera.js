/*
 * @Date: 2020-06-21 18:01:18
 * @information:
 */

/**
* 组件： 调用摄像头拍摄的构造函数
* @params {Object} options 参数如下：
*             video {DOM} video元素
*             width {Number} 画布宽度
*             height {Number} 画布高度
*             onShoot {Function} 录像回调函数
*             onError {Function} error回调函数
*         {Object} canvasOption 参数如下：
*             marginTop {Number} 银行卡可视区域距离屏幕顶部的距离，用作画布坐标
*             marginLeft {Number} 银行卡可视区域距离屏幕左侧的距离，用作画布坐标
*             width {Number} 银行卡可视区域宽度
*             height {Number} 银行卡可视区域高度
*调用：
*    Camera.create(options, canvasOption)
*/
function Camera(options, canvasOption) {
  this.video = options.video;
  this.width = options.width || 640;
  this.height = options.height || 480;
  this.shadeMarginTop = canvasOption.marginTop;
  this.shadeMarginLeft = canvasOption.marginLeft;
  this.shadeWidth = canvasOption.width;
  this.shadeHeight = canvasOption.height;
  this.onError = options.onError;
  this.onShoot = options.onShoot;
  this.mediaStreamTrack = null; // 存放视频流
}

Camera.prototype = {
  init: function() {
      if(navigator.mediaDevices === undefined) {
          navigator.mediaDevices = {}
      }
      // 一些浏览器部分支持 mediaDevices。 我们不能直接给对象设置 getUserMedia
      // 因为这样可能会覆盖已有的属性。这里我们只会在没有getUserMedia属性的时候添加它。
      if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function(constraints) {
              // 首先，如果有getUserMedia的话，就获取它
              var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

              // 一些浏览器根本没实现它 — 那么就返回一个error到promise的reject来保持一个统一的接口
              if (!getUserMedia) {
                  return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
              }

              // 否则，为老的navigator.getUserMedia方法包裹一个Promise
              return new Promise(function(resolve, reject) {
                  getUserMedia.call(navigator, constraints, resolve, reject);
              });
          }
      }
      this.video.autoplay = 'true';
      this.canvasDom = document.createElement('canvas');
      this.canvasDom.width = this.width;
      this.canvasDom.height = this.height;
      this.canvasDom.style.display = 'none';
      document.querySelector('body').appendChild(this.canvasDom);
  },

  // 检查摄像头是否可用
  canCameraUse: function() {
    return (navigator.mediaDevices.getUserMedia && window.URL);
  },

  // 获取录像流到video中
  shoot: function() {
      var self = this;
      var video = self.video;
      if (self.canCameraUse) {
          navigator.mediaDevices.getUserMedia({
              video: { facingMode: { exact: "environment"} } // 后置摄像头设置
          })
          .then(function(stream) {
              self.mediaStreamTrack = stream
              // 旧的浏览器可能没有srcObject
              if ("srcObject" in video) {
                  video.srcObject = stream;
              }else {
                  // 防止在新的浏览器里使用它，因为它已经不再支持了
                  video.src = window.URL.createObjectURL(stream);
              }
              video.onloadedmetadata = function(e) {
                  video.play();
              };
              video.addEventListener('error', function(error) {
                  stream.stop();
                  self.onError && self.onError(error);
              }, false);
          })
          .catch(function(err) {
              self.onError && self.onError(err)
          })
      }
  },

  // 将录像绘制到canvas
  drawVideo: function() {
      var canvasDom = this.canvasDom;
      var ctx = canvasDom.getContext('2d');
      ctx.fillStyle = "#000000";
      // 视频可能不会充满屏幕，这时候，需要按照视频缩放的比例来剪切所需要的部分
      let videoHeight = this.video.videoHeight // 视频本身的高度
      let videoWidth = this.video.videoWidth // 视频本身的宽度
      let videoWidthScale = 1
      if (videoWidth && this.width !== videoWidth) { // 计算当前视频的缩放比例
          videoWidthScale = videoWidth / this.width
      }
      let newHeight = videoHeight / videoWidthScale // 当前显示的视频高度
      let videoMarginTop = this.video.clientHeight - newHeight > 0 ?
                           (this.video.clientHeight - newHeight) / 2 : 0 // 当前视频距离顶部高度
      let x = Math.floor(this.shadeMarginLeft * videoWithScale) // 计算剪切视频的x坐标
      let y = Math.floor((this.shadeMarginTop - videoMarginTop) * videoWithScale) // 计算剪切视频的y坐标
      let w = videoWidth - x * 2, h = Math.ceil(videoHeight - y * 2) // 计算剪切视频的宽高
      ctx.fillRect(this.shadeMarginLeft, this.shadeMarginTop, this.shadeWidth, this.shadeHeight); // 填充画布
      ctx.drawImage(this.video, x, y, w, h, this.shadeMarginLeft, this.shadeMarginTop, this.shadeWidth, this.shadeHeight) // 剪切视频并绘制成图片
      this.ctx = ctx
  },

  // 录像事件绑定
  addShootEvent: function() {
      let self = this;
      let video = self.video;
      // 正在录像
      video.addEventListener('timeupdate', function() {
          self.drawVideo();
          self.onShoot && self.onShoot()
      }, false)
  },

  // 将录像成图片
  snapshot: function(cb, imageType) {
      let self = this
      let canvas = self.canvasDom;
      imageType = imageType || 'jpeg';
      let imageSrc = canvas.toDataURL('image/' + imageType);
      cb && cb(imageSrc);
  },

  // 开始录像
  play: function() {
      this.video.play();
  },

  // 停止录像
  pause: function() {
      this.video.pause();
      let self = this
      // 关闭摄像头
      self.mediaStreamTrack.getVideoTracks().forEach(function(track) {
          track.stop();
          self.ctx.clearRect(0, 0, self.canvasDom.width, self.canvasDom.height); // 清除画布
      });
  },

  render: function() { // 初始化
      this.init();
      this.shoot();
      this.drawVideo();
      this.addShootEvent();
  }

};

Camera.create = function(options, canvasOption) {
  var camera = new Camera(options, canvasOption.canvasStyle);
  camera.render();
  return camera;
};

export default Camera
