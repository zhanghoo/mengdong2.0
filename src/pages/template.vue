<template>
  <div class=""></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: '',
  created () {
    this.$_hideAppNav()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav',
      $_showAppNav: 'showAppNav'
    })
  }
}
</script>

<style lang="scss">

</style>