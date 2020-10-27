# 前端微服务

## tips:

子应用需要在自己的入口 js 中, 导出 `bootstrap`、`mount`、`unmount` 三个生命周期钩子，以供主应用在适当的时机调用

webpack 配置需要修改

package.json 中的 name 字段是子应用中唯一的

### 路由加载/ 页面切换

子应用间跳转, 通过 vue router 跳转不行. 可以通过通过`history.pushState`

- 可以自定义加载时的 loading
- 预加载

当主应用是 history 模式，微应用是 hash 模式，表现完美。

### [x]状态管理

应用之间的状态不通.

官网提供的方式是在主应用中维护一个 gloabalState，并对外提供了一些监听方法，这样微应用只要注册监听器，就能知道 gloabalState 发生了变化

```javascript
# 主应用
import { initGlobalState, MicroAppStateActions } from 'qiankun';
// 初始化state
const actions: MicroAppStateActions = initGlobalState(state);
// 监听状态变更
actions.onGlobalStateChange((newState, oldState) => {
console.log(newState, oldState);
});
// 修改状态
actions.setGlobalState(state);
// 注销监听器
// actions.offGlobalStateChange();
```

```javascript
# 子应用
// 应用每次进入都会调用 mount 方法
export function mount(props) {
// 监听状态变更
props.onGlobalStateChange((newState, oldState) => {
console.log(newState, oldState);
});
// 修改状态
props.setGlobalState(state);
}
```

我们可以通过代码去同步主应用中的 globalState 和子应用中的 globalState,

### nuxt 如何接入乾坤

https://github.com/FEMessage/nuxt-micro-frontend

### 代码复用

- 依赖管理

发布私有组件库

http://confluence.sf-express.com/pages/viewpage.action?pageId=38592191

### 开发调试/打包部署

子应用服务器需要开启跨域

```
// debugger有时回被eslint误报. 此时可以忽略单行.
// eslint-disable-next-line
debugger
```

需要部署多个路径, 费用会增加
