<template>
  <div id="SearchFriend">

    <div id="SearchFriendTop">
      <span
        class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing"
        @click="backButton"
      ></span>

      <div id="SearchFriend_In">
        <input
          type="text"
          placeholder="搜索音遇用户ID"
          v-model="serNumber"
        />
        <span class="Chatck">查找</span>
      </div>
    </div>

    <div id="SearchFriend_Show" v-show="showTv">
      <img :src="imgURL" alt="">

        <div id="SearchFriend_Show_box">
          <h1>用户{{serNumber}}</h1>
          <h2>ID：{{serNumber}}</h2>
      </div>

        <button v-if="guanzhu" class="HYfxx" @click="GZchange" >+关注</button>
        <button v-else class="HYhxgz" @click="GZchange">已关注</button>
    </div>

    <h3 v-show="showTv">没有更多了</h3>

  </div>
</template>

<script>
import "../../../public/iconfont/icon_XiaoXi/iconfont.css";
export default {
  data() {
    return {
      serNumber: null,
      showTv:false,
      imgURL:null,
      guanzhu:true
    };
  },
  methods: {
    backButton() {
      this.$router.go(-1);
    },
    GZchange(){
      this.guanzhu = !this.guanzhu
    }
  },
  watch: {
    serNumber(NewIn){
      if(NewIn.length === 6){
        let MR = parseInt(Math.random()*12)
        while(NewIn){
          if(MR === 0 || MR === 10){
            MR = parseInt(Math.random()*12)
          }else{
            break
          }
        }
        this.imgURL = '/images/XiaoXi/TouXiang/pph_'+(MR < 10 ? '0'+MR : MR)+'.jpeg'
        this.showTv = true
      }else{
        this.showTv = false
        this.guanzhu = true
      }
    }
  }
};
</script>

<style scoped>
#SearchFriend {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#SearchFriendTop {
  display: flex;
  border: 1px solid #acb;
  align-items: center;
}
#SearchFriendTop span.icon-fanhuizuojiantouxiangzuoshangyibuxianxing {
  width: 0.5rem;
  font-size: 0.24rem;
  color: #666;
  font-weight: 700;
  line-height: 0.5rem;
  text-align: center;
}
#SearchFriend_In {
  width: 70%;
  height: 0.4rem;
  margin: 0.1rem 0.26rem;
  padding: 0 0.1rem;
  border: 2px solid #c9c9c9;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#SearchFriend_In input {
  width: 74%;
  font-size: 0.14rem;
}
#SearchFriend_In span.Chatck {
  font-size: 0.16rem;
  color: #666;
  font-weight: 600;
}


#SearchFriend_Show{
  height: 0.76rem;
  display: flex;
}
#SearchFriend_Show {
  border-bottom: 1px solid #c9c9c9;
  padding: 0 0.15rem;
  align-items: center;
}
#SearchFriend_Show img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: sienna;
  margin-right: 0.1rem;
}
#SearchFriend_Show_box {
  flex: 1;
}
#SearchFriend_Show_box h1 {
  font-size: 0.15rem;
  color: #000;
}
#SearchFriend_Show_box h2 {
  font-size: 0.13rem;
  color: #c9c9c9;
}
#SearchFriend_Show button {
  width: 0.666rem;
  height: 0.3rem;
  margin-left: 0.1rem;
  border-radius: 0.15rem;
}
#SearchFriend_Show .HYfxx {
  border: 1px solid #000;
  color: white;
  background-color: #fb5271;
  font-size: 0.14rem;
  box-shadow: 0 2px 2px #444;
}
#SearchFriend_Show .HYhxgz {
  border: 1px solid #999;
  color: #999;
  background-color: white;
  font-size: 0.12rem;
  box-shadow: 0 2px 2px #555;
}


#SearchFriend h3{
  text-align: center;
  line-height: 0.4rem;
  height: 0.4rem;
  font-size: 0.12rem;
  color: #666;
}
</style>