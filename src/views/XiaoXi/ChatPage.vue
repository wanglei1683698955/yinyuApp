<template>
  <div id="ChatPage">

      <h1>
        <span class="iconfont icon-fanhuizuojiantouxiangzuoshangyibuxianxing" @click="backButton"></span>
        <span>{{$route.query.userName}}</span>
        <span></span>
      </h1>

      <div id="contentBox" ref="contentBox">
            <h2>13:48</h2>
            <ChatPageList :direction="'left'" :imgURL="$route.query.imgURL" :text="$route.query.history"/>

            <ChatPageList v-for="(v,i) in historyList" :key="i" :direction="v.direction" :imgURL="v.imgURL" :text="v.text"/>
      </div>

      <div id="ChatPage_In">
        <input type="text" placeholder="输入新的消息" v-model.trim="text">
        <span v-if="!text" class="iconfont icon-tupian"></span>
        <span v-else class="Chatck" @click="myText">发送</span>
      </div>
  </div>
</template>

<script>
import '../../../public/iconfont/icon_XiaoXi/iconfont.css'
import ChatPageList from '../../components/XiaoXi/ChatPageList.vue'
import {XiaoXiLiaoTianSend} from '@/api/XiaoXiLiaoTianSend.js'
export default {
  components: { ChatPageList },
  data(){
    return {
      text:"",
      historyList:[
        // {
        //   direction:"left",
        //   imgURL:"/images/XiaoXi/TouXiang/pph_06.jpeg",
        //   text:"好咯哇是的撒"
        // }
      ]
    }
  },
  methods:{

    //聊天数据制造流水线
    made(direction,imgURL,text){
      this.historyList.push({
        direction:direction,
        imgURL:imgURL,
        text:text
      })
    },
    //泡泡位置纠正函数
    amend(){
      setTimeout(() => {
        this.$refs.contentBox.scrollTop = this.$refs.contentBox.scrollHeight;
      }, 50);
    },
    //数据接收

    //我的聊天文本处理
    myText(){
      this.made("right","/images/XiaoXi/TouXiang/pph_66.jpeg",this.text)
      this.amend()
      //发送数据
      XiaoXiLiaoTianSend("xxxapi/api.php",{key:"free",appid:"0",msg:this.text}).then(ok=>{
        this.otherText(ok.data.content)
      })
      this.text = ""
    },
    //聊天对象的文本处理
    otherText(text){
      //接收数据以参数的形式传入
      this.made("left",this.$route.query.imgURL,text)
      this.amend()
    },
    //退出
    backButton(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
#ChatPage {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#ChatPage h1{
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0 0.15rem;
  border-bottom: 1px solid #ccc;
}
#ChatPage h1 span:nth-child(1){
  width: 0.5rem;
  font-size: 0.18rem;
  color: #333;
  font-weight: 700;
}
#ChatPage h1 span:nth-child(2){
  font-size: 0.16rem;
  color: #333;
  font-weight: 600;
}
#ChatPage h1 span:nth-child(3){
  width: 0.5rem;
}
#ChatPage #contentBox h2{
  color: #666;
  font-size: 0.12rem;
  height: 0.14rem;
  line-height: 0.34rem;
  text-align: center;
}
#contentBox{
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  
}
::-webkit-scrollbar{
  display: none;
}








#ChatPage_In{
  height: 0.4rem;
  margin: 0.14rem 0.15rem;
  padding: 0 0.1rem;
  border: 2px solid #c9c9c9;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#ChatPage_In input{
  width: 70%;
  font-size: 0.14rem;
}
#ChatPage_In span.iconfont{
  font-size: 0.2rem;
  color: #333;
}
#ChatPage_In span.Chatck{
  font-size: 0.16rem;
  color: #333;
  font-weight: 600;
}
</style>