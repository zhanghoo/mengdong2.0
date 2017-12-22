<template>
  <div class="blog-article-panel">
    <p class="article-text-line">ONE STORY</p>
    <h2 class="article-title">{{article.title}}</h2>
    <p class="article-name"><span>{{article.author}}</span></p>
    <div class="article-cover"></div>
    <div class="article-contnet">{{article.content}}</div>
    <div class="article-footer">
      <span class="date">{{article.date}}</span>
      <p class="count">
        <span class="icon icon-collection"><i class="num">{{article.collection}}</i></span>
        <span class="icon icon-share"><i class="num">{{article.share}}</i></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabsMainBlogArticlePanel',
  props: {
    article: Object
  }
}
</script>

<style lang="scss">
.blog-article-panel {
  position: relative;
  padding: 0px 10px 15px;
  margin-top: 10px;
  background: #fff;
  .article-text-line {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #ddd;
    white-space: pre;
    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 20px;
      left: -20px;
      width: 15px;
      height: 0;
      border-top: 1px solid #ddd;
      overflow: hidden;
    }
    &:after {
      left: auto;
      right: -20px;
    }
  }
  .article-title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
  }
  .article-name {
    margin: 15px 0 10px;
    font-size: 14px;
    color: #999;
  }
  .article-cover {
    padding-top: 50%;
    width: 100%;
    height: 0;
    background: #eee;
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .article-contnet {
    margin: 10px 0 15px;
    color: #999;
  }
  .article-footer {
    display: flex;
    justify-content: space-between;
    color: #999;
  }
}	
</style>
