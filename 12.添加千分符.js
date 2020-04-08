/*
 * @author: 殷鹏飞
 * @Date: 2020-03-30 16:34:36
 * @information: 暂未实现
 */
function operator(n) {
  //  转成字符串
  n = n.toString()
  //  从尾部选择，每三项裁剪一次
  var reg = /(?=(?!\b)(\d{3})+$)/g
  //  替换添加千分符
  return n.replace(reg, ',')
}

console.log(operator(403569.52))