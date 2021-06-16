<template>
  <ul class="PaiDui_ser_ul">
    <TuiJian
      v-for="(v, i) in imgs1"
      :key="i"
      :name1="v.name1"
      :name2="v.name2"
      :bangzhi="v.bangzhi"
      :auct="v.auct"
      :renqi="v.renqi"
      :img="v.img"
    ></TuiJian>
  </ul>
</template>

<script>
import { PaiDuiTuiJianApi } from "../../api/PaiDuiTuiJianApi.js";
import TuiJian from "../../components/PaiDui/TuiJian.vue";
export default {
  name: "tuijian",
  components: {
    TuiJian,
  },
  data() {
    return {
      imgs1: [],
    };
  },
  mounted() {
    PaiDuiTuiJianApi("/xxxapi/party/all").then((res) => {
      console.log(res)
      this.imgs1 = res.data.data;
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