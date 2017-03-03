import Vue from 'vue'
import App from './App.vue'

// It is possible to centralize code in an event bus
// in order to use where it is needed.
// This can avoid code duplication.
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
