<template>
  <div>
      <img src="../../../public/images/Comm/startPage.jpg" alt="">
  </div>
</template>

<script>
import {XiaoXiLiaoTianSend} from '../../api/IsToken'
export default {
    data(){
        return {
            
        }
    },
    mounted () {
        let token = localStorage.getItem("YinYuToken");
        if(token){
            XiaoXiLiaoTianSend('hdapi/users/token',token).then((ok)=>{ 
                console.log(ok.data);
                if(ok.data.code===0){
                    window.localStorage.setItem("YinYuToken",ok.data.data)
                    this.$router.push({name:'paidui'})
                }else{
                    this.$router.push({name:"login"})
                }
            })
        }else{
            setTimeout(()=>{
                this.$router.push({name:'login'})
            },3000)
        }
    }
}
</script>

<style scoped>
    div{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div img{
        height: 100%;
    }
</style>