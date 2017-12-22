<template>
  <div class="app-shop">
    <app-header>
      <span slot="left"></span>
      <span slot="title">遛</span>
      <template slot="right">
        <span class="icon icon-type" @click="toGoodsSuperType">发现</span>
        <span class="icon icon-cart" @click="toCart">购物车</span>
      </template>
    </app-header>
    <div class="as-content">
      <app-tabs :nav-item="navItem" :slot-prefix="as-">
        <swiper :options="swiperPickedOption" class="as-swiper" slot="as-0">
          <swiper-slide></swiper-slide>
          <div class="swiper-scrollbar swiper-picked-scrollbar" slot="scrollbar"></div>
        </swiper>
        <swiper :options="swiperHotOption" class="as-swiper" slot="as-1">
          <swiper-slide></swiper-slide>
          <div class="swiper-scrollbar swiper-best-scrollbar" slot="scrollbar"></div>
        </swiper>
        <swiper :options="swiperLimitOption" class="as-swiper" slot="as-2">
          <swiper-slide></swiper-slide>
          <div class="swiper-scrollbar swiper-limit-scrollbar" slot="scrollbar"></div>
        </swiper>
      </app-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppTabs from '@/components/AppTabs'
export default {
  name: 'appShop',
  components: {
    AppHeader,
    AppTabs
  },
  data () {
    return {
      navItem: [],
      swiperPickedOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-best-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      swiperHotOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-hot-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      swiperLimitOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-limit-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      }
    }
  },
  created () {
    this.initNavItem()
    this.$_showAppNav()
  },
  methods: {
    ...mapActions({
      $_showAppNav: 'showAppNav'
    }),
    toGoodsSuperType () {
      this.$router.push('goodssupertype')
    },
    toCart () {
      this.$router.push('cart')
    },
    initNavItem () {
      this.navItem = [
        {'id': 0, 'type': 'picked', 'desc': '精选', 'sort': 0},
        {'id': 1, 'type': 'hot', 'desc': '热销', 'sort': 0},
        {'id': 2, 'type': 'limit', 'desc': '限时', 'sort': 0}
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-shop {
  .as-content {
    position: absolute;
    top: 0;
    left: 0;
    padding 48px 0 58px 0;
    width: 100%;
    height: 100%;
    .as-swiper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
