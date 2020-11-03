/*
 * @Date: 2020-08-25 10:04:44
 * @information: vue-cli 3.x 配置文件
 */
module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    hot: true, 
    host: '0.0.0.0', 
    port: 8180, 
    https: false,
    open: true,
    // 跨域配置
    proxy: {
      '/api': {
        target: `https://api.mz-moe.cn`,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }


}


