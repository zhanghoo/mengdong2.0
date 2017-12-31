<template>
	<div v-show="showFlag" class="app-video-dialog">
    <div class="app-video-content">
      <div class="app-video-bg" @click.self="hide"></div>
      <div class="app-video-wrap"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appDialogVideo',
  props: {
    video: Object
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.$emit('contenVBottom')
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-video-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  .app-video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, .6);
  }
  .app-video-wrap {
    position: absolute;
    top: 30%;
    left: 0;
    width: 100%;
    height: 40%;
    background: #fff;
    z-index: 20;
  }
}	
</style>
