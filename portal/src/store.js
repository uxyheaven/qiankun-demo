import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    main_value: 1,
  },
  mutations: {
    setMainValue(state, value) {
      state.main_value = value
    },
  },
  actions: {
    setMainValue: ({ commit }, valve) => {
      commit('setMainValue', valve)
    },
  },
})

export default store
