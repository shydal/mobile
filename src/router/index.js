import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import swiper from '@/components/base/swiper'
import login from '@/components/base/login'
import footer from '@/components/base/footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/base/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/base/login',
      name: 'login',
      component: login
    },
    {
      path: '/base/footer',
      name: 'footer',
      component: footer
    }
  ]
})
