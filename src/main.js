import { createApp } from 'vue'
import './style.css'
import router from './router'
import pinia from './store'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
