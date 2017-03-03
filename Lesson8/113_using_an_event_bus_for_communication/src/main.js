import Vue from 'vue'
import App from './App.vue'

// We are creating an event bus with an empty Vue instance
// to enable two siblings to communicate with each other
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
