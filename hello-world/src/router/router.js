import Vue from 'vue'
import Router from 'vue-router'
import APP from '../App'
import box from '../components/Box'
import box1 from '../components/Box1'
import login from '../components/Login'
import index from '../components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
        path: '/',
        name: 'APP',
        component: APP
    },
    {
        path: '/box',
        name: 'box',
        component: box
    },
    {
        path: '/box1',
        name: 'box1',
        component: box1
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    
  ]
})
