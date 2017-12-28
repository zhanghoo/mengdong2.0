import * as types from '../mutation-types'

const state = {
  goodsAdded: []
}

const getters = {
  cartGoodsList: state => state.goodsAdded
}

const mutations = {
  [types.ADD_TO_CART] (state, { id }) {
    const goods = state.goodsAdded.find(p => p.id === id)
    if (!goods) {
      state.goodsAdded.push({
        id,
        quantity: 1
      })
    } else {
      goods.quantity++
    }
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
