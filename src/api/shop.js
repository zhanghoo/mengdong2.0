import axios from 'axios'

export default {
  getGoods (cb) {
    axios.get('static/mocks/goods.json').then((res) => {
      // 返回请求的所有商品
      cb(res.data.goodscart)
    })
  }
}
