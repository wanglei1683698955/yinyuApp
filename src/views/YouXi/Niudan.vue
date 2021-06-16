<template>
  <div id="Niudan">
    <div id="top-fs">
      <span class="iconfont zjt-fs" @click="getBack">&#xe508;</span>
      >
      <ul>
        <span
          ><img src="../../../public/images/YouXi/zhuanshi.png" alt=""
        /></span>
        <li>
          <i>0</i
          ><b><img src="../../../public/images/YouXi/jia.png" alt="" /></b>
        </li>
        <span><img src="../../../public/images/YouXi/jinbi.png" alt="" /></span>
        <li>
          <i>846</i
          ><b><img src="../../../public/images/YouXi/jia.png" alt="" /></b>
        </li>
        <span
          ><img src="../../../public/images/YouXi/beibao.png" alt=""
        /></span>
        <li class="late-li"><i>背包</i></li>
      </ul>
    </div>
    <div id="N-banner">
      <van-notice-bar
        left-icon="volume-o"
        text="恭喜xxx用户获得特殊奖励：“蒸汽波·飘屏”特效                                    "
      />
    </div>
    <div id="N-conter">
      <div id="N-conter-c">
        <div id="N-conter-c-t">奇迹扭蛋机</div>
        <div id="N-conter-c-c">
          <div id="N-conter-c-c1">
            <div id="N-suipian">碎片兑换</div>
            <ul>
              <li>抽奖记录</li>
              <li>抽奖介绍</li>
            </ul>
          </div>
          <div id="N-conter-c-c2">
            <dl v-for="jiangpin in jiangpins" :key="jiangpin.id">
              <dt>
                <img :src="jiangpin.img" />
              </dt>
              <dd>
                <p>{{ jiangpin.name }}</p>
              </dd>
            </dl>

            <dl v-for="xinyou in xinyous" :key="xinyou.id">
              <h1></h1>
              <dt>
                <img :src="xinyou.img" />
              </dt>
              <dd>
                <p>{{ xinyou.name }}</p>
              </dd>
            </dl>
            <dl v-for="gaoji in gaojis" :key="gaoji.id">
              <h1></h1>
              <dt>
                <img :src="gaoji.img" />
              </dt>
              <dd>
                <p>{{ gaoji.name }}</p>
              </dd>
            </dl>
          </div>
          <div id="N-conter-c-c3">
            <h1>本周：4次(每周一0点清零)</h1>
            <div id="N-conter-c-c3-c">
              <div class="N-conter-c-c3-c-l">
                <p>累积好礼</p>
                <span>0</span><i>/100</i>
              </div>
              <div class="N-conter-c-c3-c-r">
                <div id="zhezhao-con" ref="ZZC">
                  恭喜您获得特殊奖励：“蒸汽波·飘屏”特效
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="N-conter-c-b">
          <ul class="N-conter-c-b-l">
            <li>
              <ul>
                <li>
                  <img src="../../../public/images/YouXi/yuyuanbi.png" alt="" />
                </li>
                <li>0</li>
                <li>
                  <img src="../../../public/images/YouXi/jia.png" alt="" />
                </li>
              </ul>
            </li>
            <div id="N-conter-c-b-l-b">
              <img src="../../../public/images/YouXi/choujiangkou.png" alt="" />
            </div>
          </ul>
          <ul class="N-conter-c-b-r">
            <li id="choujiang" @click="fun(1)">
              <img src="../.././../public/images/YouXi/1lian.png" alt="" />
            </li>
            <li @click="fun(2)">
              <img src="../.././../public/images/YouXi/10lian.png" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <img :src="urlimage" alt="">
          </div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import "../../../public/iconfont/icon_YouxXi/font_ex4uej7wmgn/iconfont.css";
import {GetHome} from '../../api/Ndaxios.js'
export default {
  name: "Niudan",
  props: [""],
  data: function () {
    return {
      show: false,
      urlimage:"/images/YouXi/niudanbeijing.png",
      jiangpins: [
        {
          id: "001",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "002",
          img: "/images/YouXi/jiangpin.png",
          name: "女巫出没",
        },
        {
          id: "003",
          img: "/images/YouXi/jiangpin.png",
          name: "南瓜会说话",
        },
        {
          id: "004",
          img: "/images/YouXi/jiangpin.png",
          name: "就吓你",
        },

        {
          id: "005",
          img: "/images/YouXi/jiangpin.png",
          name: "蒸汽波·头像框",
        },
        {
          id: "006",
          img: "/images/YouXi/jiangpin.png",
          name: "蒸汽波·声波",
        },
        {
          id: "007",
          img: "/images/YouXi/jiangpin.png",
          name: "蒸汽波·气泡",
        },
        {
          id: "008",
          img: "/images/YouXi/jiangpin.png",
          name: "蒸汽波·飘屏",
        },
      ],
      xinyous: [
        {
          id: "009",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "010",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "011",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "012",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },

        {
          id: "013",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "014",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "015",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "016",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
      ],
      gaojis: [
        {
          id: "017",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "018",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "019",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "020",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },

        {
          id: "021",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "022",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "023",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
        {
          id: "024",
          img: "/images/YouXi/jiangpin.png",
          name: "不带就捣蛋",
        },
      ],
    };
  },
  methods: {
    fun(type) {
      console.log(type);
      this.show = true;
    GetHome("/xxxapi/game/num").then(res=>{
      // this.a=res.data.data.substring(0,1);
      // console.log(this.a)
      console.log(res.data.data.substring(0,1));
      
      switch (res.data.data.substring(0,1)) {
        case 1:
          this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
           case 2:
          this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
      case 3:
         this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
           case 4:
          this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
      case 5:
          this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
           case 6:
          this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
      case 7:
          this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
           case 8:
         this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
           case 9:
         this.urlimage="/images/YouXi/niudanbeijing.png";
          break;
      
        default:
          break;
      }

    })
    },

    getBack() {
      this.$router.go(-1);
    },
    
  }
  
};
</script>
<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 60%;
    height: 30%;
    background-color: #fff;
  }
  .block img{
    width: 100%;height: 100%;
  }
.van-notice-bar {
  width: 80%;
  height: 0.24rem;
  background-color: #171719;
  font-size: 0.12rem;
}
</style>
<style  scoped>
#top-fs {
  width: 100%;
  height: 0.43rem;
  background-color: #222126;
}

#top-fs .zjt-fs {
  font-size: 0.2rem;
  position: absolute;
  left: 0.13rem;
  top: 0.1rem;
  color: white;
}
#top-fs ul {
  width: 50%;
  height: 0.43rem;
  float: right;
  margin-right: 0.15rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.43rem;
  position: relative;
  color: white;
  font-weight: 600;
}
#top-fs ul li {
  width: 25%;
  height: 0.18rem;
  background-color: #343338;
  border-radius: 0.1rem;
  margin: auto;
}
#top-fs ul span {
  width: 0.18rem;
  height: 0.18rem;
  margin-top: 0.12rem;
}
#top-fs ul span img {
  width: 10%;
  height: 45%;
  position: absolute;
}
#top-fs ul li i {
  float: left;
  position: absolute;
  line-height: 0.18rem;
  margin-left: 0.05rem;
}
#top-fs ul li b {
  float: right;
  margin-right: 0.2rem;
}
#top-fs ul li b img {
  width: 10%;
  height: 40%;
  position: absolute;
}
#top-fs ul .late-li {
  background-color: #36353a;
}
#N-banner {
  width: 100%;
  height: 0.24rem;
  background-color: #171719;
}
#N-conter {
  width: 100%;
  height: 6rem;
  background-color: #212025;
}
#N-conter-c {
  width: 93%;
  background-color: #322f4e;
  height: 4.35rem;
  margin: auto;
}
#N-conter-c-t {
  width: 100%;
  height: 0.52rem;
  line-height: 0.52rem;
  background: url("../../../public/images/YouXi/niudanbeijing.png");
  background-size: 100%;
  font-size: 0.27rem;
  color: white;
  font-weight: 600;
  text-align: center;
}
/* 抽奖部分 */
#N-conter-c-c {
  width: 100%;
  height: 4.5rem;
  background: #322f4e;
}
#N-conter-c-c1 {
  width: 100%;
  height: 0.32rem;
  color: white;
}
#N-conter-c-c1 #N-suipian {
  float: left;
  margin-left: 0.07rem;
  margin-top: 0.07rem;
  width: 0.62rem;
  height: 0.19rem;
  background: #464564;
  border-radius: 0.05rem;
  text-align: center;
  line-height: 0.19rem;
}
#N-conter-c-c1 ul {
  margin-top: 0.07rem;
  float: right;
  width: 1rem;
  height: 0.32rem;
  display: flex;
  justify-content: space-between;
  margin-right: 0.11rem;
}
#N-conter-c-c2 {
  width: 95%;
  height: 3.5rem;
  margin: 0 auto;
  background: url("../../../public/images/YouXi/niudan-big.png");
  background-size: 100% 98%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: #f39513;
  overflow-y: scroll;
  padding: 0 0.2rem;
}
#N-conter-c-c2:after {
  content: "";
  width: 24%;
}
#N-conter-c-c2 dl {
  width: 0.6rem;
  height: 0.85rem;
  margin-left: 0.27rem;
  margin-top: 0.25rem;
}
#N-conter-c-c2 dl dt {
  height: 0.45rem;
}
#N-conter-c-c2 dl p {
  text-align: center;
  white-space: nowrap;
}
#N-conter-c-c2 dl dt img {
  width: 0.45rem;
  height: 0.45rem;
}
/* 设置本周样式 */
#N-conter-c-c3 h1 {
  margin-left: 1rem;
  color: #6d718c;
  font-size: 0.1rem;
}
#N-conter-c-c3 {
  width: 95%;
  height: 0.3rem;
}

#N-conter-c-c3-c {
  background-color: #252a40;
  margin: auto;
  border-radius: 0.1rem;
  width: 95%;
  height: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.N-conter-c-c3-c-l {
  width: 20%;
  height: 100%;
  background-color: #1f1d32;
  border-radius: 0.1rem;
}
.N-conter-c-c3-c-l p {
  color: #585487;
  margin-left: 0.08rem;
}
.N-conter-c-c3-c-l span {
  color: #08efff;
  font-size: 0.14rem;
  font-weight: 600;
  font-style: italic;
  margin-left: 0.18rem;
}
.N-conter-c-c3-c-l i {
  color: #fbfdfa;
  font-weight: 600;
  font-style: italic;
}
.N-conter-c-c3-c-r {
  width: 75%;
  height: 30%;
  background: #464d6a;
  color: yellow;
  border-radius: 0.05rem;
  position: relative;
}

#zhezhao-con {
  width: 100%;
  height: 0.2rem;

  position: absolute;
  border-radius: 0.05rem;
  border: 1px solid;
  background: url("../../../public/images/YouXi/cj1.png");
  background-size: 100% 100%;
}

/* 抽奖 */
#N-conter-c-b {
  width: 100%;
  height: 0.96rem;
  background: #312e4b;
  display: flex;
  justify-content: space-around;
}
.N-conter-c-b-l {
  width: 35%;
  height: 70%;

  border-radius: 0.1rem;
}
.N-conter-c-b-l > li {
  width: 100%;
  height: 35%;
  background-color: #1d1c2e;
  border-radius: 0.1rem;
}
.N-conter-c-b-l > li > ul {
  width: 98%;
  margin-top: 0.12rem;
  display: flex;
  justify-content: space-evenly;
}
.N-conter-c-b-l > li > ul > li {
  width: 20%;
  text-align: center;
  height: 0.27rem;
  line-height: 0.27rem;
  color: white;
}
.N-conter-c-b-l > li > ul > li img {
  width: 100%;
}

#N-conter-c-b-l-b {
  width: 100%;
  height: 84%;

  margin-top: 0.05rem;
}
#N-conter-c-b-l-b img {
  width: 100%;
  height: 100%;
}
.N-conter-c-b-r {
  width: 55%;
  height: 70%;

  display: flex;
  justify-content: space-evenly;
}
.N-conter-c-b-r li {
  width: 45%;
  height: 100%;
}
.N-conter-c-b-r li img {
  width: 100%;
}
</style>
