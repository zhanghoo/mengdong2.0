<template>
  <div class="app-goods">
    <app-header :is-transparent="true">
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">个性印花纯棉小T</span>
      <span slot="right" class="icon icon-back">分享</span>
    </app-header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
export default {
  name: 'appGoods',
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
.app-goods {

}
</style>
