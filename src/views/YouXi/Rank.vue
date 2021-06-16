<template>
  <div class="box">
    <Back></Back>
    <RankList type="人气榜" backimg="/images/YouXi/paiheng98.png" path="renqi" ></RankList>
    <RankList type="财神榜" backimg="/images/YouXi/paiheng99.png" path="caili" ></RankList>
    <RankList type="实力榜" backimg="/images/YouXi/paiheng100.png" path="shili"></RankList>
    <RankList type="获赞榜" backimg="/images/YouXi/paiheng101.png" path="huozan"></RankList>

  
  

  </div>
</template>

<script>
import Back from  "../../components/Youxi/Back.vue"
import RankList from  "../../components/Youxi/RankList.vue"

export default {
  name: "Rank",
  components: {
    Back,RankList 
  },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ranklist{
  margin-top: 0.1rem;
}
</style>
