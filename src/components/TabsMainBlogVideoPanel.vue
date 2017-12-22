<template>
  <div class="blog-video-panel">
    <div class="bvp-author">
      <div class="bvp-avatar"></div>
      <div class="bvp-user">
        <p class="bvp-name"><span class="text">咪咪酱</span></p>
        <p class="bvp-tag"><span class="text">萌宠奴</span></p>
      </div>
      <div class="bvp-follow">
        <app-button-follow :isFriend="false"/>
      </div>
    </div>
    <div class="bvp-content">我想做的，就是看着它们慢慢得一点点长大。</div>
    <div class="bvp-cover"></div>
    <div class="bvp-footer">
      <span class="bvp-date">今天</span>
      <p class="bvp-count">
        <span class="icon icon-collection"><i class="num"></i></span>
        <span class="icon icon-share"><i class="num"></i></span>
      </p>
    </div>
  </div>
</template>

<script>
import AppButtonFollow from '@/components/AppButtonFollow'

export default {
  name: 'tabsMainBlogVideoPanel',
  components: {
    AppButtonFollow
  },
  props: {
    video: Object
  },
  data () {
    return {
      isFriend: true
    }
  },
  methods: {
    add () {
      this.isFriend = true
    },
    cancel () {
      this.isFriend = false
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.blog-video-panel {
  position: relative;
  padding: 0px 10px 15px;
  margin-top: 10px;
  background: #fff;
  .bvp-author {
    height: 60px;
    @include centerH();
    .bvp-avatar {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #ccc;
      overflow: hidden;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .bvp-user {
      flex: 1;
      padding-left: 8px;
      text-align: left;
      .bvp-name {
        height: 30px;
        line-height: 30px;
        font-size: 16px;
      }
      .bvp-tag {
        height: 20px;
        font-size: 14px;
        color: #ccc;
      }
    }
    .bvp-follow {
      position: relative;
      width: 80px;
      height: 60px;
      @include centerH();
    }
  }
  .bvp-content {
    margin: 0 0 15px;
  }
  .bvp-cover {
    padding-top: 60%;
    width: 100%;
    height: 0;
    background: #eee;
    margin: 0 0 15px;
  }
  .bvp-footer {
    display: flex;
    justify-content: space-between;
    color: #999;
  }
}	
</style>
