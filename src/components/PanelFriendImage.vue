<template>
  <div class="friend-image-panel">
    <panel-friend-slot :blog="image" @clickAvatar="clickAvatar">
      <div @click.stop="clickImage">
        <app-panel-image-thumb :images="images"/>
      </div>
      <div class="fip-image-content">{{image.content}}</div>
    </panel-friend-slot>
  </div>
</template>

<script>
import PanelFriendSlot from '@/components/PanelFriendSlot'
import AppPanelImageThumb from '@/components/AppPanelImageThumb'
export default {
  name: 'panelFriendImage',
  components: {
    PanelFriendSlot,
    AppPanelImageThumb
  },
  props: {
    image: Object
  },
  computed: {
    images () {
      return this.image.images
    }
  },
  methods: {
    clickImage () {
      // 这里同样需要传到组件里去, 区别点击的是第几张图片, 然后弹窗是出现的是第几张?
      // console.log('panel click image')
      this.$emit('clickImage')
    },
    clickAvatar () {
      this.$emit('clickAvatarToUserHome')
    }
  }
}
</script>

<style lang="scss">
.friend-image-panel {
  .fip-image-content {
    padding: 15px 15px 0;
    line-height: 20px;
  }
}
</style>
