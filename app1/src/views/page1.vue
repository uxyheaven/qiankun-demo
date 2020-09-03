<template>
  <div>
    <div>this is page1</div>
    <router-link to="/page2">go to app1-page2</router-link>
    <br />
    <router-link to="/app2/page1">go to app2-page1</router-link>
    <br />
    <br />
    <div @click="clickBtn1">
      vue router name (app2-page2) 无法正常跳转至其他子应用
    </div>
    <div @click="clickBtn2">
      vue router path (/app2#/page2) 无法正常跳转至其他子应用
    </div>
    <div @click="clickBtn3">go to app2-page1</div>
    <br />
    <br />
    <div @click="clickAdd">
      app1_value1: {{ this.$store.state.app1_value1 }} 点这里+1
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  // name: 'Demo',
  components: {},
  // mixins: [],
  // props: [],
  data() {
    return {}
  },
  // computed: {},
  // watch: {},
  created() {},
  // mounted() {},
  // destroyed() {},
  methods: {
    clickBtn1() {
      this.$router.push({
        name: 'app2-page2',
      })
    },
    clickBtn2() {
      this.$router.push({
        path: '/app2/page2',
      })
    },
    clickBtn3() {
      history.pushState(null, null, '/app2/page1')
    },
    clickAdd() {
      this.$store.dispatch('setApp1Value1', this.$store.state.app1_value1 + 1)
    },
  },
}
</script>

<style lang="less" scoped></style>
