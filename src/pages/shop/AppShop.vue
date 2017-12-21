<template>
  <div class="app-shop">
    <app-header>
      <span slot="left"></span>
      <span slot="title">遛</span>
      <template slot="right">
        <span class="icon icon-type" @click="toGoodsSuperType">发现</span>
        <span class="icon icon-cart" @click="toCart">购物车</span>
      </template>
    </app-header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import appHeader from '@/components/appHeader'
export default {
  name: 'appShop',
  components: {
    appHeader
  },
  created () {
    this.$_showAppNav()
  },
  methods: {
    ...mapActions({
      $_showAppNav: 'showAppNav'
    }),
    toGoodsSuperType () {
      this.$router.push('goodssupertype')
    },
    toCart () {
      this.$router.push('cart')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-shop {
}
</style>
