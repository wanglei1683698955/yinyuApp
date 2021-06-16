import Vue from 'vue'
import Vuex from 'vuex'
import {XiaoXim} from './modules/XiaoXim'
import { GuangChangm } from './modules/GuangChangm'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    XiaoXim,
    GuangChangm
  },
  getters:{
  }
})
