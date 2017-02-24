/*
  What if we wanted to register components locally and globally?
  First, we do:
*/

var cmp = {
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
};

// To register it locally inside #app, we do:

new Vue({
  el: '#app',
  components: {
    'my-cmp': cmp
  }
});

new Vue({
  el: '#app2'
});
