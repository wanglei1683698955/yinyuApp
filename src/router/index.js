import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import { ActionSheet } from 'vant';
Vue.use(ActionSheet);
import { Divider } from 'vant';
Vue.use(Divider);
import { ShareSheet } from 'vant';
Vue.use(ShareSheet);
import { Tab, Tabs } from 'vant';
import { Icon } from 'vant';
import FaBu from '../views/GuangChang/FaBu.vue';
import GuangChang from '../views/GuangChang/GuangChang.vue';
import ZiJian from '../views/GuangChang/ZiJian.vue';
import GeShou from '../views/GuangChang/GeShou.vue';
import GuanZhu from '../views/GuangChang/GuanZhu.vue';
import WeChat from '../views/GuangChang/WeChat.vue';
import Inner from '../views/GuangChang/Inner.vue';
import Wechat from "@/components/GuangChang/Wechat.vue";
import Ziliao from "@/components/GuangChang/Ziliao.vue";
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);





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
    component: () =>
      import('../views/PaiDui/PaiDui.vue'),
    children: [{
      path: '/paiduituijian',
      name: 'paiduituijian',
      component: () =>
        import('../views/PaiDui/PaiDuiTuiJian.vue'),
    },
    {
      path: '/paiduitop',
      name: 'paiduitop',
      component: () =>
        import('../views/PaiDui/PaiDuiTop.vue'),
    },
    {
      path: '/paiduiyujian',
      name: 'paiduiyujian',
      component: () =>
        import('../views/PaiDui/PaiDuiYuJian.vue'),
    },
    {
      path: '/paiduiguanzhan',
      name: 'paiduiguanzhan',
      component: () =>
        import('../views/PaiDui/PaiDuiGuanZhan.vue'),
    },
    {
      path: '/',
      redirect: '/paiduituijian'
    }
    ]
  },
  {
    path: '/paiduiwodepaidui',
    name: 'paiduiwodepaidui',
    component: () =>
      import('../views/PaiDui/PaiDuiWoDePaiDui.vue'),
  },
  {
    path: '/paiduiwoderenwu',
    name: 'paiduiwoderenwu',
    component: () =>
      import('../views/PaiDui/PaiDuiWoDeRenWu.vue'),
  },
  {
    path: '/paiduijulebu',
    name: 'paiduijulebu',
    component: () =>
      import('../views/PaiDui/PaiDuiJuLebu.vue'),
    children: [{
      path: '/paiduijulebutop',
      name: 'paiduijulebutop',
      component: () =>
        import('../views/PaiDui/PaiDuiJuLebuTop.vue'),
    },
    {
      path: '/paiduisaijizhanjibang',
      name: 'paiduisaijizhanjibang',
      component: () =>
        import('../views/PaiDui/PaiDuiSaiJiZhanJiBang.vue'),
    },
    {
      path: '/',
      redirect: '/paiduijulebutop'
    }
    ]

  },
  //游戏
  {
    path: '/youxi',
    name: 'youxi',
    component: () =>
      import('../views/YouXi/YouXi.vue'),
  },
  {
    path: '/rank',
    name: 'rank',
    component: () =>
      import('../views/YouXi/Rank.vue')
  },
  // 发烧友
  {
    path: '/fashao',
    name: 'fashao',
    component: () =>
      import('../views/YouXi/Fashao.vue')
  },
  // 扭蛋
  {
    path: '/niudan',
    name: 'niudan',
    component: () =>
      import('../views/YouXi/Niudan.vue')
  },
  {
    path: '/lts',
    name: 'lts',
    component: () =>
      import('../views/YouXi/Lts.vue')
  },
  //广场
  {
    path: '/guangchang',
    name: 'guangchang',
    component: GuangChang,
    // component: () =>
    //     import ('../views/GuangChang/GuangChang.vue'),
    children: [
      {
      path: 'guanzhu',
      name: 'guanzhu',
      component: GuanZhu,
      },
      {
      path: 'wechat',
      name: 'wechat',
      component: WeChat,
      },
      {
      path: "/",
      redirect: "wechat"
      }
    ]
  },
  // {
  //     path: '/wechat',
  //     component: () =>
  //         import ('../components/GuangChang/Wechat.vue')
  // },
  {
    path: '/fabu',
    name: "fabu",
    component: FaBu,
  },
  {
    path: '/zijian',
    name: "zijian",
    component: ZiJian,
  },
  {
    path: '/geshou',
    name: "geshou",
    component: GeShou,
  },
  {
    path: '/Wechat',
    name: "Wechat",
    component: Wechat,
  },
  {
    path: '/inner',
    name: "inner",
    component: Inner,
    children: [{
      path: "/",
      redirect: "Wechat"
    }, {
      path: 'Wechat',
      name: "Wechat",
      component: Wechat,
    },
    {
      path: 'Ziliao',
      name: "Ziliao",
      component: Ziliao,
    }
    ]
  },
  //消息
  {
    path: '/xiaoxi',
    name: 'xiaoxi',
    component: () => import('../views/XiaoXi/XiaoXi.vue'),
    children: [
      {
        path: 'liaotian',
        name: 'liaotian',
        component: () => import('../views/XiaoXi/LiaoTian.vue')
      },
      {
        path: 'tongxunlu',
        name: 'tongxunlu',
        component: () => import('../views/XiaoXi/TongXunLu.vue'),
        children: [
          {
            path: 'haoyou',
            name: 'haoyou',
            component: () => import('../views/XiaoXi/HaoYou.vue')
          },
          {
            path: 'guanzhut',
            name: 'guanzhut',
            component: () => import('../views/XiaoXi/GuanZhut.vue')
          },
          {
            path: 'fensi',
            name: 'fensi',
            component: () => import('../views/XiaoXi/FenSi.vue')
          },
          {
            path: '',
            redirect: 'haoyou'
          }
        ]
      },
      {
        path: 'hudong',
        name: 'hudong',
        component: () => import('../views/XiaoXi/HuDong.vue')
      },
      {
        path: '',
        redirect: 'liaotian'
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
    path: '/',
    redirect: '/startpage'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/startpage' || to.path === '/login' || to.path === '/loginverify') {
//     next();
//   } else {
//     let token = localStorage.getItem('YinYuToken');
//     if (!token) {
//       next('/login');
//     } else {
//       next();
//     }
//   }
// });

export default router
