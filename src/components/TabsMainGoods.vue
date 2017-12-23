<template>
  <div class="main-goods">
    <div class="mg-nav">
      <a href="javascript:;" class="mg-nav-item" @click="selectType(0)">精选</a>
      <a href="javascript:;" class="mg-nav-item" @click="selectType(1)">热销</a>
      <a href="javascript:;" class="mg-nav-item" @click="selectType(2)">限时</a>
      <div ref="tabsMainGoodSlideBar" class="mg-slide-bar"></div>
    </div>
    <div class="mg-content">
      <swiper class="main-swiper" :options="mainSwiperOption" ref="mainSwiper">
        <swiper-slide>
          <swiper :options="swiperPickedOption" class="mg-goods-swiper">
            <swiper-slide>
              <div v-for="picked in shopList.picked" :key="picked.id" class="shop-wrap">
                <tabs-main-goods-picked-panel :picked="picked" />
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-picked-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperHotOption" class="mg-goods-swiper">
            <swiper-slide>
              <div v-for="hot in shopList.hot" :key="hot.id" class="shop-wrap">
                <tabs-main-goods-hot-panel :hot="hot" />
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-hot-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperLimitOption" class="mg-goods-swiper">
            <swiper-slide>
              <div v-for="(limit,index) in shopList.limit" :key="limit.id" class="shop-wrap">
                <tabs-main-goods-limit-panel :limit="limit" :direction="$_setDirection(index)"/>
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-limit-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import TabsMainGoodsPickedPanel from '@/components/TabsMainGoodsPickedPanel'
import TabsMainGoodsHotPanel from '@/components/TabsMainGoodsHotPanel'
import TabsMainGoodsLimitPanel from '@/components/TabsMainGoodsLimitPanel'

export default {
  name: 'tabsMainGoods',
  components: {
    TabsMainGoodsPickedPanel,
    TabsMainGoodsHotPanel,
    TabsMainGoodsLimitPanel
  },
  props: {
    shopList: Object
  },
  data () {
    const self = this
    return {
      mainSwiperOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 1,
        freeMode: false,
        autoHeight: false,
        mousewheel: false,
        on: {
          slideChangeTransitionStart() {
            self.$refs.tabsMainGoodSlideBar.style.left = `${this.activeIndex * 33.3333}%`
          }
        }
        /* eslint-enable */
      },
      swiperPickedOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-picked-scrollbar',
          hide: true
        }
        /* eslint-enable */
      },
      swiperHotOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-hot-scrollbar',
          hide: true
        }
        /* eslint-enable */
      },
      swiperLimitOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-limit-scrollbar',
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
    $_setDirection (index) {
      return index % 2 === 0 ? 'left' : 'right'
    },
    selectType (type) {
      this.mainSwiper.slideTo(type)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.main-goods {
  position: relative;
  width: 100%;
  height: 100%;
  .mg-nav {
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
    .mg-nav-item {
      flex: 1;
    }
    .mg-slide-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 33.3333%;
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
  .mg-content {
    position: fixed;
    padding: 96px 0 58px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 10;
    background: $slideBgColor;
    .main-swiper {
      height: 100%;
      .mg-goods-swiper {
        height: 100%;
        .shop-wrap {
          margin-top: 10px;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
