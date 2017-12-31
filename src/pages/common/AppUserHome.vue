<template>
  <div class="app-user-home">
    <app-header :is-transparent="isTransparent">
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">小菜菜</span>
      <span slot="right"></span>
    </app-header>
    <div class="auh-content" ref="auhContent">
      <swiper class="home-swiper" :options="homeUserSwiperOption" ref="homeUserSwiper">
          <swiper-slide>
            <the-home-profile/>
            <tabs-main-blog :app-list="userList" 
                            :role="'user'" 
                            :mainSlide="false" 
                            @swiperUpdate="swiperUpdate"
                            @top="setTop" 
                            @bottom="setBottom"/>
          </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import TheHomeProfile from '@/components/TheHomeProfile'
import TabsMainBlog from '@/components/TabsMainBlog'
import axios from 'axios'

export default {
  name: 'appUserHome',
  components: {
    AppHeader,
    TheHomeProfile,
    TabsMainBlog
  },
  data () {
    const self = this
    return {
      userList: {},
      isTransparent: true,
      homeUserSwiperOption: {
        /* eslint-disable */
        // scrollbar: {
        //   el: '.swiper-user-home-scrollbar',
        //   hide: true
        // }
        on: {
          touchMove: function() {
            if (this.translate <= -48 && self.isTransparent) {
              self.isTransparent = false
            } else if (this.translate > -48 && !self.isTransparent) {
              self.isTransparent = true
            }
          }
        }
        /* eslint-enable */
      }
    }
  },
  computed: {
    homeUserSwiper () {
      return this.$refs.homeUserSwiper.swiper
    },
    hasTouch () {
      return 'ontouchstart' in window
    },
    tapstart () {
      return this.hastouch ? 'touchstart' : 'mousedown'
    }
  },
  created () {
    this.$_hideAppNav()
    axios.get('static/mocks/texts-user.json').then((res) => {
      this.userList = res.data
    })
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
    }),
    back () {
      this.$router.go(-1)
    },
    swiperUpdate () {
      // console.log(this.homeUserSwiper)
      this.homeUserSwiper.update()
    },
    setTop (dialogWrap) {
      this.$refs.auhContent.style.zIndex = '990'
      this.scrollDisable()
      dialogWrap.$el.style.height = `${this.$refs.auhContent.offsetHeight}px`
    },
    setBottom () {
      this.scrollEnable()
      this.$refs.auhContent.style.zIndex = ''
    },
    tapstartHandler (e) {
      if (e.cancelable) {
        if (!e.defaultPrevented) {
          e.preventDefault()
        }
      }
    },
    scrollDisable () {
      window.addEventListener(this.tapstart, this.tapstartHandler(event))
    },
    scrollEnable () {
      window.removeEventListener(this.tapstart, this.tapstartHandler(event))
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-user-home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .auh-content {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $slideBgColor;
    .home-swiper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
