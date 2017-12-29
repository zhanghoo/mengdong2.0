<template>
  <div class="num-control">
    <span class="nc-btn-decrease" @click="decrease">-</span>
    <div class="nc-input-box">
      <span class="nc-input-num">{{goodsNum}}</span>
      <input v-model="theGoodsNum" class="nc-input-input" type="number"/>
    </div>
    <span class="nc-btn-increase" @click="increase">+</span>
  </div>
</template>

<script>
export default {
  name: 'appNumControl',
  props: {
    goodsNum: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      theGoodsNum: this.goodsNum
    }
  },
  methods: {
    increase () {
      // this.theGoodsNum++
      this.$emit('addToCart')
    },
    decrease () {
      // --this.theGoodsNum
      // this.theGoodsNum = this.theGoodsNum > 0 ? this.theGoodsNum : 1
      this.$emit('cutFromCart')
    }
  }
}
</script>

<style lang="scss">
.num-control {
  position: relative;
  display: flex;
  color: #999;
  .nc-btn-decrease {
    display: block;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 18px;
    border: 1px solid #999;
    border-right: 0;
    border-radius: 6px 0 0 6px;
  }
  .nc-input-box {
    position: relative;
    width: 30px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    border: 1px solid #999;
    border-right: 0;
    border-left: 0;
    .nc-input-num {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .nc-input-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      outline: none;
      color: #ccc;
      &:focus {
        color: #ffd40d;
      }
    }
  }
  .nc-btn-increase {
    display: block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 18px;
    border: 1px solid #999;
    border-left: 0;
    border-radius: 0 6px 6px 0;
  }
}
</style>