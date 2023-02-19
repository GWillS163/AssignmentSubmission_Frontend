
import { createApp } from 'vue'
import App from './App.vue'
import './api/mock.js'
import UseCSVButton from "@usecsv/vuejs";


createApp(App).use(UseCSVButton).mount("#app"); // Vue 3


// import './assets/main.css'
// FrontEnd - Part
// import "./assets/css/styles.min.css"
// import "./assets/bootstrap/css/bootstrap.min.css"  // 前端主要样式，主题
// import "./assets/bootstrap/js/bootstrap.min.js" // 打开后menu折叠框，无法关闭
// import './assets/js/script.min.js' //  放在这里页面会白屏，只能放在index.html最下面

// BackEnd - Part
// import './backendAssets/js/theme.js'
import './backendAssets/bootstrap/css/bootstrap.min.css'
// import './backendAssets/bootstrap/js/bootstrap.min.js'  // 打开后menu折叠框，无法关闭


const app = createApp(App)


import api from './api/api.js'
import $ from 'jquery'
import jquery from 'jquery';
app.config.globalProperties.$api = api
app.config.globalProperties.$ = $;
app.config.globalProperties.jquery = jquery;



import router from './router/router'
import BootstrapVue3 from 'bootstrap-vue-3'
app.use(router)
app.use(BootstrapVue3)
app.use(UseCSVButton)
app.mount('#app')



// use BoostrapVue3
// 本地导入部分，不需要
// import 'bootstrap'
// import './assets/bootstrap/css/bootstrap.min.css'
// import './assets/bootstrap/js/bootstrap.min.js'
// 使用 npm install bootstrap，可使用
import 'font-awesome/css/font-awesome.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.js"
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// npm install bootstrap-vue-3
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
