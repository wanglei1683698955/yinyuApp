<template>
    <div>
        <div id="geshou">
        <router-link to="FaBu"> <div > <van-icon name="arrow-left" /><van-icon name="minus" /></div></router-link>
          
           <span>周杰伦</span>
        </div>
        <div class="sel">
            <p>那时你说的  我们天作之合</p>
            <p>然后怎么了  被时间捉弄了</p>
            <p class="last">《当我唱起这首歌》星弟</p>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#geshou{
    font-size: 0.18rem;
    height: 0.4rem;
    line-height: 0.4rem;
    font-weight: bolder;
    display: flex;
    border-bottom: 2px solid #f0f0f0;
}
#geshou span{
    margin-left: 1.2rem;
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