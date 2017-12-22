<template>
  <div class="app-friend">
    <app-header>
      <span slot="left"></span>
      <span slot="title">伴</span>
      <span slot="right" class="icon icon-message" @click="showMessage">消息</span>
    </app-header>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
export default {
  name: 'appFriend',
  components: {
    AppHeader
  },
  created () {
    this.$_showAppNav()
  },
  methods: {
    ...mapActions({
      $_showAppNav: 'showAppNav'
    }),
    showMessage () {
      this.$router.push('message')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-friend {
}
</style>
