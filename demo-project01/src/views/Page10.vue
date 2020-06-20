<!--
 * @Date: 2020-06-20 18:02:52
 * @information: 文字溢出显示 ...展开/...收起
-->
<template>
  <div id="page10">
    <div class="text-box">
      <div :class="['txt', { 'over-hidden': !unfold }]" ref="textBox">
        <span ref="spanBox">{{content}}</span>
      </div>
      <div class="btn" v-if="ifOver" @click="unfold = !unfold">{{unfold ? '收起' : '展开'}}</div>
    </div>
    <div>这是底下其他的文字呢</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '随着技术和生态的不断演进、应用场景的不断探索，机器学习已然不再仅仅停留在实验室当中。无论是日新月异的互联网应用，还是求新求变的企业转型，机器学习都得到了广泛的应用，逐步成为驱动业务的关键技术机器学习在近 30 多年已发展为一门多领域交叉学科，也已广泛应用于数据挖掘、计算机视觉、自然语言处理、生物特征识别、搜索引擎、医学诊断、检测信用卡欺诈、证券市场分析、DNA 序列测序、语音和手写识别、战略游戏和机器人等领域为了帮助大家更便捷的解决这些实际问题，让数据科学家、算法工程师、业务开发者都能轻松驾驭机器学习，AWS 推出了各式各样的机器学习工具，包括：ML 服务类、API 类、AI 服务工具类等。随着技术和生态的不断演进、应用场景的不断探索，机器学习已然不再仅仅停留在实验室当中。无论是日新月异的互联网应用，还是求新求变的企业转型，机器学习都得到了广泛的应用，逐步成为驱动业务的关键技术机器学习在近 30 多年已发展为一门多领域交叉学科，也已广泛应用于数据挖掘、计算机视觉、自然语言处理、生物特征识别、搜索引擎、医学诊断、检测信用卡欺诈、证券市场分析、DNA 序列测序、语音和手写识别、战略游戏和机器人等领域为了帮助大家更便捷的解决这些实际问题，让数据科学家、算法工程师、业务开发者都能轻松驾驭机器学习，AWS 推出了各式各样的机器学习工具，包括：ML 服务类、API 类、AI 服务工具类等。',
      ifOver: false, // 文本是否超出三行，默认否
      unfold: false // 文本是否是展开状态 默认为收起
    }
  },
  methods: {

  },
  mounted() {
    // 判断是否显示展开收起按钮
    this.ifOver = this.$refs.spanBox.offsetHeight > this.$refs.textBox.offsetHeight
  }
}
</script>

<style lang="scss">
#page10 {
  width: 50%;
  margin: 100px auto 0;
  .txt {
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
  }
  .over-hidden {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .btn {
    cursor: pointer;
    color: #ff6700;
  }


}
</style>
