import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  //启动页
  {
    path: '/startpage',
    name: 'startpage',
    component: () => import('../views/Comm/StartPage.vue'),
  },
  //初始化登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Comm/Login.vue'),
  },
  //短信验证
  {
    path: '/loginverify',
    name: 'loginverify',
    component: () => import('../views/Comm/LoginVerify.vue'),
  },
  //派对
  {
    path: '/paidui',
    name: 'paidui',
    component: () => import('../views/PaiDui/PaiDui.vue'),
  },
  //游戏
  {
    path: '/youxi',
    name: 'youxi',
    component: () => import('../views/YouXi/YouXi.vue')
  },
  //广场
  {
    path: '/guangchang',
    name: 'guangchang',
    component: () => import('../views/GuangChang/GuangChang.vue')
  },
  //消息
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
  //聊天页
  {
    path: '/chatpage',
    name: 'chatpage',
    component: () => import('../views/XiaoXi/ChatPage.vue')
  },
  //搜索好友
  {
    path: '/searchfriend',
    name: 'searchfriend',
    component: () => import('../views/XiaoXi/SearchFriend.vue')
  },
  //我的
  {
    path: '/wode',
    name: 'wode',
    component: () => import('../views/WoDe/WoDe.vue')
  },
  //设置
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/WoDe/Setting.vue')
  },
  //资料修改页
  {
    path: '/editdata',
    name: 'editdata',
    component: () => import('../views/WoDe/EditData.vue')
  },
  //更换手机号
  {
    path: '/telchange',
    name: 'telchange',
    component: () => import('../views/WoDe/telChange.vue')
  },
  //注销账号
  {
    path: '/removeuseryzm',
    name: 'removeuseryzm',
    component: () => import('../views/WoDe/RemoveUserYZM.vue')
  },
  //公共聊天室
  {
    path: '/publicchatroom',
    name: 'publicchatroom',
    component: () => import('../views/Comm/PublicChatRoom.vue')
  },
  {
    path:'/',
    redirect: '/startpage'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/startpage' || to.path === '/login' || to.path === '/loginverify') {
    next();
  } else {
    let token = localStorage.getItem('YinYuToken');
    if (!token) {
      next('/login');
    } else {
      next();
    }
  }
});

export default router
