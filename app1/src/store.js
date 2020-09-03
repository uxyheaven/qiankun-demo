import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    app1_value1: 1,
  },
  mutations: {
    setApp1Value1(state, value) {
      state.app1_value1 = value
    },
  },
  actions: {
    setApp1Value1: ({ commit }, valve) => {
      commit('setApp1Value1', valve)
    },
  },
})

export default store
