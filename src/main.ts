import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'startbootstrap-sb-admin/dist/css/styles.css'
import 'startbootstrap-sb-admin/dist/js/scripts.js'

createApp(App).use(store).use(router).mount('#app')
