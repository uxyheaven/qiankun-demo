<template>
  <div id="app">
    <div>app1</div>
    <div>状态:{{ JSON.stringify($store.state) }}</div>
    <router-view />
  </div>
</template>

<script>
export default {
  // name: 'App1',
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
