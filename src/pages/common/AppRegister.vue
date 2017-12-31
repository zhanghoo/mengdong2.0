<template>
  <div class="app-register">
    <div class="ar-bg"><img class="ar-img" src="static/images/register.jpg"></div>
    <div class="ar-wrap">
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
               placeholder="设置登录密码，不少于6位" 
               @keyup="keyupPassword($event)">
        <span class="icon-close-pack" 
              :class="{'empty': !emptyPassword0}" 
              @click="emptyPassword()">
          <i class="icon icon-close">清空</i>
        </span>
      </div>
      <div class="input-block">
        <span class="icon-verify-pack"><i class="icon icon-verify">验证码</i></span>
        <input ref="inputVerify" 
               class="input verify" 
               type="password" 
               placeholder="输入验证码" 
               @keyup="keyupVerify($event)">
        <span class="icon-close-pack verify" 
              :class="{'empty': !emptyVerify0}" 
              @click="emptyVerify()">
          <i class="icon icon-close">清空</i>
        </span>
        <a href="javascript:;" class="btn btn-sm btn-get-verify">获取</a>
      </div>
      <a href="javascript:;" class="btn btn-main btn-register">注册</a>
    </div>
    <app-third-login/>
  </div>
</template>

<script>
import AppThirdLogin from '@/components/AppThirdLogin'
import { mapActions } from 'vuex'
export default {
  name: 'appRegister',
  components: {
    AppThirdLogin
  },
  data () {
    return {
      emptyPhoneFlag: true,
      emptyPasswordFlag: true,
      emptyVerifyFlag: true
    }
  },
  computed: {
    emptyPhone0 () {
      return this.emptyPhoneFlag
    },
    emptyPassword0 () {
      return this.emptyPasswordFlag
    },
    emptyVerify0 () {
      return this.emptyVerifyFlag
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
    emptyVerify () {
      const input = this.$refs.inputVerify
      input.value = ''
      input.focus()
      this.emptyVerifyFlag = 1
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
    },
    keyupVerify (e) {
      const tag = e.target
      const length = tag.value.length
      this.emptyVerifyFlag = length === 0 ? 1 : 0
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-register {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  .ar-bg {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: #d0545f;
    .ar-img {
      position: relative;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
  }
  .ar-wrap {
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
      .icon-password-pack,
      .icon-verify-pack {
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
        &.verify {
          padding-right: 108px;
        }
      }
      @include placeholder {
        color: #eee;
      }
      .icon-close-pack {
        @include centerH();
        display: none;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -10px;
        &.verify {
          right: 80px;
        }
        &.empty {
          display: flex;
        }
      }
      .btn-get-verify {
        position: absolute;
        top: 10px;
        right: 0;
        width: 70px
      }
    }
    .btn-register{
      margin: 10px 23% 0;
      width: 54%;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
