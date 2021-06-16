<template>
  <div id="PaiDuiWoDeRenWu">
    <div id="PaiDuiWoDeRenWu_header">
      <ul id="PaiDuiWoDeRenWu_ul">
        <router-link to="/paidui"
          ><li class="iconfont icon-fanhuijiantou"></li>
        </router-link>
        <li>任务</li>
        <li></li>
      </ul>
    </div>
    <div id="PaiDuiWoDeRenWu_ser">
      <div id="PaiDuiWoDeRenWu_fist">
        <ul id="PaiDuiWoDeRenWu_youxi">
          <li id="PaiDuiWoDeRenWu_quanleida">每日游戏全垒打</li>
          <li id="PaiDuiWoDeRenWu_jindu">
            <ul id="PaiDuiWoDeRenWu_jindutiao">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div id="PaiDuiWoDeRenWu_jisuan"><span>0</span> / 7</div>
            <div id="PaiDuiWoDeRenWu_quwancheng">去完成</div>
          </li>
          <li id="PaiDuiWoDeRenWu_renwu">
            <img src="../../../public/images/PaiDui/renwu_03.png" alt="" />
            <span>每日任务全垒打</span>
          </li>
        </ul>
        <div id="PaiDuiWoDeRenWu_renwuleibiao" class="renwoleibiao">
          <RenWuLeiBiao
            v-for="(p, i) in partynames"
            :key="i"
            :renwuname="p.renwuname"
            :xingyunbi="p.xingyunbi"
          ></RenWuLeiBiao>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PaiDuiWoDeRenWuApi } from "../../api/PaiDuiWoDeRenWuApi.js";
import RenWuLeiBiao from "../../components/PaiDui/RenWuLeiBiao.vue";
import "../../../public/iconfont/icon_PaiDui/font_iwomiqxlgy8/iconfont.css";
export default {
  name: "renwuleibiao",
  components: {
    RenWuLeiBiao,
  },
  data() {
    return {
      partynames: [],
    };
  },
  mounted() {
    PaiDuiWoDeRenWuApi("/xxxapi/partyname/all").then((res) => {
      this.partynames = res.data.data;
    });
  },
};
</script>

<style scoped>
/* 取掉滚动条 */
::-webkit-scrollbar {
  display: none;
}
#PaiDuiWoDeRenWu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
.icon-fanhuijiantou {
  font-weight: 600;
}
#PaiDuiWoDeRenWu_header {
  border-bottom: 1px solid #e6e6e6;
  padding: 0 0.12rem;
  margin-top: 0.2rem;
  display: flex;
  width: 100%;
  height: 0.4rem;
}
#PaiDuiWoDeRenWu_ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.3rem;
}
#PaiDuiWoDeRenWu_ul li {
  font-size: 0.17rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
#PaiDuiWoDeRenWu_ser {
  display: flex;
  width: 100%;
  margin-top: 0.06rem;
  flex: 1;
  overflow: auto;
}
#PaiDuiWoDeRenWu_fist {
  border: 1px solid black;
  border-radius: 0.1rem 0.1rem 0 0;
  background-color: #9570f3;
  margin-left: 0.08rem;
  margin-right: 0.08rem;
  width: 100%;
  overflow: auto;
}
#PaiDuiWoDeRenWu_youxi {
  border-radius: 0.1rem 0.1rem 0 0;
  padding: 0.16rem;
  background: url("../../../public/images/PaiDui/woderenwu_03.png");
  background-size: 100;
  width: 100%;
  height: 1.2rem;
}
#PaiDuiWoDeRenWu_quanleida {
  text-shadow: 0 -3px 1px#361f77, -1px 4px 3px#361f77, 1px 5px 1px#361f77,
    1px 4px 1px#361f77, 3px 5px 6px#361f77;
  color: white;
  font-weight: 1000;
  font-size: 0.2rem;
  width: 100%;
  height: 0.23rem;
}
#PaiDuiWoDeRenWu_jindu {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 0.27rem;
}
#PaiDuiWoDeRenWu_jindutiao {
  padding-top: 0.02rem;
  display: flex;
  justify-content: space-around;
  background-color: #4b329a;
  line-height: 0.1rem;
  width: 1.8rem;
  height: 0.1rem;
  border-radius: 0.1rem;
}
#PaiDuiWoDeRenWu_jindutiao li {
  width: 0.06rem;
  height: 0.06rem;
  border-radius: 50%;
  background-color: #361f77;
}
#PaiDuiWoDeRenWu_jisuan span {
  color: #f6e498;
}
#PaiDuiWoDeRenWu_jindu #PaiDuiWoDeRenWu_quwancheng {
  width: 0.66rem;
  height: 0.27rem;
  line-height: 0.25rem;
  background-color: #6551ff;
  text-align: center;
  border: 1px solid black;
  border-radius: 0.1rem;
  color: white;
}
#PaiDuiWoDeRenWu_renwu {
  display: flex;
  line-height: 0.4rem;
  width: 1.35rem;
  height: 0.4rem;
}
#PaiDuiWoDeRenWu_renwu img {
  border-radius: 0.1rem;
  border: 1px solid black;
  width: 0.4rem;
  height: 0.4rem;
}
#PaiDuiWoDeRenWu_renwu span {
  color: #7a5d7b;
  margin-left: 0.1rem;
}
#PaiDuiWoDeRenWu_renwuleibiao {
  width: 100%;
  height: 4rem;
  margin-top: 0.23rem;
  padding: 0 0.16rem 0 0.16rem;
}
</style>