<template>
  <div class="app-checkbox">
    <span class="ac-check" :class="{'on': theCheckFlag}" @click="click"></span>
  </div>
</template>

<script>
export default {
  name: 'appCheckbox',
  data () {
    return {
      theCheckFlag: false
    }
  },
  methods: {
    click () {
      this.theCheckFlag = !this.theCheckFlag
      return this.theCheckFlag
    }
  }
}
</script>

<style lang="scss">
.app-checkbox {
  .ac-check {
    display: block;
    width: 10px;
    height: 10px;
    border: 2px solid rgba(255, 212, 13, 0.68);
    border-radius: 100%;
    &.on {
      border: 3px solid rgb(255, 212, 13);
    }
  }
}
</style>