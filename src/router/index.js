import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import swiper from '@/components/base/swiper'
import login from '@/components/login/index'
import foot from '@/components/base/footer'
import apply from '@/components/apply/apply'
import feeList from '@/components/apply/feeList'
import about from '@/components/about/about'
import news from '@/components/news/news'
import detail from '@/components/news/detail'
import coachList from '@/components/team/coachList'
import coach from '@/components/team/coach'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        { path: '', component: foot }
      ]
    },
    {
      path: '/base/swiper',
      name: 'swiper',
      component: swiper
    },
    // {
    //   path: '/base/login',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/base/foot',
      name: 'foot',
      component: foot
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/apply/apply',
      name: 'apply',
      component: apply
    },
    {
      path: '/apply/feeList',
      name: 'feeList',
      component: feeList
    },
    {
      path: '/about/about',
      name: 'about',
      component: about
    },
    {
      path: '/news/news',
      name: 'news',
      component: news
    },
    {
      path: '/news/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/team/coachList',
      name: 'coachList',
      component: coachList
    },
    {
      path: '/team/coach',
      name: 'coach',
      component: coach
    }

  ]
})
