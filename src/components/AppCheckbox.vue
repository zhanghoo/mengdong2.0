<template>
  <div class="app-checkbox" @click="click">
    <span class="ac-check" :class="{'on': theCheckFlag}"></span>
    <span v-if="selectAll" class="ac-check-all">全选</span>
  </div>
</template>

<script>
export default {
  name: 'appCheckbox',
  props: {
    selectAll: {
      type: Boolean,
      default: false
    },
    checkAll: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      theCheckFlag: false
    }
  },
  methods: {
    click () {
      this.theCheckFlag = !this.theCheckFlag
      if (this.selectAll) {
        console.log('click all')
      } else {
        this.theCheckFlag ? this.$emit('checked') : this.$emit('unchecked')
      }
      return this.theCheckFlag
    }
  }
}
</script>

<style lang="scss">
.app-checkbox {
  display: flex;
  .ac-check {
    display: block;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(255, 212, 13, 0.68);
    border-radius: 100%;
    &.on {
      border: 5px solid rgb(255, 212, 13);
    }
  }
  .ac-check-all {
    margin-left: 10px;
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    color: #ccc;
  }
}
</style>