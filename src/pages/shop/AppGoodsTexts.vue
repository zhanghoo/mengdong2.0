<template>
  <div class="goods-texts">
    <app-header :is-transparent="true">
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">如果我是一个人，或许会写一封诗意盎然的告别信，然后潇洒地离开</span>
      <span slot="right"></span>
    </app-header>
    <div class="gt">商品清单</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'

export default {
  name: 'appGoodsTexts',
  components: {
    AppHeader
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
    }
  }
}
</script>

<style lang="scss">
.goods-texts {
  
}
</style>