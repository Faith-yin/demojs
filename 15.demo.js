/*
 * @Date: 2020-04-22 17:48:31
 * @information: 
 */

//将数字转换成金额显示
function toMoney(num){
  num = num.toFixed(2);
  num = parseFloat(num)
  num = num.toLocaleString();
  return num;//返回的是字符串23,245.12保留2位小数
}

let num = '005262456.2158';
num = toMoney(Number(num));
console.log(num);//打印结果    5,262,456.22

