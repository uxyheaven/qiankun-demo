<template>
  <div>
    <div>page1</div>
    <br />
    <router-link to="/page2">应用内跳转 page2</router-link>
    <div @click="clickBtn3">跨应用跳转 app2-page1</div>
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
      // 跨应用跳转用 this.$router.push 不行
      history.pushState(null, null, '/app2#/page1')
    },
    clickAdd() {
      this.$store.dispatch('setApp1Value1', this.$store.state.app1_value1 + 1)
    },
  },
}
</script>

<style lang="less" scoped></style>
