import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    app2_value1: 1,
  },
  mutations: {
    setApp2Value1(state, value) {
      state.app2_value1 = value
    },
  },
  actions: {
    setApp2Value1: ({ commit }, valve) => {
      commit('setApp2Value1', valve)
    },
  },
})

export default store
