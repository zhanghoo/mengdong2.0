<template>
  <div class="app-cart-slide-menu-panel">
    <swiper :options="appCartSlideMenuOption" ref="appCartSlideMenuSwiper">
      <swiper-slide class="content">
        <div class="acsm-goods-panel">
          <div class="acsm-check-box">
            <app-checkbox @unchecked="unchecked" @checked="checked" ref="appCheckbox"/>
          </div>
          <div class="acsm-cover"><div class="img"></div></div>
          <div class="acsm-goods" @click.stop="toGoods">
            <h3 class="acsm-title">{{goods.title}}</h3>
            <div class="acsm-info" v-for="(choice, desc, index) in goods.info" :key="index">
              <p class="acsmi-desc">{{desc | translateDesc}}：</p>
              <p class="acsmi-choice">{{choice}}</p>
            </div>
            <p class="acsm-price">{{goods.price}}</p>
          </div>
          <div class="acsm-num">
            <app-num-control :goods-num="goods.quantity" @addToCart="addToCart" @cutFromCart="cutFromCart"/>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="menu">
        <span class="icon icon-del" @click="cutThisAllFromCart">删除</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AppCheckbox from '@/components/AppCheckbox'
import AppNumControl from '@/components/AppNumControl'

export default {
  name: 'appPanelCartSlideMenu',
  components: {
    AppCheckbox,
    AppNumControl
  },
  filters: {
    translateDesc (desc) {
      switch (desc) {
        case 'size':
          return '尺寸'
        case 'color':
          return '颜色'
        default:
          return '无对应描述'
      }
    }
  },
  props: {
    goods: Object
  },
  data () {
    return {
      appCartSlideMenuOption: {
        /* eslint-disable */
        direction: 'horizontal',
        slidesPerView: 'auto',
        mousewheel: false,
        resistanceRatio: 0
        /* eslint-enable */
      }
    }
  },
  computed: {
    ...mapGetters(['checkedAllStatus']),
    goodsColor () {
      return this.goods.info.color
    },
    goodsSize () {
      return this.goods.info.size
    },
    theGoods () {
      return {
        'id': this.goods.id,
        'info': {
          'color': this.goodsColor,
          'size': this.goodsSize
        }
      }
    },
    addGoods () {
      const addGoods = Object.assign(this.theGoods, {'quantity': 1})
      return addGoods
    },
    cutGoods () {
      const cutGoods = Object.assign(this.theGoods, {'quantity': 1})
      return cutGoods
    },
    cutGoodsAll () {
      const cutGoodsAll = Object.assign(this.theGoods, {'quantity': this.quantity})
      return cutGoodsAll
    }
  },
  methods: {
    ...mapActions({
      $_addToCart: 'addToCart',
      $_cutFromCart: 'cutFromCart',
      $_checkGoods: 'checkGoods',
      $_uncheckGoods: 'uncheckGoods'
    }),
    toGoods () {
      this.$router.push({ name: 'goods', params: { id: this.goods.id } })
    },
    addToCart () {
      this.$_addToCart(this.addGoods)
    },
    cutFromCart () {
      this.$_cutFromCart(this.cutGoods)
    },
    cutThisAllFromCart () {
      this.$_cutFromCart(this.cutGoodsAll)
    },
    unchecked () {
      // console.log('good panel unchecked')
      this.$_uncheckGoods(this.theGoods)
      if (!this.checkedAllStatus) {
        // 取消全选了,触发全选按钮
        this.$emit('uncheckedAllCheckbox')
      }
    },
    checked () {
      // console.log('good panel checked')
      this.$_checkGoods(this.theGoods)
      if (this.checkedAllStatus) {
        // 全选了,触发全选按钮
        this.$emit('checkedAllCheckbox')
      }
    },
    uncheckedAll () {
      this.$refs.appCheckbox.unchecked()
    },
    checkedAll () {
      this.$refs.appCheckbox.checked()
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.app-cart-slide-menu-panel {
  margin: 5px 0;
  background: $bgColor;
  .swiper-slide {
    position: relative;
    height: 80px;
    &.content {
      width: 100%;
      height: 80px;
      .acsm-goods-panel {
        position: relative;
        display: flex;
        width: 100%;
        height: 80px;
        .acsm-check-box {
          width: 30px;
          height: 80px;
          @include centerH();
        }
        .acsm-cover {
          width: 70px;
          height: 80px;
          line-height: 80px;
          .img {
            display: inline-block;
            width: 60px;
            height: 60px;
            background: #ccc;
            vertical-align: middle;
          }
        }
        .acsm-goods {
          flex: 1;
          position: relative;
          height: 60px;
          margin: 10px 0;
          font-size: 12px;
          .acsm-title {
            height: 15px;
            font-weight: 700;
          }
          .acsm-info {
            display: flex;
            height: 10px;
            line-height: 10px;
            font-size: 10px;
            color: #ccc;
          }
          .acsm-price {
            position: absolute;
            bottom: 0;
            left: 0;
            color: $mainColor;
            font-weight: 700;
          }
        }
        .acsm-num {
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
      }
    }
    &.menu {
      width: 60px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #fff;
      background: $mainColor;
    }
  }
}
</style>