import Vue from 'vue'
import App from './App.vue'
// import router from './router'v
import store from './store.js'
Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

function vueRender() {
  return new Vue({
    el: '#main-app',
    store,
    render: h => h(App),
  })
}

export default function render() {
  vueRender()
}
