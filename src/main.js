import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import routes from './router-config.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  saveScrollPosition: true
})

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.matched) {
    for (let route of routes) {
      if (to.matched[0].path === route.path) {
        document.title = route.title || '首页'
      }
    }
  }
  next()
})

new Vue({
  router,
  el: '#app',
  render: h => h(app)
})
