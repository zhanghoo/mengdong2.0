<template>
  <div class="num-control">
    <span @click="decrease">-</span>
    <span>{{theGoodsNum}}</span>
    <span @click="increase">+</span>
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
      this.theGoodsNum++
    },
    decrease () {
      --this.theGoodsNum
      this.theGoodsNum = this.theGoodsNum > 0 ? this.theGoodsNum : 1
    }
  }
}
</script>

<style lang="scss">

</style>