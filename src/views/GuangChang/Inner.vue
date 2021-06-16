<template>
<div id="inner">
   <div class="swiper-container">
     <router-link to="/guangchang"><div id="back">
       <span class="iconfont">&#xe604;</span>
        
     </div></router-link>

    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(pics,index) in picture" :key="index">
           <!-- <img src="../../../public/images/GuangChang/bg1.jpg" /> -->
          <img :src="pics.pic" >
          <!-- <p>{{pic.id}}</p> -->
          </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>  
  <Geren :id="$route.query.id" ></Geren>

</div>
  
</template>
<script>
import Geren from "@/components/GuangChang/Geren";
import Swiper from "swiper";
import axios from 'axios';
export default {
  
    data () {
        return {
            picture:[],
            
        }
    },
    mounted () {
  //        new Swiper ('.swiper-container', {
  //          speed:300,
  //          autoplay:true,
  //   direction: 'horizontal', // 垂直切换选项
  //   loop: true, // 循环模式选项
    
  //   // 如果需要分页器
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
    
  //   // 如果需要前进后退按钮
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
    
  //   // 如果需要滚动条
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // })   
  // ,
  axios({
    url:"/xxxapi/paiduitp/all",
      // url:"/picture",
      methods: "get",
  }).then(res=>{
      
       this.$nextTick(function(){
            new Swiper ('.swiper-container', {     
              loop:true,
              autoplay:true,
              speed:300,   
              pagination: {
                el: '.swiper-pagination',
              },        
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
          })
          
        });
        this.picture=res.data.data;
      console.log(res.data.data)
  }) 
    },
components: {
  Geren
}
 
   
}
</script>
<style >

@import url(../../assets/css/swiper.css);
.swiper-container {
    width: 100%;
    /* height:3rem; */
}  
.swiper-wrapper .swiper-slide img{
  width: 100%;
  height: 2rem;
}
 .swiper-button-next:after ,.swiper-button-prev:after{
   font-size: 0.2rem;
 }
 

</style>
<style scoped>
#back{
  position: absolute;
  left: 0.15rem;
  top:0.2rem;
  color: wheat;
  z-index: 200;
}
</style>