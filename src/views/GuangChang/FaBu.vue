<template> 
<div id="fabu">
    <div id="fir">
        <router-link to="GuangChang"> <div > <span class="iconfont">&#xe604;</span></div></router-link>
          
           <span>选择片段</span>
            <router-link to="ZiJian"><span>自建片段</span></router-link>
       </div>
    <Fabu></Fabu>
</div>
    
</template>
<script>

import Fabu from '@/components/GuangChang/Fabu.vue'
export default {
   
    components: {
        Fabu
    }
}
</script>
<style scoped>
#fabu{
    padding: 0.1rem;
}
#fir .iconfont{
    margin-left: 0.01rem;
}
#fir{
    padding-top: 0.15rem;
    padding-bottom: 0.1rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e8e8e8;
}
</style>
