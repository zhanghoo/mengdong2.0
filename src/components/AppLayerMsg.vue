<template>
  <div v-if="showFlag" class="app-layer-msg" :class="{'active': active}">
    <span class="app-layer-text">{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'appLayerMsg',
  props: {
    msg: {
      type: String,
      default: 'no msg!'
    }
  },
  data () {
    return {
      showFlag: false,
      active: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
      if (this.showFlag) {
        this.$nextTick(() => {
          this.active = true
          if (this.active) {
            // 当动画开始后setTimeout
            setTimeout(() => {
              this.hide()
              this.active = false
            }, 2000)
          }
        })
      }
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss">
.app-layer-msg {
  position: fixed;
  bottom: 48px;
  left: 0;
  width: 100%;
  height: 0;
  text-align: center;
  color: #333;
  z-index: 999999;
  .app-layer-text {
    display: inline-block;
    margin: 0 auto;
    padding: 0 10px;
    width: auto;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    background: rgba(204, 204, 204, 0.39);
    border-radius: 24px;
  }
  &.active {
    bottom: 78px;
    transition: bottom .1s ease-out;
  }
}
</style>