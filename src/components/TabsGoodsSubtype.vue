<template>
  <div class="goods-subtype">
    <div class="agsu-nav">
        <a href="javascript:;" class="agsu-nav-item" @click="goodsSort(0, 'default')">默认</a>
        <a href="javascript:;" class="agsu-nav-item" @click="goodsSort(1, 'prices')">价格</a>
        <a href="javascript:;" class="agsu-nav-item" @click="goodsSort(2, 'evaluate')">评价最高</a>
        <div class="agsu-slide-bar" ref="shopPetTypeSlideBar"></div>
      </div>
      <div class="agsu-content">
        <swiper :options="shopPetItemSwiperOption" class="agsu-swiper">
          <swiper-slide class="agsu-slide">
            <ul class="agsu-goods-list clearfix">
              <li v-for="goods in goodsList" :key="goods.id" class="agsu-item">
                <div class="agsu-goods-cover" @click.stop="toGoods(goods.id)"></div>
                <div class="agsu-goods-info">
                  <p class="agsu-goods-title" @click.stop="toGoods(goods.id)">{{goods.title}}</p>
                  <p class="agsu-goods-price">{{goods.price}}</p>
                </div>
              </li>
            </ul>
          </swiper-slide>
        </swiper>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'tabsGoodsSubtype',
  data () {
    return {
      shopPetItemSwiperOption: {
        /* eslint-disable */
        /* eslint-enable */
      }
    }
  },
  computed: {
    goodsList () {
      // 所有的商品
      return this.$store.state.goods.goodsList
    }
  },
  methods: {
    ...mapActions([
      'sortGoods'
    ]),
    goodsSort (index, sort) {
      this.$refs.shopPetTypeSlideBar.style.left = `${index * 33.3333}%`
      this.sortGoods(sort)
    },
    toGoods (goodsId) {
      this.$router.push({ name: 'goods', params: { id: goodsId } })
      // or router.push({ path: `/goods/${goodsId}` }) // -> /user/123
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/md";
.goods-subtype {
  .agsu-nav {
    position: relative;
    display: flex;
    width: 100%;
    height: 48px;
    line-height: 48px;
    z-index: 20;
    background: $bgColor;
    .agsu-nav-item {
      width: 33.3333%;
      text-align: center;
    }
    .agsu-slide-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 33.3333%;
      height: 2px;
      background: transparent;
      transition: left .2s ease;
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 25%;
        width: 50%;
        height: 3px;
        background: $orange;
      }
    }
  }
  .agsu-content {
    position: absolute;
    top: 0;
    left: 0;
    padding: 96px 0 0 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background: $slideBgColor;
    .agsu-swiper {
      width: 100%;
      height: 100%;
      .agsu-slide {
        width: 100%;
        height: 100%;
        .agsu-goods-list {
          padding: 5px;
          width: 100%;
          height: auto;
          .agsu-item {
            float: left;
            padding: 5px;
            width: 50%;
            .agsu-goods-cover {
              width: 100%;
              height: auto;
              min-height: 150px;
              background: #ccc;
            }
            .agsu-goods-info {
              padding: 10px;
              text-align: center;
              background: #fff;
              border: 1px solid #f1f1f1;
              .agsu-goods-title {
                @include text-ellipsis();
                font-size: 12px;
              }
              .agsu-goods-price {
                margin-top: 5px;
                font-size: 12px;
                font-weight: 700;
                color: $mainDColor;
              }
            }
          }
        }
      }
    }
  }
}
</style>
