import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailArr:[]
  },
  mutations: {
    handleDetailArr(state,data){
      state.detailArr = data
      // console.log(state.detailArr)
      
    }
  },
  actions: {
    
  },
  modules: {
  }
})
