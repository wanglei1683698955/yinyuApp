<template>
  <div id="Lts">
    <div id="Lts-top">
      <div  id="Lts-top-t">
        <ul>
        <li class="iconfont" @click="getBack">&#xe60e;</li>
          <li class="iconfont">劲歌抢唱 &#xe6d0;</li>
          <li class="iconfont" style="font-size:0.2rem">&#xe61d;&nbsp;&#xe664;</li>
        </ul>
      </div>
      <div id="Lts-top-c">
  <img src="../../../public/images/YouXi/34.png" alt="">
      </div>
    </div>
    <div id="Lts-top-b-1">
     <ul id="Lts-top-b">
          <li  v-for="(quming,i) in qumings" :key="i">
              <p>{{quming.name}}</p>
              <i><span>203</span>人正在嗨聊</i>
          </li>
          
      </ul>
      <span></span>
     </div>
    <div id="Lts-con"></div>
    <div id="Lts-buttom">
      <ul id="Lts-buttom-t">
        <li class="Lts-buttom-t-1"><span>我去</span>进入大厅</li>
         <li class="Lts-buttom-t-2"><span>1354</span>人在大厅</li>
      </ul>
      <div id="Lts-buttom-b">
<input type="text" placeholder="说点什么吧~">
<i></i><span>发</span>
<div class="Lts-buttom-b-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../../public/iconfont/icon_YouxXi/font_ex4uej7wmgn/iconfont.css";
import "../../../public/iconfont/icon_YouxXi/font_a8wyhy94ems/iconfont.css";
export default {
  name: "Lts",
  data(){
    return {
      qumings:[
        {
          name:"中华小曲库"
        },{
          name:"新潮热歌"
        },{
          name:"量版KTV"
        },{
          name:"林俊杰"
        }
      ]
    }
  },
  methods:{
    getBack(){
       this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
#Lts {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
}
#Lts-top {
  width: 100%;

  background-color: blueviolet;
  flex: 1;
}
#Lts-con {
  width: 100%;
  height: 4.45rem;
 background: url("../../../public/images/YouXi/bg_game_hall_order.png");
}

#Lts-top-t{
    width: 100%;
}
#Lts-top-t ul{
    width: 95%;
    height: 0.43rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    color: white;
    line-height: 0.43rem;
}
#Lts-top-c{
    width: 95%;
    margin: auto;
    height: 0.63rem;
    border-radius: 0.1rem;
    overflow: hidden;
   
}
#Lts-top-c img{
    width:100%;
    height: 100%;
}
#Lts-top-b-1{
width: 100%;
background-color: blueviolet;height: 1.62rem;
}
#Lts-top-b{
    width: 95%;
    height: 1.28rem;
    margin:0 auto;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
      position: absolute;
    left: 0.1rem;
    top: 1.1rem;
}

#Lts-top-b li{
    width: 48%;
 height: 0.54rem;
    text-align: center;
     background: url("../../../public/images/YouXi/LTSb.png");
     background-size:100% ;
     border-radius:0.1rem ;
     padding: 0.09rem; 
}
#Lts-top-b li p{

  font-size: 0.2rem;
  color: #ffffff;
  font-weight: 600;
}
#Lts-top-b li i{
   font-size: 0.12rem;
  color: #f6f6f6;

}

/* 尾部 */
#Lts-buttom {
  width: 100%;
  height: 0.88rem;
 background: url("../../../public/images/YouXi/bg_game_hall_order.png");
}
#Lts-buttom-t{
  width: 100%;
 height:0.3rem;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
font-size: 0.14rem;
line-height: 0.3rem;
}

.Lts-buttom-t-1{
  margin-left: 0.1rem;
 color: white;
}
.Lts-buttom-t-1 span{
  color: #ffbc3a;
}
.Lts-buttom-t-2{
  padding-right: 0.2rem;
  width: 30%;
  background: #5e23bb;
 border-bottom-left-radius: 0.1rem;
  border-top-left-radius: 0.1rem;
  text-align: center;
  color: white;
}
#Lts-buttom-b{
  width: 95%;
  height: 0.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}
#Lts-buttom-b input{
  width: 65%;
  height: 0.35rem;
  border-radius:0.2rem ;
  text-indent:0.32rem;
}
#Lts-buttom-b i{
  display: block;
  width: 10%; height: 0.35rem;
  background: url("../../../public/images/YouXi/ic_summon_team.png");
  background-size:100% ;
}
#Lts-buttom-b span{
   display: block;
  width:20%; height: 0.35rem;
  background: url("../../../public/images/YouXi/room_bg_budding_task_confirm.png");
  background-size:100%  100%;
  line-height:0.35rem ;
  text-align: center;
  color:white;
}
.Lts-buttom-b-1{
width: 8%;
    height: 0.3rem;  background: url("../../../public/images/YouXi/im_input_menu_emoj.png");  background-size:100%  100%;
  position: absolute;
  left: 0.15rem;
  bottom:  0.18rem;
}
</style>