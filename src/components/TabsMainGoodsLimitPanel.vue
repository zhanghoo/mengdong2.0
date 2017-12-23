<template>
  <div class="goods-limit">
    <div class="shop-limit-info" :class="[isLeft]">
      <div>
        <span class="limit-theme">限时特惠</span>
        <p class="limit-title" @click.stop="topGoods">{{limit.title}}</p>
        <p class="limit-date">剩余1小时20分钟30秒</p>
        <p class="limit-new-price">{{limit.newPrice}}</p>
        <p class="limit-old-price">{{limit.oldPrice}}</p>
      </div>
    </div>
    <div class="shop-limit-img" :class="[isRight]" @click.stop="topGoods"></div>
  </div>
</template>

<script>
export default {
  name: 'tabsMainGoodsLimitPanel',
  props: {
    limit: Object,
    direction: {
      type: String,
      default: 'left'
    }
  },
  computed: {
    isLeft () {
      return this.direction === 'left' ? 'left' : 'right'
    },
    isRight () {
      return this.direction === 'left' ? 'right' : 'left'
    }
  },
  methods: {
    topGoods () {
      this.$router.push('goods')
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.goods-limit {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: #fff;
  .shop-limit-info {
    position: absolute;
    top: 0;
    left: 0;
    padding-right: 120px;
    width: 100%;
    height: 100%;
    text-align: center;
    @include centerH();
    &.right {
      left: auto;
      right: 0;
      padding-right: 0;
      padding-left: 120px;
    }
    .limit-theme {
      height: 15px;
      line-height: 15px;
      font-size: 12px;
      font-weight: 700;
      border-bottom: 2px solid $mainColor;
    }
    .limit-title {
      margin-top: 10px;
      height: 15px;
      line-height: 15px;
      font-size: 14px;
      font-weight: 700;
    }
    .limit-date {
      height: 12px;
      line-height: 12px;
      font-size: 12px;
      color: #ccc;
    }
    .limit-new-price {
      margin-top: 10px;
      font-size: 16px;
      color: $mainColor;
    }
    .limit-old-price {
      height: 15px;
      line-height: 15px;
      font-size: 12px;
      color: #ccc;
      text-decoration: line-through;
    }
  }
  .shop-limit-img {
  	position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 100%;
    background: #ccc;
    &.left {
      right: auto;
      left: 0;
    }
  }
}  
</style>
