<!--
 * @Date: 2020-07-15 15:27:46
 * @information: ailabel的使用
-->
<template>
  <div id="page14">
    <div id="hello-map"></div>
  </div>
</template>

<script>
import AILabel from 'ailabel'

export default {
  data() {
    return {
      imgSrc: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594808481661&di=97e0fd4ef3f8abb58dca3821ff54d8ab&imgtype=0&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D199608201%2C2157521836%26fm%3D214%26gp%3D0.jpg',
    }
  },
  methods: {

  },
  mounted() {
    // js声明-容器声明（参数：zoom: 缩放比; {cx: cy:}：初始中心点位置；zoomMax、zoomMin：缩放的比例限制）
    const gMap = new AILabel.Map('hello-map', {zoom: 1080, cx: 0, cy: 0, zoomMax: 650 * 10, zoomMin: 650 / 10, autoPan: true, drawZoom: true});

    // 图片层实例\添加
    const gImageLayer = new AILabel.Layer.Image('img', this.imgSrc, {w: 1080, h: 720}, {zIndex: 1});
    gMap.addLayer(gImageLayer);

    // 1. 矢量数据(Feture)展示
    // 常用样式声明
    const gFetureStyle = new AILabel.Style({strokeColor: '#ff6700'});
    // 矢量层实例\添加
    let gFeatureLayer = new AILabel.Layer.Feature('featureLayer', {zIndex: 2, transparent: true});
    gMap.addLayer(gFeatureLayer);
    // 矢量要素实例\添加
    const fea = new AILabel.Feature.Polygon('id', [
        {x: 10, y: 10},
        {x: 50, y: 10},
        {x: 40, y: 50},
        {x: 20, y: 60},
        {x: 10, y: 10}
    ], {name: '中国'}, gFetureStyle);
    gFeatureLayer.addFeature(fea);


    // 2. 文本数据(Text)展示
    // 常用样式声明
    // const gTextStyle = new AILabel.Style({strokeColor: '#0000FF'});
    // // 文本层实例\添加
    // let gTextLayer = new AILabel.Layer.Text('textLayer', {zIndex: 2});
    // gMap.addLayer(gTextLayer);

    // // 文本要素实例\添加
    // const text = new AILabel.Text('id', {
    //     pos: {x: 100, y: 100},
    //     offset: {x: 0, y: 0},
    //     width: 100,
    //     text: '我是添加的文本字'
    // }, gTextStyle);
    // gTextLayer.addText(text);


    // 3. 标注数据(Marker)展示
    // 不需要声明markerLayer标注图层，有且只有一个markerLayer，可通过gMap.mLayer来获取
    // marker对象实例\添加
    // const marker = new AILabel.Marker('name-中国', {
    //     src: 'https://b-gold-cdn.xitu.io/v3/static/img/frontend.1dae74a.png',
    //     x: 0,
    //     y: 0,
    //     offset: {x: -32, y: -32}
    // });
    // // 注册监听事件删除标注
    // marker.regEvent('click', function () {
    //     gMap.mLayer.removeMarker(this);
    // });
    // gMap.mLayer.addMarker(marker);


    // 4. 矢量数据绘制、编辑（点、线、面、涂抹Mask）
    // 常用样式声明
    // const gFetureStyle = new AILabel.Style({strokeColor: '#0000FF'});

    // // 设置当前操作模式为‘drawRect’, 浏览状态对应mode为'pan'
    // gMap.setMode('drawRect', gFetureStyle);

    // // 矢量层实例\添加
    // let gFeatureLayer = new AILabel.Layer.Feature('featureLayer', {zIndex: 2, transparent: true});
    // gMap.addLayer(gFeatureLayer);

    // // 绘制完成事件监听
    // gMap.events.on('geometryDrawDone', function (type, points) {
    //     // 生成元素唯一标志（时间戳）
    //     const timestamp = new Date().getTime();
    //     // 元素添加展示
    //     let fea = new AILabel.Feature.Polygon(`feature-${timestamp}`, points, {
    //         name: '中国'
    //     }, gFetureStyle);
    //     gFeatureLayer.addFeature(fea);
    // });
    // // 因为自带编辑功能，故需要以下代码
    // gMap.events.on('geometryEditDone', (type, activeFeature, points) => {
    //     activeFeature.update({points});
    //     activeFeature.show();
    // });










  }
}
</script>

<style lang="scss">
#page14 {
  width: 80%;
  margin: 100px auto 0;
  #hello-map {
    width: 500px;         // 必须
    height: 400px;        // 必须
    position: relative;   // 必须
    border: 1px solid red;
    cursor: pointer;
  }





}
</style>
