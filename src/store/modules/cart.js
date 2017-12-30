import * as types from '../mutation-types'
import * as mGoods from './goods'
import { hIsEqual } from '../../assets/js/util'

const state = {
  // 已添加的商品
  goodsAdded: [],
  // 商品的唯一index
  goodsAddedIndex: 0
}

const getters = {
  // 购物车里的商品
  cartGoods: state => state.goodsAdded,
  // 选中的商品
  checkedGoods: state => state.goodsAdded.filter(g => g.checked === true),
  // 是否是全选的状态
  checkedAllStatus: state => state.goodsAdded.every(g => g.checked === true)
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
        checked: false,
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
      // 商品的唯一index
      const index = state.goodsAddedIndex++
      // 根据id得到较全的商品信息
      const _goods = mGoods.state.goodsList.find(_g => _g.id === id)
      state.goodsAdded.push({
        id,
        index,
        seller: _goods.seller,
        cover: _goods.cover,
        title: _goods.title,
        price: _goods.price,
        checked: false,
        info,
        quantity
      })
    } else {
      // 有则数量加 quantity
      goods.quantity = goods.quantity + quantity
    }
  },
  // 从购物车中加少商品
  [types.CUT_FROM_CART] (state, { id, info, quantity }) {
    const _info = JSON.parse(JSON.stringify(info))
    const goods = state.goodsAdded.find(g => {
      const _gInfo = JSON.parse(JSON.stringify(g.info))
      return g.id === id && hIsEqual(_gInfo, _info)
    })
    if (goods) {
      // 有则减少
      if (quantity <= goods.quantity) {
        // 需要减少的数小于添加了的商品数
        goods.quantity = goods.quantity - quantity
      } else {
        goods.quantity = 0
      }
      if (goods.quantity === 0) {
        // 商品数减少到0, 移除
        const goodsIndex = state.goodsAdded.findIndex(g => {
          const _gInfo = JSON.parse(JSON.stringify(g.info))
          return g.id === id && hIsEqual(_gInfo, _info)
        })
        state.goodsAdded.splice(goodsIndex, 1)
      }
    }
  },
  // 选中商品
  [types.CHECKED_GOODS] (state, { id, info }) {
    const _info = JSON.parse(JSON.stringify(info))
    const goods = state.goodsAdded.find(g => {
      const _gInfo = JSON.parse(JSON.stringify(g.info))
      return g.id === id && hIsEqual(_gInfo, _info)
    })
    if (goods) {
      // 有则选中
      goods.checked = true
    }
  },
  // 取消选中商品
  [types.UNCHECKED_GOODS] (state, { id, info }) {
    const _info = JSON.parse(JSON.stringify(info))
    const goods = state.goodsAdded.find(g => {
      const _gInfo = JSON.parse(JSON.stringify(g.info))
      return g.id === id && hIsEqual(_gInfo, _info)
    })
    if (goods) {
      // 有则取消选中
      goods.checked = false
    }
  },
  // 全选
  [types.CHECKED_ALL_GOODS] (state) {
    if (state.goodsAdded.length > 0) {
      // 不为空
      state.goodsAdded.forEach(function (g) {
        g.checked = true
      })
    }
  },
  // 取消全选
  [types.UNCHECKED_ALL_GOODS] (state) {
    if (state.goodsAdded.length > 0) {
      // 不为空
      state.goodsAdded.forEach(function (g) {
        g.checked = false
      })
    }
  }
}

const actions = {
  // 商品页，添加到购物车，保存商品的id和选择的info
  addToCart ({ commit }, goods) {
    const info = goods.info
    const id = goods.id
    const quantity = goods.quantity
    commit(types.ADD_TO_CART, { id, info, quantity })
  },
  cutFromCart ({ commit }, goods) {
    const info = goods.info
    const id = goods.id
    const quantity = goods.quantity
    commit(types.CUT_FROM_CART, { id, info, quantity })
  },
  checkGoods ({ commit }, goods) {
    const info = goods.info
    const id = goods.id
    commit(types.CHECKED_GOODS, { id, info })
  },
  uncheckGoods ({ commit }, goods) {
    const info = goods.info
    const id = goods.id
    commit(types.UNCHECKED_GOODS, { id, info })
  },
  checkAllGoods ({ commit }) {
    commit(types.CHECKED_ALL_GOODS)
  },
  uncheckAllGoods ({ commit }) {
    commit(types.UNCHECKED_ALL_GOODS)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
