<template>
  <div id="box">
    <div
      class="box1 box-t"
      :style="'background:url(' + backimg + ')'"
      ref="boxt"
    >
      <span class="box-t-text">
        {{ type }}
      </span>
      <span class="box-t-text1">查看更多 &gt; </span>
    </div>
    <div class="box1 box-t1">
      <div class="box-t1-img1">
        <img src="../../../public/images/YouXi/pai2.jpg" alt="" />
      </div>
      <div class="box-t1-img2">
        <img src="../../../public/images/YouXi/pai56.png" alt="" />
      </div>
      <div class="box-t1-3">
        <p>小阿宇</p>
        <span><img src="../../../public/images/YouXi/pai4.jpg" alt="" /></span
        ><span class="box-t1-3-b">实时榜主</span>
      </div>
    </div>
    <div class="box1 box-t1">
      <div class="box-t1-img1">
        <img src="../../../public/images/YouXi/pai3.jpg" alt="" />
      </div>
      <div class="box-t1-img2">
        <img src="../../../public/images/YouXi/pai56.png" alt="" />
      </div>
      <div class="box-t1-3">
        <p>舒服舒服</p>
        <span>距离榜一</span><span class="box-t1-3-b">51252</span>
      </div>
    </div>
    <div class="box1 box-t1">
      <div class="box-t1-img1">
        <img src="../../../public/images/YouXi/pai7.jpg" alt="" />
      </div>
      <div class="box-t1-img2">
        <img src="../../../public/images/YouXi/pai56.png" alt="" />
      </div>
      <div class="box-t1-3">
        <p>舒服舒服</p>
        <span>距离榜二</span><span class="box-t1-3-b">658416</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Getstr } from "../../api/Paiheng.js";
export default {
  name: "RankList",
  props: ["type", "backimg", "path"],
  data: function () {
    return {
      img1s: "",
      img2s: "",
      jiekong: [""],
    };
  },
  mounted() {
    Getstr("/xxxapi/phb/" + this.path).then((res) => {
      this.$refs.boxt.style.backgroundSize = "100% 100%";
      this.jiekong = res.data.data;
      console.log(this.jiekong);
      console.log(this.type, res.data.data);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#box {
  width: 95%;
  height: 2.3rem;
  margin: 0 auto;
  margin-top: 0.1rem;
  border: 3px solid #565e53;
}
.box-t {
  width: 100%;
  height: 25%;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
}
.box-t-text {
  position: absolute;
  font-size: 0.2rem;
  color: white;
  font-weight: 600;
  margin-left: 0.48rem;
}
.box-t-text1 {
  position: absolute;
  margin-left: 2.6rem;
}
.box-t1 {
  width: 95%;
  height: 25%;
  margin: 0 auto;
  display: flex;
  position: relative;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid #e1e3e2;
}
.box-t1-img1 {
  margin-left: 0.2rem;

  position: absolute;
}
.box-t1-img2 {
  width: 0.4rem;
  height: 0.4rem;
  margin-left: 0.57rem;
}
.box-t1-img2 img {
  width: 100%;
}
.box-t1-3 {
  margin-left: 0.2rem;
}
.box-t1-3 p {
  font-size: 0.16rem;
}
.box-t1-3 span {
  display: inline-block;
  font-size: 0.12rem;
}
.box-t1-3-b {
  margin-left: 0.1rem;
}
</style>
