import Vue from 'vue'
import Router from 'vue-router'
import AppGuide from '@/pages/common/AppGuide'
import AppLogin from '@/pages/common/AppLogin'
import AppRegister from '@/pages/common/AppRegister'
import AppRegisterLogin from '@/pages/common/AppRegisterLogin'
import AppTexts from '@/pages/common/AppTexts'
import AppMessage from '@/pages/common/AppMessage'
import AppIndex from '@/pages/index/AppIndex'
import AppFriend from '@/pages/friend/AppFriend'
import AppShop from '@/pages/shop/AppShop'
import AppGoodsSupertype from '@/pages/shop/AppGoodsSupertype'
import AppGoodsSubtype from '@/pages/shop/AppGoodsSubtype'
import AppCart from '@/pages/shop/AppCart'
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
      component: AppGuide
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin
    },
    {
      path: '/register',
      name: 'register',
      component: AppRegister
    },
    {
      path: '/registerlogin',
      name: 'registerlogin',
      component: AppRegisterLogin
    },
    {
      path: '/index',
      name: 'index',
      component: AppIndex
    },
    {
      path: '/friend',
      name: 'friend',
      component: AppFriend
    },
    {
      path: '/shop',
      name: 'shop',
      component: AppShop
    },
    {
      path: '/home',
      name: 'home',
      component: AppHome
    },
    {
      path: '/texts',
      name: 'texts',
      component: AppTexts
    },
    {
      path: '/message',
      name: 'message',
      component: AppMessage
    },
    {
      path: '/goodssupertype',
      name: 'goodssupertype',
      component: AppGoodsSupertype
    },
    {
      path: '/goodssubtype',
      name: 'goodssubtype',
      component: AppGoodsSubtype
    },
    {
      path: '/cart',
      name: 'cart',
      component: AppCart
    },
    {
      path: '/goods',
      name: 'goods',
      component: AppGoods
    },
    {
      path: '/order',
      name: 'order',
      component: AppOrder
    }
  ]
})
