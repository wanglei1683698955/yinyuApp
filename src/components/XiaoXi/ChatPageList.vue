<template>
  <div id="ChatPageList" :class="direction">
    <img :src="imgURL" alt="">

    <p 
    :style="{'background-color':(direction === 'left' ? 'white' : '#fecb34')}"
    :class="(direction === 'left' ? 'leftTop' : 'rightTop')"
    >{{text}}</p>
    <!-- 'border-radius':  -->
  </div>
</template>

<script>
export default {
    props:["direction","imgURL","text"]
}
</script>

<style scoped>
#ChatPageList{
    width: 100%;
    flex-shrink: 0;
    display: flex;
    margin-top: 0.2rem;
}
#ChatPageList.left{
    flex-direction: row;
}
#ChatPageList.right{
    flex-direction: row-reverse;
}
#ChatPageList img{
    width: 0.44rem;
    height: 0.44rem;
    border-radius: 50%;
    background-color: #000;
    margin: 0 0.1rem;
}
#ChatPageList p{
    max-width: 62%;
    /* background-color: #fecb34; */
    padding: 0.1rem;
    font-size: 0.14rem;
    line-height: 0.22rem;
    border: 1px solid #999;
    word-wrap:break-word;
}
#ChatPageList p.leftTop{
    border-radius: 0 0.1rem 0.1rem 0.1rem;;
}
#ChatPageList p.rightTop{
    border-radius: 0.1rem 0 0.1rem 0.1rem;;
}
</style>