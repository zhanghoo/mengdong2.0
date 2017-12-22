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
                <div class="agsu-goods-cover"></div>
                <div class="agsu-goods-info">
                  <p class="agsu-goods-title">{{goods.title}}</p>
                  <p class="agsu-goods-price">{{goods.price}}</p>
                </div>
              </li>
            </ul>
          </swiper-slide>
          <div class="swiper-scrollbar swiper-pet-item-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'tabsGoodsSubtype',
  data () {
    return {
      goodsList: [],
      goodsListPack: [],
      shopPetItemSwiperOption: {
        /* eslint-disable */
        scrollbar: {
          el: '.swiper-pet-item-scrollbar',
          hide: true
        }
        /* eslint-enable */
      }
    }
  },
  created () {
    axios.get('static/mocks/goods-type.json').then((res) => {
      this.goodsList = res.data.dogs[0].goodsList
    })
  },
  methods: {
    $_compare (order, ...propertyName) {
      return (obj1, obj2) => {
        let val1 = obj1[propertyName[0]]
        let val2 = obj2[propertyName[0]]
        if (propertyName.length >= 2) {
          val1 = propertyName.reduce((total, current) => {
            return obj1[total] * obj1[current]
          })
          val2 = propertyName.reduce((total, current) => {
            return obj2[total] * obj2[current]
          })
        }
        return order === 'asc' ? (val1 - val2) : (val2 - val1)
      }
    },
    goodsSort (index, sort) {
      this.$refs.shopPetTypeSlideBar.style.left = `${index * 33.3333}%`
      if (sort === 'default') {
        this.goodsListPack = this.goodsList.sort(this.$_compare('asc', 'id'))
      } else if (sort === 'prices') {
        this.goodsListPack = this.goodsList.sort(this.$_compare('asc', 'price'))
      } else if (sort === 'evaluate') {
        this.goodsListPack = this.goodsList.sort(this.$_compare('asc', 'comments', 'score'))
      } else {
        this.goodsListPack = this.goodsList
      }
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
