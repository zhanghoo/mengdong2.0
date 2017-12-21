<template>
  <div class="app-third-login">
    <p class="atl-title-line">
      <span class="atl-line"></span>
      <span class="atl-text">或者</span>
      <span class="atl-line"></span>
    </p>
    <p class="atl-third-login">
      <span class="icon icon-qq"></span>
      <span class="icon icon-wechat"></span>
    </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'appThirdLogin'
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-third-login {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 23%;
  width: 100%;
  height: 14%;
  .atl-title-line {
    display: flex;
    color: #fff;
    .atl-text {
      width: 50px;
      height: 20px;
      line-height: 10px;
      text-align: center;
    }
    .atl-line {
      display: block;
      flex: 1;
      height: 0;
      overflow: hidden;
      border-top: 1px solid #fff;
    }
  }
  .atl-third-login {
    display: flex;
    padding: 20px;
    justify-content: space-between;
  }
}
</style>