<template>
  <ul class="PaiDui_ser_ul">
    <Top
      v-for="(v, i) in imgs1"
      :key="i"
      :name1="v.name1"
      :name2="v.name2"
      :bangzhi="v.bangzhi"
      :renqi="v.renqi"
      :img="v.img"
    ></Top>
  </ul>
</template>

<script>
import { PaiDuiTuiJianApi } from "../../api/PaiDuiTuiJianApi.js";
import Top from "../../components/PaiDui/Top.vue";
export default {
  name: "top",
  components: {
    Top,
  },
  data() {
    return {
      imgs1: [],
    };
  },
  mounted() {
    PaiDuiTuiJianApi("/xxxapi/party/all").then((res) => {
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