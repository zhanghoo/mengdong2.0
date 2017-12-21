<template>
  <div class="app-goods-supertype">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">品类</span>
      <span slot="right" class="icon icon-cart" @click="toCart">购物车</span>
    </app-header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import appHeader from '@/components/appHeader'
export default {
  name: 'appGoodsSupertype',
  components: {
    appHeader
  },
  created () {
    this.$_hideAppNav()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
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
.goods-supertype {

}
</style>
