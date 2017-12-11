import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
//绑定全局api
Vue.prototype.api=api;
Vue.use(ElementUi)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
