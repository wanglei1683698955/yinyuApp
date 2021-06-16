<template>
<div id="top-fs">
 <span  class="iconfont zjt-fs" @click="Getback">&#xe508;</span>
    <span class="text-fs">发烧友</span>
</div>
</template>
<script>
export default {
    name:"BannerF",
    methods:{
Getback(){
  this.$router.go(-1)
}
    }
}
</script>
<style  scoped>
#top-fs{
    width:100%;
    height: 0.43rem;

}
#top-fs .text-fs{
    font-size: 0.2rem;
    font-weight: 600;
    position: absolute;
    left: 43%;top: 0.08rem;
}
#top-fs .zjt-fs{
    font-size: 0.35rem;
     position: absolute;
     left: 0.13rem;
     }
</style>
