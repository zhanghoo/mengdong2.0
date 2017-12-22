<template>
  <div class="app-message">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back"></span>
      <span slot="title">消息中心</span>
      <span slot="right" class="icon icon-search"></span>
    </app-header>
    <div class="am-content">
      <swiper class="message-swiper" :options="messageSwiperOption">
        <swiper-slide>
        <ul class="app-msg-list">
          <li class="app-msg-item" v-for="msg in msgList.messageList" :key="msg.id" @click="showMsgPage(msg)">
            <app-slide-menu-panel :msg="msg"></app-slide-menu-panel>
          </li>
        </ul>
        </swiper-slide>
        <div class="swiper-scrollbar swiper-message-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import { mapActions } from 'vuex'
export default {
  name: 'appMessage',
  components: {
    AppHeader
  },
  data () {
    const self = this
    return {
      msgList: {},
      tapEvent: false,
      messageSwiperOption: {
        /* eslint-disable */
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        autoHeight: true, //高度随内容变化
        scrollbar: {
          el: '.swiper-message-scrollbar',
          hide: true
        },
        mousewheel: true,
        roundLengths : true, // 防止文字模糊
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, // 修改swiper的父元素时，自动初始化swiper
        on:{
          tap: function(event) {
            //轻触的话弹出对话框
            self.tapEvent = true
          }
        }
        /* eslint-enable */
      }
    }
  },
  created () {
    this.$_hideAppNav()
    axios.get('../static/mocks/messages.json').then((res) => {
      this.msgList = res.data
    })
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
    }),
    back () {
      this.$router.go(-1)
    },
    showMsgPage (msges) {
      if (this.tapEvent) {
        console.log('')
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-message {

}
</style>
