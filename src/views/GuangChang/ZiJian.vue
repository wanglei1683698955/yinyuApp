<template>
    <div id="zijian">
        <div id="luyou">
        <router-link to="FaBu"> <div > <span class="iconfont">&#xe604;</span></div></router-link>
          
           <span>自建片段</span>
        </div>
        <form action="">
            <div class="qi"> 歌手名：<input type="text" placeholder="例如：周杰伦"><br></div>
           <div class="qi"> 歌曲名：<input type="text" placeholder="例如：青花瓷"><br></div>
           <div class="qi">歌&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;词：<input type="text" placeholder="例如：天青色等烟雨"><br></div>
            <div class="qi"><input type="text" placeholder="例如：而我在等你" id="oth"></div>
            <div><input type="button" value="提交" id="sub"></div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#zijian{
    padding:0.1rem;
}
#luyou{
    font-size: 0.18rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-weight: bolder;
    display: flex;
    border-bottom: 2px solid #f0f0f0;
}
#luyou .iconfont{
    margin-left: 0.1rem;
}
#luyou span{
    margin-left: 1rem;
}
#zijian input{
    height: 0.3rem;
    background-color: #cccccc;
    border-radius: 0.2rem;
    width: 2.6rem;
}
.qi{
    margin-top: 0.2rem;
}
#oth{
    margin-left: 0.55rem;
}
#zijian #sub{
    position: absolute;
    bottom: 0.5rem;
    left: 1rem;
    width: 2rem;
}
</style>