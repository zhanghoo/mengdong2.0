<template>
  <div class="app">
    <div class="app-content">
      <router-view v-wechat-title="$route.meta.title"/>
    </div>
    <div v-if="navShowFlag" class="app-nav">
      <div class="app-nav-item">
        <router-link to="/index" class="centerH">
          <div>
            <span class="icon"></span>
            <p class="text">窝</p>
          </div>
        </router-link>
      </div>
      <div class="app-nav-item">
        <router-link to="/friend">
          <div>
            <span class="icon"></span>
            <p class="text">伴</p>
          </div>
        </router-link>
      </div>
      <div class="app-nav-item">
        <a href="javascript:;">
          <span class="add">+</span>
        </a>
      </div>
      <div class="app-nav-item">
        <router-link to="/shop">
          <div>
            <span class="icon"></span>
            <p class="text">遛</p>
          </div>
        </router-link>
      </div>
      <div class="app-nav-item">
        <router-link to="/home">
          <div>
            <span class="icon"></span>
            <p class="text">乖</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    navShowFlag () {
      return this.$store.state.appNavShow
    }
  },
  created () {
    this.$_hideAppNav()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
    })
  }
}
</script>

<style lang="scss">
@import "assets/scss/md";
.app {
  .app-content {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .app-nav {
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 58px;
    z-index: $zIndexNav;
    background: $bgColor;
    .app-nav-item {
      flex: 1;
      text-align: center;
      a {
        position: relative;
        @include centerH();
        height: 58px;
        &.active {
          color: $mainColor;
          .icon {
            background: $mainColor;
          }
        }
        .icon {
          margin: 5px auto;
        }
        .add {
          display: block;
          width: 28px;
          height: 28px;
          line-height: 28px;
          font-size: 28px;
          font-weight: 700;
          border-radius: 50%;
          color: #fff;
          background: $mainColor;
        }
      }
    }
  }
}
</style>
