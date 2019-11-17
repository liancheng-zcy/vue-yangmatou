import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSticky:false
  },
  mutations: {
    setSticky(state,stickyValue){
      state.isSticky = stickyValue
    }
  },
  actions: {
  },
  modules: {
  }
})
