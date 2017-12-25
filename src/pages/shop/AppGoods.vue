<template>
  <div class="app-goods">
    <app-header :is-transparent="true">
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">个性印花纯棉小T</span>
      <span slot="right" class="icon icon-back">分享</span>
    </app-header>
    <div class="ago-content">
      <swiper class="goods-swiper" :options="goodsSwiperOption">
        <swiper-slide>
          <div class="ago-images-panel">
            <div class="ago-images-swiper">
              <swiper class="ago-image-swiper" :options="imageSwiperOption">
                <swiper-slide>image 1</swiper-slide>
                <swiper-slide>image 2</swiper-slide>
                <swiper-slide>image 3</swiper-slide>
                <swiper-slide>image 4</swiper-slide>
                <swiper-slide>image 5</swiper-slide>
                <div class="image-swiper-pagination swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </div>
          <div class="ago-choice">
            <h2 class="agoc-title">加绒舒适卫衣</h2>
            <p><span class="agoc-price">120.00</span></p>
            <div class="ago-row">
              <div class="agor-title">颜色</div>
              <div class="agor-choice">
                <ol class="agor-color-list">
                  <li class="agor-color-item" @click="selectColor(0)">
                    <span class="agor-circle" :class="{'on' : selectedColor === 0}"></span>
                  </li>
                  <li class="agor-color-item" @click="selectColor(1)">
                    <span class="agor-circle" :class="{'on' : selectedColor === 1}"></span>
                  </li>
                </ol>
              </div>
            </div>
            <div class="ago-row">
              <div class="agor-title">尺码</div>
              <div class="agor-choice">
                <ol class="agor-size-list">
                  <li class="agor-size-item" @click="selectSize(0)">
                    <span class="agor-rectangle" :class="{'on' : selectedSize === 0}">S</span>
                  </li>
                  <li class="agor-size-item" @click="selectSize(1)">
                    <span class="agor-rectangle" :class="{'on' : selectedSize === 1}">M</span>
                  </li>
                  <li class="agor-size-item" @click="selectSize(2)">
                    <span class="agor-rectangle" :class="{'on' : selectedSize === 2}">L</span>
                  </li>
                  <li class="agor-size-item" @click="selectSize(3)">
                    <span class="agor-rectangle" :class="{'on' : selectedSize === 3}">XL</span>
                  </li>
                </ol>
              </div>
            </div>
            <div class="ago-row">
              <div class="agor-title">数量</div>
              <div class="agor-choice">
                <ol class="agor-num-list">
                  <li class="agor-num-item" @click="decrease">
                    <span class="agor-btn">-</span>
                  </li>
                  <li class="agor-num-item">
                    <span class="agor-input">{{selectedNum}}</span>
                  </li>
                  <li class="agor-num-item">
                    <span class="agor-btn" @click="increase">+</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div class="ago-goods-info">
            <h3 class="ago-info-title">基本信息</h3>
            <div class="ago-info-desc">此款狗狗小礼服，是为狗狗量身定制，布料柔软舒适，而且样式新潮。</div>
          </div>
        </swiper-slide>
        <!-- <div class="swiper-scrollbar swiper-goods-scrollbar" slot="scrollbar"></div> -->
      </swiper>
    </div>
    <div class="ago-footer">
      <div class="ago-icons">
        <span class="icon icon-msg">客服</span>
        <span class="icon icon-msg">店铺</span>
      </div>
      <div class="ago-btns">
        <a href="javascript:;" class="ago-btn-add">加入购物车</a>
        <a href="javascript:;" class="ago-btn-buy">购买</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppHeader from '@/components/AppHeader'
export default {
  name: 'appGoods',
  components: {
    AppHeader
  },
  data () {
    return {
      selectedColor: 0,
      selectedSize: 1,
      selectedNum: 1,
      goodsSwiperOption: {
        /* eslint-disable */
        // scrollbar: {
        //   el: '.swiper-home-scrollbar',
        //   hide: true
        // }
        /* eslint-enable */
      },
      imageSwiperOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 1,
        freeMode: false,
        mousewheel: false,
        autoHeight: false,
        pagination: {
          el: '.image-swiper-pagination'
        }
        /* eslint-enable */
      }
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
    selectColor (index) {
      this.selectedColor = index
    },
    selectSize (index) {
      this.selectedSize = index
    },
    increase () {
      this.selectedNum++
    },
    decrease () {
      this.selectedNum--
      if (this.selectedNum <= 0) {
        this.selectedNum = 1
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-goods {
  position: relative;
  width: 100%;
  height: 100%;
  .ago-content {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 0 48px 0;
    width: 100%;
    height: 100%;
    background: $slideBgColor;
    .goods-swiper {
      width: 100%;
      height: 100%;
      .ago-images-panel {
        position: relative;
        top: 0;
        left: 0;
        padding-top: 100%;
        width: 100%;
        height: 0;
        background: $slideBgColor;
        .ago-images-swiper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          .ago-image-swiper {
            width: 100%;
            height: 100%;
            .swiper-slide {
              width: 100%;
              height: 100%;
              @include centerH();
              background: $bgColor;
            }
            .image-swiper-pagination {
              .swiper-pagination-bullet {
                margin: 0 2px;
                background: $mainColor;
              }
            }
          }
        }
      }
      .ago-choice {
        margin-bottom: 10px;
        padding: 10px;
        background: $bgColor;
        .agoc-title {
          font-size: 16px;
          height: 20px;
          line-height: 20px;
        }
        .agoc-price {
          display: inline-block;
          margin-bottom: 10px;
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          font-weight: 700;
          color: $mainColor;
        }
        .ago-row {
          display: flex;
          height: 35px;
          line-height: 35px;
          font-size: 12px;
          .agor-title {
            width: 38px;
          }
          .agor-choice {
            flex: 1;
            .agor-color-list {
              display: flex;
              .agor-color-item{
                display: flex;
                margin: 0 18px 0 0;
                height: 35px;
                line-height: 35px;
                @include centerH();
                .agor-circle {
                  position: relative;
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  background: #666;
                  border-radius: 100%;
                  &.on {
                    background: #ddd;
                    &:after {
                      content: '';
                      position: absolute;
                      top: -4px;
                      left: -4px;
                      width: 20px;
                      height: 20px;
                      border-radius: 100%;
                      border: 1px solid #ddd;
                      box-sizing: border-box;
                    }
                  }
                }
              }
            }
            .agor-size-list {
              display: flex;
              .agor-size-item {
                display: flex;
                margin: 0 10px 0 0;
                height: 35px;
                line-height: 35px;
                @include centerH();
                .agor-rectangle {
                  display: inline-block;
                  width: 45px;
                  height: 20px;
                  line-height: 20px;
                  border: 1px solid #ccc;
                  border-radius: 3px;
                  color: #ccc;
                  font-size: 10px;
                  font-weight: 700;
                  &.on {
                    border: 1px solid $mainColor;
                    color: $mainColor;
                  }
                }
              }
            }
            .agor-num-list {
              display: flex;
              .agor-num-item {
                display: flex;
                margin: 0 5px 0 0;
                height: 35px;
                line-height: 35px;
                @include centerH();
                .agor-btn {
                  color: #ccc;
                  font-size: 18px;
                }
                .agor-input {
                  width: 28px;
                  outline: none;
                  color: $mainColor;
                  text-align: center;
                  font-weight: 700;
                }
              }
            }
          }
        }
      }
      .ago-goods-info {
        margin-bottom: 10px;
        padding: 10px;
        background: $bgColor;
        .ago-info-title {
          margin-bottom: 5px;
          height: 20px;
          line-height: 20px;
          font-size: 14px;
        }
        .ago-info-desc {
          line-height: 16px;
          font-size: 12px;
          color: #ccc;
        }
      }
    }
  }
  .ago-footer {
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background: $bgColor;
    justify-content: space-between;
    text-align: center;
    .ago-icons {
      width: 100px;
      .icon {
        margin: 10px;
      }
    }
    .ago-btns {
      display: flex;
      .ago-btn-add,
      .ago-btn-buy {
        display: block;
        width: 100px;
        background: $mainColor;
      }
      .ago-btn-buy {
        background: $mainDColor;
      }
    }
  }
}
</style>
