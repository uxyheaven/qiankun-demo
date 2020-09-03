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
  render()
}

export async function bootstrap() {
  console.log('[app1: vue app bootstraped')
}

export async function mount(props) {
  console.log('[app1: props from main app', props)
  // 设置监听共享状态
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(
          `[app1: onGlobalStateChange - ${props.name}]:`,
          value,
          prev,
        ),
      true,
    )

  // 修改共享状态
  props.setGlobalState &&
    props.setGlobalState({
      user: {
        name: 'i am app2',
      },
    })

  render()
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
