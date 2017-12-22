<template>
  <div class="app-tabs">
    <div class="at-nav">
      <a v-for="(item, index) in navItem" 
         :key="index" 
         href="javascript:;" 
         class="at-nav-item"
         :style="{ width: `${navItemWidth}%` }"
         @click="selectType(index)">
        {{item.desc}}
      </a>
      <div ref="tabsSlideBar" class="at-slide-bar"></div>
    </div>
    <div class="at-content">
      <swiper ref="swiper" :options="swiperOption" class="at-swiper">
        <swiper-slide v-for="(item, index) in navItem" :key="index" class="at-slide">
          <slot name="item">{{index}}</slot>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appTabs',
  props: {
    navItem: Array
  },
  data () {
    const self = this
    return {
      swiperOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 1,
        mousewheel: false,
        autoHeight: false,
        on: {
          slideChangeTransitionStart() {
            self.$refs.tabsSlideBar.style.left = `${this.activeIndex * self.navItemWidth}%`
          }
        }
        /* eslint-enable */
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.swiper.swiper
    },
    navItemNum () {
      return this.navItem.length
    },
    navItemWidth () {
      const navItemWidth = (1 / this.navItemNum) * 100
      return `${navItemWidth.toFixed(4)}`
    }
  },
  methods: {
    selectType (type) {
      this.swiper.slideTo(type)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-tabs {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .at-nav {
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
    .at-slide-bar {
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
  .at-content {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 48px;
    width: 100%;
    height: 100%;
    background: $slideBgColor;
    z-index: 10;
    .at-swiper {
      width: 100%;
      height: 100%;
      .at-slide {
        padding-top: 10px;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
