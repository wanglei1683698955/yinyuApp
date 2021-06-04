<template>
  <div id="GuangChang">
      <div id="GuangChang_box">

      </div>
      <BottomBar :index="2"/>
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
 #GuangChang{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
 }
 #GuangChang_box{
     display: flex;
     flex-direction: column;
     flex: 1;
     background-color: #21b199;
     overflow: auto;
 }
</style>