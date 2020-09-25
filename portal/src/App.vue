<template>
  <div id="layout-wrapper">
    <!-- 主应用导航 -->
    <div id="layout-header">
      <div style="display:flex; justify-content:space-around;">
        <div v-for="app in apps" :key="app.name" @click="clickApp(app)">
          {{ app.name }}
        </div>
      </div>

      <div>GlobalState: {{ JSON.stringify($store.state) }}</div>
    </div>
    <!-- 加载子应用时的Loading -->
    <div>
      {{ appLoading ? 'loading' : 'done' }}
    </div>
    <!-- 子应用挂载点 -->
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import apps from './microApps.js'

export default {
  name: 'Portal',
  components: {},
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    appLoading() {
      return this.$store.state.appLoading
    },
    apps() {
      return apps
    },
  },
  // data() {
  //   return {
  //     loading: true,
  //   }
  // },
  methods: {
    clickApp(app) {
      history.pushState(null, null, app.activeRule)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
