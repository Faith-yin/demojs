/*
 * @Date: 2021-07-03 19:44:27
 * @information: cookie 封装方法
 */

var CookieUtil = {
  /**
   * 设置cookie
   * @param key key值
   * @param value value值
   * @param exp 有效时长 毫秒级的时间戳格式 默认当天23:59:59过期
   */
  setCookie: function (key, value, exp) {
    if (!key) return;
    let curDate = new Date()
    // 当前时间戳
    let curStamp = curDate.getTime()
    let leftTime = new Date()
    if (exp) {
      leftTime.setTime(curStamp + exp)
    } else {
      // 当前日期
      let curDay = curDate.toLocaleDateString()
      // 当日0点之前的时间戳
      let nowDayPassedStamp = 0
      nowDayPassedStamp = new Date(curDay).getTime() - 1
      // 当日已过去的时间戳
      let passedStamp = curStamp - nowDayPassedStamp
      // 当日剩余时间戳
      let leftStamp = 24 * 60 * 60 * 1000 - passedStamp
      leftTime.setTime(curStamp + leftStamp)
    }
    // 创建cookie
    document.cookie = key + '=' + value + ';expires=' + leftTime.toGMTString() + ';path=/'
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
  removeCookie: function (key) {
    let time = new Date(0) - 1
    this.setCookie(key, '', time)
  }
}


export default CookieUtil


