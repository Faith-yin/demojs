/*
 * @author: 殷鹏飞
 * @Date: 2020-03-30 16:34:36
 * @information: 金额添加千分符
 */

function moneyThousandFormat(val) {
  // 不合法检验
  if(!val) return val
  // 转换
  return val.toString().replace(/\d+/, function(s) {
    return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
  })
}

console.log(moneyThousandFormat(1234255696.99))

