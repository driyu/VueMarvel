// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Card from './pages/home/components/Card'
import SearchBar from './pages/home/components/SearchBar'
import router from './router'
import './main.css'

Vue.config.productionTip = false

Vue.component('card', Card)
Vue.component('searchBar', SearchBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Card, SearchBar },
  template: '<App/>'
})
