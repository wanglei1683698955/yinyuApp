<template>
    <div id="diange">
        <p>歌星点歌</p>
        <div id="yi">
            <ul>
            <router-link to="/geshou"><li>周杰龙</li></router-link>
            
            <li>田赋龙</li>
            <li>徐炳龙</li>
        </ul>
        <ul>
            
             <li v-for="(gs, index) in geshou" :key="index">{{gs}}</li>
           
            <!-- <li>周杰龙</li>
            <li>田赋龙</li>
            <li>徐炳龙</li> -->
        </ul>
        </div>
        
         <p>歌星点歌</p>
        <div id="er">
            <ul>
            <li>我我</li>
            <li>下山</li>
            <li>现在的我</li>
            <li>下山</li>
            <li>现在的我</li>
        </ul>
        <ul>
             
            <li>羡慕</li>
            <li>相思枕</li>
            <li>香雪迟</li>
            <li>想见你想见你</li>
        </ul>
        <ul>
             <li v-for="(g, index) in ge" :key="index">{{g}}</li>
            <!-- <li>想念</li>
            <li>像个孩子</li>
            <li>嚣张</li> 
            <li>笑场</li>
            <li>嚣张</li> -->
        </ul>
        </div>
        <p>小众片段</p>
        <div class="sel">
            <p>那时你说的  我们天作之合</p>
            <p>然后怎么了  被时间捉弄了</p>
            <p class="last">《当我唱起这首歌》星弟</p>
        </div>
        <div class="sel">
            <p>那时你说的  我们天作之合</p>
            <p>然后怎么了  被时间捉弄了</p>
            <p class="last">《当我唱起这首歌》星弟</p>
        </div>
        <div class="sel">
            <p>那时你说的  我们天作之合</p>
            <p>然后怎么了  被时间捉弄了</p>
            <p class="last">《当我唱起这首歌》星弟</p>
        </div>
    </div>
</template>
<script>

import axios from "axios";
export default {
    data(){
        return{
            ge:[],
            geshou:[]
        }
    },
    mounted () {
        axios({
            // url:"gename",
      url: "/xxxapi/work/ge",
      method: "get",
    }).then((res) => {
        // this.ge = res.data;
      this.ge = res.data.data;
      console.log(this.ge)
    }),
     axios({
            // url:"gename",
      url: "/xxxapi/work/geshou",
      method: "get",
    }).then((res) => {
        // this.ge = res.data;
      this.geshou = res.data.data;
      console.log(this.ge)
    })
  }
   
}
</script>
<style scoped>
::-webkit-scrollbar{
  display: none;
}
#diange #yi,#diange #er{
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 0.2rem;
}
#diange #yi ul{
    display: flex;
    justify-content:space-evenly;
}
#yi ul li{
    padding: 0.01rem 0.25rem;
    background-color: #f2f2f2;
    border-radius:0.15rem;
    margin-top: 0.15rem;
    color: #5e5e5e;
    font-weight: 800;
    font-size: 0.1rem;
}
#diange p{
    font-weight: bolder;
     font-size: 0.1rem;
}
#diange #er{
    width: 100%;
    overflow: auto;
}
#diange #er ul{
    width: 100%;
    height: 0.3rem;
    /* overflow: auto; */
    display: flex;
    justify-content:space-around;
    line-height: 0.2rem;
    margin: 0.2rem 0.1rem;
}
#er ul li{
    padding: 0.04rem 0.12rem;
    border:#9f9f9f 1px solid;
    /* background-color: #f2f2f2; */
    border-radius:0.15rem;
    color:#9f9f9f ;
    font-size: 0.1rem;
}
.sel{
    height:1rem;
    border-radius:0.15rem;
    border:black 1px solid;
    padding-top: 0.15rem;
width: 90%;
margin-left: 5%;
background-color: #fecb34;
margin-top: 0.2rem;
}
.sel p{
    margin-left: 0.3rem;
    line-height: 0.2rem;
    font-weight: bolder;
}
.sel .last{
    margin-left: 0.3rem;
    padding:0.1rem 0;
    color: #b68a27;
}
</style>