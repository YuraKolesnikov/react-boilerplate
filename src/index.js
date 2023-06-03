import Vue from 'vue'

import App from 'app/app'
import store from 'app/store'
import 'app/scss/main.scss'

new Vue({
  el: '#app',
  render: h => h(App),
  store,
})
