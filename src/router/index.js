import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/paidui',
    name: 'paidui',
    component: () => import('../views/PaiDui/PaiDui.vue'),
  },
  {
    path: '/youxi',
    name: 'youxi',
    component: () => import('../views/YouXi/YouXi.vue')
  },
  {
    path: '/guangchang',
    name: 'guangchang',
    component: () => import('../views/GuangChang/GuangChang.vue')
  },
  {
    path: '/xiaoxi',
    name: 'xiaoxi',
    component: () => import('../views/XiaoXi/XiaoXi.vue'),
    children:[
      {
        path:'liaotian',
        name:'liaotian',
        component: () => import('../views/XiaoXi/LiaoTian.vue')
      },
      {
        path:'tongxunlu',
        name:'tongxunlu',
        component: () => import('../views/XiaoXi/TongXunLu.vue'),
        children:[
          {
            path:'haoyou',
            name:'haoyou',
            component: () => import('../views/XiaoXi/HaoYou.vue')
          },
          {
            path:'guanzhu',
            name:'guanzhu',
            component: () => import('../views/XiaoXi/GuanZhu.vue')
          },
          {
            path:'fensi',
            name:'fensi',
            component: () => import('../views/XiaoXi/FenSi.vue')
          },
          {
            path:'',
            redirect: 'haoyou'
          }
        ]
      },
      {
        path:'hudong',
        name:'hudong',
        component: () => import('../views/XiaoXi/HuDong.vue')
      },
      {
        path:'',
        redirect:'liaotian'
      }
    ]
  },
  {
    path: '/wode',
    name: 'wode',
    component: () => import('../views/WoDe/WoDe.vue')
  },
  //聊天页
  {
    path: '/chatpage',
    name: 'chatpage',
    component: () => import('../views/XiaoXi/ChatPage.vue')
  },
  {
    path: '/searchfriend',
    name: 'searchfriend',
    component: () => import('../views/XiaoXi/SearchFriend.vue')
  },
  {
    path:'/',
    redirect: '/paidui'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
