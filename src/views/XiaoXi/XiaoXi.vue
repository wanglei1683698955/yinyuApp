<template>
  <div id="XiaoXi">
      <div id="XiaoXi_box">
          <XiaoXiTopbar />
            
          <router-view></router-view>

      </div>
      <BottomBar :index="3"/>
  </div>
</template>

<script>
import BottomBar from '../../components/Comm/BottomBar.vue'
import XiaoXiTopbar from '../../components/XiaoXi/XiaoXiTopbar.vue'

import '../../../public/iconfont/icon_XiaoXi/iconfont.css'
export default {
  components: { BottomBar, XiaoXiTopbar },
    data(){
        return {

        }
    },
    methods: {
        fn(n){
            console.log(n);
        }
    }
}
</script>

<style scoped>
 #XiaoXi{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
 }
 #XiaoXi_box{
     display: flex;
     flex-direction: column;
     flex: 1;
     overflow: auto;
 }
 ::-webkit-scrollbar{
     display: none;
 }
</style>