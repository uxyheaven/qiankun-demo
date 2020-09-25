<template>
  <div id="layout-wrapper">
    <!-- 主应用导航 -->
    <div id="layout-header">
      <div style="display:flex; justify-content:space-around;">
        <div @click="clickApp1">[app1]</div>
        <div @click="clickApp2">[app2]</div>
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
  },
  // data() {
  //   return {
  //     loading: true,
  //   }
  // },
  methods: {
    clickApp1() {
      history.pushState(null, null, '/app1')
    },
    clickApp2() {
      history.pushState(null, null, '/app2')
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
