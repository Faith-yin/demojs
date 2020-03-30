/*
 * @author: 殷鹏飞
 * @Date: 2020-03-30 16:22:49
 * @information: 
 */
class TestForm {
  //  校验表单错误的信息
  constructor(){
    this.cache = '';
  }
  //  挂载方法需要校验数据以及需要执行的方法
  testVal(val, rules){
    //  遍历表单
    for (let i = 0, rule; rule = rules[i++];){
      //  根据type类型执行不同的校验方法
      if (this.theRules[rule.methodName](val, rule.errMsg, rule.length)){
        //  如果校验失败返回校验信息
        this.cache = rule.errMsg;
        // console.log('信息：',this.cache);
        break;
      }
    }
  }

  //  开始校验
  start(){
    if (this.cache){
      console.log('出错了-->',this.cache);
      return this.cache;
    }
  }
  //  所有校验方法
  theRules = {
    isPhone(val, errMsg) {  //  校验手机号
      let reg = /^((13[0-9])|(14[5-9])|(15([0-3]|[5-9]))|(16[6])|(17[1-8])|(18[0-9])|(19[8-9]))\d{8}$/g;
      if (!reg.test(val)) {
        return errMsg;
      }
    },
    isLength(val, errMsg, length) {   // 校验长度
      if (val.length != length) {
        return errMsg;
      }
    },
    isMinLeng(val, errMsg, length) {   // 校验长度
      if (val.length <= length) {
        return errMsg;
      }
    },       
    isNull(val, errMsg) {   // 校验不能为空
      if (!val) {
        return errMsg;
      }
    },
    isNumber(val,errMsg){   //  校验是否为数组，校验两位小数
      let reg = /^\d+(\.\d{1,2})?$/;
      if(!reg.test(val)){
        return errMsg;
      }
    }
  }
}


const testForm = new TestForm()

  let val = '15631171788'
  let rules = [
    {methodName: 'isNull', errMsg: '参数不能为空'},
    {methodName: 'isLength', errMsg: '手机号位数不正确', length: 11},
    {methodName: 'isPhone', errMsg: '手机号格式不正确'},
  ]


testForm.testVal(val, rules)
testForm.start()