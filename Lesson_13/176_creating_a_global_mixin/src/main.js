import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

/*
  A global mixin gets executed for every component.
  This means we should avoid it for apps, but we can use it for plugins.
  Global mixin is called first, local second and component last.
*/
Vue.mixin({
  created() {
    console.log('Global Mixin - Created Hook');
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
