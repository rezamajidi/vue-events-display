import Vue from 'vue'
import Vuex from 'vuex'
import ModuleEvent from './event'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    event: ModuleEvent,
  }
})

export default store;