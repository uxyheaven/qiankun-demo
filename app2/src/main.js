/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import './public-path'

Vue.config.productionTip = false

let router = null
let instance = null

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app2' : '/',
    // mode: 'history',
    routes,
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('app2: vue app bootstraped')
}

export async function mount(props) {
  console.log('app2: props from main app', props)
  render()
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
