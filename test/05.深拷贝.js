/*
 * @author: 殷鹏飞
 * @Date: 2020-01-06 16:27:25
 * @information: 
 */

// 深拷贝
function deepClone(obj) {
  if (!obj) return;
  let target
  if (JSON) {
    // 是 json
    target = JSON.parse(JSON.stringify(obj))
  } else if (typeof(obj) === 'object') {
    // 是对象
    target = obj instanceof Array ? [] : {}
    for (let key in obj) {
      obj.hasOwnProperty(key) && (target[key] = deepClone(obj[key]))
    }
  } else {
    // 其他
    target = obj
  }
  return target
}

let obj = {
  a: "这是a",
  b: 2,
  c: [1,2,3],
  d: {
    aa: 'aa1',
    bb: 'bb2',
    cc: undefined,
    dd: null,
    ee: '',
    ff: ['aaa',2,3],
  },
}
let obj2 = {
  "a": "这是a",
  "b": "这是b",
  "c": {
    "aa": 'aa1',
    "bb": 'bb1',
    "cc": undefined,
    "dd": null,
    "ee": '',
  },
}
let obj3 = [1,2,3,4]
let obj4 = "fjkosadf"

let res = deepClone({
  a: "这是a的值",
  b: ["bb1",2,3],
  c: {
    aa: 123,
    bb: undefined,
    cc: null,
    ee: '',
    ff: ["ff1",2]
  }
})
console.log(res);


