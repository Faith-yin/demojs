/*
 * @Date: 2020-06-26 10:00:34
 * @information: 时间戳转换成时间格式
 */ 

function transTimeStamp(val) {
  let dateTime
  // 判断是秒级(10) 还是 毫秒级(13) 的时间戳
  if(String(val).length == 10) {
    dateTime = new Date(parseInt(val) * 1000)
  } else {
    dateTime = new Date(parseInt(val))
  }
  let year = dateTime.getFullYear();
  let month = dateTime.getMonth() + 1;
  let day = dateTime.getDate();
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();
  let second = dateTime.getSeconds();
  String(month).length == 1 && (month = `0${month}`)
  String(day).length == 1 && (day = `0${day}`)
  String(hour).length == 1 && (hour = `0${hour}`)
  String(minute).length == 1 && (minute = `0${minute}`)
  String(second).length == 1 && (second = `0${second}`)
  let timeSpanStr = `${year}-${month}-${day}`
  return timeSpanStr;
}


console.log(transTimeStamp(1593165925000))


