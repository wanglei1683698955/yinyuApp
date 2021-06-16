<template>
  <ul class="PaiDuiJuLeBu_zhuti_ul">
        <JuLeBu
          v-for="(m, i) in club"
          :key="i"
          :cid="m.cid"
          :pic="m.pic"
          :cname="m.cname"
          :cinfo="m.cinfo"
          :cunamber="m.cunamber"
          :cvnum="m.cvnum"
        ></JuLeBu>
      </ul>
</template>

<script>
import { PaiDuiJuLeBuApi } from "../../api/PaiDuiJuLeBuApi.js";
import JuLeBu from "../../components/PaiDui/JuLeBu.vue";
export default {
 name: "julebu",
  data() {
    return {
      club: [],
    };
  },
  components: {
    JuLeBu,
  },
  mounted() {
    PaiDuiJuLeBuApi("/xxxapi/club/all").then((res) => {
      this.club = res.data.data;
    });
  },
}
</script>

<style scoped>
.PaiDuiJuLeBu_zhuti_ul{
    width: 100%;
    flex: 1;
}
</style>