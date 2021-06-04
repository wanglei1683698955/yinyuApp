<template>
  <div id="HaoYouList">
    <img :src="imgURL" alt="" />

    <div id="HaoYouList_box">
      <h1>{{ userName }}</h1>
      <h2>离线</h2>
    </div>

    <button class="HYfxx" @click="start">发消息</button>
    <button class="HYhxgz">互相关注</button>
  </div>
</template>

<script>
export default {
  props: ["imgURL", "userId", "userName"],
  data(){
      return {

      }
  },
  methods: {
      start(){
        this.$router.push({name:"chatpage",query:{userName:this.userName,imgURL:this.imgURL,history:'别爱我，没结果，除非花手摇过我！'}})
      }
  }
};
</script>

<style scoped>
#HaoYouList {
  height: 0.8rem;
  border-bottom: 1px solid #c9c9c9;
  padding: 0 0.15rem;
  display: flex;
  align-items: center;
}
#HaoYouList img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: sienna;
  margin-right: 0.1rem;
}
#HaoYouList_box {
  flex: 1;
}
#HaoYouList_box h1 {
  font-size: 0.15rem;
  color: #000;
}
#HaoYouList_box h2 {
  font-size: 0.13rem;
  color: #c9c9c9;
}
#HaoYouList button {
  width: 0.666rem;
  height: 0.3rem;
  margin-left: 0.1rem;
  border-radius: 0.15rem;
}
#HaoYouList .HYfxx {
  border: 1px solid #000;
  color: white;
  background-color: #fb5271;
  font-size: 0.14rem;
  box-shadow: 0 2px 2px #444;
}
#HaoYouList .HYhxgz {
  border: 1px solid #999;
  color: #999;
  background-color: white;
  font-size: 0.12rem;
  box-shadow: 0 2px 2px #555;
}
</style>