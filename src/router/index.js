import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addProject', 
    name: 'addProject',
    component: () => import('../views/AddProject.vue'),
  },
  {
    path: '/editProject/:id',
    name: 'EditProject',
    component: () => import('../views/EditProject.vue'),
    props: true
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
