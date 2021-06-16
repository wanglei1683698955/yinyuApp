<template>
  <div id="Fshao">
    <BannerF></BannerF>
    <div id="Fshao-top-back">
      <div id="Fshao-top">
        <div id="Fshao-top-1">
          <div id="Fshao-top-l">
            <img src="../../../public/images/YouXi/FStouxiang.png" alt="" />
          </div>
          <div id="Fshao-top-c">
            <span class="FS-id">SYFMature</span
            ><span class="iconfont FSHG">&#xe62d;</span>
            <h1>开通发烧友，享受特权服务</h1>
          </div>
          <div id="Fshao-top-r">未开通</div>
        </div>
      </div>
    </div>
    <div id="Fshao-conter" style="overflow: auto">
      <div id="Fshao-conter-t">
        <h1>开通发烧友</h1>
        <ul>
          <li
            :class="index === current ? 'li1' : 'li2'"
            v-for="(item, index) in fsLists"
            :key="item + index"
            @click="liYangshi(index)"
          >
            <p class="conter-ul-1">{{ item.yuefen}}月</p>
            <p class="conter-ul-2">
              ￥<span>{{ item.jiage}}</span>
            </p>
            <p class="conter-ul-3">{{ item.fsName }}</p>
          </li>

        </ul>
      </div>
      <div id="Fshao-conter-c"></div>
      <div id="Fshao-conter-b">
        <h1>发烧友特权</h1>
        <span id="Fshao-conter-b-l" class="iconfont" @click="prevbtn"
          >&#xe60e;</span
        >

        <van-swipe
          ref="swiper"
          :loop="false"
          :show-indicators="false"
          @change="onChange"
        >
          <van-swipe-item>
            <ul>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-3 .jpg" alt="" />
                </p>
                <span>限定</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>

              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限</span>
              </li>
            </ul></van-swipe-item
          >
          <van-swipe-item
            ><ul>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>

              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限</span>
              </li>
            </ul></van-swipe-item
          >
          <van-swipe-item
            ><ul>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装扮</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>

              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定装</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限定</span>
              </li>
              <li>
                <p>
                  <img src="../../../public/images/YouXi/FS-1.png" alt="" />
                </p>
                <span>限</span>
              </li>
            </ul></van-swipe-item
          >
        </van-swipe>
        <span id="Fshao-conter-b-r" @click="nextbtn" class="iconfont"
          >&#xe70a;</span
        >
      </div>
    </div>
    <div id="FS-1"></div>
    <div id="FS-xieyi">
      成为发烧友即表示同意 <span>《音遇发烧友协议》</span>
    </div>
    <div id="FS-1"></div>
    <div id="Fshao-buttom-b"><div id="Fshao-buttom">开通发烧友</div></div>
  </div>
</template>
<script>
import BannerF from "../../components/Youxi/BannerF.vue";
import "../../../public/iconfont/icon_YouxXi/font_ex4uej7wmgn/iconfont.css";
import axios from "axios";

export default {
  name: "fashao",
  data() {
    return {
      current: 0,
      fsLists: [],
    };
  },
  components: { BannerF },
  methods: {
    onChange(index) {
      this.current = index;
    },

    prevbtn() {
      this.$refs.swiper.prev();
    },
    nextbtn() {
      this.$refs.swiper.next();
    },
    liYangshi(index) {
      this.current = index;
    },
   

    // }
  },
   created() {
      axios("/xxxapi/huiyuan/all").then((res) => {
        this.fsLists = res.data.data;
        console.log(res.data.data);
        
      });
    },
};
</script>
<style  scoped>
#Fshao-top-back {
  width: 100%;
  height: 1.35rem;
  background-color: #f1f1f1;
  position: relative;
}
#Fshao-top {
  width: 92%;
  height: 1.28rem;
  position: absolute;
  bottom: 0;
  left: 0.13rem;
  background: url("../../../public/images/YouXi/beijing.png");
  background-size: 100%;
}
#Fshao-top img {
  width: 100%;
  height: 100%;
}
#Fshao-top-1 {
  display: flex;
  justify-content: space-between;
  margin-top: 0.14rem;
  padding-left: 0.2rem;
}
#Fshao-top-l {
  width: 0.34rem;
  height: 0.34rem;
  background-color: darkorange;
  top: 0.14rem;
}
#Fshao-top-c {
  width: 2rem;
  height: 0.34rem;

  top: 0.14rem;
}
#Fshao-top-c .FS-id {
  font-size: 0.14rem;
  color: #fcffde;
  font-weight: 600;
}
#Fshao-top-c .FSHG {
  margin-left: 0.75rem;
}
#Fshao-top-c h1 {
  font-size: 0.09rem;
  color: #faf3c7;
}
#Fshao-top-r {
  width: 0.58rem;
  height: 0.34rem;
  background-color: #705ee6;
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  color: #f7f5f8;
  font-size: 0.14rem;
  font-weight: 600;
  line-height: 0.34rem;
  text-align: center;
}
#Fshao-conter-t {
  width: 100%;
  height: 1.68rem;
}
#Fshao-conter-t h1 {
  font-size: 0.18rem;
  font-weight: 600;
  margin-left: 0.13rem;
  margin-top: 0.21rem;
}
#Fshao-conter-t ul {
  margin-top: 0.21rem;
  margin-left: 0.27rem;
  margin-right: 0.27rem;
  display: flex;
  justify-content: space-between;
}
#Fshao-conter-t ul .li2 {
  width: 0.7rem;
  height: 0.86rem;
  border-radius: 0.1rem;
  border: 4px solid #d2d2d2;
  text-align: center;
}
#Fshao-conter-t ul .li1 {
  width: 0.8rem;
  height: 0.96rem;
  border-radius: 0.1rem;
  border: 4px solid #f2a728;
  background-color: #fff8de;
  text-align: center;
}
#Fshao-conter-t ul li .conter-ul-1 {
  font-size: 0.12rem;
  font-weight: 600;
  margin-top: 0.12rem;
}
#Fshao-conter-t ul li .conter-ul-3 {
  color: #c9c9c9;
  font-size: 0.06rem;
  font-weight: 600;
  margin-top: 0.03rem;
}
#Fshao-conter-t ul li .conter-ul-2 {
  margin-top: 0.03rem;
}
#Fshao-conter-t ul li .conter-ul-2 span {
  color: #f6a136;
  font-size: 0.18rem;
  font-weight: 600;
}
#Fshao-conter-c {
  width: 100%;
  height: 0.05rem;
  background-color: #f4f4f4;
}
#Fshao-conter-b {
  position: relative;
}
#Fshao-conter-b h1 {
  font-size: 0.18rem;
  font-weight: 600;
  margin-left: 0.13rem;
  margin-top: 0.21rem;
}
#Fshao-conter-b ul {
  width: 2.83rem;

  margin: 0 auto;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#Fshao-conter-b ul li {
  width: 0.5rem;
  height: 0.59rem;
  margin-left: 0.06rem;
  margin-right: 0.06rem;
  margin-top: 0.03rem;
}
#Fshao-conter-b ul li p {
  width: 0.4rem;
  height: 0.4rem;
  background: url("../../../public/images/YouXi/FS-beijing.png");
  background-size: 100%;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
}
#Fshao-conter-b ul li p img {
  width: 60%;
  height: 60%;
  margin: auto;
}
#Fshao-conter-b-l {
  position: absolute;
  left: 0.1rem;
  top: 1.2rem;
}
#Fshao-conter-b-r {
  position: absolute;
  right: 0.1rem;
  top: 1.2rem;
}
#Fshao-buttom-b {
  width: 100%;
  height: 0.64rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  border-top: 2px solid #f4f4f4;
}
#Fshao-buttom {
  width: 1.89rem;
  height: 0.37rem;
  background-color: #fecb34;
  margin: auto;
  border-radius: 0.1rem;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.37rem;
  font-weight: 600;
  margin-top: 0.09rem;
  margin-bottom: 0.09rem;
}
#FS-1 {
  width: 100%;
  height: 0.09rem;
  background-color: #f4f4f4;
}
#FS-xieyi {
  width: 100%;
  height: 0.53rem;
  text-align: center;
  line-height: 0.53rem;
  margin-bottom: 0.53rem;
}
</style>
