import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './components/index'
import './lib/element-ui/index'
import './assets/icon/index'
import Alert from '../src/components/alert/alert.js'

Vue.prototype.$Alert = Alert
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
