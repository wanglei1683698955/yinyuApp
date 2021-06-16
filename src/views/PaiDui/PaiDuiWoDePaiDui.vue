<template>
  <div id="WoDePaiDui">
    <div id="WoDePaiDui_header">
      <ul id="WoDePaiDui_ul">
        <router-link to="/paidui"
          ><li class="iconfont icon-fanhuijiantou"></li>
        </router-link>
        <li>派对</li>
        <li></li>
      </ul>
    </div>
    <div id="WoDePaiDui_box">
      <h1>我的派对</h1>
    </div>
    <div id="WoDePaiDui_ka">
      <div id="WoDePaiDui_top">
        <div id="WoDePaiDui_img">
          <img src="../../../public/images/PaiDui/touxiang.png" alt="" />
        </div>
        <div id="WoDePaiDui_text">
          <p>小阿宇是个小帅比^^</p>
          <b>ID：60000096614</b>
          <span>派对已打样</span>
          <h3>
            今日房间收益
            <p>:</p>
            <em>0元</em>
          </h3>
        </div>
      </div>
      <div id="WoDePaiDui_yuege">约歌</div>
      <div id="WoDePaiDui_butei">
        补贴
        <div class="iconfont icon-fanhuijianhong"></div>
      </div>
      <ul id="WoDePaiDui_rukou">
        <li>管理主持人</li>
        <li class="WoDePaiDui_li1">进入派对</li>
      </ul>
    </div>
    <div id="WoDePaiDui_box1">
      <ul id="WoDePaiDui_zhuchi">
        <li di="WoDePaiDui_ziti">我主持的派对 <span>（0）</span></li>
      </ul>
      <div di="WoDePaiDui_wenhao1">
        <span class="iconfont icon-wenhao"></span>
      </div>
    </div>
    <div id="WoDePaiDui_footer">
      <span>没有主持其他派对呀~</span>
    </div>
  </div>
</template>

<script>
import "../../../public/iconfont/icon_PaiDui/font_iwomiqxlgy8/iconfont.css";
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
#WoDePaiDui {
  background-color: #272727;
  padding: 0 0.12rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#WoDePaiDui_header {
  margin-top: 0.2rem;
  display: flex;
  width: 100%;
  height: 0.3rem;
}
#WoDePaiDui_ul {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 0.3rem;
}
#WoDePaiDui_ul li {
  color: #f6f6f6;
  font-size: 0.17rem;
  height: 0.3rem;
  line-height: 0.3rem;
}
#WoDePaiDui_box {
  display: flex;
  width: 100%;
  height: 0.36rem;
}
#WoDePaiDui_box h1 {
  font-size: 0.17rem;
  width: 100%;
  height: 0.36rem;
  line-height: 0.36rem;
  color: #f6f6f6;
}
#WoDePaiDui_ka {
  position: relative;
  padding: 0.13rem;
  width: 100%;
  height: 1.73rem;
  background-color: #f6f6f6;
  border-radius: 0.1rem;
}
#WoDePaiDui_top {
  display: flex;
  width: 100%;
  height: 0.93rem;
}
#WoDePaiDui_img {
  border-radius: 0.1rem;
  width: 0.93rem;
  height: 0.93rem;
}
#WoDePaiDui_img img {
  width: 0.93rem;
  height: 0.93rem;
  border-radius: 0.1rem;
}
#WoDePaiDui_text {
  padding-top: 0.08rem;
  margin-left: 0.16rem;
  width: 1.18rem;
  height: 0.93rem;
}
#WoDePaiDui_text p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
  font-size: 0.13rem;
}
#WoDePaiDui_text b {
  display: block;
  font-size: 0.12rem;
  color: #7d7d7d;
  width: 100%;
}
#WoDePaiDui_text span {
  margin-top: 0.1rem;
  display: block;
  color: #7d7d7d;
  width: 100%;
  font-size: 0.14rem;
}
#WoDePaiDui_text h3 {
  display: flex;
  margin-top: 0.06rem;
  display: block;
  color: #7d7d7d;
  width: 100%;
  font-size: 0.14rem;
}
#WoDePaiDui_text h3 p {
  height: 0.12rem;
  display: inline-block;
  font-weight: 600;
}
#WoDePaiDui_text h3 em {
  color: #ff0c00;
  font-weight: 600;
}
#WoDePaiDui_yuege {
  font-weight: 600;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffab00;
  width: 0.53rem;
  height: 0.27rem;
  text-align: center;
  line-height: 0.27rem;
  border-radius: 0 0.1rem 0 0.1rem;
}
#WoDePaiDui_butei {
  position: absolute;
  top: 0.37rem;
  right: 0;
  border: 0.01rem solid black;
  color: #f6f6f6;
  display: flex;
  background-color: #ff2021;
  width: 0.56rem;
  height: 0.28rem;
  padding-left: 0.15rem;
  line-height: 0.28rem;
  border-radius: 0.25rem 0 0 0.25rem;
}
.icon-fanhuijianhong {
  font-size: 0.1rem;
}
#WoDePaiDui_rukou {
  margin-top: 0.15rem;
  display: flex;
  justify-content: space-between;
  height: 0.39rem;
  width: 100%;
}
#WoDePaiDui_rukou li {
  width: 1.31rem;
  height: 0.39rem;
  line-height: 0.39rem;
  border: 0.01rem solid black;
  border-radius: 0.25rem;
  text-align: center;
}
#WoDePaiDui_rukou .WoDePaiDui_li1 {
  background-color: #fecb34;
}
#WoDePaiDui_box1 {
  display: flex;
  justify-content: space-between;
}
#WoDePaiDui_zhuchi {
  width: 100%;
  height: 0.33rem;
}
#WoDePaiDui_zhuchi li {
  color: #f6f6f6;
  font-size: 0.17rem;
  height: 0.33rem;
  line-height: 0.33rem;
}

.icon-wenhao {
  border-radius: 50%;
  height: 0.3rem;
  line-height: 0.3rem;
  color: black;
  background-color: #f6f6f6;
  font-size: 0.2rem;
}
#WoDePaiDui_footer {
  flex: 1;
}
#WoDePaiDui_footer span {
  color: #a8a8a8;
  font-size: 0.14rem;
  display: block;
  width: 1.64rem;
  height: 0.27rem;
  margin: 0 auto;
  margin-top: 40%;
  text-align: center;
  line-height: 0.27rem;
}
</style>