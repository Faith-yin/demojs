/*
 * @Date: 2020-11-29 15:56:02
 * @information: [知乎](https://zhuanlan.zhihu.com/p/295320540) - 56
 */

 /**
  * 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。
  */

function findStr(s, t) {
  if(s.length < t.length) return -1
  for(let i = 0; i < s.length; i ++) {
    if(s.slice(i, i + t.length) === t) return i
  }
}

console.log(findStr('abcdefghijk', 'cde'))




