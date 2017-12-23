<template>
  <div class="image-thumb-panel">
    <ul class="itp-images clearfix" :class="classRowCol">
      <li class="itp-img-item" v-for="(image, index) in images" :key="image.id" :class="`itp-img-item-${index+1}`"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'appPanelImageThumb',
  props: {
    images: Array
  },
  computed: {
    classRowCol () {
      const imgLen = this.images.length
      return `img-${imgLen}-1`
    }
  }
}
</script>

<style lang="scss">
.image-thumb-panel {
  .itp-images {
    position: relative;
    padding-bottom: 100%;
    width: 100%;
    height: 0;
    overflow: hidden;
    .itp-img-item {
      position: absolute;
      padding-bottom: 49%;
      width: 49%;
      height: 0;
      background: #ccc;
      .itp-img {
        width: 100%;
        height: 100%;
      }
      &.itp-img-item-1 {
        top: 0;
        left: 0;
      }
      &.itp-img-item-2 {
        top: 0;
        left: 51%;
      }
      &.itp-img-item-3 {
        top: 51%;
        left: 0;
      }
      &.itp-img-item-4 {
        top: 51%;
        left: 51%;
      }
    }
  }
}
</style>
