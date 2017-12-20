import Vue from 'vue'
import Router from 'vue-router'
import AppGuide from '@/pages/common/AppGuide'
import AppGuide from '@/pages/common/AppLogin'
import AppGuide from '@/pages/common/AppRegister'
import AppGuide from '@/pages/common/AppRegisterLogin'
import AppIndex from '@/pages/index/AppIndex'
import AppFriend from '@/pages/friend/AppFriend'
import AppShop from '@/pages/shop/AppShop'
import AppHome from '@/pages/home/AppHome'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/guide',
      name: 'guide',
      component: AppGuide
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
    }
  ]
})
