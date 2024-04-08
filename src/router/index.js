import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from '../views/layout/index.vue'
// import 'ant-design-vue/dist/antd.less'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView
  },
  
]

const router = new VueRouter({
  routes
})

export default router
