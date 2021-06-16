<template>
  <div>
    <li class="PaiDuiJuLeBu_zhuti_ul_li">
      <div class="PaiDuiJuLeBu_zhuti_ul_li_box">{{ cid }}</div>
      <div class="PaiDuiJuLeBu_zhuti_ul_li_box1">
        <img :src="pic" alt="" />
      </div>
      <div class="PaiDuiJuLeBu_zhuti_ul_li_box2">
        <span>{{ cname }}</span>
        <p>{{ cinfo }}</p>
        <div class="PaiDuiJuLeBu_zhuti_ul_li_box2_div">
          <b>{{ cunamber }}</b>
          <p>成员</p>
          <b>{{ cvnum }}</b>
          <p>胜场</p>
        </div>
      </div>
      <div class="PaiDuiJuLeBu_zhuti_ul_li_box3">
        <span>99w+</span>
        <p>活跃度</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ["cid", "pic", "cname", "cinfo","cunamber","cvnum"],
};
</script>

<style scoped>
div {
  width: 100%;
}
.PaiDuiJuLeBu_zhuti_ul_li {
  margin-bottom: 0.04rem;
  background-color: white;
  padding-top: 0.06rem;
  display: flex;
  justify-content: space-around;
  border-radius: 0.1rem;
  border: 1px solid #cccc;
  width: 100%;
  height: 0.79rem;
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box {
  color: #4c4c4c;
  height: 100%;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.6rem;
  font-weight: 700;
  width: 0.37rem;
  /* background-color: brown; */
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box1 {
  height: 0.59rem;
  width: 0.59rem;
  /* background-color: burlywood; */
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box1 img {
  height: 0.63rem;
  width: 0.63rem;
  border-radius: 0.1rem;
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box2 {
  height: 100%;
  width: 1.5rem;
  /* background-color: rgb(135, 222, 189); */
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box2 span {
  font-size: 0.14rem;
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box2 p {
  font-size: 0.12rem;
  color: #787878;
}
.PaiDuiJuLeBu_zhuti_ul_li
  .PaiDuiJuLeBu_zhuti_ul_li_box2
  .PaiDuiJuLeBu_zhuti_ul_li_box2_div {
  height: 0.11rem;
  line-height: 0.11rem;
  display: flex;
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box3 {
  padding-top: 0.18rem;
  height: 100%;
  width: 0.57rem;
  /* background-color: rgb(222, 135, 218); */
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box3 span {
  display: block;
  font-size: 0.18rem;
  width: 100%;
  color: #fdb61e;
  text-align: center;
  font-weight: 700;
}
.PaiDuiJuLeBu_zhuti_ul_li .PaiDuiJuLeBu_zhuti_ul_li_box3 p {
  font-size: 0.12rem;
  color: #787878;
  text-align: center;
}
</style>