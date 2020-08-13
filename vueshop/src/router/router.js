import Vue from 'vue'
import Router from 'vue-router'
import login from '../views/Login'
import index from '../views/Index'
import good from '../views/Good'
import buycar from '../views/BuyCar'
import sort from '../views/Sort'
import register from '../views/Register'
import pay from '../views/Pay'
import orderview from '../views/user-center/OrderView'
import userCenter from '../views/userCenter'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
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
      path: '/orderview',
      name: 'orderview',
      component: orderview
    },
    {
      path: '/userCenter/:id',
      name: 'userCenter',
      component: userCenter
    },
  ]
})
