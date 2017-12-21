<template>
  <div class=""></div>
</template>

<script>
mport { mapActions } from 'vuex'
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