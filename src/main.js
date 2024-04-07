import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from 'bootstrap-vue'
import './assets/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import routes from './Router/Router'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)
Vue.use(VueRouter)


new Vue({
	router: new VueRouter({
		history: true,
		mode: 'history', 
		routes
	}),
	render: h => h(App),
}).$mount('#app')
