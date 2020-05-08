import Vue from 'vue'
import App from './App'
import router from './router/router'
import './sass/common.scss'
import './iconfont/iconfont.css'
import '../node_modules/swiper/css/swiper.min.css'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUi)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
