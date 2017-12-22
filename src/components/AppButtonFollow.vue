<template>
  <div class="app-follow-button">
    <span class="app-follow-btn-add" v-show="!isFriendFlag" @click.stop="add">加为宠伴</span>
    <span class="app-follow-btn-cancel" v-show="isFriendFlag" @click.stop="cancel">我的宠伴</span>
  </div>
</template>

<script>
export default {
  name: 'appButtonFollow',
  props: {
    isFriend: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isFriendFlag: false
    }
  },
  created () {
    this.isFriendFlag = this.isFriend
  },
  methods: {
    add () {
      this.isFriendFlag = true
    },
    cancel () {
      this.isFriendFlag = false
    }
  }
}
</script>

<style lang="scss">
.app-follow-button {
  position: relative;
  width: 76px;
  height: 26px;
  .app-follow-btn-add,
  .app-follow-btn-cancel {
    position: absolute;
    display: block;
    width: 76px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    font-size: 14px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: #ccc;
      color: #fff;
    }
  }
  .app-follow-btn-cancel {
    border: none;
    background: #eee;
    color: #666;
    &:hover {
      &:after {
        content: '取消宠伴';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 76px;
        height: 26px;
        line-height: 26px;
        text-align: center;
        font-size: 14px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        color: #333;
      }
    }
  }
}
</style>