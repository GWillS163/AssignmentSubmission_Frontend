import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './api/mock.js'


// import './assets/main.css'
// import './backendAssets/css/bootstrap.min.css'

const app = createApp(App)



// use BoostrapVue3
import BootstrapVue3 from 'bootstrap-vue-3'
// set the theme color of bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
app.use(router)
app.use(BootstrapVue3)


app.mount('#app')
