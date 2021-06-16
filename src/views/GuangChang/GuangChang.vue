<template>
  <div id="GuangChang">
      <div id="GuangChang_box">
     <div id="header">
     
        <router-link to="/guangchang/guanzhu"><span >关注</span>
        </router-link>
  
  <router-link to="/guangchang/wechat"> <span id="tui" >推荐</span></router-link>

      <div id="fabu">
          <span class="iconfont icon-xiangji" id="pub"></span>
          <span  @click="zou" class="coll">发布</span>
      </div>
      </div>
     <router-view></router-view>
      
      </div>
      <BottomBar :index="2"/>
  </div>
</template>

<script>

import { Toast } from 'vant';
import BottomBar from '../../components/Comm/BottomBar.vue';
import "../../../public/iconfont/icon_GuangChang/iconfont.css";
// import Wechat from '../../components/GuangChang/Wechat';
export default {
  components: { BottomBar},
  name:"GuangChang",
    data(){
        return {

        }
    },
     methods: {
    onClick(name, title) {
      Toast(title);
    },
    zou(){
      this.$router.push("/fabu")
    }
  },
}
</script>

<style>
.van-tabs__nav--line{
  padding-bottom: 0.1rem;
}
 .van-tabs__line{
 width: 0.2rem;
 background-color: chartreuse;
 }
 .van-tab{
   font-size: 0.14rem;
 }
 #header .router-link-active{
   color: black;
   font-size: 0.23rem;
   font-weight: bolder;
 }
</style>

<style scoped>
::-webkit-scrollbar{
  display: none;
}
 #GuangChang{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     padding: 0.1rem;
     overflow: auto;
 }
 #GuangChang_box{
     display: flex;
     flex-direction: column;
     flex: 1;
     overflow: auto;
 }
 #header{
     /* padding-top: 0.6rem;
     display: flex;
      justify-content: space-between; */
      height: 0.3rem;
      line-height: 0.2rem;
      font-size: 0.15rem;
      align-items: center;
      padding-top: 0.1rem;
      color: #ccc;
 }
 #tui{
   margin-left: 0.4rem;
 }
 /* position: absolute;
   right: 0.2rem; */
 #fabu{
   display:inline;
   color: black;
   width: 0.2rem;
   font-size: 0.2rem;
   margin-left: 1.7rem;
   font-weight: bolder;
   padding-top: 0rem;
 }
 /* ul{
    display: flex;
 }
 ul li{
     width: 0.57rem;
 } */
 #pub{
     margin-right: 0.03rem;
     font-size: 0.23rem;
 }
 .coll{
   color: black;
   font-size: 0.18rem;
 }
 a{
   color:#868686
 }
</style>
