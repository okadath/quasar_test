// import Vue from 'vue'
// import Vuex from 'vuex'

// // import example from './module-example'

// Vue.use(Vuex)

// /*
//  * If not building with SSR mode, you can
//  * directly export the Store instantiation;
//  *
//  * The function below can be async too; either use
//  * async/await or return a Promise which resolves
//  * with the Store instance.
//  */

// export default function (/* { ssrContext } */) {
//   const Store = new Vuex.Store({
//     modules: {
//       // example
//     },

//     // enable strict mode (adds overhead!)
//     // for dev mode only
//     strict: process.env.DEBUGGING
//   })

//   return Store
// }

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const BaseUrl = 'https://www.glsteamedition.com'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, { token, user }) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error (state) {
      state.status = 'error'
    },
    logout (state) {
      state.status = ''
      state.token = ''
    }
  },
  // es un cast forzoso a booleano
  // https://brianflove.com/2014-09-02/whats-the-double-exclamation-mark-for-in-javascript/
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  // https://www.glsteamedition.com/create_token_with_mail/
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: BaseUrl + '/create_token_with_mail/',
          data: user,
          method: 'POST'
        })
          .then((resp) => {
            const token = resp.data.access
            const user = resp.data.email
            localStorage.setItem('token', token)
            // Add the following line:
            axios.defaults.headers.common.Authorization = token
            commit('auth_success', { token, user })
            resolve(resp)
          })
          .catch((err) => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://localhost:3000/register',
          data: user,
          method: 'POST'
        })
          .then((resp) => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            // Add the following line:
            axios.defaults.headers.common.Authorization = token
            commit('auth_success', { token, user })
            resolve(resp)
          })
          .catch((err) => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common.Authorization
        resolve()
      })
    }
  }

})
