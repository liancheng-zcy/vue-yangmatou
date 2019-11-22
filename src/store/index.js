import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Products from './car/Products'
import Car from './car/Car'

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
    Products,
    Car
  }
})
