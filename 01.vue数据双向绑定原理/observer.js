/*
 * @author: 殷鹏飞
 * @Date: 2019-12-23 10:38:14
 * @information: 监听器
 */

/**
 * 把一个对象的每一项都转化成可观测对象
 */
function observable (obj) {
	if (!obj || Array.isArray(obj) || typeof obj !== 'object') {
		return;
	}
	let keys = Object.keys(obj);
	keys.forEach(key =>{
		defineReactive(obj,key,obj[key])
	})
	return obj;
} 

/**
 * 使一个对象转化成可观测对象
 */
function defineReactive (obj,key,val) {
	let dep = new Dep();
	Object.defineProperty(obj, key, {
		get(){
			dep.depend();
			// console.log(`${key}属性被读取了,当前值：${val}`);
			return val;
		},
		set(newVal){
			val = newVal;
			// console.log(`${key}属性被修改了,当前值：${val}`);
			dep.notify() //数据变化通知所有订阅者
		}
	})
}

/**
 * 消息订阅器Dep，用来容纳所有的“订阅者(Watcher)”。订阅器Dep主要负责收集订阅者，然后当数据变化的时候后执行对应订阅者的更新函数
 */
class Dep {
	constructor(){
		this.subs = []
	}
	//增加订阅者
	addSub(sub){
		this.subs.push(sub);
	}
	//判断是否增加订阅者
	depend () {
		if (Dep.target) {
			this.addSub(Dep.target)
		}
	}
	//通知订阅者更新
	notify(){
		this.subs.forEach(sub =>{
			console.log('-->',sub);
			sub.update()
		})
	}
	
}
Dep.target = null;