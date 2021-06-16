<template>
  <div class="box">
     <span class="iconfont zjt-fs" @click="goBack">&#xe508;</span>
    <i>排行榜</i>   
  </div>
</template>

<script>
import "../../../public/iconfont/icon_YouxXi/font_ex4uej7wmgn/iconfont.css";
export default {
  name: "Back",
  data(){
    return {
      
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>

.box {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
  font-weight: 600;
  border-bottom: 1px solid     ;

  
}
.box span{
 margin-left: 0.18rem;

}
.box i{
   margin-left: 1.31rem;
}
</style>
