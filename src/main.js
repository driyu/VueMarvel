// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from './pages/home/containers/Home.vue'
import Card from './pages/home/components/Card'
import SearchBar from './pages/home/components/SearchBar'
import router from './router'
import './main.css'

Vue.config.productionTip = false

Vue.component('card', Card)
Vue.component('home', Home)
Vue.component('searchBar', SearchBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, Home, Card, SearchBar },
  template: '<App/>'
})
