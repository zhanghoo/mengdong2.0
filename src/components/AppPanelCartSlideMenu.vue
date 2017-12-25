<template>
  <div class="app-cart-slide-menu-panel">
    <swiper :options="appCartSlideMenuOption" ref="appCartSlideMenuSwiper">
      <swiper-slide class="content">
        <div class="acsm-goods-panel">
          <div class="acsm-check-box">
            <app-checkbox />
          </div>
          <div class="acsm-cover"><div class="img"></div></div>
          <div class="acsm-goods">
            <h3 class="acsm-title">{{goods.title}}</h3>
            <div class="acsm-info" v-for="(info,index) in goods.info" :key="index">
              <p class="acsmi-desc">{{info.desc}}：</p>
              <p class="acsmi-choice">{{info.choice}}</p>
            </div>
            <p class="acsm-price">{{goods.price}}</p>
          </div>
          <div class="acsm-num">
            <app-num-control :goods-num="goods.number" />
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="menu">
        <span class="icon icon-del">删除</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox'
import AppNumControl from '@/components/AppNumControl'

export default {
  name: 'appPanelCartSlideMenu',
  components: {
    AppCheckbox,
    AppNumControl
  },
  props: {
    goods: Object
  },
  data () {
    return {
      appCartSlideMenuOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 'auto',
        mousewheel: false,
        resistanceRatio: 0
        /* eslint-enable */
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-cart-slide-menu-panel {
  margin: 5px 0;
  background: $bgColor;
  .swiper-slide {
    position: relative;
    height: 80px;
    &.content {
      width: 100%;
      height: 80px;
      .acsm-goods-panel {
        display: flex;
        width: 100%;
        height: 80px;
        .acsm-check-box {
          width: 30px;
          height: 80px;
          @include centerH();
        }
        .acsm-cover {
          width: 70px;
          height: 80px;
          line-height: 80px;
          .img {
            display: inline-block;
            width: 60px;
            height: 60px;
            background: #ccc;
            vertical-align: middle;
          }
        }
        .acsm-goods {
          flex: 1;
          position: relative;
          height: 60px;
          margin: 10px 0;
          font-size: 12px;
          .acsm-title {
            height: 15px;
            font-weight: 700;
          }
          .acsm-info {
            display: flex;
            height: 10px;
            line-height: 10px;
            font-size: 10px;
            color: #ccc;
          }
          .acsm-price {
            position: absolute;
            bottom: 0;
            left: 0;
            color: $mainColor;
            font-weight: 700;
          }
        }
      }
    }
    &.menu {
      width: 60px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #fff;
      background: $mainColor;
    }
  }
}
</style>