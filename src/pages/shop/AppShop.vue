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
    <div class="as-content">
       <tabs-main-goods/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppShop from '@/components/AppShop'
export default {
  name: 'appShop',
  components: {
    AppHeader,
    AppShop
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
  .as-content {
    position: absolute;
    top: 0;
    left: 0;
    padding 48px 0 58px 0;
    width: 100%;
    height: 100%;
  }
}
</style>
