<template>
  <div class="app-goods-supertype">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">品类</span>
      <span slot="right" class="icon icon-cart" @click="toCart">购物车</span>
    </app-header>
    <div class="ags-content">
      <tabs-goods-supertype :goods-supertype-list="goodsSupertypeList"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import TabsGoodsSupertype from '@/components/TabsGoodsSupertype'
import axios from 'axios'

export default {
  name: 'appGoodsSupertype',
  components: {
    AppHeader,
    TabsGoodsSupertype
  },
  data () {
    return {
      goodsSupertypeList: {}
    }
  },
  created () {
    this.$_hideAppNav()
    axios.get('static/mocks/goods-type.json').then((res) => {
      this.goodsSupertypeList = res.data
    })
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
.app-goods-supertype {
  position: relative;
  .ags-content {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 48px;
    width: 100%;
    height: 100%;
  }
}
</style>