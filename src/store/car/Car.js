import {SETCART , COMMITCART } from 'store/car/action-type.js'
import store from 'node_modules/store/dist/store.legacy'
let toCart = store.get('carDetail')
const state = {
  cart:toCart
}

const mutations = {
  [SETCART](state,data){
    let pid = data.proId
    console.log(data)
    let item = state.cart.find((value) =>{
      return value.proId == pid
    })

    if(item){
      item.itemAllNum += data.itemAllNum
    }else{
      state.cart.push(
        data
      )
    }
    store.set('carDetail', state.cart)
  }
}

const actions = {
  [COMMITCART]({commit},itemInfo){
    commit(SETCART,itemInfo)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}