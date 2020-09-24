import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    appLoading: false,
    msg: 'I am main.',
    count: 0,
  },
  mutations: {
    setAppLoading(state, value) {
      state.appLoading = value
    },
    setMsg(state, value) {
      state.msg = value
    },
  },
  actions: {
    setAppLoading: ({ commit }, valve) => {
      commit('setAppLoading', valve)
    },
    setMsg: ({ commit }, valve) => {
      commit('setMsg', valve)
    },
  },
})

export default store
