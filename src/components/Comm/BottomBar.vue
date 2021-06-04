<template>
  <div id="BottomBar">
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item>
          <span>派对</span>
          <template #icon="props">
            <img :src="props.active ? icon.active1 : icon.inactive1" />
          </template>
        </van-tabbar-item>

        <van-tabbar-item>
          <span>游戏</span>
          <template #icon="props">
            <img :src="props.active ? icon.active2 : icon.inactive2" />
          </template>
        </van-tabbar-item>

        <van-tabbar-item>
          <span>广场</span>
          <template #icon="props">
            <img :src="props.active ? icon.active3 : icon.inactive3" />
          </template>
        </van-tabbar-item>

        <van-tabbar-item>
          <span>消息</span>
          <template #icon="props">
            <img :src="props.active ? icon.active4 : icon.inactive4" />
          </template>
        </van-tabbar-item>

        <van-tabbar-item>
          <span>我的</span>
          <template #icon="props">
            <img :src="props.active ? icon.active5 : icon.inactive5" />
          </template>
        </van-tabbar-item>
        
      </van-tabbar>

  </div>
</template>

<script>
export default {
  props:["index"],
  mounted () {
    this.active = this.index
  },
  data() {
    return {
      active: 0,
      icon: {
        active1: require("../../../public/images/Comm/BottomBarIcon/icon_a_paidui.png"),
        inactive1: require("../../../public/images/Comm/BottomBarIcon/icon_paidui.png"),

        active2: require("../../../public/images/Comm/BottomBarIcon/icon_a_youxi.png"),
        inactive2: require("../../../public/images/Comm/BottomBarIcon/icon_youxi.png"),

        active3: require("../../../public/images/Comm/BottomBarIcon/icon_a_guangchang.png"),
        inactive3: require("../../../public/images/Comm/BottomBarIcon/icon_guangchang.png"),

        active4: require("../../../public/images/Comm/BottomBarIcon/icon_a_xiaoxi.png"),
        inactive4: require("../../../public/images/Comm/BottomBarIcon/icon_xiaoxi.png"),

        active5: require("../../../public/images/Comm/BottomBarIcon/icon_a_wode.png"),
        inactive5: require("../../../public/images/Comm/BottomBarIcon/icon_wode.png"),
      },
    };
  },
  methods: {
    onChange(index) {
      let path = 0;
      switch(index){
        case 0 : path = 'paidui' ;break;
        case 1 : path = 'youxi' ;break;
        case 2 : path = 'guangchang' ;break;
        case 3 : path = 'liaotian' ;break;
        case 4 : path = 'wode' ;break;
      }
      this.$router.push({name:path})
    },
  },
};
</script>

<style scoped>
#BottomBar {
  height: 0.58rem;
  background: #afd661;
  display: flex;
}
#BottomBar .van-tabbar{
  height: 0.58rem;
  font-size: 0.1rem;
  color: #c9c9c9;
}
#BottomBar .van-tabbar-item__icon img{
  height: 0.33rem;
  height: 0.33rem;
}
#BottomBar .van-tabbar-item--active{
  color: #000;
  font-weight: 800;
}

</style>