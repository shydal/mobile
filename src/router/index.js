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
import mybooking from '@/components/subscribe/mybooking'
import explains from '@/components/subscribe/explains'
import explain from '@/components/subscribe/detail'
import comment from '@/components/self/comment'
import addComment from '@/components/self/addComment'
import contact from '@/components/contact/contact'
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
      component: news,
      children: [
        { path: '', component: foot }
      ]
    },
    {
      path: '/news/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
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
      component: subscribe,
      meta: {
        role: 'student' // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/subscribe/booking',
      name: 'booking',
      component: booking,
      meta: {
        role: 'student' // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/exam/index',
      name: 'exam',
      component: exam,
      meta: {
        role: 'user' // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/exam/paper',
      name: 'paper',
      component: paper,
      meta: {
        role: 'user' // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/exam/result',
      name: 'result',
      component: result,
      meta: {
        role: 'user' // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/exam/input',
      name: 'input',
      component: input,
      meta: {
        role: 'student' // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/exam/error',
      name: 'error',
      component: error,
      meta: {
        role: 'user' // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/exam/score',
      name: 'score',
      component: score,
      meta: {
        role: 'user' // 添加该字段，表示进入这个路由是需要登录的
      }
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
      component: addCoach,
      meta: {
        role: 'admin' // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/team/addVideo',
      name: 'addVideo',
      component: addVideo,
      meta: {
        role: 'admin' // 添加该字段，表示进入这个路由是需要登录的
      }
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
    },
    {
      path: '/self/mybooking',
      name: 'mybooking',
      component: mybooking
    },
    {
      path: '/subscribe/explains',
      name: 'explains',
      component: explains
    },
    {
      path: '/subscribe/explain',
      name: 'explain',
      component: explain
    },
    {
      path: '/self/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/self/addComment',
      name: 'addComment',
      component: addComment,
      meta: {
        role: 'student' // 添加该字段，表示进入这个路由是需要登录的
      }
    }
  ]
})
