<template>
  <div class="app-goods-supertype">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">品类</span>
      <span slot="right" class="icon icon-cart" @click="toCart">购物车</span>
    </app-header>
    <div class="ags-content">
      <app-tabs :nav-item="navItem" :slot-prefix="ags-">
        <swiper :options="shopDogSwiperOption" class="ags-swiper" slot="ags-0">
          <swiper-slide></swiper-slide>
          <div class="swiper-scrollbar swiper-dog-scrollbar" slot="scrollbar"></div>
        </swiper>
        <swiper :options="shopCatSwiperOption" class="ags-swiper" slot="ags-1">
          <swiper-slide></swiper-slide>
          <div class="swiper-scrollbar swiper-cat-scrollbar" slot="scrollbar"></div>
        </swiper>
      </app-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import appHeader from '@/components/appHeader'
import AppTabs from '@/components/AppTabs'
export default {
  name: 'appGoodsSupertype',
  components: {
    appHeader,
    AppTabs
  },
  data () {
    return {
      navItem: [],
      shopDogSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-dog-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      shopCatSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-cat-scrollbar',
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
    this.$_hideAppNav()
    this.initNavItem()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
    }),
    back () {
      this.$router.go(-1)
    },
    toCart () {
      this.$router.push('cart')
    },
    initNavItem () {
      this.navItem = [
        {'id': 0, 'type': 'dog', 'desc': '汪汪', 'sort': 0},
        {'id': 1, 'type': 'cat', 'desc': '喵喵', 'sort': 0}
      ]
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.goods-supertype {
  position: relative;
  .ags-content {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 48px;
    width: 100%;
    height: 100%;
    .ags-swiper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
