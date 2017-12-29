import shop from '../../api/shop'
import * as types from '../mutation-types'
import { hCompare } from '../../assets/js/util'

export const state = {
  goodsList: [],
  theGoods: []
}

export const getters = {
  allGoods: state => state.goodsList
}

export const mutations = {
  [types.GET_GOODS] (state, { goodsList }) {
    state.goodsList = goodsList
  },
  [types.GET_THE_GOODS] (state, { id }) {
    // 根据id得到商品页的的商品
    state.theGoods = state.goodsList.find(g => g.id === id)
  },
  [types.ADD_TO_CART] (state, { id }) {
    state.goodsList.find(g => g.id === id).inventory--
  },
  [types.SORT_GOODS] (state, { sort }) {
    if (sort === 'default') {
      state.goodsList.sort(hCompare('asc', 'id'))
    } else if (sort === 'prices') {
      state.goodsList.sort(hCompare('des', 'price'))
    } else if (sort === 'evaluate') {
      state.goodsList.sort(hCompare('des', 'comments', 'score'))
    } else {
      state.goodsList.sort(hCompare('asc', 'id'))
    }
  }
}

export const actions = {
  getAllGoods ({ commit }) {
    shop.getGoods(goodsList => {
      commit(types.GET_GOODS, { goodsList })
    })
  },
  getTheGoods ({ commit }, id) {
    // 这里还可以拼接一些商品的 评论 等信息
    commit(types.GET_THE_GOODS, { id })
  },
  sortGoods ({ commit }, sort) {
    commit(types.SORT_GOODS, { sort })
    /* // 不能在 commint 以外的地方 修改 state
    const _goodsList = JSON.parse(JSON.stringify(state.goodsList))
    if (sort === 'default') {
      _goodsList.sort(hCompare('asc', 'id'))
    } else if (sort === 'prices') {
      _goodsList.sort(hCompare('asc', 'price'))
    } else if (sort === 'evaluate') {
      _goodsList.sort(hCompare('asc', 'comments', 'score'))
    } else {
      _goodsList.sort(hCompare('asc', 'id'))
    }
    state.goodsList = _goodsList */
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
