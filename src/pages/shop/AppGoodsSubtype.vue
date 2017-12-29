<template>
  <div class="app-goods-subtype">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">汪汪潮服</span>
      <span slot="right" class="icon icon-cart" @click="toCart">购物车</span>
    </app-header>
    <div class="agsu-box">
      <tabs-goods-subtype/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import TabsGoodsSubtype from '@/components/TabsGoodsSubtype'

export default {
  name: 'appGoodsSubtype',
  components: {
    AppHeader,
    TabsGoodsSubtype
  },
  created () {
    this.$_hideAppNav()
    this.$_getAllGoods()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav',
      $_getAllGoods: 'getAllGoods'
    }),
    back () {
      this.$router.go(-1)
    },
    toCart () {
      this.$router.push('cart')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-goods-subtype {
  position: fixed;
  top: 0;
  left: 0;
  padding: 48px 0 58px 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  .agsu-box {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 48px;
    width: 100%;
    height: 100%;
  }
}
</style>
