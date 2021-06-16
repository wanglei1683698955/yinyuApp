<template>
  <ul class="PaiDui_ser_ul">
    <GuanZhan
      v-for="(g, i) in imgs"
      :key="i"
      :leixing="g.leixing"
      :renqi="g.renqi"
      :img1="g.img1"
      :img2="g.img2"
      :img3="g.img3"
      :img4="g.img4"
      :img5="g.img5"
      :img6="g.img6"
    ></GuanZhan>
    <GuanZhan
      v-for="(g, i) in imgs"
      :key="i"
      :leixing="g.leixing"
      :renqi="g.renqi"
      :img1="g.img1"
      :img2="g.img2"
      :img3="g.img3"
      :img4="g.img4"
      :img5="g.img5"
      :img6="g.img6"
    ></GuanZhan>
    <GuanZhan
      v-for="(g, i) in imgs"
      :key="i"
      :leixing="g.leixing"
      :renqi="g.renqi"
      :img1="g.img1"
      :img2="g.img2"
      :img3="g.img3"
      :img4="g.img4"
      :img5="g.img5"
      :img6="g.img6"
    ></GuanZhan>
    <GuanZhan
      v-for="(g, i) in imgs"
      :key="i"
      :leixing="g.leixing"
      :renqi="g.renqi"
      :img1="g.img1"
      :img2="g.img2"
      :img3="g.img3"
      :img4="g.img4"
      :img5="g.img5"
      :img6="g.img6"
    ></GuanZhan>
    <GuanZhan
      v-for="(g, i) in imgs"
      :key="i"
      :leixing="g.leixing"
      :renqi="g.renqi"
      :img1="g.img1"
      :img2="g.img2"
      :img3="g.img3"
      :img4="g.img4"
      :img5="g.img5"
      :img6="g.img6"
    ></GuanZhan>
    <GuanZhan
      v-for="(g, i) in imgs"
      :key="i"
      :leixing="g.leixing"
      :renqi="g.renqi"
      :img1="g.img1"
      :img2="g.img2"
      :img3="g.img3"
      :img4="g.img4"
      :img5="g.img5"
      :img6="g.img6"
    ></GuanZhan>
    <GuanZhan
      v-for="(g, i) in imgs"
      :key="i"
      :leixing="g.leixing"
      :renqi="g.renqi"
      :img1="g.img1"
      :img2="g.img2"
      :img3="g.img3"
      :img4="g.img4"
      :img5="g.img5"
      :img6="g.img6"
    ></GuanZhan>
    <GuanZhan
      v-for="(g, i) in imgs"
      :key="i"
      :leixing="g.leixing"
      :renqi="g.renqi"
      :img1="g.img1"
      :img2="g.img2"
      :img3="g.img3"
      :img4="g.img4"
      :img5="g.img5"
      :img6="g.img6"
    ></GuanZhan>
  </ul>
</template>

<script>
import { PaiDuiGuanZhanApi } from "../../api/PaiDuiGuanZhanApi.js";
import GuanZhan from "../../components/PaiDui/GuanZhan.vue";
export default {
  name: "guanzhan",
  components: {
    GuanZhan,
  },
  data() {
    return {
      imgs: [],
    };
  },
  mounted() {
    PaiDuiGuanZhanApi("/xxxapi/guanzhan/all").then((res) => {
      this.imgs = res.data.data;
    });
  },
};
</script>

<style scoped>
/* 取掉滚动条 */
:-webkit-scrollbar {
  display: none;
}
.PaiDui_ser_ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  flex: 1;
}
</style>