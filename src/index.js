import Vue from 'vue'
import PortalVue from 'portal-vue'

import App from 'app/app'
import store from 'app/store'
import 'app/scss/main.scss'

Vue.use(PortalVue)

new Vue({
  el: '#app',
  render: h => h(App),
  store,
})
