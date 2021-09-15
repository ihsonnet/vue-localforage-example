import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLocalForage from 'vue-localforage'
import vuetify from './plugins/vuetify'

Vue.use(VueLocalForage)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueLocalForage,
  render: h => h(App)
}).$mount('#app')

