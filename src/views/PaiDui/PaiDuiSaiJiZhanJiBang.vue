<template>
  <ul class="PaiDui_ser_ul">
    <SaiJiZhanJiBang></SaiJiZhanJiBang>
  </ul>
</template>

<script>
import SaiJiZhanJiBang from "../../components/PaiDui/SaiJiZhanJiBang.vue";
export default {
  name: "saijizhanjibang",
  components: {
    SaiJiZhanJiBang,
  },
  data() {
    return {};
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
  width: 100%;
  flex: 1;
}
</style>