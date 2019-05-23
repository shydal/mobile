// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Vuex from 'vuex'
import store from './vuex/store'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.prototype.HTTP = 'http://192.168.1.119:8081'
Vue.use(Vuex)
Vue.use(VueQuillEditor)
// import { Button, Cell } from 'mint-ui'
// Vue.component(Button.name, Button)
// Vue.component(Cell.name, Cell)
Vue.use(MintUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  var role = JSON.parse(store.state.role)
  if (to.meta.role) { // 判断该路由是否需要登录权限
    console.log(store.state.role)
    if (to.meta.role === 'user') {
      // eslint-disable-next-line no-undef
      console.log(store.state.role)
      if (role === null) {
        next('/login')
      } else if (role.roleName === 'user' || role.roleName === 'student') {
        next()
      } else {
        alert('你不具备该权限')
      //  console.log(store.state.role)
      }
    } else if (to.meta.role === 'student') {
      if (!role) {
        next('/login')
      } else if (role.roleName === 'user') {
        alert('请先报名！')
      } else if (role.roleName === 'student') {
        next()
      } else {
        alert('你不具备改权限')
      }
    } else if (to.meta.role === 'coach') {
      if (!role) {
        next('/login')
      } else if (role.roleName === 'coach') {
        next()
      } else {
        alert('你不具备该权限')
      }
    } else {
      if (!role) {
        next('/login')
      } else if (role.roleName === 'admin') {
        next()
      } else {
        alert('你不具备该权限')
      }
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
