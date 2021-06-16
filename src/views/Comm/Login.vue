<template>
  <div id="Login">
      <img src="../../../public/images/Comm/yinyu_logo.png" alt="" class="LoginLogo">
      <h1>使用手机号登录</h1>
      <div class="LoginIn">
          <p>+86</p>
          <span class="iconfont icon-youjiantou"></span>
          <input type="text" v-model="phoneNum">
      </div>
      <button v-if="buttonShowFun" class="LoginBut1" @click="loginNext">立即登录</button>
      <button v-else class="LoginBut2">立即登录</button>
      <h2>手机号一键登录></h2>
      <h3>
          <input type="checkbox" v-model="checkBut">
          登录即表示同意<span>《用户协议》</span>和<span>《隐私政策》</span>
      </h3>
  </div>
</template>

<script>
import '../../../public/iconfont/icon_WoDe/iconfont.css'

export default {
    data(){
        return {
            buttonShow:false,
            checkBut:true,
            phoneNum:""
        }
    },
    computed: {
        buttonShowFun(){
            return this.phoneNum.length === 11 && this.checkBut
        }
    },
    methods: {
        loginNext(){
            this.$router.push({name:"loginverify",query:{pho:this.phoneNum}})
        }
    }
}
</script>

<style scoped>
    #Login{
        width: 100%;
        height: 100%;
        background: url("../../../public/images/PaiDui/Screenshot_musi.png");
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }
    #Login .LoginLogo{
        margin: 0.6rem 0;
        height: 1.4rem;
    }
    #Login h1{
        width: 100%;
        font-size: 0.2rem;
        text-indent: 0.36rem;
        color: #000;
        font-weight: 600;
    }
    #Login .LoginIn{
        margin-top: 0.5rem;
        height: 0.5rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #999;
        padding: 0 0.1rem;
    }
    #Login .LoginIn p{
        font-size: 0.2rem;
        font-weight: 600;
    } 
    #Login .LoginIn span{
        line-height: 0.18rem;
        height: 0.18rem;
        font-size: 0.14rem;
        font-weight: 600;
        color: #666;
        padding: 0 0.04rem;
        border-right: 2px solid #999;
    } 
    #Login .LoginIn input{
        border: none;
        background:none;
        font-size: 0.18rem;
        width: 1.3rem;
        margin-left: 0.1rem;
    } 
    #Login button{
        margin-top: 0.3rem;
        border: none;
        width: 78%;
        height: 0.56rem;
        border-radius: 0.28rem;
        font-size: 0.18rem;
        font-weight: 600;
        letter-spacing:0.04rem;
    } 
    #Login button.LoginBut1{
        background-color: #fecb34;
        border: 3px solid #222;
        color: #000;
    } 
    #Login button.LoginBut2{
        background-color: #eee;
        border: 3px solid #ccc;
        color: #999;
    } 
    #Login h2{
        color: #999;
        font-size: 0.14rem;
        margin-top: 0.2rem;
    } 
    #Login h3{
        color: #999;
        font-size: 0.12rem;
        position: absolute;
        bottom:0.1rem;
        display: flex;
        align-items: center;
    } 
    #Login h3 input{
        margin-right:0.06rem;
    } 
    #Login h3 span{
        color: rgb(53, 98, 245);
    } 

</style>