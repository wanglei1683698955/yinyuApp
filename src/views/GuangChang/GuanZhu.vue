<template>
    <div id="guanzhu">
        <div id="pp"> <img src="../../../public/images/GuangChang/guanzhu.png" alt=""></div>
        <p>你关注的人还有没有新的动态</p>
        <p>去推荐里看看吧</p>
       <router-link to="WeChat"><input type="text" placeholder="去推荐"> </router-link>


        
    </div>
</template>
<script>
export default {
    name:"GuanZhu"
}
</script>
<style scoped>
#pp{
    width: 0.75rem;
    height: 0.75rem;
    margin-top: 1.35rem;
    
}
#pp img{
    width:100%;
    margin-left: 1.45rem;
}
p{
    width: 3.5rem;
    text-align: center;
    color: #ccc;
    
}
#guanzhu input{
    margin-top: 0.2rem;
    background-color: yellow;
    border-radius: 0.5rem;
    width: 1.5rem;
    height: 0.35rem;
    border: 1px solid black;
    margin-left: 1.15rem;
    text-align: center;
    color: black;
}
</style>