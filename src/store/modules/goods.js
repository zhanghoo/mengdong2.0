import shop from '../../api/shop'
import * as types from '../mutation-types'

const state = {
  goods: []
}

const getters = {
  allGoods: state => state.all
}

const mutations = {
  [types.GET_GOODS] (state, { goods }) {
    state.goods = goods
  },
  [types.ADD_TO_CART] (state, { id }) {
    state.goods.find(p => p.id === id).inventory--
  }
}

const actions = {
  getAllGoods ({ commit }) {
    shop.getGoods(goods => {
      commit(types.GET_GOODS, { goods })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
