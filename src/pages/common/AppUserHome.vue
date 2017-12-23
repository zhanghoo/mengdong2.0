<template>
  <div class="app-user-home">
    <app-header :is-transparent="true">
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">小菜菜</span>
      <span slot="right"></span>
    </app-header>
    <div class="auh-content">
      <swiper class="home-swiper" :options="homeUserSwiperOption" ref="homeUserSwiper">
          <swiper-slide>
            <the-home-profile/>
            <tabs-main-blog :app-list="userList" :role="'user'" :mainSlide="false" @swiperUpdate="swiperUpdate"/>
          </swiper-slide>
          <!-- <div class="swiper-scrollbar swiper-user-home-scrollbar" slot="scrollbar"></div> -->
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
    return {
      userList: {},
      homeUserSwiperOption: {
        /* eslint-disable */
        // scrollbar: {
        //   el: '.swiper-user-home-scrollbar',
        //   hide: true
        // }
        /* eslint-enable */
      }
    }
  },
  computed: {
    homeUserSwiper () {
      return this.$refs.homeUserSwiper.swiper
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
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-user-home {
  position: absolute;
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
