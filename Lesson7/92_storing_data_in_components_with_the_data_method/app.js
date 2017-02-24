/*
  A component's data must be inside a function in order to have it isolated.
  Hence, by changing status of one component, we will not have the side effect
  of having it changed in two different components.
*/

Vue.component('my-cmp', {
  data: function() {
    return {
      status: 'Critical'
    };
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button>)</p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal';
    }
  }
});

new Vue({
  el: '#app'
});
