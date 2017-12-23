<template>
  <div class="friend-video-panel">
    <panel-friend-slot :blog="video" @clickAvatar="clickAvatar">
      <div class="fvp-video-content">
        <div class="fvp-cover" @click.stop="clickVideo"></div>
        <div class="fvp-content">{{video.content}}</div>
      </div>
    </panel-friend-slot>
  </div>
</template>

<script>
import PanelFriendSlot from '@/components/PanelFriendSlot'
export default {
  name: 'panelFriendVideo',
  components: {
    PanelFriendSlot
  },
  props: {
    video: Object
  },
  methods: {
    clickVideo () {
      this.$emit('clickVideo')
    },
    clickAvatar () {
      this.$emit('clickAvatarToUserHome')
    }
  }
}
</script>

<style lang="scss">
.friend-video-panel {
   .fvp-video-content {
    .fvp-cover {
      padding-top: 55%;
      width: 100%;
      height: 0;
      overflow: hidden;
      background: #ccc;
      .fvp-img {
        width: 100%;
        height: 100%;
      }
    }
    .fvp-content {
      padding: 15px 15px 0;
      line-height: 20px;
    }
  }
}
</style>
