/*
 * @Date: 2020-06-24 14:04:44
 * @information: 计时器this指向
 */ 
/**
 * 浏览器中的 setTimeout 方法有些特殊：它为函数调用设定了 this=window（对于 Node.js，this 则会变为计时器（timer）对象，但在这儿并不重要）。所以对于 this.firstName，它其实试图获取的是 window.firstName，这个变量并不存在。在其他类似的情况下，通常 this 会变为 undefined
 */


let user = {
  name: 'ypf',
  sayHi() {
    console.log(`hello, ${this.name}`);
  }
}

setTimeout(user.sayHi.bind(user), 1000)

// setInterval(user.sayHi.bind(user), 1000)


