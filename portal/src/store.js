import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    appLoading: false,
    main_value: 1,
  },
  mutations: {
    setAppLoading(state, value) {
      state.appLoading = value
    },
    setMainValue(state, value) {
      state.main_value = value
    },
  },
  actions: {
    setAppLoading: ({ commit }, valve) => {
      commit('setAppLoading', valve)
    },
    setMainValue: ({ commit }, valve) => {
      commit('setMainValue', valve)
    },
  },
})

export default store
