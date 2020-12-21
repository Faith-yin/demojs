/*
 * @Date: 2020-12-21 18:15:32
 * @information: postcss配置
 */

module.exports = {
  plugins: {
    "autoprefixer": {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    "postcss-pxtorem": {
      rootValue: 16, // 基准尺寸
      propList: ['*'], // 属性选择器，*通用
      "exclude": /node_modules/
    }
  }

}

