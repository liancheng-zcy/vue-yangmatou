import {SETPRODUCTDETAIL , COMMITPRODUCTDETAIL } from 'store/car/action-type.js'
import store from 'node_modules/store/dist/store.legacy'
let productDetails = store.get('productDetail')

const state = {
  productDetail:productDetails
}

const mutations = {
  [SETPRODUCTDETAIL](state, data ){
    state.productDetail = data
  }
}

const actions = {
  [COMMITPRODUCTDETAIL]({commit,state},{ CnxhValue }){
    commit(SETPRODUCTDETAIL, CnxhValue )
    // console.log(CnxhValue)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}