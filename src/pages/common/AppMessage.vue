<template>
  <div class="app-message">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">消息中心</span>
      <span slot="right"></span>
    </app-header>
    <div class="am-content">
      <swiper class="message-swiper" :options="messageSwiperOption">
        <swiper-slide>
        <ul class="app-msg-list">
          <li class="app-msg-item" v-for="msg in msgList.messageList" :key="msg.id" @click="showMsgPage(msg)">
            <app-panel-slide-menu :msg="msg" />
          </li>
        </ul>
        </swiper-slide>
      </swiper>
    </div>
    <app-message-dialog :msges="msges" :msgFrom="msgFrom" ref="appMessageDialog"/>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppPanelSlideMenu from '@/components/AppPanelSlideMenu'
import AppMessageDialog from '@/pages/common/AppMessageDialog'
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'appMessage',
  components: {
    AppHeader,
    AppPanelSlideMenu,
    AppMessageDialog
  },
  data () {
    const self = this
    return {
      msgList: {},
      tapEvent: false,
      msgFrom: '',
      msges: [],
      messageSwiperOption: {
        /* eslint-disable */
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
        this.msges = msges.messages
        this.msgFrom = msges.name
        this.$refs.appMessageDialog.show()
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-message {
  .am-content {
    position: fixed;
    padding-top: 48px;
    width: 100%;
    height: 100%;
    .message-swiper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
