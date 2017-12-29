<template>
  <div class="app-cart">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">购物车</span>
      <template slot="right">
        <span v-if="goodsSelectedNum > 0" class="icon icon-del">删除</span>
        <span v-else></span>
      </template>
    </app-header>
    <div class="ac-content">
      <swiper class="cart-swiper" :options="cartSwiperOption">
        <swiper-slide>
          <div v-if="!cartNotEmpty" class="ac-cart-empty">
            <div class="acc-bg"></div>
          </div>
          <div v-if="!cartNotEmpty" class="ac-recommend">
            <h3 class="ac-title"><span class="ac-text">去遛遛吧</span></h3>
            <div class="ac-goods-texts">
              <div class="ac-goods-texts-bg" @click.stop="toGoodsTexts">
                <div>
                  <p class="ac-goods-texts-icon"><span class="icon icon-type"></span></p>
                  <p class="ac-goods-texts-title">被爱包围是那么幸福的事</p>
                  <p class="ac-goods-texts-theme">[爱心小物]</p>
                </div>
              </div>
            </div>
            <div class="ac-goods">
              <ul class="ac-goods-list">
                <li class="ac-goods-item"><div class="acg-bg"></div></li>
                <li class="ac-goods-item"><div class="acg-bg"></div></li>
                <li class="ac-goods-item"><div class="acg-bg"></div></li>
                <li class="ac-goods-item"><div class="acg-bg"></div></li>
              </ul>
            </div>
          </div>
          <div v-if="cartNotEmpty" class="ac-cart-notempty">
            <template v-for="(goods,index) in cartGoods">
              <appPanelCartSlideMenu :goods="goods" :goods-index="index" @unchecked="unchecked" @checked="checked" ref="appPanelCartSlideMenu"/>
            </template>
          </div>
          <div v-if="cartNotEmpty" class="ac-recommend">
            <h3 class="ac-title"><span class="ac-text">猜你喜欢</span></h3>
            <div class="ac-goods">
              <ul class="ac-goods-list">
                <li class="ac-goods-item"><div class="acg-bg"></div></li>
                <li class="ac-goods-item"><div class="acg-bg"></div></li>
                <li class="ac-goods-item"><div class="acg-bg"></div></li>
                <li class="ac-goods-item"><div class="acg-bg"></div></li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <!-- <div class="swiper-scrollbar swiper-cart-scrollbar" slot="scrollbar"></div> -->
      </swiper>
    </div>
    <div class="ac-footer">
      <div class="ac-check-count">
        <app-checkbox :select-all="true" :check-all="checkAll" @checkedAll="checkedAll" @uncheckedAll="uncheckedAll"/>
        <span v-show="goodsSelectedNum > 0" class="ac-count-desc">不含运费</span>
        <span class="acc-text">总计：</span>
        <span class="acc-num">{{goodsCount}}</span>
      </div>
      <div class="ac-account" :class="goodsSelectedNum > 0 ? 'on' : ''">去结算</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppHeader from '@/components/AppHeader'
import AppPanelCartSlideMenu from '@/components/AppPanelCartSlideMenu'
import AppCheckbox from '@/components/AppCheckbox'

export default {
  name: 'appCart',
  components: {
    AppHeader,
    AppPanelCartSlideMenu,
    AppCheckbox
  },
  data () {
    return {
      selected: [],
      cartSwiperOption: {
        /* eslint-disable */
        // scrollbar: {
        //   el: '.swiper-home-scrollbar',
        //   hide: true
        // }
        /* eslint-enable */
      }
    }
  },
  computed: {
    ...mapGetters(['cartGoods']),
    goodsCartNum () {
      return this.cartGoods.length
    },
    cartNotEmpty () {
      // 购物车不为空
      return !!this.goodsCartNum
    },
    goodsSelectedNum () {
      return this.selected.length
    },
    checkAll () {
      return this.goodsCartNum === this.goodsSelectedNum
    },
    goodsCount () {
      if (this.goodsSelectedNum > 1) {
        return this.selected.reduce((total, current) => {
          total += current.price * current.quantity
          return total
        }, 0)
      } else if (this.goodsSelectedNum === 1) {
        return this.selected[0].price * this.selected[0].quantity
      } else {
        return '0.00'
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
    toGoodsTexts () {
      this.$router.push('goodstexts')
    },
    unchecked (index) {
     // console.log('app cart goods unchecked')
      const selectedIndex = this.selected.findIndex(g => {
        return g.index === index
      })
      this.selected.splice(selectedIndex, 1)
    },
    checked (goods) {
      // console.log('app cart goods checked')
      this.selected.push(goods)
    },
    uncheckedAll () {
      this.selected = []
      this.$refs.appPanelCartSlideMenu.uncheckedAll()
    },
    checkedAll () {
      this.selected = this.cartGoods
      console.log(this.$refs.appPanelCartSlideMenu)
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/scss/md";
.app-cart {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .ac-content {
    position: absolute;
    top: 0;
    left: 0;
    padding: 48px 0 48px 0;
    width: 100%;
    height: 100%;
    background: $slideBgColor;
    .cart-swiper {
      width: 100%;
      height: 100%;
      .ac-cart-empty {
        position: relative;
        padding-top: 68%;
        width: 100%;
        height: 0;
        .acc-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url(../../../static/images/cart-empty.png) no-repeat center;
          background-size: 60%;
        }
      }
      .ac-recommend {
        position: relative;
        .ac-title {
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          color: #ccc;
          .ac-text {
            position: relative;
            display: inline-block;
            height: 40px;
            &:before {
              content: '';
              display: block;
              position: absolute;
              top: 20px;
              left: -20px;
              width: 10px;
              height: 0;
              border-top: 1px solid #ccc;
            }
            &:after {
              content: '';
              display: block;
              position: absolute;
              top: 20px;
              right: -20px;
              width: 10px;
              height: 0;
              border-top: 1px solid #ccc;
            }
          }
        }
        .ac-goods-texts {
          position: relative;
          top: 0;
          left: 0;
          padding-top: 50%;
          margin-bottom: 10px;
          width: 100%;
          height: 0;
          background: rgba(0, 0, 0, .3);
          .ac-goods-texts-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            @include centerH();
            .icon {
              width: 25px;
              height: 25px;
              background: #fff;
            }
            .ac-goods-texts-title {
              margin: 5px 0 15px 0;
              height: 20px;
              line-height: 20px;
              font-size: 16px;
              font-weight: 700;
              color: #fff;
            }
            .ac-goods-texts-theme {
              font-size: 14px;
              color: #fff;
            }
          }
        }
        .ac-goods {
          .ac-goods-list {
            @include clearfix();
            .ac-goods-item {
              position: relative;
              float: left;
              padding-top: 50%;
              margin-bottom: 10px;
              width: 50%;
              height: 0;
              .acg-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #ccc;
              }
              &:nth-child(2n) {
                .acg-bg {
                  margin-left: 10px;
                }
              }
              &:nth-child(2n+1) {
                .acg-bg {
                  margin-right: 10px;
                }
              }
            }
          }
        }
      }
    }
  }
  .ac-footer {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    justify-content: space-between;
    .ac-check-count {
      @include centerH();
      padding-left: 16px;
      height: 48px;
      line-height: 48px;
      .ac-count-desc {
        margin-left: 20px;
        height: 48px;
        font-size: 10px;
        color: #ccc;
      }
      .acc-text {
        margin-left: 6px;
        font-size: 12px;
      }
      .acc-num {
        color: $mainColor;
        font-size: 16px;
        font-weight: 700;
      }
    }
    .ac-account {
      width: 100px;
      text-align: center;
      background: $mainColor;
      &.on {
        background: $mainDColor;
      }
    }
  }
}
</style>
