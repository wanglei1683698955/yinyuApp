<template>
  <div id="XiaoXiTopbar">

    <div id="XiaoXiTopbar_box">
      <van-tabs @click="onClick">
        <van-tab title="聊天"></van-tab>
        <van-tab title="通讯录"></van-tab>
        <van-tab title="互动"></van-tab>
      </van-tabs>
    </div>

    <h6 >
      <span class="iconfont icon-iconhaoyoushenqing" @click="sefriend"></span>
    </h6>
  </div>
</template>

<script>
export default {
  data(){
    return {
      init:null//重复跳转验证
    }
  },
  methods: {
    onClick(name) {//下标
    if(this.init === name) return
      let pathName = null;
      if(name === 0){
        pathName = 'liaotian'
      }else if(name === 1){
        // pathName = 'tongxunlu'
        this.init = name
        setTimeout(() => {
          this.$router.replace('tongxunlu/haoyou')
        }, 100);
        return
      }else if(name === 2){
        pathName = 'hudong'
      }
      this.init = name
      this.$router.push({name:pathName})
    },
    sefriend(){
      this.$router.push({name:'searchfriend'})
    }
  }
};
</script>
  
<style>
#XiaoXiTopbar_box div.van-tab {
  color: #c9c9c9;
  font-weight: 500;
  font-size: 0.12rem;
}
#XiaoXiTopbar_box div.van-tab--active{
  color: #000;
  font-weight: 700;
  font-size: 0.14rem;
}
#XiaoXiTopbar_box .van-tabs__line{
  background-color: #f5a623;
}
</style>

<style scoped>
#XiaoXiTopbar {
  width: 100%;
  height: 0.54rem;
  background-color: white;
  display: flex;
  align-items: center;
}
#XiaoXiTopbar_box {
  flex: 1;
}
h6 {
  width: 0.5rem;
  height: 0.50rem;
}
h6 span{
  display: block;
  width: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 0.16rem;
}
</style>