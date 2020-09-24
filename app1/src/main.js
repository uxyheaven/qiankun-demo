/* eslint-disable no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import './public-path'
import globalRegister from './globalRegister'

Vue.config.productionTip = false

let router = null
let instance = null

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app1' : '/',
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
  // 这里是子应用独立运行的环境

  // 独立运行时，也注册一个名为global的store module
  globalRegister(store)

  render()
}

export async function bootstrap() {
  console.log('[app1: vue app bootstraped')
}

export async function mount(props) {
  console.log('[app1: props from main app', props)

  // 注册共享状态
  globalRegister(store, props)

  render()
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
