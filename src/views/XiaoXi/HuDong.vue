<template>
  <div id="HuDong">
      <HuDongList v-for="(v,i) in Mork_HoDongListArr" :key="i" :imgURL="v.imgURL" :type="v.type" :message="v.message"/>
  </div>
</template>

<script>
import HuDongList from '../../components/XiaoXi/HuDongList.vue'
export default {
  components: { HuDongList },
  data(){
    return {
      Mork_HoDongListArr : [
        {
          imgURL:'/images/XiaoXi/HuDong/Screenshot_zxgz.png',
          type:'最近关注',
          message:'暂无新的关注'
        },
        {
          imgURL:'/images/XiaoXi/HuDong/Screenshot_lw.png',
          type:'礼物',
          message:'暂无新的送礼'
        },
        {
          imgURL:'/images/XiaoXi/HuDong/Screenshot_xh.png',
          type:'喜欢',
          message:'暂无新的喜欢'
        },
        {
          imgURL:'/images/XiaoXi/HuDong/Screenshot_pl.png',
          type:'评论',
          message:'暂无新的评论'
        },
        {
          imgURL:'/images/XiaoXi/HuDong/Screenshot_dc.png',
          type:'对唱',
          message:'暂无新的对唱'
        },
        {
          imgURL:'/images/XiaoXi/HuDong/Screenshot_jlb.png',
          type:'俱乐部',
          message:'暂无新的俱乐部消息'
        }
      ]
    }
  }

}
</script>

<style scoped>
    #HuDong{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
</style>