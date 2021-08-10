import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  store
} from "./store"

import {
  BootstrapVue,
  IconsPlugin,

} from 'bootstrap-vue'



Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')