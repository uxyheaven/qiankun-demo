import {
  registerMicroApps,
  setDefaultMountApp,
  start,
  initGlobalState,
} from 'qiankun'

/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
// import render from './ReactRender' // react 的 demo 未完成
import render from './VueRender'

/**
 * Step1 初始化应用
 */
render()

// 创建共享状态, 取自store.state
import store from '@/store'
// eslint-disable-next-line
const { onGlobalStateChange, setGlobalState } = initGlobalState(store.state)

// 监听共享状态改变
onGlobalStateChange((newState, oldState) => {
  console.log('[main: onGlobalStateChange]:', newState, oldState)

  // 将改变的值, 同步至store
  for (const key in newState) {
    store.state[key] = newState[key]
  }
})

/**
 * Step2 注册子应用
 */
import microApps from '@/microApps'
const loader = loading => {
  store.dispatch('setAppLoading', loading)
  console.log('loading', loading)
}
const apps = microApps.map(app => {
  return {
    ...app,
    container: '#subapp-viewport', // 子应用挂载的div
    loader, // 子应用加载开始/完成, 会调用loader方法
    props: {
      ...app.props,
      routerBase: app.activeRule, // 下发基础路由
      globalState: store.state, // 下发globalState
    },
  }
})

registerMicroApps(apps, {
  // 挂载前回调
  beforeLoad: [
    app => {
      console.log('before load', app)
    },
  ],
  // 挂载后回调
  beforeMount: [
    app => {
      console.log('before mount', app)
    },
  ],
  // 卸载后回调
  afterUnmount: [
    app => {
      console.log('after unload', app)
    },
  ],
})

// 设置默认子应用,与 genActiveRule中的参数保持一致
setDefaultMountApp('/app1')

// 启动
start()
