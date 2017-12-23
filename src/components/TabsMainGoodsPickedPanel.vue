<template>
  <div class="goods-picked">
    <div class="gp-bg" @click.stop="toGoodsTexts">
      <div>
        <span class="gp-theme">{{picked.theme}}</span>
        <p class="gp-title">{{picked.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsMainGoodsPickedPanel',
  props: {
    picked: Object
  },
  methods: {
    toGoodsTexts () {
      this.$router.push('goodstexts')
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.goods-picked {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 60%;
  width: 100%;
  height: 0;
  .gp-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #fff;
    background: rgba(0, 0, 0, .2);
    @include centerH();
    text-align: center;
    .gp-theme {
      position: relative;
      height: 30px;
      line-height: 30px;
      font-size: 18px;
      font-weight: 700;
      border-bottom: 2px solid #fff;
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 0;
        border-bottom: 1px solid #fff;
      }
    }
    .gp-title {
      margin-top: 10px;
      font-size: 14px;
    }
  }
}
</style>
