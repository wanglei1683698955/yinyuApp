<template>
  <div id="YouXi">
      <div id="YouXi_box">
          <Banner type="游戏"></Banner>
          <ul id="YouXi_box-top">
             <li @click="tiaozhuan">  发烧友 </li>
           
             <li>商城</li>
               <li @click="niudan">扭蛋  </li>
          </ul>
          <div id="YouXi_box-conter">
               <div id="YouXi_box-top-1">
                  <router-link to="/Lts"><img src="../../../public/images/YouXi/jingeqiangchang.jpg" alt=""></router-link> 
               </div>
              <div id="YouXi_box-top-2">
                   <img src="../../../public/images/YouXi/yichangdaodi.png" alt="">
              </div>
              <div id="YouXi_box-top-3">
                   <img src="../../../public/images/YouXi/rengejiechang.png" alt="">
              </div>
          </div>
          <div id="YouXi_box-bottom">
              <img src="../../../public/images/YouXi/zhandui.png" alt="">
          </div>
      </div>
      <BottomBar :index="1"/>
  </div>
</template>

<script>
import BottomBar from '../../components/Comm/BottomBar.vue'
import Banner  from  '../../components/Youxi/Banner.vue'
export default {
  components: { BottomBar,Banner},
    data(){
        return {

        }
    },methods:{
        tiaozhuan(){
            this.$router.push({
                path:"Fashao"
            })
        },
        niudan(){
            this.$router.push({
                path:"Niudan"
            })
        }
    }
}
</script>

<style scoped>
 #YouXi{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     
   
 }
 #YouXi_box{
     display: flex;
     flex-direction: column;
     flex: 1;
     overflow: auto;
     background: url("../../../public/images/PaiDui/Screenshot_musi.png") no-repeat 100% 100%;
     background-size: 100% 100%; 
     margin:0 0.14rem;
 }
 #YouXi_box-top{
     width: 100%;
     height: 0.4rem;
     margin-top: 0.06rem;
 
     display: flex;
     justify-content: space-between;
    
     

 }
 #YouXi_box-top li{
width:1.1rem;
background:url("../../../public/images/YouXi/TOPbck.png");
 font-size: 0.15rem;
     font-weight: 1000;
     text-align: center;
     line-height: 0.4rem;
     border-radius: 0.1rem;

 }
 #YouXi_box-conter{
     width: 100%;
     margin-top: 0.09rem;

 }
 #YouXi_box-top-1{
     width:48%;
     height: 1.3rem;
 
     float: left;
     border-radius: 0.1rem;

 }
 #YouXi_box-top-2{
     width:48%;
     height: 2.7rem;

     float:right;
     border-radius: 0.1rem;
 }
#YouXi_box-top-3{
     width:48%;
   height: 1.3rem;

     margin-top:1.4rem ;
     border-radius: 0.1rem;
 }
  #YouXi_box-top-1 img, #YouXi_box-top-2 img, #YouXi_box-top-3 img, #YouXi_box-bottom img{
width: 100%;
height: 100%;
  }
 #YouXi_box-bottom{
     width: 100%;
     height: 1rem;
 
     border-radius: 0.1rem;
      margin-top:0.03rem ;
 }
</style>