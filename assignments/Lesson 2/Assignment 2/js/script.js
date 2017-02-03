new Vue({
  el: '#exercise',
  data: {
    value: ''
  },
  methods : {
    showAlert: function() {
      alert('I was clicked!')
    },
    updateValue: function(event) {
      this.value = event.target.value;
    }
  }
});