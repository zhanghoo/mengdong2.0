<template>
  <div v-show="showFlag" class="app-message-dialog">
    <app-header>
      <span slot="left" class="icon icon-back" @click="hide"></span>
      <span slot="title">{{msgFrom}}</span>
      <span slot="right"></span>
    </app-header>
    <div class="app-chat-wrap">
      <swiper class="chat-swiper" :options="chatSwiperOption">
        <swiper-slide>
          <ul class="app-chat">
            <li v-for="msg in msges" class="app-chat-item clearfix" :class="[msg.type == 0 ? 'item-right' : 'item-left']">
              <div class="avatar"></div>
              <div class="chat-content">{{msg.content}}</div>
            </li>
          </ul>
          </swiper-slide>
        <div class="swiper-scrollbar swiper-chat-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
    <div class="app-chat-input">
      <input class="input" type="text" placeholder="说点什么吧">
      <span class="icon icon-face"></span>
      <span class="icon icon-add"></span>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
export default {
  name: 'appMessageDialog',
  components: {
    AppHeader
  },
  props: {
    msgFrom: String,
    msges: Array
  },
  data () {
    return {
      showFlag: false,
      chatSwiperOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-chat-scrollbar',
          hide: true
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
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-message-dialog {
  .app-chat-wrap {
    position: fixed;
    top: 0;
    left: 0;
    padding: 48px 10px;
    width: 100%;
    height: 100%;
    background: $slideBgColor;
    .app-chat-item {
      position: relative;
      margin: 10px 0;
      &.item-right,
      &.item-left {
        .avatar {
          float: right;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #ccc;
        }
        .chat-content {
          position: relative;
          top: -3px;
          float: right;
          padding: 13px;
          margin-right: 15px;
          max-width: 60%;
          background: $mainColor;
          border-radius: 20px;
          line-height: 15px;
          font-size: 14px;
          &:before {
            content: '';
            display: block;
            position: absolute;
            top: 15px;
            right: -19px;
            width: 0;
            height: 0;
            border-style: solid;
            border-color: transparent transparent transparent $mainColor;
            border-width: 5px 10px;
            overflow: hidden;
          }
        }
      }
      &.item-left {
        .avatar {
          float: left;
        }
        .chat-content {
          float: left;
          margin-right: 0;
          margin-left: 15px;
          &:before {
            left: -19px;
            right: 0;
            border-color: transparent $mainColor transparent transparent;
          }
        }
      }
    }
    .swiper-container {
      width: 100%;
      height: 100%;
    }
  }
  .app-chat-input {
    display: flex;
    position: fixed;
    padding: 8px 12px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background: $bgColor;
    z-index: $zIndexNav;
    .input {
      flex: 1;
      margin-right: 10px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #f7f7f7;
      background-image: none;
      border: 1px solid #f3f3f3;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      outline: none;
    }
    .icon {
      margin: 6px;
    }
  }
}
</style>