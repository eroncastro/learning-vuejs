new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

// It is possible to control multiple pieces of the DOM
// by using multiple Vue instances.
// Inside an instance it is only possible to access the instance
// properties and methods by using the this keyword.

new Vue({
  el: '#app2',
  data: {
    title: 'The Second Instance'
  }
});