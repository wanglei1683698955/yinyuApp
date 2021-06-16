<template>
  <div id="Setting">
      <h1>
        <span class="iconfont icon-forward" @click="backbut"></span>
        <p>
          设置
        </p>
        <span>
        </span>
      </h1>


      <div class="SettingList">
        <div class="left">
          <h2>音效</h2>
          <h3></h3>
        </div>
        <div class="right">
          <van-switch v-model="checkedSwi" active-color="#fecb34"/>
        </div>
      </div>

      <div class="SettingList" @click="jianchagenxin">
        <div class="left">
          <h2>检查更新</h2>
          <h3></h3>
        </div>
        <div class="right">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>

      <div class="SettingList">
        <div class="left">
          <h2>用户协议</h2>
          <h3></h3>
        </div>
        <div class="right">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>

      <div class="SettingList">
        <div class="left">
          <h2>黑名单管理</h2>
          <h3>被拉黑的用户无法向你发起聊天</h3>
        </div>
        <div class="right">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
      
      <div class="SettingList" @click="clear">
        <div class="left">
          <h2>清除缓存</h2>
          <h3></h3>
        </div>
        <div class="right">
          <span>{{huancun}}MB</span>
        </div>
      </div>

      <div class="SettingList" @click="yichangjiance">
        <div class="left">
          <h2>异常检测</h2>
          <h3>如果遇到了无法解决的问题，请通过此方式提交诊断信息</h3>
        </div>
        <div class="right">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
      
      <div class="SettingList" @click="telChange">
        <div class="left">
          <h2>更换手机号</h2>
          <h3></h3>
        </div>
        <div class="right">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>

      <div class="SettingList" @click="removeUser">
        <div class="left">
          <h2>注销账号</h2>
          <h3></h3>
        </div>
        <div class="right">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>

      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="exit">
        退出登录
      </van-button>

      <h4>版本号 3.1.0(19886)</h4>

  </div>
</template>

<script>
import { Toast } from 'vant';
import "../../../public/iconfont/icon_WoDe/iconfont.css";
export default {
  data(){
    return {
      checkedSwi: true,
      huancun:"202.36"
    }
  },
  methods: {
    backbut(){
      this.$router.push({name:"wode"})
    },
    clear(){
      Toast('清除完成');
      this.huancun = "0"
    },
    jianchagenxin(){
      Toast('当前是最新版本');
    },
    yichangjiance(){
      Toast('当前无异常');
    },
    telChange(){
      this.$router.push({name:"telchange"})
    },
    removeUser(){
      this.$router.push({name:"removeuseryzm"})
    },
    exit(){
      window.localStorage.removeItem("YinYuToken")
      this.$router.push({name:"login"})
    }
  }
}
</script>

<style>
  .van-button--default{
    margin: 0 10%;
    width: 80%;
    height: 0.46rem;
    border-radius: 0.23rem;
    position: absolute;
    bottom: 0.2rem;
  }
</style>

<style scoped>
#Setting {
    width: 100%;
    height: 100%;
}
#Setting h1 {
  width: 100%;
  height: 0.5rem;
  display: flex;
  padding: 0 0.1rem;
  line-height: 0.5rem;
  border-bottom: 1px solid #ccc;
}
#Setting h1 span{
  width: 0.4rem;
  font-size: 0.2rem;
}
#Setting h1 p {
  flex: 1;
  text-align: center;
  font-size: 0.16rem;
  font-weight: 600;
}
#Setting .SettingList{
  height: 0.62rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.1rem;
}
#Setting .SettingList .left{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#Setting .SettingList .right{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#Setting .SettingList .left h2{
  font-size: 0.14rem;
  color: #333;
  font-weight: 600;
}
#Setting .SettingList .left h3{
  font-size: 0.12rem;
  color: #666;
}
#Setting h4{
  width: 100%;
  font-size: 0.12rem;
  color: #555;
  position: absolute;
  bottom: 0.74rem;
  text-align: center;
}
</style>