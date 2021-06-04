<template>
  <div id="HuDongList">
      <img :src="imgURL" alt="">

      <div id="HuDongList_right">
          <h1>{{type}}</h1>
          <h2>{{message}}</h2>
      </div>

        <span class="iconfont icon-xiangyou spanic"></span>
  </div>
</template>

<script>
export default {
    props:['imgURL','type','message']
}
</script>

<style scoped>
    #HuDongList{
        height: 0.68rem;
        border-bottom: 1px solid #c9c9c9;
        padding: 0 0.15rem;
        display: flex;
        align-items: center;
    }
    #HuDongList img{
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background-color: rgb(186, 91, 230);
        margin-right: 0.1rem;
    }
    #HuDongList_right{
        height: 0.4rem;
        flex: 1;
        line-height: 0.2rem;
    }
    #HuDongList_right h1{
        display:flex;
        justify-content: space-between;
        color: #999;
        font-size: 0.15rem;
    }
    #HuDongList_right h2{
        color: #999;
        font-size: 0.14rem;
    }
    #HuDongList .spanic{
        font-size: 0.15rem;
        color: #999;
    }
</style>