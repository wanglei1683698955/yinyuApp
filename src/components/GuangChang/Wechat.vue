<template>
  <div>
    <div class="vary" v-for="(ww, index) in work" :key="index">
      <!-- 头像、用户名 -->
    <div id="user">
      <!-- <router-link to="/inner"> <div id="pic" >
      <img :src="ww.touxiang" />
    </div></router-link> -->
   <div id="pic"  @click="tiaozhuan(ww.wid)">
      <img :src="ww.touxiang" />
      <!-- <img src="../../../public/images/GuangChang/speech1.png" /> -->
    </div>
    <div id="text">
      <p id="big">{{ww.uname}}</p>
    </div>
    <div>
      .<span id="zhu">关注</span>
    </div>
      <van-cell title="..." @click="showShare = true" />
      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
      />
      </div>
      
      <!-- work -->
      <div id="work">
        <p id="my">{{ww.winfo}}</p>
        <div id="box">
          <img :src="ww.wpicture" />
          <!-- <img src="../../../public/images/GuangChang/bg1.jpg" /> -->
        </div>
        <!-- 点赞区 -->
        <div id="bot">
          <span class="iconfont jiajia" @click="chan">&#xe605;</span>
          <span class="whi jia" >{{ ww.wzan }}</span>
          <span class="iconfont">&#xe620;</span>
          <span class="whi">{{ ww.wpinglun }}</span>
          <span class="iconfont">&#xe635;</span
          ><span class="whi">{{ ww.wfenxiang }}</span>
        </div>
      </div>
      <!-- 评论 -->
      <div>
        <span class="wang">JAY:</span> <span>互</span
        ><span class="iconfont rr">&#xeb52;</span>
      </div>
      <div>
        <span class="wang">苏墨染:</span><span>哈哈</span>
        <span class="iconfont ll">&#xeb52;</span>
      </div>
      <div id="line">
        <van-cell is-link title="查看评论" @click="show = true" />
        <van-action-sheet v-model="show" title="评论">
          <div class="content">互赞</div>
          <div class="content">好听</div>
          <div class="content">爱了爱了</div>
          <div class="content">互</div>
        </van-action-sheet>
        <div id="talk"><span class="iconfont">&#xe64c;</span>发表评论...</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "WeChat",
  
  data() {
    return {
      work: [],
      show: false,
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
    };
  },
  methods: {
    tiaozhuan(id){
         this.$router.push({name:"inner",query:{ id }})
    },
    chan(){
    document.querySelector(".jiajia").style.color="red";
    document.querySelector(".jia").innerHTML++;
  }
  },
  
  created() {
    axios({
      url: "/xxxapi/work/all",
      // url:"/work",
      method: "get",
     
    }).then((res) => {
      // this.work = res.data;
      this.work = res.data.data;
      // console.log("res.data", res.data);
    });
  },
};
</script>
<style>
#user .van-cell__title {
  width: 0.5rem;
  margin-left: 1.2rem;
}

#user .van-cell {
  width: 38%;
  padding: 0;
   padding-top: 0.15rem;
}
.van-cell__title span {
  color: black;
  font-size: 0.14rem;
  font-weight: 900;
}
#line .van-cell {
  padding-top: 0rem;
  padding-bottom: 0rem;
  padding-left: 0rem;
  padding-right: 0rem;
}
.van-action-sheet .van-action-sheet__content .content {
  padding-bottom: 0rem;
}
</style>
<style scoped>
.wang {
  color: black;
  font-size: 0.14rem;
  font-weight: 900;
}
#box {
  height: 2.37rem;
  width: 98%;
  background-color: aquamarine;
}
#box img {
  height: 100%;
  width: 100%;
}
.iconfont {
  font-size: 0.19rem;
}
#bot {
  border-bottom: black 1px solid;
  padding-bottom: 0.1rem;
  padding-top: 0.1rem;
}

#my {
  padding-bottom: 0.1rem;
}
.whi {
  margin-right: 5%;
}
#line {
  border-bottom: 1px solid black;
  height: 0.55rem;
  /* line-height: 0.3rem; */
}
#line #talk {
  display: inline-block;
  margin-top: 0.05rem;
}
.content {
  padding: 16px 16px 160px;
}
#user #pic {
  height: 0.4rem;
  width: 0.4rem;
  border-radius: 50%;
  border: 0.01rem solid black;
  overflow: hidden;
  margin-bottom: 0.1rem;
}
#user #pic img {
  width: 100%;
  height: 100%;
}
#user {
  padding-top: 0.25rem;
  display: flex;
}
#big {
  font-size: 0.17rem;
  font-weight: 700;
}
#zhu{
  display: inline-block;
  padding-top: 0.15rem;
  color: red;
  margin-left: 0.05rem;
}
#text {
  padding-top: 0.1rem;
  margin-left: 5%;
}
.rr{
  margin-left: 2.52rem;
}
.ll{
  margin-left:2.3rem;
}
</style>