import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let routes = []
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  if (route.startsWith('./index')) return

  const routerMoudle = routerContext(route).default || routerContext(route)
  routes = [...routes, ...routerMoudle]

  // const routerMoudle = routerContext(route)
  // routes = [...routes, ...(routerMoudle.defalut || routerMoudle)]
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '~views/Home.vue'),
      children: routes
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '~views/login/index.vue')
    }
  ]
})
