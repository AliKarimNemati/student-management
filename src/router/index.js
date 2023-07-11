import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../view/Home.vue'
import Edit from "../view/EditStudent.vue";
import AddStudent from "../view/AddStudent.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  },
  {
    path: '/add',
    name: 'add',
    component: AddStudent
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
