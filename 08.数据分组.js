let arr = [
  { date: 2020-01-01, name: '001' },
  { date: 2020-01-19, name: '002' },
  { date: 2020-01-05, name: '003' },
  { date: 2020-01-10, name: '004' },
  { date: 2020-01-10, name: '005' },
  { date: 2020-01-10, name: '006' },
  { date: 2020-01-19, name: '007' },
  { date: 2020-01-15, name: '008' },
]

// 一

// let obj = {}
// new Set (arr.map(el => el.date)).forEach(el=>{
//     obj[el] = arr.filter(item=>item.date == el)
// });

// 二
let result = [...new Set (arr.map(el => el.date))].map(el=> arr.filter(item=>item.date == el))
console.log(result);