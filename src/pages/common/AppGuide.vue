<template>
  <div class="app-guide" v-if="showFlag">
    <div class="guide-init" :class="{ show: isShow }">
      <div class="jump-circle" @click="hideFirst">
        <the-circle-progress-bar/>
      </div>
      <img class="img" src="static/images/guide0.jpg">
    </div>
    <swiper class="guide-swiper" :options="guideSwiperOption">
      <swiper-slide class="guide-page page1">
        <img class="img" src="static/images/guide1.jpg">
      </swiper-slide>
      <swiper-slide class="guide-page page2">
        <img class="img" src="static/images/guide2.jpg">
      </swiper-slide>
      <swiper-slide class="guide-page page3">
        <img class="img" src="static/images/guide3.jpg">
      </swiper-slide>
      <swiper-slide class="guide-page page4">
        <img class="img" src="static/images/guide4.jpg">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
    </swiper>
    <a href="javascript:;" class="btn-go" v-show="btnShow" @click="hide">去瞄瞄</a>
  </div>
</template>
<script>
import TheCircleProgressBar from '@/components/TheCircleProgressBar'
import { mapActions } from 'vuex'
export default {
  name: 'appGuide',
  components: {
    TheCircleProgressBar
  },
  data () {
    const self = this
    return {
      showFlag: true,
      isShow: true,
      btnShow: false,
      guideSwiperOption: {
        /* eslint-disable */
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet(index, className) {
            return `<span class="${className} icon-heart icon-heart-${index}"></span>`
          }
        },
        on: {
          slideChange() {
            self.btnShow = this.slidesGrid.length == ( this.activeIndex + 1) ? true : false
          }
        }
        /* eslint-enable */
      }
    }
  },
  created () {
    this.$_hideAppNav()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
    }),
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
      this.$router.push('registerlogin')
    },
    hideFirst () {
      this.isShow = false
    }
  }
}
</script>
<style lang="scss">
@import "../../assets/scss/md";
.app-guide {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $zIndexSupTop;
  background: $mainColor;
  .guide-init {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    .jump-circle {
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
    .img {
      width: 100%;
      height: 100%;
    }
    &.show {
      display: block;
    }
    &.leave {
      opacity: 0;
      transition: opacity 5s ease-in;
    }
  }
  .guide-swiper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:before,&:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(#ab84e0, #9e6fdd);
    }
    &:after {
      left: auto;
      right: 0;
      background: linear-gradient(#deb87c, #dbae65);
    }
    .guide-page {
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      bottom: 20px;
      .icon-heart {
        position: relative;
        margin: 0 8px;
        width: 12px;
        height: 12px;
        border-radius: 0;
        transform: rotate(135deg);
        &:before, &:after {
          content: '';
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          background: #000;
        }
        &:after {
          top: 0;
          left: -50%;
        }
        &.swiper-pagination-bullet-active {
          &.icon-heart-0 {
            background: #9d6edc;
            &:before, &:after {
              background: #9d6edc;
            }
          }
          &.icon-heart-1 {
            background: #635dd9;
            &:before, &:after {
              background: #635dd9;
            }
          }
          &.icon-heart-2 {
            background: #d95d8f;
            &:before, &:after {
              background: #d95d8f;
            }
          }
          &.icon-heart-3 {
            background: #e0ba80;
            &:before, &:after {
              background: #e0ba80;
            }
          }
        }
      }
    }
  }
  .btn-go {
    position: absolute;
    display: block;
    bottom: 15px;
    left: 50%;
    margin-left: -14%;
    width: 28%;
    height: 36px;
    line-height: 36px;
    border-radius: 18px;
    z-index: 10;
    background: #e0ba80;
    color: #fff;
    text-align: center;
  }
}
</style>
