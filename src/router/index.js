import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import swiper from '@/components/base/swiper'
import login from '@/components/login/index'
import register from '@/components/register/index'
import foot from '@/components/base/footer'
import apply from '@/components/apply/apply'
import feeList from '@/components/apply/feeList'
import about from '@/components/about/about'
import news from '@/components/news/news'
import detail from '@/components/news/detail'
import addNews from '@/components/news/addNews'
import coachList from '@/components/team/coachList'
import coach from '@/components/team/coach'
import subscribe from '@/components/subscribe/subscribe'
import booking from '@/components/subscribe/booking'
import exam from '@/components/exam/index'
import paper from '@/components/exam/paper'
import result from '@/components/exam/result'
import error from '@/components/exam/error'
import score from '@/components/exam/sore'
import input from '@/components/exam/input'
import video from '@/components/team/vedioList'
import player from '@/components/team/player'
import team from '@/components/team/index'
import addCoach from '@/components/team/addCoach'
import addVideo from '@/components/team/addVideo'
import self from '@/components/self/index'
import change from '@/components/self/change'
import confirm from '@/components/self/confirm'
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
      path: '/news/addNews',
      name: 'addNews',
      component: addNews
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
    },
    {
      path: '/subscribe/subscribe',
      name: 'subscribe',
      component: subscribe
    },
    {
      path: '/subscribe/booking',
      name: 'booking',
      component: booking
    },
    {
      path: '/exam/index',
      name: 'exam',
      component: exam
    },
    {
      path: '/exam/paper',
      name: 'paper',
      component: paper
    },
    {
      path: '/exam/result',
      name: 'result',
      component: result
    },
    {
      path: '/exam/input',
      name: 'input',
      component: input
    },
    {
      path: '/exam/error',
      name: 'error',
      component: error
    },
    {
      path: '/exam/score',
      name: 'score',
      component: score
    },
    {
      path: '/team/video',
      name: 'video',
      component: video
    },
    {
      path: '/team/player',
      name: 'player',
      component: player
    },
    {
      path: '/team/index',
      name: 'team',
      component: team
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/team/addCoach',
      name: 'addCoach',
      component: addCoach
    },
    {
      path: '/team/addVideo',
      name: 'addVideo',
      component: addVideo
    },
    {
      path: '/self',
      name: 'self',
      component: self
    },
    {
      path: '/self/change',
      name: 'change',
      component: change
    },
    {
      path: '/self/confirm',
      name: 'confirm',
      component: confirm
    }
  ]
})
