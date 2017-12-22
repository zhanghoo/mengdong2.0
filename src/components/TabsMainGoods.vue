<template>
  <div class="main-goods">
    <app-tabs :nav-item="navItem" :slot-prefix="as-">
      <swiper :options="swiperPickedOption" class="mg-swiper" slot="as-0">
        <swiper-slide></swiper-slide>
        <div class="swiper-scrollbar swiper-picked-scrollbar" slot="scrollbar"></div>
      </swiper>
      <swiper :options="swiperHotOption" class="mg-swiper" slot="as-1">
        <swiper-slide></swiper-slide>
        <div class="swiper-scrollbar swiper-best-scrollbar" slot="scrollbar"></div>
      </swiper>
      <swiper :options="swiperLimitOption" class="mg-swiper" slot="as-2">
        <swiper-slide></swiper-slide>
        <div class="swiper-scrollbar swiper-limit-scrollbar" slot="scrollbar"></div>
      </swiper>
    </app-tabs>
  </div>
</template>

<script>
import AppTabs from '@/components/AppTabs'
export default {
  name: 'tabsMainGoods',
  components: {
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
  },
  methods: {
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
.main-goods {
  width: 100%;
  height: 100%;
  .mg-swiper {
    width: 100%;
    height: 100%;
  }
}
</style>
