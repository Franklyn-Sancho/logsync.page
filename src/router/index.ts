import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  // Outras rotas podem ser adicionadas aqui
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

