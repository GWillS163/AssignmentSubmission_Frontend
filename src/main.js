// import '@babel/polyfill'
// import 'mutationobserver-shim'
// import './plugins/bootstrap-vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './api/mock.js'
// import '../src/backendAssets/bootstrap/css/bootstrap.min.css'
// import '../src/backendAssets/bootstrap/js/bootstrap.min.js'
// import '../src/main.js'
// import '../src/assets/bootstrap/js/bootstrap.min.js'
// import '../src/assets/js/script.min.js'

// import './assets/main.css'
// import './backendAssets/css/bootstrap.min.css'

const app = createApp(App)


import api from './api/api.js'
app.config.globalProperties.$api = api
// use BoostrapVue3
// import BootstrapVue3 from 'bootstrap-vue-3'
// // set the theme color of bootstrap
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// app.use(BootstrapVue3)

// use BoostrapVue3
// import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'font-awesome/css/font-awesome.min.css'
// import { BootstrapVue,IconsPlugin} from 'bootstrap-vue'
// app.use(BootstrapVue)
// app.use(IconsPlugin)
import "bootstrap/dist/css/bootstrap.min.css"
app.use(router)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"