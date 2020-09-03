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
 * Step1 初始化应用（可选）
 */
render({ loading: false })
const loader = loading => {
  render({ loading })
  console.log('loading', loading)
}

// 传入子应用的数据
let msg = {
  data: {
    auth: false,
  },
  fns: [
    {
      name: '_LOGIN',
      _LOGIN(data) {
        console.log(`父应用返回信息${data}`)
      },
    },
  ],
}

/**
 * Step2 注册子应用
 */
registerMicroApps(
  [
    {
      name: 'app1',
      entry: '//localhost:9001',
      activeRule: '/app1',
      container: '#subapp-viewport',
      loader,
      props: msg,
    },
    {
      name: 'app2',
      entry: '//localhost:9002',
      activeRule: '/app2',
      container: '#subapp-viewport',
      loader,
    },
  ],
  {
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
  },
)

// 设置默认子应用,与 genActiveRule中的参数保持一致
setDefaultMountApp('/app1')

// 启动
start()

// 创建共享状态
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: {
    name: 'qiankun',
  },
})

// 监听共享状态改变
onGlobalStateChange((value, prev) =>
  console.log('[main: onGlobalStateChange - master]:', value, prev),
)

// 修改共享状态
setGlobalState({
  aaa: 'aaa2',
  user: {
    name: 'qiankun2',
  },
})
