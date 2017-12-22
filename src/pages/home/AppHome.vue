<template>
  <div class="app-home">
    <app-header :is-transparent="true">
      <span slot="left"></span>
      <span slot="title">小菜菜</span>
      <span slot="right" class="icon icon-set">设置</span>
    </app-header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
export default {
  name: 'appHome',
  components: {
    AppHeader
  },
  created () {
    this.$_showAppNav()
  },
  methods: {
    ...mapActions({
      $_showAppNav: 'showAppNav'
    })
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-home {
}
</style>
