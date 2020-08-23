/*
 * @author: 殷鹏飞
 * @Date: 2020-03-27 18:18:01
 * @information: 随机颜色函数
 */

let str = Math.floor(Math.random() * 100)

// 十六进制格式
function randomHexColor() {
  let hex = Math.floor(Math.random() * 16777216).toString(16)
  hex.length < 6 && (hex = '0' + hex)
  return `#${hex}`
}


// rgb格式
function randomRgbColor() { 
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}

console.log(randomHexColor())
console.log(randomRgbColor())