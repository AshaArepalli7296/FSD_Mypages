import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App)
  .use(router)  // <-- This line was missing!
  .mount('#app')