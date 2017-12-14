import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// use
Vue.config.productionTip = false
//绑定全局api
Vue.prototype.api=api;

Vue.use(ElementUi)
Vue.use(VueQuillEditor)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
