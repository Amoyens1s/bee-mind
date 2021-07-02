import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import router from './router'
import 'animate.css/animate.min.css'
import 'animate.css'

createApp(App).use(router).mount('#app')
