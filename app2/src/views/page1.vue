<template>
  <div>
    <div>this is page1</div>
    <router-link to="/page2">go to app2-page2</router-link>
    <br />
    <br />
    <br />
    <div @click="clickBtn3">go to app1-page1</div>
    <br />
    <br />
    <div @click="clickAdd">
      app1_value1:(不能跨应用){{ this.$store.state.app1_value1 }} 点这里+1
    </div>
    <div @click="clickAdd">
      main_value:(不能跨应用){{ this.$store.state.main_value }} 点这里+1
    </div>
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
      history.pushState(null, null, '/app1/page1')
    },
    clickAdd() {
      this.$store.dispatch('setMainValue', this.$store.state.main_value + 1)
    },
  },
}
</script>

<style lang="less" scoped></style>
