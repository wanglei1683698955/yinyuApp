<template>
  <div id="TongXunLu">
      <div id="TXtit">
          <h1 :class="show === 0? 'Action_show' : ''" @click="changeAction(0)">好友</h1>
          <h2 :class="show === 1? 'Action_show' : ''" @click="changeAction(1)">关注</h2>
          <h3 :class="show === 2? 'Action_show' : ''" @click="changeAction(2)">粉丝</h3>
      </div>


      <div id="TXcon">
          
          <router-view></router-view>

      </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            show:0,
            init:0//重复跳转验证
        }
    },
    methods: {
        changeAction(index){
            if(this.init === index) return
            this.show = index
            this.init = index
            if(index === 0){
                this.$router.push({name:'haoyou'})
            }else if(index === 1){
                this.$router.push({name:'guanzhut'})
            }else if(index === 2){
                this.$router.push({name:'fensi'})
            }
        }
    },
    mounted(){
        // this.$router.push({name:'haoyou'})
    }
}
</script>

<style scoped>
    #TongXunLu{
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    ::-webkit-scrollbar{
        display: none;
    }
    #TXtit{
        height: 0.32rem;
        margin: 0.12rem 0.15rem;
        background: #e9e9e9;
        border-radius: 0.16rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    #TXtit h1,h2,h3{
        height: 0.28rem;
        width: 31%;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.28rem;
        border-radius: 0.14rem;
        transition: 0.7s;
    }
    #TXtit .Action_show{
        background-color: white;
    }
    #TXcon{
        flex: 1;
        overflow: auto;
    }
</style>