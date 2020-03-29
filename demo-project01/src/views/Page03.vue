<!--
 * @author: 殷鹏飞
 * @Date: 2020-03-29 15:13:10
 * @information: echart 图表
-->
<template>
  <div id="page03">
    <!-- 柱状图容器 -->
    <div id="container" style="width: 900px;height: 600px;"></div>
    <!-- 饼状图容器 -->
    <div id="main" style="width: 800px;height:600px;"></div>
    <!-- 折线图容器 -->
    <div id="box" style="width: 600px;height: 600px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * @author: 殷鹏飞
     * @Date: 2020-03-29 16:04:10
     * @information: 柱状图 初始化函数
     */
    createHistogramChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("container"));
      // 指定图表的配置项和数据
      var option = {
        // 标题
        title: {
          text: "ECharts 入门示例",
          subtext: "东软出品",
          left: "left",
          borderColor: "red",
          borderWidth: 3
        },
        // 工具箱
        toolbox: {
          show: true,
        },
        tooltip: {
          trigger: "axis"
        },
        // 图例
        legend: {
          data: ["销量"]
        },
        // x轴
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        // 数据
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值", symbol: "arrow" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    /**
     * @author: 殷鹏飞
     * @Date: 2020-03-29 16:04:22
     * @information: 饼状图 初始化函数
     */
    creatPieChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "某站点用户访问来源", //主标题文本
          subtext: "纯属虚构", //副标题文本
          x: "center" //标题水平安放位置
        },
        // calculable: true,     //是否启用拖拽重计算特性，默认关闭
        series: [
          {
            //数据内容
            name: "访问来源", //系列名称，如启用legend，该值将被legend.data索引相关
            type: "pie", //图表类型，必要参数！
            radius: "70%", //半径
            center: ["50%", "60%"], //圆心坐标
            data: [
              // 数据
              {
                value: 335,
                name: "直接访问"
              },
              {
                value: 310,
                name: "邮件营销"
              },
              {
                value: 234,
                name: "联盟广告"
              },
              {
                value: 135,
                name: "视频广告"
              },
              {
                value: 1548,
                name: "搜索引擎"
              }
            ]
          }
        ],
        tooltip: {
          //提示框，鼠标悬浮交互时的信息提示
          trigger: "item", //触发类型，默认数据触发，可选值有item和axis
          formatter: "{a} <br/>{b} : {c} ({d}%)", //鼠标指上时显示的数据  a（系列名称），b（类目值），c（数值）, d（占总体的百分比）
          backgroundColor: "rgba(0,0,0,0.7)" //提示背景颜色，默认为透明度为0.7的黑色
        },
        legend: {
          //图例，每个图表最多仅有一个图例。
          orient: "vertical", //布局方式，默认为水平布局，可选值有horizontal(竖直)和vertical(水平)
          x: "left", //图例水平安放位置，默认为全图居中。可选值有left、right、center
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        toolbox: {
          //工具箱，每个图表最多仅有一个工具箱。
          show: true //显示策略，可选为：true（显示） | false（隐藏）
        }
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },

    /**
     * @author: 殷鹏飞
     * @Date: 2020-03-29 16:08:13
     * @information: 折线图 初始化函数
     */
    createPolylineChart() {
      //初始化ehcharts实例
      let myChart = this.$echarts.init(document.getElementById("box"));
      //指定图表的配置项和数据
      let option = {
        //标题
        title: {
          text: "生鲜销量统计"
        },
        //工具箱
        toolbox: {
          show: true
        },
        //图例-每一条数据的名字叫销量
        legend: {
          data: ["销量"]
        },
        //x轴
        xAxis: {
          data: ["苹果", "橘子", "橙子", "香蕉", "菠萝", "榴莲", "柚子"]
        },
        //y轴没有显式设置，根据值自动生成y轴
        yAxis: {},
        //数据-data是最终要显示的数据
        series: [
          {
            name: "销量",
            type: "line",
            data: [40, 20, 35, 60, 55, 10, 88]
          }
        ],
        tooltip: {
          //提示框，鼠标悬浮交互时的信息提示
          trigger: "item", //触发类型，默认数据触发，可选值有item和axis
          formatter: "{a} <br/>{b} : {c}", //鼠标指上时显示的数据  a（系列名称），b（类目值），c（数值）, d（占总体的百分比）
          backgroundColor: "rgba(0,0,0,0.7)" //提示背景颜色，默认为透明度为0.7的黑色
        }
      };
      //使用刚刚指定的配置项和数据项显示图表
      myChart.setOption(option);
    }
  },
  mounted() {
    this.createHistogramChart();
    this.creatPieChart();
    this.createPolylineChart();
  }
};
</script>

<style lang="scss">
#page03 {
  
}
</style>
