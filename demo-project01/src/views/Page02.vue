<!--
 * @author: 殷鹏飞
 * @Date: 2020-03-29 10:14:20
 * @information: 手机验证码的实现
-->
<template>
  <div id="page02">
    <el-input class="input-phone"
              v-model="phoneValue" 
              placeholder="输入手机号"
              maxlength=11></el-input>
    <el-input class="input-code"
              v-model="codeValue" 
              maxlength=4
              placeholder="输入验证码">
      <el-button  slot="suffix" 
                  type="text" 
                  :disabled="disabledMark"
                  @click="getCode">{{btnText}}</el-button>
    </el-input>
    <el-button  type="primary"
                @click="register">立即注册</el-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      // 输入框值：手机号
      phoneValue: null,
      // 输入框值：验证码
      codeValue: null,
      // 按钮文案
      btnText: '获取验证码',
      // 右侧按钮禁用标志
      disabledMark: false,
      // 倒计时
      time: 0,
      // 定时器
      timeInterval: null,
      // 随机生成验证码
      validCode: null,
      // 对发送短信的手机号(用于最后校验用户是否又改手机号了)
      validPhone: null,
    }
  },
  methods: {
    // 校验手机号格式
    checkPhone(val) {
      let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
      let mark = reg.test(val)
      return mark
    },
    // 设值定时器
    setTimer() {
      // 若有之前的定时器，先清除
      this.timeInterval && clearInterval(this.timeInterval)
      this.timeInterval = setInterval(() => {
        this.timer()
      }, 1000)
    },
    // 倒计时功能
    timer() {
      if(this.time > 0) {
        this.time --
        this.btnText = this.time + 's后重新获取验证码'
      } else {
        this.time = 0
        this.btnText = '获取验证码'
        this.disabledMark = false
      }
    },
    // 生成随机数 验证码
    createRandomNumber() {
      let ran = Math.floor(Math.random() *10000)
      if(ran.toString().length < 4) return this.createRandomNumber()
      this.validCode = ran
      return ran
    },
    // 获取手机验证码
    getCode() {
      // 校验手机号格式
      let mark = this.checkPhone(this.phoneValue)
      if(!mark) return this.$message.error('请输入正确手机号')
      // 生成随机验证码
      let ran = this.createRandomNumber()
      // 将手机号暂存，用户注册时检验还是不是这个手机号
      this.validPhone = this.phoneValue
      this.disabledMark = true
      this.time = 120
      // 请求接口 发送验证码
      axios.post(`/api/sms/sendcode.action`,{
        mobile: this.phoneValue, // 手机号
        authCode: ran,  // 自定义验证码
      }).then(res => {
        this.$message.success('发送成功，请注意查收')
        // 调用开启定时器函数
        this.setTimer()
        console.log('返回值',res);
      }).catch(res => {
        this.$message.error('发送验证码出错')
      })
    },
    // 注册
    register() {
      let {phoneValue, codeValue, validPhone, validCode} = this
      // 校验手机号 和 验证码
      if(phoneValue != validPhone) return this.$message.error('请输入正确手机号')
      if(codeValue != validCode) return this.$message.error('验证码填写有误')
      this.$message.success('注册成功')
    },
  },
  mounted() {

  }
}
</script>

<style lang="scss">
#page02 {
  width: 800px;
  margin: 100px auto;

  .input-phone {
    width: 300px;
  }
  .input-code {
    width: 300px;
  }


}
</style>