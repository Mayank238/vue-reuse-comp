import Vue from 'vue'
import App from './App'
import router from './router'
import multiSelect from 'vue-multi-select';
import 'vue-multi-select/dist/lib/vue-multi-select.min.css';
  // register globally
Vue.component('multi-select', multiSelect)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
