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
              <ul class="shop-pet-type-list">
                <li v-for="type in goodsSupertypeList.dogs" :key="type.id" class="shop-pettype-item" @click.stop="toGoodsSubtype">
                  <div class="shop-pet-type-cover"></div>
                  <div class="shop-pet-type-intro">
                    <p><span class="shop-pet-type-icon" :class="type.icon"></span></p>
                    <span class="shop-pet-type-title">{{type.title}}</span>
                    <p class="shop-pet-type-desc">{{type.desc}}</p>
                  </div>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperCatOption" class="gs-goods-swiper">
            <swiper-slide>
              <ul class="shop-pet-type-list">
                <li v-for="type in goodsSupertypeList.cats" :key="type.id" class="shop-pettype-item" @click.stop="toGoodsSubtype">
                  <div class="shop-pet-type-cover"></div>
                  <div class="shop-pet-type-intro">
                    <p><span class="shop-pet-type-icon" :class="type.icon"></span></p>
                    <span class="shop-pet-type-title">{{type.title}}</span>
                    <p class="shop-pet-type-desc">{{type.desc}}</p>
                  </div>
                </li>
              </ul>
            </swiper-slide>
          </swiper>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsGoodsSupertype',
  props: {
    goodsSupertypeList: Object
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
            self.$refs.tabsGoodsSupertypeSlideBar.style.left = `${this.activeIndex * 50}%`
          }
        }
        /* eslint-enable */
      },
      swiperDogOption: {
        /* eslint-disable */
        /* eslint-enable */
      },
      swiperCatOption: {
        /* eslint-disable */
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
    },
    toGoodsSubtype () {
      this.$router.push('goodssubtype')
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
        .shop-pet-type-list {
          padding: 5px;
          width: 100%;
          height: auto;
          &:after{
            content: '.';
            display: block;
            height: 0;
            line-height: 0;
            clear: both;
            visibility: hidden;
          }
          .shop-pettype-item {
            float: left;
            padding: 5px;
            width: 50%;
            height: auto;
            text-align: center;
            .shop-pet-type-cover {
              padding-top: 100%;
              width: 100%;
              height: 0;
              background: #ccc;
            }
            .shop-pet-type-intro {
              padding: 15px 0;
              background: #fff;
              border: 1px solid #f1f1f1;
              .shop-pet-type-icon {
                display: block;
                margin: 0 auto 10px;
                width: 30px;
                height: 30px;
                background: #ccc;
              }
              .shop-pet-type-title {
                position: relative;
                display: inline-block;
                width: 60px;
                height: 16px;
                line-height: 16px;
                font-size: 14px;
                font-weight: 700;
                &:before,
                &:after {
                  content: '';
                  display: block;
                  position: absolute;
                  top: 6px;
                  left: -8px;
                  width: 6px;
                  height: 0;
                  border-bottom: 2px solid #333;
                }
                &:after {
                  left: auto;
                  right: -8px;
                }
              }
              .shop-pet-type-desc {
                font-size: 12px;
                color: #ccc
              }
            }
          }
        }
      }
    }
  }
}
</style>
