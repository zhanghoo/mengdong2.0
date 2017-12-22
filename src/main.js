// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default global options } */)

const swiperOptions = {
  /* eslint-disable */
  clickable: true,
  autoplay: false,
  roundLengths: true, // 防止文字模糊
  observer: true, // 修改swiper自己或子元素时，自动初始化swiper
  observeParents: true, // 修改swiper的父元素时，自动初始化swiper
  mousewheel: true
  /* eslint-enable */
}

Vue.use(VueAwesomeSwiper, swiperOptions)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
