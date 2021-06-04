<template>
  <div id="WoDe">
      <div id="WoDe_box" @scroll="fun($event)">
          <div id="WoDeTop" :style="'background-color:'+(background_Top?'':'white')">
              <div class="shadow_box">
                  <div class="shadow_box_icon1"></div>
                  <div class="shadow_box_icon2"></div>

                  <p>868</p>
              </div>

              <span>设置</span>
          </div>

          <div id="WoDe_individualResume">
              <div id="WoDe_individualResume_part">
                    <div id="WoDe_individualResume_part_left">
                        <h1>北泽超酷不给撩丷<span>Lv.9</span></h1>
                        <h2>
                            <span class="iconfont icon-id"></span>
                            <span>12312311</span>
                        </h2>
                    </div>

                    <img src="../../../public/images/XiaoXi/TouXiang/pph_06.jpeg" alt="">
              </div>

              <div id="WoDe_individualResume_soci">
                  <dl>
                  <dt>34</dt>
                  <dd>粉丝</dd>
                </dl>
                <dl>
                    <dt>12</dt>
                    <dd>关注</dd>
                </dl>
                <dl>
                    <dt>0</dt>
                    <dd>领唱作品</dd>
                </dl>
                </div>
          </div>

          <div id="WoDe_options">
              <h2>
                  <span>我的钱包</span>
                  <span class="iconfont icon-youjiantou"></span>
              </h2>

              <div id="WoDe_options_asset">
                <dl>
                    <dt>0</dt>
                    <dd>钻石</dd>
                </dl>
                <dl>
                    <dt>￥0.04</dt>
                    <dd>可提现收益</dd>
                </dl>
                <dl>
                    <dt>45%</dt>
                    <dd>当前最高收益</dd>
                </dl>
              </div>

              <ul class="WoDeList">
                  <li>
                      <h3><b class="iconfont icon-zhangxuyangcansaitubiao-"></b>我的背包</h3>
                      <h4>装扮和道具<b class="iconfont icon-youjiantou"></b></h4>
                  </li>
                  <li>
                      <h3><b class="iconfont icon-aixinjuanzeng"></b>我的亲密关系</h3>
                      <h4><b class="iconfont icon-youjiantou"></b></h4>
                  </li>
                  <li>
                      <h3><b class="iconfont icon-xinyongdu"></b>我的信用值</h3>
                      <h4>100<b class="iconfont icon-youjiantou"></b></h4>
                  </li>
              </ul>
              <ul class="WoDeList">
                  <li>
                      <h3><b class="iconfont icon-shangcheng"></b>商场</h3>
                      <h4><b class="iconfont icon-youjiantou"></b></h4>
                  </li>
                  <li>
                      <h3><b class="iconfont icon-cd"></b>音遇发烧友</h3>
                      <h4><b class="iconfont icon-youjiantou"></b></h4>
                  </li>
                  <li>
                      <h3><b class="iconfont icon-caifu"></b>财富等级</h3>
                      <h4><b class="iconfont icon-youjiantou"></b></h4>
                  </li>
              </ul>
              <ul class="WoDeList ListBottom">
                  <li>
                      <h3><b class="iconfont icon-yonghufankui"></b>同户反馈</h3>
                      <h4><b class="iconfont icon-youjiantou"></b></h4>
                  </li>
                  <li>
                      <h3><b class="iconfont icon-fenxiang"></b>分享音遇</h3>
                      <h4><b class="iconfont icon-youjiantou"></b></h4>
                  </li>
              </ul>
          </div>

      </div>
      <BottomBar :index="4"/>
  </div>
</template>

<script>
import BottomBar from '../../components/Comm/BottomBar.vue'

import '../../../public/iconfont/icon_WoDe/iconfont.css'
export default {
  components: { BottomBar },
    data(){
        return {
            background_Top:true
        }
    },
    methods: {
        fun(e){
            if(e.target.scrollTop > 0){
                this.background_Top = false
            }else if(e.target.scrollTop === 0){
                this.background_Top = true
            }
        }
    }
}
</script>

<style scoped>

 #WoDe{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
 }
 ::-webkit-scrollbar{
     display: none;
 }
 #WoDe_box{
     display: flex;
     flex-direction: column;
     flex: 1;
     overflow: auto;
 }
 #WoDeTop{
     width: 100%;
     height: 0.56rem;
     padding: 0 0.1rem;
     display: flex;
     justify-content: space-between;
     align-items: center;
     position: fixed;
     top: 0;
     z-index: 1;
 }
 #WoDeTop .shadow_box{
     height: 0.2rem;
     background-color: rgba(0,0,0,.1);
     border-radius: 0.06rem;
     position: relative;
     left: 0.1rem;
     padding: 0 0.2rem;
 }
 #WoDeTop .shadow_box .shadow_box_icon1{
     width: 0.2rem;
     height: 0.2rem;
     border-radius: 50%;
     border: 2px solid saddlebrown;
     background-color: #fcaf1f;
     position: absolute;
     left: -0.1rem;
 }
 #WoDeTop .shadow_box .shadow_box_icon2{
     width: 0.1rem;
     height: 0.1rem;
     border-radius: 50%;
     border: 0.02rem solid rgb(255, 255, 255);
     background-color: saddlebrown;
     z-index: 1;
     position: absolute;
     left: -0.05rem;
     top: 0.05rem;
 }
 #WoDeTop .shadow_box p{
     text-align: right;
     line-height: 0.2rem;
 }
 #WoDeTop span:nth-child(2){
     color: #333;
     font-size: 0.14rem;
 }

 #WoDe_individualResume{
     height: 2.52rem;
     background-color: #f7d05b;
     flex-shrink: 0;
     display: flex;
     flex-direction: column;
 }
 #WoDe_individualResume_part{
     width: 100%;
     margin-top: 0.7rem ; 
     height: 0.66rem;
     display: flex;
     justify-content: space-between;
     padding: 0 0.1rem;
 }
 #WoDe_individualResume_part_left{
     display: flex;
     flex-direction: column;
     justify-content: space-around;
 }
 #WoDe_individualResume_part_left h1,h2{
     line-height: 0.32rem;
     display: flex;
     align-items: center;
 }
 #WoDe_individualResume_part_left h1{
     font-size: 0.2rem;
     color: #333;
     font-weight: 600;
 }
 #WoDe_individualResume_part_left h1 span{
     font-style: italic;
     margin-left: 0.1rem;
     color: #eee;
     font-size: 0.16rem;
 }
 #WoDe_individualResume_part_left h2 span.icon-id{
     height: 0.2rem;
     width: 0.2rem;
     font-size: 0.18rem;
     background-color: #333;
     border-radius: 0.05rem;
     color: #f7d05b;
     line-height: 0.2rem;
     position: relative;
     left: 0.04rem;
 }
 #WoDe_individualResume_part_left h2 span:nth-child(2){
     height: 0.2rem;
     font-size: 0.14rem;
     background-color: white;
     border-radius: 0.05rem;
     color: #333;
     line-height: 0.16rem;
     padding: 0.02rem 0.08rem;
     font-weight: 600;
 }
 #WoDe_individualResume_part img{
     width: 0.64rem;
     height: 0.64rem;
     border: 2px solid #333;
     border-radius: 50%;
 }

 #WoDe_individualResume_soci{
     height: 0.4rem;
     position: relative;
     top: 0.3rem;
     display: flex;
     justify-content: space-around;
     text-align: center;
 }
 #WoDe_individualResume_soci dl{
     display: flex;
     flex-direction: column;
     justify-content: space-around;
 }
 #WoDe_individualResume_soci dl dt{
     font-size: 0.18rem;
     font-weight: 600;
 }
 #WoDe_individualResume_soci dl dd{
     font-size: 0.12rem;
     font-weight: 400;
 }

 #WoDe_options{
     background-color: white;
     flex-shrink: 0;
     border-radius: 0.2rem 0.2rem 0 0;
     position: relative;
     top: -0.2rem;
     z-index: 0;
     display: flex;
     flex-direction: column;
     padding: 0 0.1rem;
     height: 5rem;
 }
  #WoDe_options h2{
      display: flex;
      justify-content: space-between;
      height: 0.54rem;
      align-items: flex-end;
      padding-bottom: 0.02rem;
  }
  #WoDe_options h2 span:nth-child(1){
      font-weight: 600;
      font-size: 0.16rem;
  }
  #WoDe_options h2 span:nth-child(2){
      font-size: 0.16rem;
      width: 0.3rem;
      text-align: center;
  }
  #WoDe_options_asset{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0.12rem;
  }
  #WoDe_options_asset dl{
      width: 32%;
      height: 0.68rem;
      border-radius: 0.1rem;
      border: 1px solid #ccc;
      box-shadow: 0 0.02rem #666;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      text-align: center;
      padding: 0.1rem 0;
  }
  #WoDe_options_asset dl dt{
      font-size: 0.18rem;
      font-weight: 700;
      color: #000;
  }
  #WoDe_options_asset dl dd{
      font-size: 0.12rem;
      font-weight: 400;
      color: #666;
  }
  .WoDeList{
      width: 100%;
      height: 1.9rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0.18rem 0;
      border-bottom:1px solid #ccc;
  }
  .WoDeList li{
      height: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 0.2rem;
  }
  .WoDeList li h3,h4{
      font-size: 0.16rem;
      color: #333;
      display: flex;
      align-items: center;
  }
  .WoDeList li h3 b{
      padding: 0 0.06rem;
      font-size: 0.20rem;
      color: rgb(121, 106, 106);
  }
  .WoDeList li h4 b{
      padding: 0 0.06rem;
      font-size: 0.14rem;
      color: #333;
  }
  .WoDeList.ListBottom {
      height: 1.2rem;
      border-bottom: 0;
      padding-bottom: 0;
  }
</style>