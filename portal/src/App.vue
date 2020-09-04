<template>
  <div id="subapp-container">
    <span>app1:</span>
    <a href="/app1#/page1">page1 </a>
    <a href="/app1#/page2">page2 </a>
    <br />
    <span>app2:</span>
    <a href="/app2#/page1">page1 </a>
    <a href="/app2#/page2">page2 </a>

    <div>
      {{ appLoading ? 'loading' : 'done' }}
    </div>
    <!-- 子应用盒子 -->
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
