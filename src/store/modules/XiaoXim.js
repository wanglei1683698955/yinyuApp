export let XiaoXim = {
  state: {
    user:{
      id:"",
      tel:"",
    }
  },
  mutations: {
    userChange(state,payload){
      state.user.id = payload.id
      state.user.tel = payload.tel
    }
  },
  actions: {
  }
}