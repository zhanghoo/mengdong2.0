<template>
  <div class="tabs-main-blog">
    <div class="tmb-nav">
      <a href="javascript:;" class="tmb-nav-item" @click="selectType(0)">
        <div>
          <span class="icon icon-article"></span>
          <p class="text">文章</p>
        </div>
      </a>
      <a href="javascript:;" class="tmb-nav-item" @click="selectType(1)">
        <div>
          <span class="icon icon-image"></span>
          <p class="text">图片</p>
        </div>
      </a>
      <a href="javascript:;" class="tmb-nav-item" @click="selectType(2)">
        <div>
          <span class="icon icon-video"></span>
          <p class="text">视频</p>
        </div>
      </a>
      <div ref="tabsMainBlogSlideBar" class="tmb-slide-bar"></div>
    </div>
    <div class="tmb-content">
      <swiper class="main-swiper" :options="mainSwiperOption" ref="mainSwiper">
        <swiper-slide>
          <swiper :options="swiperArticleOption" class="text-swiper">
            <swiper-slide>
              <div style="width: 100%; height: 800px;"></div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-article-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperImageOption" class="text-swiper">
            <swiper-slide>
              <div style="width: 100%; height: 800px;"></div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-image-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperVideoOption" class="text-swiper">
            <swiper-slide>
              <div style="width: 100%; height: 800px;"></div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-video-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsMainBlog',
  data () {
    const self = this
    return {
      textsType: 0,
      selectedArticle: {},
      selectedImage: {},
      selectedVideo: {},
      mainSwiperOption: {
        /* eslint-disable */
        clickable: true,
        autoplay: false,
        roundLengths: true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        on: {
          slideChangeTransitionStart() {
            self.$refs.mainSlideBar.style.left = `${this.activeIndex * 33.3333}%`
          }
        }
        /* eslint-enable */
      },
      swiperArticleOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-article-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      swiperImageOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-image-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        /* eslint-enable */
      },
      swiperVideoOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        clickable: true,
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-video-scrollbar',
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
  computed: {
    mainSwiper () {
      return this.$refs.mainSwiper.swiper
    }
  },
  methods: {
    selectType (type) {
      if (this.showActive) {
        this.mainSwiper.slideTo(type)
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.tabs-main-blog {
  .tmb-nav {
    position: relative;
    display: flex;
    z-index: 20;
    background: #fff;
    &.index {
      position: fixed;
      top: 48px;
      left: 0;
      width: 100%;
      height: 88px;
    }
    .tmb-nav-item {
      flex: 1;
      height: 88px;
      @include centerH();
      .icon {
        margin-bottom: 5px;
        width: 30px;
        height: 30px;
      }
      .num {
        font-size: 18px;
        text-align: center;
      }
      .text {
        &.sm {
          font-size: 12px;
          text-align: center;
          color: #ccc;
        }
      }
    }
    .tmb-slide-bar {
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
        height: 2px;
        background: $darkOrange;
      }
    }
  }
  .tmb-content {
    position: fixed;
    padding: 136px 0 58px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 10;
    background: $slideBgColor;
    .main-swiper {
      height: 100%;
      .text-swiper {
        height: 100%;
      }
    }
  }
}
</style>
