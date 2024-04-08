import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '../views/layout/index.vue'
import Login from '@/views/Login/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  
]

const router = new VueRouter({
  routes
})

export default router
