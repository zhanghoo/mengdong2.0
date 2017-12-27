<template>
  <div class="app-header" :class="{ transparent: isTransparent}">
    <div class="ah-left">
       <slot name="left">左</slot>
    </div>
    <div class="ah-center" :class="{ transparent: isTransparent}">
      <slot name="title">标题</slot>
    </div>
    <div class="ah-right">
      <slot name="right">右</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appHeader',
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show () {
      this.isTransparent = false
    },
    hide () {
      this.isTransparent = true
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-header {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  padding: 0 15px;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background: $mainColor;
  transition: background .5s ease;
  &.transparent {
    background: transparent;
  }
  color: #fff;
  z-index: $zIndexNav;
  .ah-left {
    min-width: 40px;
  }
  .ah-center {
    flex: 1;
    text-align: center;
    color: #fff;
    @include text-ellipsis();
    transition: color 1s ease;
    &.transparent {
      color: transparent;
    }
  }
  .ah-right {
    min-width: 40px;
    text-align: right;
  }
}
</style>
