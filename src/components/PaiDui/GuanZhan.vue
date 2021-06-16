<template>
  <li class="PaiDui_ser_ul_tu">
    <div class="PaiDui_ser_ul_tu_img">
      <img src="../../../public/images/PaiDui/00000_03.png" alt="" />
      <div class="PaiDui_ser_ul_tu_gufeng">{{leixing}}</div>
      <div class="PaiDui_ser_ul_tu_renqi">
        <img
          src="../../../public/images/PaiDui/icon_recommend_tab_hot.png"
          alt=""
        />
        <p>{{renqi}}</p>
      </div>
    </div>
    <ul class="PaiDui_ser_ul_tu_toux">
      <li class="PaiDui_ser_ul_tu_toux_1">
        <img :src="img1" alt="" />
      </li>
      <li class="PaiDui_ser_ul_tu_toux_2">
        <img :src="img2" alt="" />
      </li>
      <li class="PaiDui_ser_ul_tu_toux_3">
        <img :src="img3" alt="" />
      </li>
      <li class="PaiDui_ser_ul_tu_toux_4">
        <img :src="img4" alt="" />
      </li>
      <li class="PaiDui_ser_ul_tu_toux_5">
        <img :src="img5" alt="" />
      </li>
      <li class="PaiDui_ser_ul_tu_toux_6">
        <img :src="img6" alt="" />
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props:["leixing","renqi","img1","img2","img3","img4","img5","img6"]
};
</script>

<style scoped>
.PaiDui_ser_ul .PaiDui_ser_ul_tu {
  margin-bottom: 0.11rem;
  border: 1px solid #f8f8f8;
  border-radius: 0.1rem;
  width: 1.7rem;
  background-color: white;
  height: 1.58rem;
}
.PaiDui_ser_ul_tu_img {
  position: relative;
  width: 100%;
  height: 1.1rem;
}
.PaiDui_ser_ul_tu_img img {
  width: 100%;
  height: 100%;
  border-radius: 0.1rem 0.1rem 0 0;
}
.PaiDui_ser_ul_tu_gufeng {
  /* background-color: blue; */
  position: absolute;
  bottom: 0.03rem;
  left: 0.02rem;
  /* width: 0.3rem; */
  height: 0.2rem;
  text-align: center;
  line-height: 0.2rem;
  color: white;
}
.PaiDui_ser_ul_tu_renqi {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 0.5rem;
  top: 0.02rem;
  right: 0.05rem;
  height: 0.2rem;
}
.PaiDui_ser_ul_tu_renqi img {
  width: 0.17rem;
  height: 0.17rem;
}
.PaiDui_ser_ul_tu_renqi p {
  color: white;
  font-size: 0.15rem;
  display: block;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
}
.PaiDui_ser_ul_tu_toux {
  position: relative;
  width: 100%;
  height: 0.5rem;
}
.PaiDui_ser_ul_tu_toux_1 {
  border: 1px solid black;
  position: absolute;
  bottom: 0.15rem;
  left: 0.04rem;
  border-radius: 50%;
  width: 0.24rem;
  height: 0.24rem;
}
.PaiDui_ser_ul_tu_toux_1 img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.PaiDui_ser_ul_tu_toux_2 {
  border: 1px solid black;
  position: absolute;
bottom: 0.15rem;
  left: 0.20rem;
  border-radius: 50%;
  width: 0.24rem;
  height: 0.24rem;
}
.PaiDui_ser_ul_tu_toux_2 img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.PaiDui_ser_ul_tu_toux_3 {
  border: 1px solid black;
  position: absolute;
 bottom: 0.15rem;
  left: 0.38rem;
  border-radius: 50%;
  width: 0.24rem;
  height: 0.24rem;
}
.PaiDui_ser_ul_tu_toux_3 img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.PaiDui_ser_ul_tu_toux_4 {
  border: 1px solid black;
  position: absolute;
 bottom: 0.15rem;
  left: 0.55rem;
  border-radius: 50%;
  width: 0.24rem;
  height: 0.24rem;
}
.PaiDui_ser_ul_tu_toux_4 img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.PaiDui_ser_ul_tu_toux_5 {
  border: 1px solid black;
  position: absolute;
  bottom: 0.15rem;
  left: 0.7rem;
  border-radius: 50%;
  width: 0.24rem;
  height: 0.24rem;
}
.PaiDui_ser_ul_tu_toux_5 img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
.PaiDui_ser_ul_tu_toux_6 {
  border: 1px solid black;
  position: absolute;
 bottom: 0.15rem;
  left: 0.87rem;
  border-radius: 50%;
  width: 0.24rem;
  height: 0.24rem;
}
.PaiDui_ser_ul_tu_toux_6 img {
  border-radius: 50%;
  width: 100%;
  height: 100%;
}
</style>