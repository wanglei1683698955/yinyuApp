<template>
  <div id="Banner-YX">
    <div id="Banner-YX-T">
      <h1>{{type}}</h1>
   <span @click="oaihang">排行榜<i id="touxiang">
          <van-swipe
            style="height: 100px"
            :vertical="true"
            :touchable="false"
            :autoplay="3000"
            :show-indicators="false"
            :loop="true">
           
            <van-swipe-item class="tupian" v-for="(v,index) in imgs" :key="index"><img :src="v.img"/></van-swipe-item> 
            </van-swipe></i></span>
    </div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(v,index) in img1" :key="index"
        ><img :src="v.pic" ></van-swipe-item>
      
    </van-swipe>
  </div>
</template>
<script>

import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import axios from "axios"

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  props:["type"],
  data() {
    return {
      imgs:[],
      img1:[]
    };
  },
  created(){
    axios({
      url:"/xxxapi/imgs/all",
      method:"get"
    }).then(res=>{
      this.imgs=res.data.data;
    }),
    axios({
      url:"/xxxapi/paiduitp/all",
      method:"get"
    }).then(res=>{
      this.img1=res.data.data;
    })
  },
  methods:{
    oaihang(){
       this.$router.push({
         path:"Rank"
       });
    }
  }
};
</script>
<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  line-height: 1.5rem;
  text-align: center;
  background-color: #39a9ed;
  border-radius: 0.1rem;
}
.my-swipe {
  width: 3.47rem;
  height: 1.5rem;
}
.my-swipe img {
  width: 100%;
  height: 1.5rem;
}
#Banner-YX-T {
  display: flex;
  justify-content: space-between;
  font-size: 0.14rem;
  margin-top: 0.27rem;
  margin-bottom: 0.08rem;
  height: 0.17rem;
}
#Banner-YX-T h1 {
  font-size: 0.17rem;
  color: #030303;
}
#Banner-YX-T span {
  display: flex;
  text-align: center;
  height: 0.17rem;
  line-height: 0.17rem;
}
#touxiang {
  width: 0.35rem;
  height: 0.35rem;
  display: block;    margin-top: -0.1rem;
  border-radius: 50%;
overflow: hidden;
}
#touxiang img{
    width: 100%;
    height: 50%;
 
}
</style>
