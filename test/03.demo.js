/*
 * @author: 殷鹏飞
 * @Date: 2020-01-06 14:25:25
 * @information: 
 */
var value = 1;

var obj = {
  value: 2,
  a() {
    return this.value
  }
}

console.log(obj.a()) //2
console.log((obj.a)()) //2
console.log((obj.a = obj.a)()) //1
console.log((false || obj.a)()) //1
console.log((obj.a, obj.a)()) //1