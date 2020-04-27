import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/Login'
import index from '../components/Index'
import good from '../components/Good'
import buycar from '../components/BuyCar'

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
  ]
})
