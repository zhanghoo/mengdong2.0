<template>
  <div class="app-slide-menu-panel">
    <swiper :options="appSlideMenuOption" ref="appSlideMenuSwiper">
      <swiper-slide class="content">
        <span class="icon icon-msg"></span>
        <div class="msg-info">
          <p class="info">
            <span class="name">{{msg.name}}</span>
            <span class="date">{{ msg.messages[0].date }}</span>
          </p>
          <p class="msg">{{ msg.messages[0].content }}</p>
          <span class="bubble" v-show="msg.unReadNum">{{msg.unReadNum}}</span>
        </div>
      </swiper-slide>
      <swiper-slide class="menu">删除</swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'appPanelSlideMenu',
  props: {
    msg: Object
  },
  data () {
    return {
      appSlideMenuOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 'auto',
        mousewheel: false,
        resistanceRatio: 0
        /* eslint-enable */
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-slide-menu-panel {
  .swiper-slide {
    position: relative;
    height: 60px;
    &.content {
      width: 100%;
      .icon-msg {
        position: absolute;
        top: 50%;
        left: 10px;
        margin-top: -17px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        z-index: 20;
      }
      .msg-info {
        position: absolute;
        top: 0;
        left: 0;
        padding: 10px 10px 10px 56px;
        width:100%;
        height: 60px;
        z-index: 10;
        .info {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 25px;
          .name {
            font-size: 16px;
          }
          .date {
            font-size: 14px;
            color: #999;
          }
        }
        .msg {
          padding-right: 40px;
          width: 100%;
          height: 15px;
          line-height: 15px;
          font-size: 14px;
          color: #999;
          @include text-ellipsis();
        }
        .bubble {
          position: absolute;
          display: block;
          right: 10px;
          bottom: 10px;
          width: 15px;
          height: 15px;
          line-height: 15px;
          background: $mainDColor;
          color: #fff;
          text-align: center;
          font-size: 12px;
          border-radius: 50%;
        }
      }
    }
    &.menu {
      width: 100px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      background: #f77a2f;
    }
  }
}
</style>