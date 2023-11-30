import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from './router'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(route).use(pinia).mount('#app')
