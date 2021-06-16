<template>
  <ul class="PaiDui_ser_ul">
    <YuJian
      v-for="(m, i) in meetfs"
      :key="i"
      :name1="m.name1"
      :name2="m.name2"
      :name3="m.name3"
      :jingxuan="m.jingxuan"
      :img="m.img"
    ></YuJian>
  </ul>
</template>

<script>
import { PaiDuiYuJianApi } from "../../api/PaiDuiYuJianApi.js";
import YuJian from "../../components/PaiDui/YuJian.vue";
export default {
  name: "yujian",
  components: {
    YuJian,
  },
  data() {
    return {
      meetfs: [],
    };
  },
  mounted() {
    PaiDuiYuJianApi("/xxxapi/meet/all").then((res) => {
      this.meetfs = res.data.data;
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