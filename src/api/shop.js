import axios from 'axios'

export default {
  getGoods (cb) {
    axios.get('static/mocks/goods.json').then((res) => {
      cb(res.data)
    })
  }
}
