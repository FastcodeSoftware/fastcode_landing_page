import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue' // Make sure you have a Home.vue file

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // add more routes here
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router