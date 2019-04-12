/* eslint-disable indent */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const actions = {}
const state = {
  username: '' || sessionStorage.getItem('username'),
  id: '' || sessionStorage.getItem('id'),
  licenseId: null || sessionStorage.getItem('licenseId'), // 用户驾照id
  role: null || sessionStorage.getItem('role')
}
const mutations = {
  handle (state, playload) {
    state.username = playload.username
    state.id = playload.id
    state.licenseId = playload.licenseId
    state.role = playload.role
    // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
     sessionStorage.setItem('username', playload.username)
     sessionStorage.setItem('id', playload.id)
     sessionStorage.setItem('licenseId', playload.licenseId)
     sessionStorage.setItem('role', playload.role)
  },
  setPath (state, playload) {
    state.path = playload
  },
  setLogin (state, playload) {
    state.login = playload
  }
}
// getters 只会依赖 state 中的成员去更新
const getters = {
  username: (state) => {
    return state.username
  },
  role: (state) => {
    return state.role
  },
  id: (state) => {
    return state.id
  }

}
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
  })
