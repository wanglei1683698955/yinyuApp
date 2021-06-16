<template>
    <div>
        <div id="bot"><span class="circle red"></span><span class="content">亲密关系</span></div>
        <div id="club"><span class="circle purple"></span><span class="content">俱乐部</span></div>
        <p id="txt">还没有加入俱乐部</p>
        <div id="duan"><span class="circle blue"></span><span class="content">段位(一场到底）</span></div>
        <div id="youxi"><span class="circle yel"></span><span class="content">游戏战绩</span></div>
        <div id="tupian">
            <img src="../../../public/images/GuangChang/first.gif">
             <img src="../../../public/images/GuangChang/second.gif">
              <img src="../../../public/images/GuangChang/third.gif">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.circle{
    display: inline-block;
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 50%;
}
.red{
    background-color: crimson;
}
.purple{
    background-color: darkmagenta;
}
.content{
    display: inline-block;
    text-indent: 0.2rem;
}
#bot{
    padding-top: 0.2rem;
    padding-bottom: 0.1rem;
}
#club,#duan,#youxi{
    padding-bottom: 0.1rem;
}
#txt{
    text-indent: 0.3rem;
    padding-bottom: 0.1rem;
}

.blue{
    background-color: blue;
    
}
.yel{
    background-color: yellow;
}
#tupian{
    display:flex;
    justify-content: space-around;

}
#tupian img{
    width: 1rem;

}
</style>