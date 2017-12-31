<template>
  <div class="app-login">
    <div class="al-bg"><img class="al-img" src="static/images/login.jpg"></div>
    <div class="al-wrap">
      <span class="icon icon-back" @click="back">返回</span>
      <div class="input-block">
        <span class="icon-phone-pack"><i class="icon icon-phone">手机号</i></span>
        <input ref="inputPhone" 
               class="input" 
               type="text" 
               placeholder="手机号" 
               @keyup="keyupPhone($event)">
        <span class="icon-close-pack" 
              :class="{'empty': !emptyPhone0}" 
              @click="emptyPhone()">
          <i class="icon icon-close">清空</i>
        </span>
      </div>
      <div class="input-block">
        <span class="icon-password-pack"><i class="icon icon-password">密码</i></span>
        <input ref="inputPassword" 
               class="input" 
               type="password" 
               placeholder="密码" 
               @keyup="keyupPassword($event)">
        <span class="icon-close-pack" 
              :class="{'empty': !emptyPassword0}" 
              @click="emptyPassword()">
          <i class="icon icon-close">清空</i>
        </span>
      </div>
      <a href="javascript:;" class="btn btn-main btn-login" @click="login">登录</a>
      <a href="javascript:;" class="btn btn-default btn-forget">忘记密码？</a>
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
  name: 'appLogin',
  components: {
    AppThirdLogin
  },
  data () {
    return {
      emptyPhoneFlag: true,
      emptyPasswordFlag: true
    }
  },
  computed: {
    emptyPhone0 () {
      return this.emptyPhoneFlag
    },
    emptyPassword0 () {
      return this.emptyPasswordFlag
    }
  },
  created () {
    this.$_hideAppNav()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
    }),
    back () {
      this.$router.go(-1)
    },
    login () {
      this.$router.push('index')
    },
    emptyPhone () {
      const input = this.$refs.inputPhone
      input.value = ''
      input.focus()
      this.emptyPhoneFlag = 1
    },
    emptyPassword () {
      const input = this.$refs.inputPassword
      input.value = ''
      input.focus()
      this.emptyPasswordFlag = 1
    },
    keyupPhone (e) {
      const tag = e.target
      const length = tag.value.length
      this.emptyPhoneFlag = length === 0 ? 1 : 0
    },
    keyupPassword (e) {
      const tag = e.target
      const length = tag.value.length
      this.emptyPasswordFlag = length === 0 ? 1 : 0
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .al-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #5759d0;
    .al-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
  }
  .al-wrap {
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 90px;
    width: 100%;
    height: 100%;
    .icon-back {
      position: absolute;
      top: 30px;
      left: 20px;
    }
    .input-block {
      display: flex;
      position: relative;
      margin: 0 15% 10px;
      width: 70%;
      height: 40px;
      line-height: 40px;
      .icon-phone-pack,
      .icon-password-pack {
        @include centerH();
        width: 40px;
      }
      .input {
        padding-right: 28px;
        width: 100%;
        height: 100%;
        outline: none;
        border: none;
        border-bottom: 1px solid #eee;
        background: transparent;
        color: #eee;
      }
      @include placeholder {
        color: #eee;
      }
      .icon-close-pack {
        @include centerH();
        visibility: hidden;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -10px;
        &.empty {
          visibility: visible;
        }
      }
    }
    .btn-login, .btn-forget{
      margin: 10px 23% 0;
      width: 54%;
      height: 40px;
      line-height: 40px;
    }
    .btn-forget {
      border: none;
      font-size: 13px;
      width: 24%;
      margin: 10px 38% 0;
    }
    .al-third-login {
      position: relative;
      margin-top: 160px;
    }
  }
}
</style>
