import axios from 'axios'

export default {
  getGoods (cb) {
    axios.get('static/mocks/goods-cart.json').then((res) => {
      cb(res.data)
    })
  }
}
