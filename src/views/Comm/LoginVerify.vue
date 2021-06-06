<template>
  <div id="LoginVerify">
    <span class="iconfont icon-forward" @click="backBut"></span>
    <h1>输入验证码</h1>
    <h2>正在发送<span  @click="backBut">点击修改</span></h2>
    <div id="LoginYZ">
      <!-- 密码输入框 -->
      <van-password-input
        :value="value"
        :mask="false"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        length="4"
        gutter="18px"
        :info="info"
        :error-info="errorInfo"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        v-model="value"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
    </div>
    <button
      v-if="buttonShowFun"
      class="LoginVerifyBut1"
      @click="loginVerifyNext"
    >
      登录
    </button>
    <button v-else class="LoginVerifyBut2">登录</button>
  </div>
</template>

<script>
import "../../../public/iconfont/icon_WoDe/iconfont.css";
import Vue from "vue";
import { PasswordInput, NumberKeyboard } from "vant";

Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
export default {
  data() {
    return {
      value: "",
      showKeyboard: true,
      info:"重新发送验证码（60s）",
      errorInfo: '',
      buttonShowFun:false
    };
  },
  watch: {
    value(value) {
      if (value.length > 3) {
        this.value = this.value[0]+this.value[1]+this.value[2]+this.value[3]
        this.buttonShowFun = true
      }else{
          this.buttonShowFun = false
      }
    },
  },
  mounted () {
      this.Intval()
  },
  methods: {
      loginVerifyNext(){
        let ok = false
        console.log(this.value)
        if(ok){
          this.info = `验证通过`
        }else{
          this.info = `验证码错误`
        }
      },
      Intval(){
          let t = 60
          let s1 = setInterval(() => {
            if(t === 0){
                this.info = ``
                clearInterval(s1)
                return
            }
            this.info = `重新发送验证码（${--t}s）`
          }, 1000);
      },
      backBut(){
        this.$router.push({name:"login"})
      }
  }
};
</script>

<style scoped>
#LoginVerify {
  width: 100%;
  height: 100%;
  background: url("../../../public/images/PaiDui/Screenshot_musi.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#LoginVerify .icon-forward {
  font-size: 0.22rem;
  color: #000;
  width: 100%;
  line-height: 0.32rem;
  padding-left: 0.1rem;
}
#LoginVerify h1 {
  width: 100%;
  font-size: 0.2rem;
  color: #000;
  font-weight: 600;
  padding-left: 0.1rem;
  margin-top: 0.74rem;
}
#LoginVerify h2 {
  width: 100%;
  color: #999;
  font-size: 0.14rem;
  display: flex;
  align-items: center;
  line-height: 0.14rem;
  padding-left: 0.1rem;
  padding-top: 0.14rem;
}
#LoginVerify h2 span {
  color: rgb(53, 98, 245);
  margin-left: 0.1rem;
}
#LoginVerify #LoginYZ {
  width: 80%;
  margin-top: 0.64rem;
  display: flex;
  flex-direction: column;
}
#LoginVerify
  #LoginYZ
  .van-password-input
  .van-password-input__security
  .van-password-input__item {
  border: 1px solid #999;
  border-radius: 0.16rem;
}
#LoginVerify button {
  margin-top: 0.3rem;
  border: none;
  width: 78%;
  height: 0.56rem;
  border-radius: 0.28rem;
  font-size: 0.18rem;
  font-weight: 600;
  letter-spacing: 0.04rem;
}
#LoginVerify button.LoginVerifyBut1 {
  background-color: #fecb34;
  border: 3px solid #222;
  color: #000;
}
#LoginVerify button.LoginVerifyBut2 {
  background-color: #eee;
  border: 3px solid #ccc;
  color: #999;
}
</style>