/*
 * @Date: 2021-01-02 16:24:51
 * @information: 防抖 和 节流
 */


function debounce(fun, ms=3000) {
  let timer;
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      console.log('参数-->', args);
      fun.apply(this, args)
    }, ms);
  }
}

// const test = (val) => {console.log('名称：', val || 'yyy')}

// const task = debounce(test)

// task(111)


function throttle(fun, ms=3000) {
  let canRun = true
  return function(...args) {
    if(!canRun) return;
    canRun = false
    setTimeout(() => {
      fun.apply(this, args)
      canRun = true
    }, ms);
  }
}

const test = (val) => {console.log('名称：', val || 'yyy')}

const task = throttle(test)

task(111)

