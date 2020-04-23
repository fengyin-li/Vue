import Vue from 'vue'
import App from './App'
import router from './router/router'
import './sass/common.scss'
import './iconfont/iconfont.css'
import './sass/swiper.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
