import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // import the router
import './assets/tailwind.css'; // import the tailwind css
createApp(App)
  .use(router) // register the router
  .mount('#app')