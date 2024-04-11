import '../node_modules/scss-reset/src/scss/_reset.scss';
import './assets/main.scss';
import './assets/font/stylesheet.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
