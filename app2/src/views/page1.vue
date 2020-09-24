<template>
  <div>
    <div>page1</div>
    <br />
    <router-link to="/page2">应用内跳转 page2</router-link>
    <div @click="clickBtn3">跨应用跳转 app1-page1</div>
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
    clickBtn3() {
      history.pushState(null, null, '/app1#/page1')
    },
    clickAdd() {
      this.$store.dispatch('setMainValue', this.$store.state.main_value + 1)
    },
  },
}
</script>

<style lang="less" scoped></style>
