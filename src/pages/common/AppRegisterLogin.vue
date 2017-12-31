<template>
  <div class="app-register-login">
    <div class="arl-bg"><img class="arl-img" src="static/images/logreg.jpg"></div>
    <div class="arl-wrap">
      <p class="arl-title">嘿！就剩你了，快上车！</p>
      <a href="javascript:;" class="btn btn-main btn-login" @click="toLogin">登录</a>
      <a href="javascript:;" class="btn btn-default btn-register" @click="toRegister">注册</a>
      <div class="al-third-login">
        <app-third-login/>
      </div>
    </div>
  </div>
</template>

<script>
import AppThirdLogin from '@/components/AppThirdLogin'
import { mapActions } from 'vuex'
export default {
  name: 'appRegisterLogin',
  components: {
    AppThirdLogin
  },
  created () {
    this.$_hideAppNav()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
    }),
    toLogin () {
      this.$router.push('login')
    },
    toRegister () {
      this.$router.push('register')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-register-login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: $zIndexPage;
  background: $bgColor;
  .arl-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .arl-img {
      width: 100%;
      height: 100%;
    }
  }
  .arl-wrap {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 81%;
    width: 100%;
    height: 100%;
    .arl-title {
      position: relative;
      top: 0;
      left: 0;
      margin: 10px 0;
      width: 100%;
      height: 20px;
      line-height: 20px;
      color: #fff;
      text-align: center;
    }
    .btn-login,
    .btn-register {
      position: relative;
      margin: 10px 23% 0;
      width: 54%;
      height: 40px;
      line-height: 40px;
    }
    .al-third-login {
      position: relative;
      margin-top: 60px;
    }
  }
}
</style>
