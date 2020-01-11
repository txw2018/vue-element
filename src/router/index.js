import Vue from 'vue'
import Router from 'vue-router'
import { sessionStorage } from '~utils'
Vue.use(Router)
export let routes = []
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  if (route.startsWith('./index')) return // 排除根目录index.js
  const routerMoudle = routerContext(route).default || routerContext(route)
  routes = [...routes, ...routerMoudle]
})

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '~views/Main.vue'),
      children: routes,
      beforeEnter: (to, from, next) => {
        if (sessionStorage.get('user')) {
          next()
        } else {
          Vue.prototype.$Alert.info({
            content: '请先登陆'
          })
          setTimeout(() => {
            next('/login')
          }, 3000)
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '~views/login/index.vue')
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
