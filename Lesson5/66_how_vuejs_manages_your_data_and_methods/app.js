// VueJS proxies the properties we setup in the data field.
// And it does the same for methods, computed properties,
// so that we can access it from the outside.
// If you inspect the Vue instance in the browser, we can
// see it sets getters and setters for properties, methods
// and computed properties.

var vm1 = new Vue({
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

// We may do the following:
vm1.newProp = 'New!';
// But it won't get any getter or setter, because Vue
// will only recognize as property what is passed to it
// inside the constructor.

setTimeout(function() {
  vm1.title = 'Changed by Timer!';
  vm1.show();
}, 3000)

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The Second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
});