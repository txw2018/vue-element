import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './components/index'
import './lib/element-ui/index'
import './assets/icon/index'
import Alert from '../src/components/alert/alert.js'
import { sessionStorage } from '~utils'
Vue.prototype.$Alert = Alert
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (sessionStorage.get('user')) {
    next()
  } else {
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
