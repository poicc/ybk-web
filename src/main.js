import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'

// axios.defaults.baseURL = 'http://106.14.169.149:8071'
// app.config.globalProperties.$axios=axios

createApp(App).use(router,VueAxios).mount('#app')
