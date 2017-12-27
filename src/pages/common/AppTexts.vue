<template>
  <div class="app-texts">
    <app-header :is-transparent="isTransparent">
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">如果我是一个人，或许会写一封诗意盎然的告别信，然后潇洒地离开</span>
      <span slot="right"></span>
    </app-header>
    <swiper class="texts-swiper" :options="textsSwiperOption" ref="textsSwiper">
      <swiper-slide>
        <div class="texts-cover"></div>
        <div class="texts-box">
        <h1 class="texts-title">{{blog.title}}</h1>
        <p class="texts-author"><span class="name">雅一</span></p>
        <div class="texts-content">如果转换成人类的语言，这就是一封告别信。<br><br>如今，我俯卧在你准备的“豪宅”里，顺势跳上你瘦瘦的肩头。时常听你跟人说起，你我是如何气味相投，其实我用这样的方法跳过百余人的肩头，只有你把我带回了家，并认定这是我们的缘分，真是善良而又愚笨的人类。<br><br><img><br><br>我今年九岁，用你们人类的年龄计算，已是耄耋之年。<br><br>最近时常忆起往昔。三岁那年，我交了第一个女朋友，我跟她出去逛了几天，你发现我不在了，慌乱地寻找着我。几天后，我若无其事地带着女朋友回家，你并没有对我们发火，而是拿出来很少给我吃的海鲜鱼罐头招待她。说真的，那一刻我并没有感动，我真想上去挠你，真是要面子呀，平时舍不得给我吃，现在又来充大方。<br><br><img><br><br>后来的后来，我当了爸爸，女朋友把猫崽子们生到了院子里。你把崽子们移到屋内，却被它们的妈妈叼到院子里，几个回合之后，你放弃了。<br><br>崽子们渐渐大了，有一天与它们的妈妈一起消失在院子里，你有些伤心，那一刻我也很伤心，其实，它们想让我一起走，但是我拒绝了，因为比起它们，我觉得或许你更需要我。<br><br>你变得越来越好，开始有男人追，而我也不像小伙子一般精壮，再后来，我开始便秘，有几次甚至拉在了你的床上，你对男朋友尴尬地笑，我看到你佯装生气，还是第一时间带我去医院。<br><br><img><br><br>你们人类常说，如果一个人愿意为你花时间，就证明他爱你，所以，我想，你一定是爱上我了，你这愚蠢的人类。人类常说，我们猫是最势力与精明的动物。或许真的是吧，有时，我很想去找我的家人，可是我突然意识到我的家人不就是你吗？于是，我把伸出窗户的爪子又收了回来，然后踱到你的身边，蜷卧在旁。<br><br>今夜，我有一种睡着永不能再醒来的预感。突然又很羡慕你们人类，如果我是一个人，或许会写一封诗意盎然的告别信，然后潇洒地离开。但是我只是一只猫。我只能用我的呼噜声与你告别。我希望还有力气站起来，走到你的旁边，然后挠你一下当作与你这个笨蛋的告别。<br><br><img><br><br>可是，我现在连翻身都难。所以，别了，我的主人。</div>
        <p class="texts-count">
          <span class="icon icon-collection"><i class="num"></i></span>
          <span class="icon icon-share"><i class="num"></i></span>
        </p>
        <div class="texts-about">
          <h2 class="texts-title-s">作者</h2>
          <div class="text-about-content">
            <div class="avatar"></div>
            <div class="intro">
              <p class="name">雅一</p>
              <p class="tags">萌懂常驻作家</p>
            </div>
            <div class="follow">
              <app-button-follow :isFriend="false"/>
            </div>
          </div>
        </div>
        <div class="texts-articles-list" v-if="textsType === 0">
          <h2 class="texts-title-s">她的文章</h2>
          <ul class="texts-articles-wrap">
            <li class="texts-articles-item">
              <div class="avatar"></div>
              <div class="content">
                <div class="title">在每天把蝴蝶结绑在你尾巴上的人和每天晚上对着我家窗户唱情歌的仰慕者之间，你选择了后者。</div>
                <p class="info">
                  <span class="date">9月16日</span>
                  <span class="count">
                    <i class="icon icon-collection">86</i>
                    <i class="icon icon-share">86</i>
                  </span>
                </p>
              </div>
            </li>
            <li class="texts-articles-item">
              <div class="avatar"></div>
              <div class="content">
                <div class="title">不知道你在凌晨三点和星星说话的时候，会不会把我记起。</div>
                <p class="info">
                  <span class="date">8月26日</span>
                  <span class="count">
                    <i class="icon icon-collection">360</i>
                    <i class="icon icon-share">86</i>
                  </span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="texts-images-list" v-else-if="textsType === 1">
          <h2 class="texts-title-s">她的图片</h2>
        </div>
        <div class="texts-videos-list" v-else-if="textsType === 2">
          <h2 class="texts-title-s">她的视频</h2>
        </div>
        <div class="texts-empty" v-else>
          暂无其他动态，去看看其他人的吧 :D
        </div>
        <div class="texts-comments-list">
            <h2 class="texts-title-s">评论</h2>
            <ul class="texts-comments-wrap">
              <li class="texts-comments-item">
                <div class="avatar"></div>
                <div class="content">
                  <p class="info">
                    <span class="name">暴脾气的小明</span>
                    <span class="date">07/09/16</span>
                  </p>
                  <div class="text">我只想告诉你，这个世界上有快乐的流浪汉，也有不快乐的大富翁，以前一直以为，你圆圆的眼睛盯着我看的时候，要的只是牛奶，面包，现在才明白，你经常在我被窝里哼唱的那首歌，歌名是自由。</div>
                  <p class="count">
                    <span class="icon icon-comment"></span>
                    <span class="icon icon-thumbup"></span>
                  </p>
                </div>
              </li>
              <li class="texts-comments-item">
                <div class="avatar"></div>
                <div class="content">
                  <p class="info">
                    <span class="name">秋茗</span>
                    <span class="date">07/09/16</span>
                  </p>
                  <div class="text">对了，你还会有一群可爱的像你又想他的小家伙。</div>
                  <p class="count">
                    <span class="icon icon-comment"></span>
                    <span class="icon icon-thumbup"></span>
                  </p>
                </div>
              </li>
            </ul>
        </div>
      </div>
      </swiper-slide>
    </swiper>
    <div class="texts-footer">
      <input class="input" type="text" placeholder="说点什么……">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppButtonFollow from '@/components/AppButtonFollow'
import axios from 'axios'
export default {
  name: 'appTexts',
  components: {
    AppHeader,
    AppButtonFollow
  },
  data () {
    const self = this
    return {
      blog: '',
      textsType: 3,
      isTransparent: true,
      textsSwiperOption: {
        /* eslint-disable */
        // scrollbar: {
        //   el: '.swiper-friends-scrollbar',
        //   hide: true
        // },
        on: {
          touchMove: function() {
            if (this.translate <= -48 && self.isTransparent) {
              self.isTransparent = false
            } else if (this.translate > -48 && !self.isTransparent) {
              self.isTransparent = true
            }
          }
        }
        /* eslint-enable */
      }
    }
  },
  computed: {
    textsSwiper () {
      return this.$refs.textsSwiper.swiper
    }
  },
  created () {
    this.$_hideAppNav()
    axios.get('static/mocks/texts-blog.json').then((res) => {
      this.blog = res.data.blog
      this.textsType = this.blog.type
    })
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav'
    }),
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-texts {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $slideBgColor;
  z-index: $zIndexPage;
  .texts-swiper {
    padding-bottom: 48px;
    width: 100%;
    height: 100%;
    .texts-cover {
      padding-top: 70%;
      width: 100%;
      height: 0;
      overflow: hidden;
    }
    .texts-box {
      padding: 20px;
      background: $bgColor;
      .texts-title {
        margin-bottom: 20px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
      }
      .texts-author {
        font-size: 14px;
        color: #aaa;
      }
      .texts-content {
        margin-top: 10px;
        line-height: 26px;
        color: #333;
        font-size: 14px;
        img {
          padding-top: 60%;
          width: 100%;
          height: 0;
          background: #ccc;
        }
      }
      .texts-count {
        @include centerH();
        .icon {
          margin: 30px 60px;
          width: 30px;
          height: 30px;
        }
      }
      .texts-about {
        margin-bottom: 38px;
        .text-about-content {
          display: flex;
          padding: 15px 0;
          .avatar {
            width: 30px;
            height: 30px;
            background: #ccc;
            border-radius: 100%;
          }
          .intro {
            flex: 1;
            padding: 0 10px;
            .name {
              font-size: 16px;
              height: 40px;
              line-height: 40px;
            }
            .tags {
              font-size: 14px;
              color: #ccc;
            }
          }
        }
      }
      .texts-articles-list {
        margin-bottom: 38px;
        .texts-articles-wrap {
          .texts-articles-item {
            display: flex;
            padding: 10px 0;
            & + .texts-articles-item {
              border-top: 1px solid #eee;
            }
            .avatar {
              width: 80px;
              height: 80px;
              background: #ccc;
              .img {
                width: 100%;
                height: 100%;
              }
            }
            .content {
              position: relative;
              flex: 1;
              padding-left: 10px;
              .title {
                font-size: 14px;
                line-height: 20px;
              }
              .info {
                position: absolute;
                display: flex;
                left: 0;
                bottom: 0;
                padding: 0 10px;
                width: 100%;
                justify-content: space-between;
                font-size: 12px;
                color: #ccc;
              }
            }
          }
        }
      }
      .texts-comments-list {
        margin-bottom: 38px;
        .texts-comments-wrap {
          .texts-comments-item {
            display: flex;
            padding: 10px 0;
            & + .texts-comments-item {
              border-top: 1px solid #eee;
            }
            .avatar {
              width: 28px;
              height: 28px;
              background: #ccc;
              border-radius: 100%;
              .img {
                width: 100%;
                height: 100%;
              }
            }
            .content {
              position: relative;
              flex: 1;
              padding-left: 10px;
              .info {
                display: flex;
                height: 28px;
                line-height: 28px;
                width: 100%;
                justify-content: space-between;
                font-size: 12px;
                color: #ccc;
              }
              .text {
                font-size: 14px;
                line-height: 15px;
              }
              .count {
                margin-top: 15px;
                text-align: right;
              }
            }
          }
        }
      }
      .texts-empty {
        padding-bottom: 38px;
        text-align: center;
        font-size: 14px;
        color: #ccc;
      }
      .texts-title-s {
        width: 70px;
        height: 25px;
        line-height: 25px;
        border-bottom: 2px solid #333;
        white-space: pre;
      }
    }
  }
  .texts-footer {
    display: flex;
    position: fixed;
    padding: 8px 12px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    background: $bgColor;
    z-index: $zIndexNav;
    .input {
      flex: 1;
      margin-right: 10px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #f7f7f7;
      background-image: none;
      border: 1px solid #f3f3f3;
      border-radius: 4px;
      box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      outline: none;
    }
  }
}
</style>
