<template>
  <div class="app-home">
    <app-header :is-transparent="isTransparent">
      <span slot="left"></span>
      <span slot="title">小菜菜</span>
      <span slot="right" class="icon icon-set">设置</span>
    </app-header>
    <div class="ah-content">
      <swiper class="home-swiper" :options="homeSwiperOption">
          <swiper-slide>
            <the-home-profile/>
            <tabs-main-blog :app-list="mineList" :show-blog="showBlogFlag"/>
            <div class="home-panel">
              <div class="home-wrap">
                <div class="home-column">
                  <div class="home-item" @click="toCart">
                    <span class="icon icon-cart"></span>
                    <span class="text">购物车</span> 
                  </div>
                  <div class="home-item" @click="toOrder">
                      <span class="icon icon-list"></span>
                      <span class="text">我的订单</span>
                  </div>
                </div>
                <div class="home-column">
                  <div class="home-item">
                      <span class="icon icon-server"></span>
                      <span class="text">我的售后</span>
                  </div>
                  <div class="home-item">
                      <span class="icon icon-address"></span>
                      <span class="text">地址管理</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        <!-- <div class="swiper-scrollbar swiper-home-scrollbar" slot="scrollbar"></div> -->
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
  name: 'appHome',
  components: {
    AppHeader,
    TheHomeProfile,
    TabsMainBlog
  },
  data () {
    const self = this
    return {
      mineList: {},
      showBlogFlag: false,
      isTransparent: true,
      homeSwiperOption: {
        /* eslint-disable */
        // scrollbar: {
        //   el: '.swiper-home-scrollbar',
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
  created () {
    this.$_showAppNav()
    axios.get('static/mocks/texts-user.json').then((res) => {
      this.mineList = res.data
    })
  },
  methods: {
    ...mapActions({
      $_showAppNav: 'showAppNav'
    }),
    toCart () {
      this.$router.push('cart')
    },
    toOrder () {
      this.$router.push('order')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-home {
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 0 58px 0;
  width: 100%;
  height: 100%;
  .ah-content {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: $slideBgColor;
    .home-swiper {
      width: 100%;
      height: 100%;
      .home-panel {
        position: relative;
        padding-top: 100%;
        margin-top: 10px;
        width: 100%;
        height: 0;
        background: $bgColor;
        .home-wrap {
          position: absolute;
          top: 0;
          left: 0;
          padding: 15%;
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          .home-column {
            flex-basis: 100%;
            display: flex;
            justify-content: space-between;
            .home-item {
              .icon,
              .text {
                display: block;
                margin: 10px auto;
              }
            }
          }
          &:before,&:after {
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 15%;
            width: 70%;
            height: 0;
            border-bottom: 1px dashed #ccc;
            overflow: hidden;
          }
          &:after {
            top: 15%;
            left: 50%;
            width: 0;
            height: 70%;
            border-bottom: none;
            border-left: 1px dashed #ccc;
          }
        }
      }
    }
  }
}
</style>
