<template>
  <div class="tabs-main-blog" :class="[role]">
    <div class="tmb-nav">
      <a href="javascript:;" class="tmb-nav-item" @click="selectType(0)">
        <div>
          <span class="icon icon-article"></span>
          <p class="num" v-show="!showBlog">{{articlesNum}}</p>
          <p class="text" :class="{ sm : !showBlog }">文章</p>
        </div>
      </a>
      <a href="javascript:;" class="tmb-nav-item" @click="selectType(1)">
        <div>
          <span class="icon icon-image"></span>
          <p class="num" v-show="!showBlog">{{imagesNum}}</p>
          <p class="text" :class="{ sm : !showBlog }">图片</p>
        </div>
      </a>
      <a href="javascript:;" class="tmb-nav-item" @click="selectType(2)">
        <div>
          <span class="icon icon-video"></span>
          <p class="num" v-show="!showBlog">{{videosNum}}</p>
          <p class="text" :class="{ sm : !showBlog }">视频</p>
        </div>
      </a>
      <div v-show="showBlog" ref="tabsMainBlogSlideBar" class="tmb-slide-bar"></div>
    </div>
    <div class="tmb-content" v-if="showBlog">
      <swiper class="main-swiper" :options="mainSwiperOption" ref="mainSwiper">
        <swiper-slide class="main-slide">
          <template v-if="mainSlide">
            <swiper :options="swiperArticleOption" class="text-swiper">
              <swiper-slide>
                <div v-for="article in appList.articles" :key="article.id">
                  <tabs-main-blog-article-panel :article="article" 
                                                @clickArticle="clickArticle(article)"/>
                </div>
              </swiper-slide>
              <div class="swiper-scrollbar swiper-article-scrollbar" slot="scrollbar"></div>
            </swiper>
          </template>
          <template v-else>
            <div v-for="article in appList.articles" :key="article.id">
              <tabs-main-blog-article-panel :article="article" 
                                            @clickArticle="clickArticle(article)"/>
            </div>
          </template>
        </swiper-slide>
        <swiper-slide class="main-slide">
          <template v-if="mainSlide">
            <swiper :options="swiperImageOption" class="text-swiper">
              <swiper-slide>
                <div v-for="image in appList.images" :key="image.id">
                  <tabs-main-blog-image-panel :image="image" 
                                              @clickImage="clickImage(image)"
                                              @clickAvatarToUserHome="clickAvatarToUserHome"/>
                </div>
              </swiper-slide>
              <div class="swiper-scrollbar swiper-image-scrollbar" slot="scrollbar"></div>
            </swiper>
          </template>
          <template v-else>
            <div v-for="image in appList.images" :key="image.id">
              <tabs-main-blog-image-panel :image="image" 
                                          @clickImage="clickImage(image)"
                                          @clickAvatarToUserHome="clickAvatarToUserHome"/>
            </div>
          </template>
        </swiper-slide>
        <swiper-slide class="main-slide">
          <template v-if="mainSlide">
            <swiper :options="swiperVideoOption" class="text-swiper">
              <swiper-slide>
                <div v-for="video in appList.videos" :key="video.id">
                  <tabs-main-blog-video-panel :video="video"
                                              @clickVideo="clickVideo(video)"
                                              @clickAvatarToUserHome="clickAvatarToUserHome" />
                </div>
              </swiper-slide>
              <div class="swiper-scrollbar swiper-video-scrollbar" slot="scrollbar"></div>
            </swiper>
          </template>
          <template v-else>
            <div v-for="video in appList.videos" :key="video.id">
              <tabs-main-blog-video-panel :video="video"
                                          @clickVideo="clickVideo(video)"
                                          @clickAvatarToUserHome="clickAvatarToUserHome" />
            </div>
          </template>
        </swiper-slide>
      </swiper>
    </div>
    <app-dialog-image v-if="showBlog" ref="tmbImage" :image="selectedImage" @contenIBottom="contenBottom"/>
    <app-dialog-video v-if="showBlog" ref="tmbVideo" :video="selectedVideo" @contenVBottom="contenBottom"/>
  </div>
</template>

<script>
import TabsMainBlogArticlePanel from '@/components/TabsMainBlogArticlePanel'
import TabsMainBlogImagePanel from '@/components/TabsMainBlogImagePanel'
import TabsMainBlogVideoPanel from '@/components/TabsMainBlogVideoPanel'
import AppDialogImage from '@/components/AppDialogImage'
import AppDialogVideo from '@/components/AppDialogVideo'

export default {
  name: 'tabsMainBlog',
  components: {
    TabsMainBlogArticlePanel,
    TabsMainBlogImagePanel,
    TabsMainBlogVideoPanel,
    AppDialogImage,
    AppDialogVideo
  },
  props: {
    appList: Object,
    showBlog: {
      type: Boolean,
      default: true
    },
    role: {
      type: String,
      default: 'index'
    },
    mainSlide: {
      type: Boolean,
      default: true
    }
  },
  data () {
    const self = this
    const autoHeight = !this.mainSlide
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
        autoHeight: autoHeight,
        freeMode: false,
        on: {
          slideChangeTransitionStart() {
            self.$refs.tabsMainBlogSlideBar.style.left = `${this.activeIndex * 33.3333}%`
          },
          slideChangeTransitionEnd() {
            if (!self.mainSlide && self.role === 'user') {
              // mainSwiper 不能滑动, 且是 userhome 时 触发 userhome的 homeUserSwiper 重新计算高度
              self.outSwiperSwiperUpdate()
            }
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
    },
    articlesNum () {
      return this.appList.articles ? this.appList.articles.length : 0
    },
    imagesNum () {
      return this.appList.images ? this.appList.images.length : 0
    },
    videosNum () {
      return this.appList.videos ? this.appList.videos.length : 0
    }
  },
  methods: {
    clickArticle (article) {
      this.$router.push('texts')
      // this.selectedArticle = article
      // this.textsType = 0
      // this.$refs.article.show()
    },
    clickImage (image) {
      this.selectedImage = image
      this.$emit('top')
      this.$refs.tmbImage.show()
    },
    clickVideo (video) {
      this.selectedVideo = video
      this.$emit('top')
      this.$refs.tmbVideo.show()
    },
    clickAvatarToUserHome () {
      this.$router.push('userhome')
    },
    selectType (type) {
      if (this.showBlog) {
        this.mainSwiper.slideTo(type)
      }
    },
    contenBottom () {
      this.$emit('bottom')
    },
    outSwiperSwiperUpdate () {
      // console.log('out swiper update')
      this.$emit('swiperUpdate')
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.tabs-main-blog {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
      height: 3px;
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
    position: absolute;
    padding: 88px 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 10;
    .main-swiper {
      height: 100%;
      background: $slideBgColor;
      .text-swiper {
        height: 100%;
      }
    }
  }
  &.user {
    .tmb-content {
      position: relative;
      padding: 0;
      width: 100%;
      height: 100%;
      .main-slide {
        padding: 0 0 10px 0;
      }
    }
  }
}
</style>
