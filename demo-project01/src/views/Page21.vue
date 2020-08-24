<!--
 * @Date: 2020-08-23 18:23:14
 * @information: vue2-better-scroll 上拉加载 下拉刷新
  参考：https://www.npmjs.com/package/vue2-better-scroll
-->
<template>
  <div id="page21">
    <header>这是vue-better-scroll的头部</header>
    <!-- 需要一个创建一个父容器 组件高度默认等于父容器的高度 -->
    <main class="position-box">
      <vue-better-scroll  class="wrapper"
                          ref="scroll"
                          :scrollbar="scrollbarObj"
                          :pullDownRefresh="pullDownRefreshObj"
                          :pullUpLoad="pullUpLoadObj"
                          :startY="parseInt(startY)"
                          @pulling-down="onPullingDown"
                          @pulling-up="onPullUp">
        <ul class="list-content">
          <li class="list-item" v-for="(item, index) in dataList" :key="index">{{item}}</li>
        </ul>
      </vue-better-scroll>
    </main>
    <el-button class="go-top" type="primary" @click="onScrollTop">返回顶部</el-button>
  </div>
</template>

<script>
import VueBetterScroll from 'vue2-better-scroll'

let count = 1
export default {
  data() {
    return {
      dataList: [], // 数据列表
      // 这个配置可以开启滚动条，默认为 false。当设置为 true 或者是一个 Object 的时候，都会开启滚动条，默认是会 fade 的
      scrollbarObj: {
        fade: true,
      },
      // 这个配置用于做下拉刷新功能。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新，可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
      pullDownRefreshObj: {
        threshold: 90,
        stop: 40,
      },
      // 这个配置用于做上拉加载功能。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载，可以配置离底部距离阈值（threshold）来决定开始加载的时机
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: '加载更多',
          noMore: '没有更多数据了',
        }
      },
      // 纵轴方向初始化位置
      startY: 0,
    }
  },
  components: {
    'vue-better-scroll': VueBetterScroll
  },
  methods: {
    /**
     * @author: 殷鹏飞
     * @Date: 2020-08-24 09:08:41
     * @information: 触发时机：在一次下拉刷新的动作后，这个时机一般用来去后端请求数据。(触发事件在参数中需要开启 pullDownRefresh 相关配置 )
     */
    onPullingDown() {
      console.log('下拉刷新')
      count = 1
      this.getData().then(res => {
        this.dataList = res
        this.$refs.scroll.forceUpdate(true)
      })
    },
    /**
     * @author: 殷鹏飞
     * @Date: 2020-08-24 09:08:43
     * @information: 触发时机：在一次上拉加载的动作后，这个时机一般用来去后端请求数据。(触发事件在参数中需要开启 pullingUp 相关配置 )
     */
    onPullUp() {
      console.log('上拉加载')
      this.getData().then(res => {
        this.dataList = this.dataList.concat(res)
        if (count < 50) {
          this.$refs.scroll.forceUpdate(true)
        } else {
          this.$refs.scroll.forceUpdate(false)
        }
      })
    },
    /**
     * @author: 殷鹏飞
     * @Date: 2020-08-24 09:12:48
     * @information: 数据请求
     */
    getData() {
      return new Promise(resolve => {
        setTimeout(() => {
          let arr = []
          for(let i = 0; i < 10; i++) {
            arr.push(count ++)
          }
          resolve(arr)
        }, 1000);
      })
    },
    /**
     * @author: 殷鹏飞
     * @Date: 2020-08-24 09:19:45
     * @information: 返回顶部
     */
    onScrollTop() {
      this.$refs.scroll.scrollTo(0, 0, 600)
    },
  },
  created() {

  },
  mounted() {
    this.onPullingDown()
  },
  beforeDestroy() {
    this.$refs.scroll.destroy()
  },
}
</script>

<style lang="scss">
#page21 {
  // height: 100%;
  // overflow: hidden;
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 9;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: #009a61;
  }

  .position-box {
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .list-content {
    list-style: none;
    background: #fff;
  }

  .list-item {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 20px;
    border-bottom: 1px solid #e5e5e5;
  }
  .go-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: #009a61;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 15px;
  }


}
</style>
