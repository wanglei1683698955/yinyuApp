<template>
  <div class="PaiDuiJuLeBu">
    <div class="PaiDuiJuLeBu_header1">
      <ul class="PaiDuiJuLeBu_ul1">
        <li class="iconfont icon-fanhui" @click="julebuye('paidui')"></li>
        <li>吟</li>
        <li></li>
      </ul>
    </div>
    <div class="PaiDuiJuLeBu_nar">
      <div class="PaiDuiJuLeBu_nar_ul">
        <van-tabs @click="onClick">
          <van-tab title="Top排名"></van-tab>

          <van-tab title="赛季战绩榜"> </van-tab>
        </van-tabs>
      </div>
    </div>
    <ul class="PaiDuiJuLeBu_guanggao">
      <li class="PaiDuiJuLeBu_guanggao_li1">
        <van-notice-bar
          scrollable
          text="放荡不羁的岁月yyds "
          class="aaa"
        />
      </li>
      <li class="iconfont icon-wenhao"></li>
    </ul>
    <div class="PaiDuiJuLeBu_zhuti">
      <router-view />
    </div>
    <div class="PaiDuiJuLeBu_footer_foot"></div>
    <ul class="PaiDuiJuLeBu_footer">
      <li class="PaiDuiJuLeBu_footer_li">
        <div>
          <img src="../../../public/images/PaiDui/julebu_06.png" alt="" />
        </div>
      </li>
      <li class="PaiDuiJuLeBu_footer_li1">
        <div>
          <img src="../../../public/images/PaiDui/julebu_03.png" alt="" />
        </div>
        <span>排行榜</span>
      </li>
      <li class="PaiDuiJuLeBu_footer_li">
        <div>
          <img src="../../../public/images/PaiDui/julebu_09.png" alt="" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import "../PaiDui/PaiDuiJuLebuTop.vue";
import "../PaiDui/PaiDuiSaiJiZhanJiBang.vue";
import "../../../public/iconfont/icon_PaiDui/font_iwomiqxlgy8/iconfont.css";
import "../../../public/iconfont/icon_PaiDui/font_ueut6yvux8m/iconfont.css";

export default {
  data() {
    return {};
  },
  methods: {
    julebuye(name) {
      this.$router.push({
        name: name,
      });
    },
    onClick(name) {
      if (name === 0) {
        this.$router.push({
          name: "paiduijulebutop",
        });
      } else {
        this.$router.push({
          name: "paiduisaijizhanjibang",
        });
      }
    },
  },
};
</script>

<style>
.van-tab {
  width: 0.8rem;
}
.van-tabs__nav--line .van-tabs__line {
  background-color: #edaa27;
  width: 0.2rem;
  height: 0.05rem;
  z-index: 1;
}
</style>

<style scoped>
.PaiDuiJuLeBu {
  padding-top: 0.2rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background-color: cornflowerblue; */
}
.PaiDuiJuLeBu_header1 {
  padding: 0 0.1rem;
  display: flex;
  width: 100%;
  height: 0.3rem;
}
.PaiDuiJuLeBu_ul1 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.3rem;
}
.PaiDuiJuLeBu_ul1 li {
  /* color: #f6f6f6; */
  font-size: 0.17rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
.PaiDuiJuLeBu_nar {
  margin-top: 0.1rem;
  border-top: 1px solid #e6e6e6;
  width: 100%;
  height: 0.41rem;

  /* background-color: red; */
}
.PaiDuiJuLeBu_nar_ul {
  height: 0.41rem;
  display: flex;
}
/* .PaiDuiJuLeBu_nar_ul_l1 {
  font-size: 0.18rem;
  height: 0.41rem;
  text-align: center;
  line-height: 0.41rem;
}
.PaiDuiJuLeBu_nar_ul_l2 {
  color: #b6b6b6;
  font-size: 0.13rem;
  height: 0.41rem;
  text-align: center;
  line-height: 0.41rem;
} */
.PaiDuiJuLeBu_guanggao {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 0.41rem;
}
.PaiDuiJuLeBu_guanggao_li1 {
  width: 90%;
  height: 0.41rem;
  background-color: #fbfbfb;
}
.PaiDuiJuLeBu_guanggao .icon-wenhao {
  width: 5%;
  height: 0.41rem;
  text-align: center;
  line-height: 0.41rem;
  font-size: 0.2rem;
  color: #878787;
  font-weight: 600;
}
.PaiDuiJuLeBu_guanggao_li1 .aaa {
  background-color: #fbfbfb;
  color: black;
}
.PaiDuiJuLeBu_zhuti {
  overflow: auto;
  margin-top: 0.1rem;
  display: flex;
  width: 100%;
  flex: 1;
}
.PaiDuiJuLeBu_zhuti_ul {
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 0.05rem;
  display: flex;
  flex: 1;
  width: 100%;
  /* background-color: blueviolet; */
}
.PaiDuiJuLeBu_footer {
  box-sizing: content-box;
  padding-top: 0.1rem;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 0.66rem;
  /* background-color: rgb(141, 226, 43); */
}
.PaiDuiJuLeBu_footer .PaiDuiJuLeBu_footer_li {
  text-align: center;
  /* z-index: 1; */
  padding-top: 0.1rem;
  height: 0.66rem;
  width: 33.5%;
}
.PaiDuiJuLeBu_footer .PaiDuiJuLeBu_footer_li1 {
  text-align: center;
  height: 0.66rem;
  width: 33.5%;
}
.PaiDuiJuLeBu_footer .PaiDuiJuLeBu_footer_li div {
  height: 0.46rem;
  margin: auto;
  width: 0.46rem;
}
.PaiDuiJuLeBu_footer .PaiDuiJuLeBu_footer_li1 div {
  height: 0.4rem;
  margin: auto;
  width: 0.46rem;
}
.PaiDuiJuLeBu_footer .PaiDuiJuLeBu_footer_li div img {
  line-height: 0.4rem;
  height: 0.4rem;
  width: 100%;
}
.PaiDuiJuLeBu_footer .PaiDuiJuLeBu_footer_li1 div img {
  line-height: 0.4rem;
  height: 0.4rem;
  width: 100%;
}
.PaiDuiJuLeBu_footer_foot {
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 0.49rem;
  /* background-color: salmon; */
  border-top: 1px solid #f0f0f0;
}
</style>
