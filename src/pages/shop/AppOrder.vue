<template>
  <div class="app-order">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">订单支付</span>
      <span slot="right"></span>
    </app-header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
export default {
  name: 'appOrder',
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
@import "../../assets/scss/md";
.app-order {

}
</style>
