import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/page1',
  },
  {
    path: '/page1',
    name: 'app2-page1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "app2-page1" */ './views/page1.vue'),
  },
  {
    path: '/page2',
    name: 'app2-page2',
    component: () =>
      import(/* webpackChunkName: "app2-page2" */ './views/page2.vue'),
  },
]

export default routes
