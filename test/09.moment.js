/*
 * @author: 殷鹏飞
 * @Date: 2020-01-19 14:54:23
 * @information: 
 */
const moment = require('moment');
// 设置moment区域为中国
moment.locale('zh-cn');

let now = moment().format("YYYY年MM月DD日 HH时mm分ss秒")
// console.log(now);

let t1 = moment(1711641720000).format('YYYY-MM-DD HH:mm:ss')
// console.log(t1);

// 获取前一天日期
let t2=moment().day(-1).format('YYYY-MM-DD');
console.log(t2);

// 获取本周日日期
let t3=moment().weekday(7).format('YYYY-MM-DD');
console.log(t3);

let t4 = moment('2020-03-31', 'YYYY-MM-DD').fromNow()
console.log(t4);

let t5 = moment(new Date()).format()
console.log('t5: ',t5);


