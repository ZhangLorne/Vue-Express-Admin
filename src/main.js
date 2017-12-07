import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
Vue.config.productionTip = false
//绑定全局api
Vue.prototype.api=api;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
