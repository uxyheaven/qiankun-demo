import Vue from 'vue'
import App from './App.vue'
// import router from './router'v
// import store from './store.js'
Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

function vueRender() {
  return new Vue({
    el: '#subapp-container',
    render: h => h(App),
    // data() {
    //   return {
    //     loading,
    //   }
    // },
  })
}

let app = null

export default function render({ loading }) {
  if (!app) {
    app = vueRender({ loading: true })
  } else {
    // app.loading = loading
    // 给App中的loading赋值
    app.$children[0].loading = loading
    // eslint-disable-next-line
    // debugger
  }
}
