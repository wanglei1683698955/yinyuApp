<template>
  <li class="PaiDui_ser_ul_li">
    <img :src="img" alt="" />
    <p class="PaiDui_ser_ul_li_pp">{{ name1 }}</p>
    <div class="PaiDui_ser_ul_li_div1">
      <img :src="img" alt="" />
      <span>{{ name2 }}</span>
    </div>
    <!-- <ul class="PaiDui_ser_biaoqian">
      <li class="PaiDui_ser_biaoqian_li1">{{ auct }}</li>
      <li class="PaiDui_ser_biaoqian_li2">
        <img src="../../../public/images/PaiDui/dongtai_03.png" alt="" />
      </li>
    </ul> -->
    <ul class="PaiDui_ser_biaoqian1">
      <li class="iconfont icon-wode"></li>
      <li>
        <span>{{ renqi }}</span>
      </li>
    </ul>
    <ul class="PaiDui_ser_biaoqian2">
      <li class="PaiDui_ser_biaoqian2_li"></li>
      <li class="PaiDui_ser_biaoqian2_li1">
        <span>{{ bangzhi }}</span> w+
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name1", "name2", "bangzhi", "renqi","img"],
};
</script>

<style scoped>
.PaiDui_ser_ul .PaiDui_ser_ul_li {
  margin-bottom: 0.11rem;
  position: relative;
  border: 1px solid #f8f8f8;
  border-radius: 0.1rem;
  background-color: white;
  width: 1.7rem;
  height: 1.9rem;
}
.PaiDui_ser_ul li img {
  border-radius: 0.1rem 0.1rem 0 0;
  width: 100%;
  height: 1.45rem;
}
 .PaiDui_ser_ul_li_pp {
  padding-left: 0.05rem;
  font-size: 0.14rem;
}
.PaiDui_ser_ul .PaiDui_ser_ul_li_div1 {
  padding-left: 0.05rem;
  display: flex;
  border-radius: 0.1rem;
  width: 100%;
  height: 0.18rem;
}
.PaiDui_ser_ul .PaiDui_ser_ul_li_div1 img {
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 0.1rem;
}
.PaiDui_ser_ul .PaiDui_ser_ul_li_div1 span {
  color: #a4a2a3;
}
/* .PaiDui_ser_biaoqian {
  top: 0.04rem;
  left: 0.04rem;
  position: absolute;
  padding: 0 0.05rem;
  display: flex;
  justify-content: space-between;
  width: 0.5rem;
  height: 0.16rem;
  background-color: #ffae00;
  border-radius: 0.25rem;
}
.PaiDui_ser_biaoqian .PaiDui_ser_biaoqian_li1 {
  color: white;
  width: 60%;
  line-height: 0.16rem;
  height: 0.16rem;
}
.PaiDui_ser_biaoqian .PaiDui_ser_biaoqian_li2 {
  padding-top: 0.03rem;
  width: 0.1rem;
  height: 0.1rem;
}
.PaiDui_ser_biaoqian .PaiDui_ser_biaoqian_li2 img {
  width: 0.1rem;
  height: 0.1rem;
} */
.PaiDui_ser_biaoqian1 {
  position: absolute;
  right: 0.04rem;
  bottom: 0.52rem;
  padding: 0 0.05rem;
  border-radius: 0.25rem;
  color: white;
  display: flex;
  justify-content: space-between;
  height: 0.19rem;
  background-color: rgba(0, 0, 0, 0.3);
}
.PaiDui_ser_biaoqian1 span {
  font-size: 0.15rem;
  height: 0.19rem;
  line-height: 0.19rem;
}
.PaiDui_ser_biaoqian2 {
  top: 0.04rem;
  right: 0.04rem;
  position: absolute;
  padding: 0 0.05rem;
  display: flex;
  justify-content: space-between;

  height: 0.16rem;
  border-radius: 0.25rem;
}
.PaiDui_ser_biaoqian2 .PaiDui_ser_biaoqian2_li1 {
  color: white;
}
</style>