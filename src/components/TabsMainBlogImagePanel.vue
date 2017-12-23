<template>
  <div class="blog-image-panel">
    <div class="image-cover" @click.shop="clickImage">
      <span class="img-num">+5</span>
    </div>
    <div class="image-author">
      <div class="avatar" @click.shop="clickAvatar"></div>
      <div class="name"><span class="text" @click.shop="clickAvatar">暴走的短腿猫</span></div>
    </div>
    <div class="image-content">他们说，猫是不恋家的，最后会决绝离开。</div>
    <div class="image-footer">
      <span class="date">今天</span>
      <p class="count">
        <span class="icon icon-collection"><i class="num"></i></span>
        <span class="icon icon-share"><i class="num"></i></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsMainBlogImagePanel',
  props: {
    image: Object
  },
  methods: {
    clickImage () {
      this.$emit('clickImage')
    },
    clickAvatar () {
      this.$emit('clickAvatarToUserHome')
    }
  }
}
</script>

<style lang="scss">
.blog-image-panel {
  position: relative;
  padding: 0px 0px 15px;
  margin-top: 10px;
  background: #fff;
  .image-cover {
    padding-top: 60%;
    width: 100%;
    height: 0;
    background: #eee;
    .img {
      width: 100%;
      height: 100%;
    }
    .img-num {
      position: absolute;
      display: block;
      top: 0;
      right: 15px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #e9c00d;
      color: #fff;
    }
  }
  .image-author {
    position: relative;
    height: 60px;
    .avatar {
      position: absolute;
      top: -25px;
      left: 50%;
      margin-left: -25px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #ccc;
      overflow: hidden;
      border: 2px solid #fff;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .name {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #333;
      white-space: pre;
      .text {
        display: inline-block;
        position: relative;
        &:before,
        &:after {
          content: '';
          display: block;
          position: absolute;
          top: 18px;
          left: -20px;
          width: 15px;
          height: 0;
          border-top: 2px solid #333;
          overflow: hidden;
        }
        &:after {
          left: auto;
          right: -20px;
        }
      }
    }
  }
  .image-content {
    padding: 0 10px;
    margin: 10px 0 15px;
    color: #999;
  }
  .image-footer {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    color: #999;
  }
}
</style>
