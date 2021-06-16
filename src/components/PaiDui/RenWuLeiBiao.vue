<template>
  <ul id="PaiDuiWuDeRenWu_renwuleibiao_ul">
    <li id="PaiDuiWuDeRenWu_renwuleibiao_li1">{{renwuname}}</li>
    <li id="PaiDuiWuDeRenWu_renwuleibiao_li2">
      <div id="PaiDuiWuDeRenWu_renwuleibiao_li1_div">
        <img src="../../../public/images/PaiDui/woderenwu_04.png" alt="" />
        <span>幸运币({{xingyunbi}}个)</span>
      </div>
      <div id="PaiDuiWuDeRenWu_renwuleibiao_li1_div1">去完成</div>
    </li>
  </ul>
</template>

<script>
export default {
   props: ["renwuname", "xingyunbi",],
};
</script>

<style scoped>
#PaiDuiWuDeRenWu_renwuleibiao_ul {
  margin-bottom: 0.07rem;
  padding-right: 0.06rem;
  padding-left: 0.03rem;
  width: 100%;
  height: 0.66rem;
  background-color: #ffff;
  border: 1px solid black;
  border-radius: 0.1rem;
}
#PaiDuiWuDeRenWu_renwuleibiao_ul li {
  height: 0.26rem;
}
#PaiDuiWuDeRenWu_renwuleibiao_li1 {
  margin-top: 0.03rem;
  color: white;
  text-align: center;
  line-height: 0.26rem;
  width: 1.93rem;
  background-color: #825de0;
  border-radius: 0.1rem 0 0.26rem 0;
}
#PaiDuiWuDeRenWu_renwuleibiao_li2 {
  display: flex;
  justify-content: space-between;
}
#PaiDuiWuDeRenWu_renwuleibiao_li1_div {
  display: flex;
  width: 1rem;
  line-height: 0.28rem;
  height: 0.28rem;
}
#PaiDuiWuDeRenWu_renwuleibiao_li1_div img {
  width: 0.28rem;
  height: 0.28rem;
}
#PaiDuiWuDeRenWu_renwuleibiao_li1_div span {
  display: inline-block;
}
#PaiDuiWuDeRenWu_renwuleibiao_li1_div1 {
  width: 0.66rem;
  height: 0.27rem;
  line-height: 0.25rem;
  background-color: #6551ff;
  text-align: center;
  border: 1px solid black;
  border-radius: 0.1rem;
  color: white;
}
</style>