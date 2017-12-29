import Vue from 'vue'
import Router from 'vue-router'
import AppGuide from '@/pages/common/AppGuide'
import AppLogin from '@/pages/common/AppLogin'
import AppRegister from '@/pages/common/AppRegister'
import AppRegisterLogin from '@/pages/common/AppRegisterLogin'
import AppTexts from '@/pages/common/AppTexts'
import AppMessage from '@/pages/common/AppMessage'
import AppUserHome from '@/pages/common/AppUserHome'
import AppIndex from '@/pages/index/AppIndex'
import AppFriend from '@/pages/friend/AppFriend'
import AppShop from '@/pages/shop/AppShop'
import AppGoodsSupertype from '@/pages/shop/AppGoodsSupertype'
import AppGoodsSubtype from '@/pages/shop/AppGoodsSubtype'
import AppCart from '@/pages/shop/AppCart'
import AppGoodsTexts from '@/pages/shop/AppGoodsTexts'
import AppGoods from '@/pages/shop/AppGoods'
import AppOrder from '@/pages/shop/AppOrder'
import AppHome from '@/pages/home/AppHome'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/guide'
    },
    {
      path: '/guide',
      name: 'guide',
      meta: {
        title: '萌懂'
      },
      component: AppGuide
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '萌懂'
      },
      component: AppLogin
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '萌懂'
      },
      component: AppRegister
    },
    {
      path: '/registerlogin',
      name: 'registerlogin',
      meta: {
        title: '萌懂'
      },
      component: AppRegisterLogin
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '窝'
      },
      component: AppIndex
    },
    {
      path: '/friend',
      name: 'friend',
      meta: {
        title: '伴'
      },
      component: AppFriend
    },
    {
      path: '/shop',
      name: 'shop',
      meta: {
        title: '遛'
      },
      component: AppShop
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '窝'
      },
      component: AppHome
    },
    {
      path: '/texts',
      name: 'texts',
      meta: {
        title: '文章'
      },
      component: AppTexts
    },
    {
      path: '/message',
      name: 'message',
      meta: {
        title: '消息中心'
      },
      component: AppMessage
    },
    {
      path: '/userhome',
      name: 'userhome',
      meta: {
        title: '用户主页'
      },
      component: AppUserHome
    },
    {
      path: '/goodssupertype',
      name: 'goodssupertype',
      meta: {
        title: '品类'
      },
      component: AppGoodsSupertype
    },
    {
      path: '/goodssubtype',
      name: 'goodssubtype',
      meta: {
        title: '品类'
      },
      component: AppGoodsSubtype
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        title: '购物车'
      },
      component: AppCart
    },
    {
      path: '/goodstexts',
      name: 'goodstexts',
      meta: {
        title: '商品清单'
      },
      component: AppGoodsTexts
    },
    {
      path: '/goods/:id',
      name: 'goods',
      meta: {
        title: '商品'
      },
      component: AppGoods
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        title: '我的订单'
      },
      component: AppOrder
    }
  ]
})
