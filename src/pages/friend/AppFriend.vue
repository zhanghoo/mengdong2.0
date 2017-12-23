<template>
  <div class="app-friend">
    <app-header>
      <span slot="left"></span>
      <span slot="title">伴</span>
      <span slot="right" class="icon icon-message" @click="showMessage">消息</span>
    </app-header>
    <div class="af-content">
      <swiper class="friends-swiper" :options="friendsSwiperOption">
        <swiper-slide>
          <template v-for="blog in blogsList.blogs">
            <panel-friend-article v-if="blog.type == 0" 
                                  :article="blog" 
                                  :key="blog.id"
                                  @clickArticle="clickArticle(blog)"
                                  @clickAvatarToUserHome="clickAvatarToUserHome"/>
            <panel-friend-image v-else-if="blog.type == 1" 
                                :image="blog" 
                                :key="blog.id"
                                @clickImage="clickImage(blog)"
                                @clickAvatarToUserHome="clickAvatarToUserHome"/>
            <panel-friend-video v-else 
                                :video="blog" 
                                :key="blog.id"
                                @clickVideo="clickVideo(blog)"
                                @clickAvatarToUserHome="clickAvatarToUserHome"/>
          </template>
          </swiper-slide>
        </swiper-slide>
        <div class="swiper-scrollbar swiper-friends-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
    <app-dialog-image ref="afImage" :image="selectedImage" @contenIBottom="contenBottom"/>
    <app-dialog-video ref="afVideo" :video="selectedVideo" @contenVBottom="contenBottom"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import PanelFriendArticle from '@/components/PanelFriendArticle'
import PanelFriendImage from '@/components/PanelFriendImage'
import PanelFriendVideo from '@/components/PanelFriendVideo'
import AppDialogImage from '@/components/AppDialogImage'
import AppDialogVideo from '@/components/AppDialogVideo'
import axios from 'axios'

export default {
  name: 'appFriend',
  components: {
    AppHeader,
    PanelFriendArticle,
    PanelFriendImage,
    PanelFriendVideo,
    AppDialogImage,
    AppDialogVideo
  },
  data () {
    return {
      blogsList: {},
      selectedImage: {},
      selectedVideo: {},
      friendsSwiperOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-friends-scrollbar',
          hide: true
        }
        /* eslint-enable */
      }
    }
  },
  created () {
    this.$_showAppNav()
    axios.get('static/mocks/texts-friend.json').then((res) => {
      this.blogsList = res.data
    })
  },
  methods: {
    ...mapActions({
      $_showAppNav: 'showAppNav'
    }),
    showMessage () {
      this.$router.push('message')
    },
    clickArticle (article) {
      this.$router.push('texts')
      // this.selectedArticle = article
      // this.textsType = 0
      // this.$refs.article.show()
    },
    clickImage (image) {
      console.log('click image, do something...')
      console.log('content top')
      this.selectedImage = image
      // this.$emit('top')
      this.$refs.afImage.show()
    },
    clickVideo (video) {
      console.log('click video, do something...')
      console.log('content top')
      this.selectedVideo = video
      // this.$emit('top')
      this.$refs.afVideo.show()
    },
    clickAvatarToUserHome () {
      this.$router.push('userhome')
    },
    contenBottom () {
      console.log('content bottom')
      // this.$emit('bottom')
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-friend {
  .af-content {
    position: fixed;
    top: 0;
    left: 0;
    padding: 48px 0 58px 0;
    width: 100%;
    height: 100%;
    background: $slideBgColor;
    .friends-swiper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
