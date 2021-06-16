<template>
  <div id="PaiDui">
    <div id="PaiDui_box">
      <Banner type="派对" class="paidui_ban"></Banner>
      <ul class="PaiDui_fist">
        <li @click="woderenwu('paiduiwoderenwu')">
          <img src="../../../public/images/PaiDui/xiaotupian03.png" alt="" />
          我的任务
        </li>
        <li @click="wodepaidui('paiduiwodepaidui')">
          <img
            src="../../../public/images/PaiDui/xiaotupian01.png"
            alt=""
          />我的派对
        </li>

        <li @click="julebu('paiduijulebu')">
          <img src="../../../public/images/PaiDui/xiaotupian02.png" alt="" />
          俱乐部
        </li>
      </ul>
      <div id="PaiDui_box1">
        <ul id="PaiDui_daohang">
          <li @click="yujian('paiduiyujian')">遇见</li>
          <li @click="fromto('paiduituijian')">推荐</li>
          <li @click="from('paiduitop')">Top10</li>
          <li>欢唱</li>
          <li>拍卖</li>
          <li>交友</li>
          <li>点歌</li>
          <li  @click="guanzhan('paiduiguanzhan')">观战</li>
        </ul>
        <div id="PaiDui_div1">
          <span class="iconfont icon-sousuo div"></span>
        </div>
      </div>
      <div id="PaiDui_ser">
        <router-view />
      </div>
    </div>
    <BottomBar :index="0" />
  </div>
</template>
<script>
import"../PaiDui/PaiDuiGuanZhan.vue"
import "../PaiDui/PaiDuiTuiJian.vue";
import "../PaiDui/PaiDuiTop.vue";
import "../PaiDui/PaiDuiYuJian.vue";
import Banner  from  '../../components/Youxi/Banner.vue'

import "../../../public/iconfont/icon_PaiDui/font_ueut6yvux8m/iconfont.css";
import BottomBar from "../../components/Comm/BottomBar.vue";
export default {
  components: { BottomBar,Banner },
  data() {
    return {};
  },
  methods: {
    fromto(name) {
      this.$router.push({
        name: name,
      });
    },
    from(name) {
      this.$router.push({
        name: name,
      });
    },
    julebu(name) {
      this.$router.push({
        name: name,
      });
    },
    wodepaidui(name) {
      this.$router.push({
        name: name,
      });
    },
    woderenwu(name) {
      this.$router.push({
        name: name,
      });
    },
    yujian(name) {
      this.$router.push({
        name: name,
      });
    },
    guanzhan(name) {
      this.$router.push({
        name: name,
      });
    },
  },
};
</script>

<style scoped>
.paidui_ban{
  margin: 0 0.1rem;
}
/* 取掉滚动条 */
::-webkit-scrollbar {
  display: none;
}
#PaiDui {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#PaiDui_box {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #21b199;

  background: url("../../../public/images/PaiDui/Screenshot_musi.png") no-repeat;
  background-size: 100% 100%;
  overflow: auto;
}
.PaiDui_fist {
  margin: 0.1rem 0;
  width: 100%;
  justify-content: space-around;
  height: 0.37rem;
  display: flex;
}
.PaiDui_fist li {
  display: flex;
  justify-content: space-around;
  background: url("../../../public/images/PaiDui/beijingtu.png");
  width: 25%;
  font-size: 0.13rem;
  font-weight: 600;
  height: 0.37rem;
  border-radius: 0.1rem;
  text-align: center;
  line-height: 0.37rem;
  padding: 0 0.05rem;
}
.PaiDui_fist li img {
  margin-top: 0.08rem;
  line-height: 0.22rem;
  width: 0.19rem;
  height: 0.22rem;
}
.PaiDui_fist li a {
  display: inline-block;
  color: #000;
}
#PaiDui_box1 {
  /* position: relative; */
  position: sticky;
  top: 0;
  width: 100%;
  height: 0.31rem;
  padding-left: 0.13rem;
  padding-right: 0.13rem;
  z-index: 11;
  background-color: white;
}
#PaiDui_daohang {
  overflow: auto;
  display: flex;
  width: 80%;
  height: 0.31rem;
}
#PaiDui_daohang li {
  color: #989898;
  line-height: 0.31rem;
  font-size: 0.14rem;
  flex-shrink: 0;
  padding: 0 0.1rem;
}
#PaiDui_box1 #PaiDui_div1 {
  position: absolute;
  right: 0;
  top: 16%;
  height: 0.35rem;
  width: 0.35rem;
}
#PaiDui_div1 .icon-sousuo {
  font-size: 0.2rem;
}
#PaiDui_ser {
  /* margin-bottom: 0.58rem; */
  padding: 0 0.09rem;
  flex: 1;
  width: 100%;
  display: flex;
  /* background-color: thistle; */
}
</style>