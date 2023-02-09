// import '@babel/polyfill'
// import 'mutationobserver-shim'
// import './plugins/bootstrap-vue'
// import bootstrapVue from "bootstrap-vue-3";
import $ from 'jquery'
import jquery from 'jquery';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './api/mock.js'

// import 'bootstrap'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min.js'

// Vue.prototype.jquery = $

// import './assets/main.css'
// FrontEnd - Part
// import "./assets/css/styles.min.css"
// import "./assets/bootstrap/css/bootstrap.min.css"  // 前端主要样式，主题
// import "./assets/bootstrap/js/bootstrap.min.js" // 打开后menu折叠框，无法关闭
// import './assets/js/script.min.js' //  放在这里页面会白屏，只能放在index.html最下面

// BackEnd - Part
// import './backendAssets/js/theme.js'
// import './backendAssets/bootstrap/css/bootstrap.min.css'
// import './backendAssets/bootstrap/js/bootstrap.min.js'  // 打开后menu折叠框，无法关闭


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