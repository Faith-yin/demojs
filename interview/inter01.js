/*
 * @Date: 2020-11-29 13:43:49
 * @information: [知乎](https://zhuanlan.zhihu.com/p/295320540) - 43
 */

/**
 * 要求设计 LazyMan 类，实现以下功能
 * 
 * LazyMan('Tony');
  // Hi I am Tony
  LazyMan('Tony').sleep(10).eat('lunch');
  // Hi I am Tony
  // 等待了 10 秒...
  // I am eating
  lunchLazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
  // Hi I am Tony
  // I am eating lunch
  // 等待了 10 秒...
  // I am eating
  dinerLazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');
  // Hi I am Tony
  // 等待了 5 秒...
  // I am eating lunch
  // I am eating dinner
  // 等待了 10 秒...
  // I am eating junk food
 */

class LazyManClass {
  constructor(name) {
    this.name = name
    this.queue = []
    console.log(`Hi I am ${name}`);
    setTimeout(() => {
      this.next()
    }, 0);
  }

  sleepFirst(time) {
    let fn = () => {
      setTimeout(() => {
        console.log(`等待了 ${time} 秒...`)
        this.next()
      }, time);
    }
    this.queue.unshift(fn)
    return this
  }

  sleep(time) {
    let fn = () => {
      setTimeout(() => {
        console.log(`等待了 ${time} 秒...`)
        this.next()
      }, time);
    }
    this.queue.push(fn)
    return this
  }

  eat(type) {
    let fn = () => {
      console.log(`I am eating ${type}`)
      this.next()
    }
    this.queue.push(fn)
    return this
  }

  next() {
    let fn = this.queue.shift()
    fn && fn()
  }
}

function LazyMan(name) {
  return new LazyManClass(name)
}

// LazyMan('Tony');
// LazyMan('Tony').sleep(10).eat('lunch');
// LazyMan('Tony').eat('lunch').sleep(10).eat('dinner');
LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');

