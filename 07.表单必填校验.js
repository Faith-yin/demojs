/*
 * @author: 殷鹏飞
 * @Date: 2020-01-12 14:52:48
 * @information: 
 */
// 表单必填校验
function _formRequired(source) {
  let arr = [ 'object', 'array', 'string' ]
  if(!source || !arr.includes(typeof(source))) return;
  let obj
  if(typeof(source) === 'object' && !Array.isArray(source)) {
    // 是对象
    obj = Object.values(source)
  }else {
    // 是字符串或数组
    obj = typeof(source) === 'string' ? [source] : source
  }
  // 判断转换的数组是否为空
  if(!obj.length) return false
  let mark = obj.every(el => {
    if(typeof(el) === 'string') return el
    if(typeof(el) === 'number') return true
    if(Array.isArray(el)) return el.length
    if(typeof(el) === 'object') return _formRequired(el)
    return false
  })
  return mark
}

let form = {
  a: '这是a中的表单内容',
  b: 0,
  c: {
    aa: '这是aa中的表单内容',
    bb: '0',
  },
  d: '这里新添加了内容',
}
console.log(_formRequired(form))
