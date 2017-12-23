<template>
  <div class="friend-article-panel">
    <panel-friend-slot :blog="article" @clickAvatar="clickAvatar">
      <div class="fap-article-content">
        <div class="fap-img"></div>
        <div class="fap-cover" @click.shop="clickArticle">
          <div>
            <h2 class="fap-title-line"><span class="fap-text">美文</span></h2>
            <h3 class="fap-title">{{article.title}}</h3>
          </div>
        </div>
      </div>
    </panel-friend-slot>
  </div>
</template>

<script>
import PanelFriendSlot from '@/components/PanelFriendSlot'
export default {
  name: 'panelFriendArticle',
  components: {
    PanelFriendSlot
  },
  props: {
    article: Object
  },
  methods: {
    clickArticle () {
      this.$emit('clickArticle')
    },
    clickAvatar () {
      this.$emit('clickAvatarToUserHome')
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.friend-article-panel {
  .fap-article-content {
    position: relative;
    padding-top: 55%;
    width: 100%;
    height: 0;
    overflow: hidden;
    .fap-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .fap-cover {
      position: absolute;
      @include centerH();
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ccc;
      text-align: center;
      .fap-title-line {
        width: 100%;
        height: 40px;
        line-height: 40px;
        .fap-text {
          position: relative;
          display: inline-block;
          height: 40px;
          color: #fff;
          &:before,
          &:after {
            content: '';
            display: block;
            position: absolute;
            top: 20px;
            left: -20px;
            width: 15px;
            height: 0;
            border-bottom: 2px solid #fff;
          }
          &:after {
            left: auto;
            right: -20px;
          }
        }
      }
      .fap-title {
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
