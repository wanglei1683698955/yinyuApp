<template>
  <div id="PaiDui">
      <div id="PaiDui_box">
          
      </div>
      <BottomBar :index="0"/>
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
 #PaiDui{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
 }
 #PaiDui_box{
     display: flex;
     flex-direction: column;
     flex: 1;
     background-color: #21b199;
     overflow: auto;
     background: url("../../../public/images/PaiDui/Screenshot_musi.png") no-repeat 100% 100% ;
     background-size: 100% 100%;
 }
</style>