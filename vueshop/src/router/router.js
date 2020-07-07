import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/Login'
import index from '../components/Index'
import good from '../components/Good'
import buycar from '../components/BuyCar'
import sort from '../components/Sort'
import register from '../components/Register'
import pay from '../components/Pay'
import order from '../components/Order'
import orderview from '../components/OrderView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/good',
      name: 'good',
      component: good
    },
    {
      path: '/buycar',
      name: 'buycar',
      component: buycar
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }, 
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/orderview',
      name: 'orderview',
      component: orderview
    },
  ]
})
