import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from 'bootstrap-vue'
import './assets/app.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)


new Vue({
  render: h => h(App),
}).$mount('#app')
