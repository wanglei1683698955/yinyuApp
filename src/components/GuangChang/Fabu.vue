<template>
    <div>
       <!-- <div id="fir">
           <div> <van-icon name="arrow-left" /><van-icon name="minus" /></div>
           <span>选择片段</span>
           <span>自建片段</span>
       </div> -->
       <input type="text" id="tex" placeholder="搜索你想唱的歌曲/歌名">
       <div id="sec">
           <van-tabs @click="onClick">
           <van-tab title="发现"><Diange></Diange></van-tab>
           
          <van-tab title="代唱">
              <van-divider />
              <div id="mus">
                  <img src="../../../public/images/GuangChang/music.png" alt="">
                  <p>暂无代唱片段</p>
                  <p>去收藏一些你想唱的歌吧，你和领唱只差一步之遥</p>
                  </div></van-tab>
          </van-tabs>
          
       </div>
    </div>
</template>
<script>
import Diange from "@/components/GuangChang/Diange.vue"


export default {
    name:"Fabu",
    components: {
        Diange
    },
    methods: {
        onClick(){
            
        }
    }
}
</script>
<style>
.van-icon{
    
    font:bolder;
}
</style>
<style scoped>
/* #fir{
    padding-top: 0.15rem;
    padding-bottom: 0.1rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e8e8e8;
} */
#tex{
    text-align: center;
    width: 3.2rem;
    height: 0.3rem;
    margin-top: 0.1rem;
    margin-left: 0.3rem;
    border-radius:0.2rem;
    background-color: #fafafa;
    border: 1px solid #e9e9e9;
}
#sec{
    /* display: flex;
    justify-content: space-evenly; */
    height: 0.33rem;
    line-height: 0.33rem;
    font-size: 0.12rem;
    border-bottom: 1px solid #e8e8e8;
}
#mus{
    width: 0.75rem;
    height: 0.75rem;
    margin-top: 1.34rem;
    
}
#mus img{
    width:100%;
    margin-left: 1.45rem;
}
p{
    width: 3.5rem;
    text-align: center
    
}
</style>