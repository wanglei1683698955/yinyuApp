<template>
    <div id="geren">
        <div id="tou">
            <div id="xiang">
                <img :src="work.touxiang" >
                <!-- <img src="../../../public/images/GuangChang/speech1.png" /> -->
                </div>
        </div>
        <p id="ming">{{work.uname}}</p>
        <p><span id="col">id</span>10950707</p>
        <div class="city">
            <p id="clud">
                <img src="../../../public/images/GuangChang/age.png" alt=""><span>20岁</span></p>
                <span class="hong">滁州市</span>
                <span class="yellow">狮子座</span>
        </div>
        <div id="hi">
             <dl>
            <dt>308</dt>
            <dd>粉丝</dd>
         </dl>
            <dl>
            <dt>23</dt>
            <dd>关注</dd>
         </dl>
            <dl>
            <dt>179</dt>
            <dd>人气值</dd>
         </dl>
            <dl>
            <dt>150</dt>
            <dd>送出钻石</dd>
         </dl>
        </div>
        <div id="zi">
             <span class="change"><router-link to="/inner/Ziliao">资料</router-link></span>
            <span class="change"><router-link to="/inner/Wechat">作品</router-link></span>
            <span id="right">共<span id="count">{{$store.state.GuangChangm.count}}</span>次赞</span>|<span>20次当选领唱</span>
        </div>
       <router-view></router-view>
    </div>
</template>
<script>
import axios from "axios";
export default {
    props:["id"],
    data () {
        return {
          work:{}  
        }
    },
    mounted () {
        console.log(this.id)
        axios({
            url: "/xxxapi/work/one",
            // url:"/work",
            method:"get",
            params:{
            wid:this.id
            }
        }).then((ok)=>{
            this.work = ok.data.data;
            console.log(ok);
        })
    }
}
</script>
<style>
#zi .router-link-active{ 
   color: black;
   font-size: 0.3rem;
   font-weight: bolder;
}
</style>
<style scoped>
#geren{
   padding: 0  0.1rem;
   border-top-left-radius: 0.1rem;
 } 

#tou{
    height: 0.7rem;
    position: absolute;
    margin-top: -0.3rem;
    z-index: 100;
}
#tou #xiang{
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    overflow: hidden;
}
#tou img{
    width: 100%;
}

#ming{
    padding-top: 0.5rem;
    font-size: 0.2rem;
    font-weight: bolder;
    padding-bottom: 0.1rem;
}
#col{
    background-color: black;
    border-radius: 0.03rem;
    display: inline-block;
    width: 0.2rem;
    text-align: center;
    margin-top: 0.1rem;
    color: blanchedalmond;
}
#hi{
    display: flex;
    justify-content: space-around;
}
#hi dt{
    height: 0.3rem;
    font-size: 0.28rem;
    font-weight: bolder;
    text-align: center;
}
#hi dd{
    color: #868686;
    text-align: center;
    font-size: 0.14rem;
    padding-bottom: 0.25rem;
}
#right{
    margin-left: 0.8rem;
}

a{
color: #868686;
font-size: 0.22rem;
    
    margin-right: 0.15rem;
}
#clud{
    width: 0.6rem;
    height: 0.2rem;
    display: inline-block;
    background-color:forestgreen;
    border-radius: 0.05rem;
    text-indent: 0.1rem;
    display: flex;
    align-items: center;
    color: white;
    line-height: 0.2rem;
}
#clud img{
    width: 0.1rem;
}
#clud span{
   display: inline-block; 
}
.hong{
    background-color: fuchsia;
    display: inline-block;
    width: 0.5rem;
    height: 0.2rem;
     border-radius: 0.05rem;
     text-align: center;
     margin: 0 0.2rem;
     color: white;
     line-height: 0.2rem;
}
.yellow{
    background-color: gold;
    display: inline-block;
    width: 0.5rem;
    height: 0.2rem;
     border-radius: 0.05rem;
      text-align: center;
      color: white;
      line-height: 0.2rem;
}
.city{
    padding-top: 0.05rem;
     display: flex;
    align-items: center;
    padding-bottom: 0.25rem;
}
</style>