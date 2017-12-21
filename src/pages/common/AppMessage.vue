<template>
  <div class="app-essage">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back"></span>
      <span slot="title">消息中心</span>
      <span slot="right" class="icon icon-search"></span>
    </app-header>
  </div>
</template>

<script>
import appHeader from '@/components/appHeader'
import { mapActions } from 'vuex'
export default {
  name: 'appMessage',
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
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-message {

}
</style>
