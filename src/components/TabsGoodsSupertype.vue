<template>
  <div class="goods-supertype">
    <div class="gs-nav">
      <a href="javascript:;" class="gs-nav-item" @click="selectType(0)">汪汪乖</a>
      <a href="javascript:;" class="gs-nav-item" @click="selectType(1)">喵喵乖</a>
      <div ref="tabsGoodsSupertypeSlideBar" class="gs-slide-bar"></div>
    </div>
    <div class="gs-content">
      <swiper class="main-swiper" :options="mainSwiperOption" ref="mainSwiper">
        <swiper-slide>
          <swiper :options="swiperDogOption" class="gs-goods-swiper">
            <swiper-slide>
              <div style="width: 100%; height: 1200px;"></div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-dog-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperCatOption" class="gs-goods-swiper">
            <swiper-slide>
              <div style="width: 100%; height: 1200px;"></div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-cat-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsGoodsSupertype',
  data () {
    const self = this
    return {
      mainSwiperOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 1,
        mousewheel: false,
        autoHeight: false,
        on: {
          slideChangeTransitionStart() {
            self.$refs.tabsGoodsSupertypeSlideBar.style.left = `${this.activeIndex * 50}%`
          }
        }
        /* eslint-enable */
      },
      swiperDogOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-dog-scrollbar',
          hide: true
        }
        /* eslint-enable */
      },
      swiperCatOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-cat-scrollbar',
          hide: true
        }
        /* eslint-enable */
      }
    }
  },
  computed: {
    mainSwiper () {
      return this.$refs.mainSwiper.swiper
    }
  },
  methods: {
    selectType (type) {
      this.mainSwiper.slideTo(type)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.goods-supertype {
  position: relative;
  width: 100%;
  height: 100%;
  .gs-nav {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: $bgColor;
    z-index: 20;
    .gs-nav-item {
      flex: 1;
    }
    .gs-slide-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50%;
      height: 2px;
      background: transparent;
      transition: left .2s ease;
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 25%;
        width: 50%;
        height: 3px;
        background: $orange;
      }
    }
  }
  .gs-content {
    position: fixed;
    padding: 96px 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 10;
    background: $slideBgColor;
    .main-swiper {
      height: 100%;
      .gs-goods-swiper {
        height: 100%;
      }
    }
  }
}
</style>
