<template>
  <div class="app-index">
    <app-header>
      <span slot="left"></span>
      <span slot="title">窝</span>
      <span slot="right" class="icon icon-search" @click="show">搜索</span>
    </app-header>
    <div class="ai-content">
      <tabs-main-blog :app-list="appList"/>
    </div>
    <div class="ai-search-panel" v-show="showFlag">
      <div class="ai-header">
        <span class="ai-icon-box"><i class="icon icon-search"></i></span>
        <input class="ai-input" type="text" />
        <a class="ai-cancel" href="javascript:;" @click="hide">取消</a>
      </div>
      <div class="ai-recommend">
        <div>
          <p class="ai-title">今日推荐</p>
          <div class="ai-content2">
            猫是不恋家的，最后总会决绝离开<br>
            众人皆睡我独行，黑夜是猫不变的追寻<br>
            经历整个人世冷暖，彼此命运交叠成无数曲折<br>
            那些猫咪喊着：好暗，好暗<br>
            生的序幕由他人打开，但舞台上的热泪盈眶需由自己奏响<br>
            要永远炽烈燃放如同烟火<br>
            四处都那么暗，可你为什么能一直明亮<br>
            活着才能思考为什么而活<br>
            你不该如此留恋的<br>
            用琥珀色的眼睛窥探着你我的过往<br>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import TabsMainBlog from '@/components/TabsMainBlog'
import axios from 'axios'
export default {
  name: 'appIndex',
  components: {
    AppHeader,
    TabsMainBlog
  },
  data () {
    return {
      appList: {},
      showFlag: false
    }
  },
  created () {
    this.$_showAppNav()
    axios.get('static/mocks/texts-main.json').then((res) => {
      this.appList = res.data
    })
  },
  methods: {
    ...mapActions({
      $_showAppNav: 'showAppNav'
    }),
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-index {
  .ai-content {
    position: fixed;
    top: 0;
    left: 0;
    padding: 48px 0 58px 0;
    width: 100%;
    height: 100%;
  }
  .ai-search-panel {
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 10px;
    width: 100%;
    height: 100%;
    background: $bgColor;
    z-index: $zIndexOperation;
    .ai-header {
      display: flex;
      width: 100%;
      height: 38px;
      line-height: 38px;
      border-bottom: 1px solid #ccc;
      .ai-icon-box {
        @include centerH();
        width: 10%;
      }
      .ai-input {
        flex: 1;
        outline: none;
      }
      .ai-cancel {
        width: 10%;
      }
    }
    .ai-recommend {
      position: absolute;
      top: 0;
      left: 0;
      padding: 38px 0;
      width: 100%;
      height: 100%;
      @include centerH();
      z-index: -1;
      text-align: center;
      .ai-title {
        margin: 0 auto;
        width: 40%;
        height: 38px;
        line-height: 38px;
        color: #ddd;
        border-bottom: 1px solid #ddd;
      }
      .ai-content2 {
        margin-top: 30px;
        color: $fontColor;
        line-height: 38px;
      }
    }
  }
}
</style>
