import Vue from 'vue'
import App from './App.vue'
import router from './router' //路由位置
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
