import * as types from '../mutation-types'
import * as goods from 'goods'

const state = {
  goodsAdded: []
}

const getters = {
  //购物车里的商品
  cartGoods: state => {
    //已添加的商品
    return state.goodsAdded.map(({ id, info, quantity }) => {
      const goods = goods.goods.find(g => g.id === id)
      return {
        id,
        seller: goods.seller,
        cover: goods.cover,
        title: goods.title,
        price: goods.price,
        info,
        quantity
      }
    })
  }
}

const mutations = {
  //添加商品到购物车 
  [types.ADD_TO_CART] (state, { id,info }) {
    //根据商品的id和选择的info从添加的商品goodsAdded中找到是否添加该商品
    const goods = state.goodsAdded.find(g => g.id === id && g.info === info)
    if (!goods) {
      //无则添加
      state.goodsAdded.push({
        id,
        info,
        quantity: 1
      })
    } else {
      //有则数量加 1
      goods.quantity++
    }
  }
}

const actions = {
  //商品页，添加到购物车，保存商品的id和选择的info
  addToCart ({ commit, state }, goods) {
    commit(types.ADD_TO_CART, { goods.id, goods.info })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
