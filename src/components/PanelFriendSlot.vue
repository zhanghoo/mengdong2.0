<template>
	<div class="friends-slot-panel">
    <div class="friends-slot-header">
      <slot name="header">
        <div class="avatar" @click.shop="clickAvatar"></div>
        <p class="author">
          <span class="name" @click.shop="clickAvatar">{{blog.author}}</span>
          <span class="tag">{{blog.tag}}</span>
        </p>
      </slot>
    </div>
    <div class="friends-slot-content">
      <slot></slot>
    </div>
    <div class="friends-slot-footer">
      <slot name="footer">
        <div class="operation">
          <a href="javascript:;" class="opt-item">
            <span class="icon icon-collection"><i class="num">{{blog.collection}}</i></span>
          </a>
          <a href="javascript:;" class="opt-item">
            <span class="icon icon-comment"><i class="num">{{blog.comment}}</i></span>
          </a>
          <a href="javascript:;" class="opt-item">
            <span class="icon icon-share"><i class="num">{{blog.share}}</i></span>
          </a>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panelFriendSlot',
  props: {
    blog: Object
  },
  methods: {
    clickAvatar () {
      this.$emit('clickAvatar')
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.friends-slot-panel {
  position: relative;
  margin-bottom: 10px;
  background: $bgColor;
  .friends-slot-header {
    position: relative;
    width: 100%;
    height: 60px;
    .avatar {
      position: absolute;
      top: 50%;
      left: 20px;
      margin-top: -19px;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: #ccc;
      overflow: hidden;
      z-index: 20;
      cursor: pointer;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .author {
      position: absolute;
      top: 0;
      left: 0;
      padding-left: 70px;
      width: 100%;
      height: 60px;
      .name {
        display: block;
        width: 100%;
        height: 40px;
        line-height: 50px;
      }
      .tag {
        display: block;
        width: 100%;
        height: 20px;
        line-height: 10px;
        font-size: 13px;
      }
    }
  }
  .friends-slot-footer {
    .operation {
      display:flex;
      .opt-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        text-align: center;
      }
    }
  }
}	
</style>
