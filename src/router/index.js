import Vue from 'vue'
import VueRouter from 'vue-router'
import AddAddress from '@/views/AddAddress'

Vue.use(VueRouter)

const routes = [
  { path: '/addaddress', component: AddAddress }

]

const router = new VueRouter({
  routes
})

export default router
