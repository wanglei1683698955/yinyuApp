import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/common.css'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false
// axios.defaults.baseURL = "http://localhost:3000";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
