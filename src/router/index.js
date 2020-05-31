import VueRouter from 'vue-router'
import Vue from 'vue'
// 导入组件(路由懒加载)
const Login = () => import('../views/login.vue')
const NotFound = () => import('../views/404.vue')

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '*', component: NotFound }
]

const router = new VueRouter({ routes })

export default router
