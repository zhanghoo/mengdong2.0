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
              <div v-for="article in appList.articles" @click.stop="clickArticle(article)" :key="article.id">
                <tabs-main-blog-article-panel :article="article" />
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-article-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperImageOption" class="text-swiper">
            <swiper-slide>
              <div v-for="image in appList.images" @click.stop="clickImage(image)" :key="image.id">
                <tabs-main-blog-image-panel :image="image" />
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-image-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperVideoOption" class="text-swiper">
            <swiper-slide>
              <div v-for="video in appList.videos" @click.stop="clickVideo(video)" :key="video.id">
                <tabs-main-blog-video-panel :video="video" />
              </div>
            </swiper-slide>
            <div class="swiper-scrollbar swiper-video-scrollbar" slot="scrollbar"></div>
          </swiper>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import TabsMainBlogArticlePanel from '@/components/TabsMainBlogArticlePanel'
import TabsMainBlogImagePanel from '@/components/TabsMainBlogImagePanel'
import TabsMainBlogVideoPanel from '@/components/TabsMainBlogVideoPanel'

export default {
  name: 'tabsMainBlog',
  components: {
    TabsMainBlogArticlePanel,
    TabsMainBlogImagePanel,
    TabsMainBlogVideoPanel
  },
  props: {
    appList: Object
  },
  data () {
    const self = this
    return {
      textsType: 0,
      selectedArticle: {},
      selectedImage: {},
      selectedVideo: {},
      mainSwiperOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 1,
        mousewheel: false,
        autoHeight: false,
        on: {
          slideChangeTransitionStart() {
            self.$refs.tabsMainBlogSlideBar.style.left = `${this.activeIndex * 33.3333}%`
          }
        }
        /* eslint-enable */
      },
      swiperArticleOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-article-scrollbar',
          hide: true
        }
        /* eslint-enable */
      },
      swiperImageOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-image-scrollbar',
          hide: true
        }
        /* eslint-enable */
      },
      swiperVideoOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-video-scrollbar',
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
    clickArticle (article) {
      this.selectedArticle = article
      // this.textsType = 0
      // this.$refs.article.show()
    },
    clickImage (image) {
      this.selectedImage = image
      // this.$refs.image.show()
    },
    clickVideo (video) {
      this.selectedVideo = video
      // this.$refs.video.show()
    },
    selectType (type) {
      this.mainSwiper.slideTo(type)
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
