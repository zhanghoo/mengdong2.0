import shop from '../../api/shop'
import * as types from '../mutation-types'
import { hCompare } from '../../assets/js/util'

export const state = {
  goodsList: []
}

export const getters = {
  allGoods: state => state.all
}

export const mutations = {
  [types.GET_GOODS] (state, { goodsList }) {
    state.goodsList = goodsList
  },
  [types.ADD_TO_CART] (state, { id }) {
    state.goodsList.find(p => p.id === id).inventory--
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
