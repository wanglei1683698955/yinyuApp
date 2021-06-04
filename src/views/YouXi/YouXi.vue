<template>
  <div id="YouXi">
      <div id="YouXi_box">
          
      </div>
      <BottomBar :index="1"/>
  </div>
</template>

<script>
import BottomBar from '../../components/Comm/BottomBar.vue'
export default {
  components: { BottomBar },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
 #YouXi{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
 }
 #YouXi_box{
     display: flex;
     flex-direction: column;
     flex: 1;
     overflow: auto;
     background: url("../../../public/images/PaiDui/Screenshot_musi.png") no-repeat 100% 100%;
     background-size: 100% 100%; 
 }
</style>