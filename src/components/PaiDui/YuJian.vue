<template>
  <li class="PaiDui_ser_ul_l">
    <span class="PaiDui_ser_ul_l_img"
      ><img :src="img" alt="" class="img"
    /></span>
    <div class="PaiDui_ser_ul_l_text">
      <p class="PaiDui_ser_ul_l_text_p1">{{ name1 }}</p>
      <p class="PaiDui_ser_ul_l_text_p2">
        正在:<b>{{ name2 }}</b>
      </p>
      <p class="PaiDui_ser_ul_l_text_p3">
        {{ name3}}<a>{{ name1 }}</a>
      </p>
    </div>
    <div class="PaiDui_ser_ul_l_biaoti">
      <p>{{jingxuan}}</p>
      
    </div>
  </li>
</template>

<script>
export default {
  props: ["name1", "name2", "name3", "jingxuan","img"],
};
</script>

<style scoped>
.PaiDui_ser_ul_l {
  margin: 0.1rem 0 0 0;
  position: relative;
  border-radius: 0.1rem;
  display: flex;
  width: 100%;
  height: 0.79rem;
  background-color: #fffcf7;
}
.PaiDui_ser_ul_l_img {
  border-radius: 0.1rem;
  width: 0.79rem;
  height: 0.79rem;
}
.PaiDui_ser_ul_l_img .img {
  border-radius: 0.1rem;
  width: 0.79rem;
  height: 0.79rem;
}
.PaiDui_ser_ul_l_text {
  padding-left: 0.1rem;
  border-radius: 0 0.1rem 0.1rem 0;
  flex: 1;
  height: 0.79rem;
}
.PaiDui_ser_ul_l_text_p1 {
  margin: 0.06rem 0;
  font-size: 0.16rem;
  font-weight: 600;
}
.PaiDui_ser_ul_l_text_p2 {
  margin: 0.06rem 0;
  color: #9a9995;
}
.PaiDui_ser_ul_l_text_p2 b {
  margin: 0.05rem;
  color: #844fb7;
}
.PaiDui_ser_ul_l_text_p3 {
  margin: 0.06rem 0;
  color: #9a9995;
}
.PaiDui_ser_ul_l_text_p3 a {
  margin: 0.05rem;
  color: #ffa5a4;
}
.PaiDui_ser_ul_l_biaoti {
  top: 0.04rem;
  right: 0.04rem;
  position: absolute;
  padding: 0 0.05rem;
  display: flex;
  color: #ffdfd6;
  justify-content: space-between;
  width: 0.6rem;
  height: 0.2rem;
  line-height: 0.2rem;
  background-color: #ff9680;
  border-radius: 0.25rem;
}
</style>