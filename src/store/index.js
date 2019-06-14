import Vue from 'vue'
import Vuex from 'vuex'
import setting from './modules/setting/index'

Vue.use(Vuex)
const types = {
  IS_COLLAPSE: 'IS_COLLAPSE'
}
export default new Vuex.Store({
  state: {
    [types.IS_COLLAPSE]: false
  },
  mutations: {
    [types.IS_COLLAPSE]: (state, res) => {
      state[types.IS_COLLAPSE] = res
    }

  },
  actions: {
    [types.IS_COLLAPSE]: ({ commit }, data) => {
      commit(types.IS_COLLAPSE, data)
    }
  },
  getters: {
    getIsCollapse (state) {
      return state[types.IS_COLLAPSE]
    }
  },
  modules: {
    setting
  }
})
