import Vue from 'vue'
import App from './App.vue'
// import router from './router'v
import store from './store.js'
Vue.config.productionTip = false

import Vuex from 'vuex'
Vue.use(Vuex)

function vueRender() {
  return new Vue({
    el: '#subapp-container',
    store,
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
    /* 给App中的loading赋值, 用下面的方法会报错, 因为不推荐直接改子组件中的值
     * app.$children[0].loading = loading
     */
    store.dispatch('setAppLoading', loading)
    // eslint-disable-next-line
    // debugger
  }
}
