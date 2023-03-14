import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'

createApp(App).use(router).use(store).mount('#app')
