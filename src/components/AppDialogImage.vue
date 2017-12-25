<template>
	<div v-show="showFlag" class="app-image-dialog">
    <div class="app-image-bg"></div>
    <div class="app-image-wrap">
      <div>
        <div class="app-image-content">
          <div class="box">
            <div class="image-wrapper">
              <swiper class="image-swiper" :options="imageSwiperOption">
                <swiper-slide>image 1</swiper-slide>
                <swiper-slide>image 2</swiper-slide>
                <swiper-slide>image 3</swiper-slide>
                <swiper-slide>image 4</swiper-slide>
                <swiper-slide>image 5</swiper-slide>
                <div class="image-swiper-pagination swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
            <div class="text">我今年九岁，用你们人类的年龄计算，意识耄耋之年，如果我是一个人，或许会写一封诗意盎然的告别信。然后潇洒地离开。但是我只是一直猫，我只能用我的呼噜声与你告别。</div>
            <p class="info">
              <span class="date">2017-12-12</span>
              <span class="author">小雨</span>
            </p>
          </div>
        </div>
        <div class="app-image-close" @click="hide"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appDialogImage',
  props: {
    image: Object
  },
  data () {
    return {
      showFlag: false,
      imageSwiperOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 1,
        freeMode: false,
        mousewheel: false,
        autoHeight: false,
        pagination: {
          el: '.image-swiper-pagination'
        }
        /* eslint-enable */
      }
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.$emit('contenIBottom')
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-image-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .app-image-bg {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, .6);
  }
  .app-image-wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    @include centerH();
    .app-image-content {
      padding: 0 15px;
      width: 100%;
      height: auto;
      .box {
        background: #fff;
        .image-wrapper {
          position: relative;
          padding-top: 100%;
          width: 100%;
          height: 0;
          background: #ccc;
          .image-swiper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .swiper-slide {
              width: 100%;
              height: 100%;
              @include centerH();
              background: $bgColor;
            }
            .image-swiper-pagination {
              bottom: 5px;
              width: 100%;
              .swiper-pagination-bullet {
                margin: 0 2px;
                background: $mainColor;
              }
            }
          }
        }
        .text {
          padding: 15px;
          line-height: 16px;
          font-size: 13px;
        }
        .info {
          padding: 15px 0;
          height: 45px;
          line-height: 15px;
          text-align: center;
          font-size: 12px;
          color: #ccc;
        }
      }
    }
    .app-image-close {
      margin: 20px auto;
      width: 20px;
      height: 20px;
      background: #fff;
      border-radius: 100%;
    }
  }
}	
</style>
