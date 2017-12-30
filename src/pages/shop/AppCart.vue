<template>
  <div class="app-cart">
    <app-header>
      <span slot="left" class="icon icon-back" @click="back">返回</span>
      <span slot="title">购物车</span>
      <template slot="right">
        <span v-if="goodsSelectedNum > 0" class="icon icon-del" @click="cutCheckedFromCart">删除</span>
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
                <li class="ac-goods-item"><div class="acg-bg"><div class="img"></div></div></li>
                <li class="ac-goods-item"><div class="acg-bg"><div class="img"></div></div></li>
                <li class="ac-goods-item"><div class="acg-bg"><div class="img"></div></div></li>
                <li class="ac-goods-item"><div class="acg-bg"><div class="img"></div></div></li>
              </ul>
            </div>
          </div>
          <div v-if="cartNotEmpty" class="ac-cart-notempty">
              <appPanelCartSlideMenu v-for="goods in cartGoods"
                                     :goods="goods"
                                     ref="appPanelCartSlideMenu" 
                                     :key="goods.index" 
                                     @uncheckedAllCheckbox="uncheckedAllCheckbox" 
                                     @checkedAllCheckbox="checkedAllCheckbox" />
          </div>
          <div v-if="cartNotEmpty" class="ac-recommend ac-like">
            <h3 class="ac-title"><span class="ac-text">猜你喜欢</span></h3>
            <div class="ac-goods">
              <ul class="ac-goods-list">
                <li class="ac-goods-item"><div class="acg-bg"><div class="img"></div></div></li>
                <li class="ac-goods-item"><div class="acg-bg"><div class="img"></div></div></li>
                <li class="ac-goods-item"><div class="acg-bg"><div class="img"></div></div></li>
                <li class="ac-goods-item"><div class="acg-bg"><div class="img"></div></div></li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <!-- <div class="swiper-scrollbar swiper-cart-scrollbar" slot="scrollbar"></div> -->
      </swiper>
    </div>
    <div class="ac-footer">
      <div class="ac-check-count">
        <app-checkbox :select-all="true" ref="allCheckbox" @checkedAll="checkedAll" @uncheckedAll="uncheckedAll"/>
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
    ...mapGetters(['cartGoods', 'checkedGoods', 'checkedAllStatus']),
    goodsCartNum () {
      return this.cartGoods.length
    },
    cartNotEmpty () {
      // 购物车不为空
      return !!this.goodsCartNum
    },
    goodsSelectedNum () {
      return this.checkedGoods.length
    },
    checkAll () {
      return this.goodsCartNum === this.goodsSelectedNum
    },
    goodsCount () {
      if (this.goodsSelectedNum > 1) {
        return this.checkedGoods.reduce((total, current) => {
          total += current.price * current.quantity
          return total
        }, 0)
      } else if (this.goodsSelectedNum === 1) {
        return this.checkedGoods[0].price * this.checkedGoods[0].quantity
      } else {
        return '0.00'
      }
    }
  },
  created () {
    this.$_hideAppNav()
  },
  destroyed () {
    // 退出购物车的时候将所有勾选的状态清空, 因为退出的时候有些可能还是勾选的
    // 即全不选
    this.uncheckedAll()
  },
  methods: {
    ...mapActions({
      $_hideAppNav: 'hideAppNav',
      $_checkAllGoods: 'checkAllGoods',
      $_uncheckAllGoods: 'uncheckAllGoods',
      $_cutFromCart: 'cutFromCart'
    }),
    back () {
      this.$router.go(-1)
    },
    toGoodsTexts () {
      this.$router.push('goodstexts')
    },
    uncheckedAll () {
      this.$_uncheckAllGoods()
      this.$refs.appPanelCartSlideMenu.forEach((el) => {
        el.uncheckedAll()
      })
    },
    checkedAll () {
      this.$_checkAllGoods()
      this.$refs.appPanelCartSlideMenu.forEach((el) => {
        el.checkedAll()
      })
    },
    uncheckedAllCheckbox () {
      this.$refs.allCheckbox.unchecked()
    },
    checkedAllCheckbox () {
      this.$refs.allCheckbox.checked()
    },
    cutCheckedFromCart () {
      this.checkedGoods.forEach((goods) => {
        this.$_cutFromCart(goods)
      })
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
              width: 50%;
              height: 0;
              border-bottom: 5px solid transparent;
              .acg-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              }
              &:nth-child(2n) {
                .acg-bg {
                  border-left: 5px solid transparent;
                  border-bottom: 5px solid transparent;
                }
              }
              &:nth-child(2n+1) {
                .acg-bg {
                  border-right: 5px solid transparent;
                  border-bottom: 5px solid transparent;
                }
              }
              .img {
                display: block;
                width: 100%;
                height: 100%;
                background: #ccc;
              }
            }
          }
        }
        &.ac-like {
          .ac-goods {
            .ac-goods-list {
              .ac-goods-item {
                border-bottom: none;
                &:nth-child(2n) {
                .acg-bg {
                    border-right: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                  }
                }
                &:nth-child(2n+1) {
                  .acg-bg {
                    border-left: 10px solid transparent;
                    border-bottom: 10px solid transparent;
                  }
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
