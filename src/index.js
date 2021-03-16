// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
import './assets/css/leaflet.css'

// Vue.js
window.Vue = require('vue')

// Vue components (for use in html)
Vue.component('map-component', require('./js/components/Map.vue').default)

// Vue init
const app = new Vue({
  el: '#app'
})
