<template>
  <div id="GuanZhu">
      <HaoYouList 
        v-for="(v, i) in Mork_HaoYouListArr"
        :key="i"
        :imgURL="v.imgURL"
        :userId="v.userId"
        :userName="v.userName"
      />
  </div>
</template>

<script>
import {DelUser} from "../../api/DelUser"
import HaoYouList from '../../components/XiaoXi/HaoYouList.vue'
export default {
  components: { HaoYouList },
  data() {
    return {
      Mork_HaoYouListArr: [
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_07.jpeg",
          userId: "10770007",
          userName: "小冬儿",
          history: "看着星空想起你",
          timestamp: "2021/05/30",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_08.jpeg",
          userId: "10770008",
          userName: "吾斯曼第",
          history: "动次打次动次打次",
          timestamp: "2021/05/22",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_09.jpeg",
          userId: "10770009",
          userName: "大娃",
          history: "你好，我是葫芦娃",
          timestamp: "2021/05/13",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_10.jpg",
          userId: "10770010",
          userName: "潮流老头",
          history: "看我潮流不潮流就完事了",
          timestamp: "2021/05/10",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_11.jpeg",
          userId: "10770011",
          userName: "Bui~Bui~Bui~",
          history: "艾瑞巴蒂，嗨起来",
          timestamp: "2021/05/08",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_12.jpg",
          userId: "10770012",
          userName: "Rush",
          history: "一起去rush B",
          timestamp: "2021/04/24",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_01.jpeg",
          userId: "10770001",
          userName: "彤彤",
          history: "晚上去哪？",
          timestamp: "2021/06/01",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_02.jpeg",
          userId: "10770002",
          userName: "Shine",
          history: "我去打小怪兽了",
          timestamp: "2021/06/01",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_03.jpeg",
          userId: "10770003",
          userName: "丽丽",
          history: "很高兴认识你，我们开始聊天吧",
          timestamp: "2021/05/31",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_04.jpeg",
          userId: "10770004",
          userName: "古风盈盈",
          history: "小哥哥，可以加微信吗",
          timestamp: "2021/05/31",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_05.jpeg",
          userId: "10770005",
          userName: "余生只有小鱼干",
          history: "矮油，不错呦",
          timestamp: "2021/05/31",
        },
        {
          imgURL: "/images/XiaoXi/TouXiang/pph_06.jpeg",
          userId: "10770006",
          userName: "长腿欧巴",
          history: "我喜欢你，不管东南西北都顺路",
          timestamp: "2021/05/30",
        },
      ],
    };
  },
  mounted () {
    DelUser("hdapi/guanzhu/all").then((ok)=>{
      console.log(ok.data.data)
    })
  }
}
</script>

<style scoped>
    #GuanZhu{
        height: 100%;
        background-color: rgb(255, 221, 217);
        overflow: auto;
    }
</style>