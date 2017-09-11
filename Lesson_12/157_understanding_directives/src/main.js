import Vue from 'vue'
import App from './App.vue'

// Global directive
Vue.directive('highlight', {

});

new Vue({
  el: '#app',
  render: h => h(App)
})
