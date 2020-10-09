/*
 * @Date: 2020-01-06 16:27:25
 * @information: 深拷贝
 */

// 普通深拷贝：JSON.parse(JSON.stringify(obj))缺陷：
// 1 Date对象的值类型会变成string类型
// 2 对象中的方法、正则拷贝过去会变成空对象 {}

function deepClone(obj) {
  // null 的情况
  if (obj === null) return null; 
  // 正则表达式的情况
  if (obj instanceof RegExp) return new RegExp(obj); 
  // 日期对象的情况
  if (obj instanceof Date) return new Date(obj); 
  // 函数的情况
  //非复杂类型,直接返回 也是结束递归的条件
  if (typeof obj !== "object") {
    return obj
  }
  // [].__proto__.constructor = Array()
  // {}.__proto__.constructor = Object()
  // 因此处理数组对象的情况时, 可以取巧用这个办法来new新对象
  let newObj = new obj.__proto__.constructor;
  for (let key in obj) {
    newObj[key] = deepClone(obj[key])
  }
  return newObj;
}


//测试代码
let obj = {
  aa: undefined,
  name: 'xm',
  birth: new Date,
  desc: null,
  reg: /^123$/,
  ss: [1,2,3],
  fn: function() {
    console.log('123')
  },
}

let obj2 = deepClone(obj);
console.log(obj, obj2)

obj2.fn = function() {
  console.log('456')
}

obj.fn()
obj2.fn()