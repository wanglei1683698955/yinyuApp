<template>
  <div id="telChange">
    <span class="iconfont icon-forward" @click="backBut"></span>
    <h1>输入验证码</h1>
    <h2>{{tp}}</h2>
    <div id="LoginYZ2">
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
      class="telChangeBut1"
      @click="telChangeNext"
    >
      更换
    </button>
    <button v-else class="telChangeBut2">更换</button>
  </div>
</template>

<script>
import "../../../public/iconfont/icon_WoDe/iconfont.css";
import Vue from "vue";
import { PasswordInput, NumberKeyboard } from "vant";
import {SendVir} from '@/api/SendVir.js'

Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
export default {
  data() {
    return {
      value: "",
      showKeyboard: true,
      info:"重新发送验证码（60s）",
      errorInfo: '',
      buttonShowFun:false,
      tp:"正在发送"
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
      SendVir("/hdapi/users/sms",{tel:this.$route.query.pho}).then((ok)=>{
        if(ok.data.code === 0){
          this.tp = "已发送至"+" "+this.$route.query.pho
        }else {
          this.tp = "发送失败"+" "+this.$route.query.pho
        }
      }).catch(()=>{
          this.tp = "发送失败"+" "+this.$route.query.pho
      })
      this.Intval()
  },
  methods: {
      telChangeNext(){
        
        SendVir("/hdapi/users/login",{tel:this.$route.query.pho,num:this.value}).then((ok)=>{
          console.log(ok)
        if(ok.data.code === 0){
          window.localStorage.setItem("YinYuToken",ok.data.data.token)
          this.$store.commit("userChange",ok.data.data)
          this.tp = "验证通过"
          this.$router.push({name:'paidui'})
          console.log(this.$store.state.XiaoXim.user)
        }else {
          this.tp = "验证失败"
        }
        }).catch(()=>{
            this.tp = "验证异常"
        })
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
        this.$router.push({name:"setting"})
      }
  }
};
</script>

<style scoped>
#telChange {
  width: 100%;
  height: 100%;
  background: url("../../../public/images/PaiDui/Screenshot_musi.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#telChange .icon-forward {
  font-size: 0.22rem;
  color: #000;
  width: 100%;
  line-height: 0.32rem;
  padding-left: 0.1rem;
}
#telChange h1 {
  width: 100%;
  font-size: 0.2rem;
  color: #000;
  font-weight: 600;
  padding-left: 0.1rem;
  margin-top: 0.74rem;
}
#telChange h2 {
  width: 100%;
  color: #999;
  font-size: 0.14rem;
  display: flex;
  align-items: center;
  line-height: 0.14rem;
  padding-left: 0.1rem;
  padding-top: 0.14rem;
}
#telChange h2 span {
  color: rgb(53, 98, 245);
  margin-left: 0.1rem;
}
#telChange #LoginYZ2 {
  width: 80%;
  margin-top: 0.64rem;
  display: flex;
  flex-direction: column;
}
#telChange
  #LoginYZ2
  .van-password-input
  .van-password-input__security
  .van-password-input__item {
  border: 1px solid #999;
  border-radius: 0.16rem;
}
#telChange button {
  margin-top: 0.3rem;
  border: none;
  width: 78%;
  height: 0.56rem;
  border-radius: 0.28rem;
  font-size: 0.18rem;
  font-weight: 600;
  letter-spacing: 0.04rem;
}
#telChange button.telChangeBut1 {
  background-color: #fecb34;
  border: 3px solid #222;
  color: #000;
}
#telChange button.telChangeBut2 {
  background-color: #eee;
  border: 3px solid #ccc;
  color: #999;
}
</style>