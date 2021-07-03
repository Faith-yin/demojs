/*
 * @Date: 2021-07-03 18:36:18
 * @information: cookie 封装方法
 */

var CookieUtil = {
  /**
   * 设置cookie
   * @param key key值
   * @param value value值
   * @param unit 时间单位：year, month, day, hour, min, second
   * @param val 有效时长 默认当天23:59:59过期
   */
  setCookie: function (key, value, unit, val) {
    if (!key) return;
    let curDate = new Date()
    // 时间戳
    let curStamp = curDate.getTime()
    let leftTime = new Date()
    // 转换时间参数
    let timeResult = unit && val && this.timeToStamp(unit, val)
    if (timeResult) {
      leftTime.setTime(curStamp + timeResult)
    } else {
      // 当前日期
      let curDay = curDate.toLocaleDateString()
      // 当日0点之前的时间戳
      let nowDayPassedStamp = 0
      nowDayPassedStamp = new Date(curDay).getTime() - 1
      // 当日剩余时间戳
      let leftStamp = 24 * 60 * 60 * 1000 - nowDayPassedStamp
      leftTime.setTime(curStamp + leftStamp)
    }
    // 创建cookie
    document.cookie = key + '=' + value + ';expires=' + leftTime.toGMTString() + ';path=/'
  },

  /**
   * 获取时间参数格式
   */
  timeToStamp (unit, val) {
    const transConfigArr = [
      { type: 'year', time: 365 * 24 * 60 * 60 * 1000 },
      { type: 'month', time: 30 * 24 * 60 * 60 * 1000 },
      { type: 'day', time: 24 * 60 * 60 * 1000 },
      { type: 'hour', time: 60 * 60 * 1000 },
      { type: 'min', time: 60 * 1000 },
      { type: 'second', time: 1000 },
    ]
    let obj = transConfigArr.find(el.type == unit)
    if (!obj) return;
    let stamp = val * obj.time
    return stamp
  },

  /**
   * 获取cookie
   */
  getCookie: function (key) {
    if (!key) return;
    let cookieStr = document.cookie.replace(/\s/g, '')
    let cookieArr = cookieStr.split(';')
    for (let i = 0; i < cookieArr.length; i++) {
      let keyArr = cookieArr[i].split('=')
      if (keyArr[0] == key) return keyArr[1]
    }
  },

  /**
   * 删除cookie
   */
  removeCookie: function (name) {
    this.setCookie(name, 1, -1)
  }

}





