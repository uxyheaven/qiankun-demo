import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    app1Count: 0,
  },
  mutations: {
    setApp1Count(state, value) {
      state.app1Count = value
    },
  },
  actions: {
    setApp1Count: ({ commit }, valve) => {
      commit('setApp1Count', valve)
    },
  },
})

export default store
