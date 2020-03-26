/*
 * @author: 殷鹏飞
 * @Date: 2020-01-12 12:32:16
 * @information: 
 */

// 字符串加星(*)展示
function _encryStr(str, m, n) {
  if(!str || typeof(str) !== 'string' || m < 0 || n < 0 || m > n || n > str.length) return;
  // 前面字符  中间字符  后面字符
  let frontStr = '', midStr = '', endStr = ''
  // 拼接前面原字符
  for(let g = 0; g < m; g ++) {
    frontStr += str[g]
  }
  // 加星中间字符
  for(let i = m; i < n; i ++) {
    midStr += '*'
  }
  // 拼接后面原字符
  for(let k = n; k < str.length; k ++ ) {
    endStr += str[k]
  }
  // 结果拼接
  let target = `${frontStr}${midStr}${endStr}`
  return target
}

let a = '这是一段文字嗯对的没问题'
let b = 15631171788
console.log(_encryStr(a,3,9));
console.log('结果是-->',_encryStr(String(b),0))


