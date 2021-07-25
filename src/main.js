import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from '@/utils/axiosInterceptors'

import './assets/styles/app.css';

Vue.config.productionTip = false
Vue.prototype.$axios = axios // ajax request method
Vue.use(require("moment"));

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
