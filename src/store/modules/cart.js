import * as types from '../mutation-types'
import * as mGoods from './goods'
import { hIsEqual } from '../../assets/js/util'

const state = {
  goodsAdded: []
}

const getters = {
  // 购物车里的商品
  cartGoods: state => state.goodsAdded
  /* cartGoods: state => {
    // 已添加的商品 放到这里, 拼接全商品的信息,但是每次都需要找一下 放到 mutations 第一次添加商品里去吧
    return state.goodsAdded.map(g => {
      const goods = mGoods.state.goodsList.find(_g => _g.id === g.id)
      return {
        id: g.id,
        seller: goods.seller,
        cover: goods.cover,
        title: goods.title,
        price: goods.price,
        info: g.info,
        quantity: g.quantity
      }
    })
  } */
}

const mutations = {
  // 添加商品到购物车
  [types.ADD_TO_CART] (state, { id, info, quantity }) {
    // 字面量对象 info ? 长度 和new 不相等?
    const _info = JSON.parse(JSON.stringify(info))
    // 根据商品的id和选择的info从添加的商品goodsAdded中找到是否添加该商品
    const goods = state.goodsAdded.find(g => {
      const _gInfo = JSON.parse(JSON.stringify(g.info))
      return g.id === id && hIsEqual(_gInfo, _info)
    })
    if (!goods) {
      // 无则添加
      // 根据id得到较全的商品信息
      const _goods = mGoods.state.goodsList.find(_g => _g.id === id)
      state.goodsAdded.push({
        id,
        seller: _goods.seller,
        cover: _goods.cover,
        title: _goods.title,
        price: _goods.price,
        info,
        quantity
      })
    } else {
      // 有则数量加 quantity
      goods.quantity = goods.quantity + quantity
    }
  }
}

const actions = {
  // 商品页，添加到购物车，保存商品的id和选择的info
  addToCart ({ commit, state }, goods) {
    const info = goods.info
    const id = goods.id
    const quantity = goods.quantity
    commit(types.ADD_TO_CART, { id, info, quantity })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
