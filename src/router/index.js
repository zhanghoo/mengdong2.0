import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/pages/AppIndex'
import AppFriend from '@/pages/AppFriend'
import AppShop from '@/pages/AppShop'
import AppHome from '@/pages/AppHome'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
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
